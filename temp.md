# Create a VPC

```bash
# Create a VPC
AWS_VPC_INFO=$(aws ec2 create-vpc \
--cidr-block 10.0.0.0/16 \
--query 'Vpc.{VpcId:VpcId}' \
--output text)

# Modify your custom VPC and enable DNS hostname support
aws ec2 modify-vpc-attribute \
--vpc-id $AWS_VPC_INFO \
--enable-dns-hostnames "{\"Value\":true}"

# Create a public subnet
AWS_SUBNET_PUBLIC=$(aws ec2 create-subnet \
--vpc-id $AWS_VPC_INFO --cidr-block 10.0.1.0/24 \
--availability-zone us-east-1a --query 'Subnet.{SubnetId:SubnetId}' \
--output text)

# Enable Auto-assign Public IP on the subnet
aws ec2 modify-subnet-attribute \
--subnet-id $AWS_SUBNET_PUBLIC \
--map-public-ip-on-launch

# Create an Internet Gateway
AWS_INTERNET_GATEWAY=$(aws ec2 create-internet-gateway \
--query 'InternetGateway.{InternetGatewayId:InternetGatewayId}' \
--output text)

# Attach the Internet gateway to your VPC
aws ec2 attach-internet-gateway \
--vpc-id $AWS_VPC_INFO \
--internet-gateway-id $AWS_INTERNET_GATEWAY

# Create a custom route table
AWS_CUSTOM_ROUTE_TABLE=$(aws ec2 create-route-table \
--vpc-id $AWS_VPC_INFO \
--query 'RouteTable.{RouteTableId:RouteTableId}' \
--output text )

AWS_ROUTE_TABLE_ASSOCITATION=$(aws ec2 associate-route-table  \
--subnet-id $AWS_SUBNET_PUBLIC \
--route-table-id $AWS_CUSTOM_ROUTE_TABLE \
--output text)

# Get security group ID’s
AWS_DEFAULT_SECURITY_GROUP=$(aws ec2 describe-security-groups \
--filters "Name=vpc-id,Values=$AWS_VPC_INFO" \
--query 'SecurityGroups[?GroupName == `default`].GroupId' \
--output text)

AWS_CUSTOM_SECURITY_GROUP=$(aws ec2 describe-security-groups \
--filters "Name=vpc-id,Values=$AWS_VPC_INFO" \
--query 'SecurityGroups[?GroupName == `vpc-cli-lab-security-group`].GroupId' \
--output text)

# Add a tag to the VPC
aws ec2 create-tags \
--resources $AWS_VPC_INFO \
--tags "Key=Name,Value=vpc-cli-lab"

# Add a tag to public subnet
aws ec2 create-tags \
--resources $AWS_SUBNET_PUBLIC \
--tags "Key=Name,Value=vpc-cli-lab-public-subnet"

# Add a tag to the Internet-Gateway
aws ec2 create-tags \
--resources $AWS_INTERNET_GATEWAY \
--tags "Key=Name,Value=vpc-cli-lab-internet-gateway"

# Add a tag to the default route table
AWS_DEFAULT_ROUTE_TABLE=$(aws ec2 describe-route-tables \
--filters "Name=vpc-id,Values=$AWS_VPC_INFO" \
--query 'RouteTables[?Associations[0].Main != `flase`].RouteTableId' \
--output text)

aws ec2 create-tags \
--resources $AWS_DEFAULT_ROUTE_TABLE \
--tags "Key=Name,Value=vpc-cli-lab-default-route-table"

# Add a tag to the public route table
aws ec2 create-tags \
--resources $AWS_CUSTOM_ROUTE_TABLE \
--tags "Key=Name,Value=vpc-cli-lab-public-route-table"

# Add a tags to security groups
aws ec2 create-tags \
--resources $AWS_CUSTOM_SECURITY_GROUP \
--tags "Key=Name,Value=vpc-cli-lab-security-group"

aws ec2 create-tags \
--resources $AWS_DEFAULT_SECURITY_GROUP \
--tags "Key=Name,Value=vpc-cli-lab-default-security-group"

# Get Amazon Linux 2 latest AMI ID
AWS_AMI=$(aws ec2 describe-images \
--owners 'amazon' \
--filters 'Name=name,Values=amzn2-ami-hvm-2.0.20221004.0-x86_64-gp2' 'Name=state,Values=available' \
--query 'sort_by(Images, &CreationDate)[-1].[ImageId]' \
--output 'text')

# Create a key-pair
aws ec2 create-key-pair \
--key-name vpc-cli-lab-key-pair \
--query 'KeyMaterial' \
--output text > vpc-cli-lab-key-pair.pem

# Create a bash script to update packages, install git and clone the repo, and run the script
cat <<EOF > install.sh
#!/bin/bash

# Update packages
sudo yum update -y

# Install git
sudo yum install git -y

# Clone the repo
git clone https://github.com/MKAbuMattar/install-and-setup-wordpress-on-amazon-linux-2.git

# Run the script
bash install-and-setup-wordpress-on-amazon-linux-2/script.sh mkabumattar 121612 121612 wordpressdb wordpressuser password
EOF

# Create an EC2 instance
AWS_EC2_INSTANCE=$(aws ec2 run-instances \
--image-id $AWS_AMI \
--instance-type t2.micro \
--key-name vpc-cli-lab-key-pair \
--monitoring "Enabled=false" \
--security-group-ids $AWS_CUSTOM_SECURITY_GROUP \
--subnet-id $AWS_SUBNET_PUBLIC \
--user-data file://install.sh \
--private-ip-address 10.0.1.10 \
--query 'Instances[0].InstanceId' \
--output text)

# Add a tag to the ec2 instance
aws ec2 create-tags \
--resources $AWS_EC2_INSTANCE \
--tags "Key=Name,Value=myvpc-ec2-instance"

# Check if the instance is running
aws ec2 describe-instance-status \
--instance-ids $AWS_EC2_INSTANCE --output text

# Get the public ip address of your instance
AWS_EC2_INSTANCE_PUBLIC=$(aws ec2 describe-instances \
--query "Reservations[*].Instances[*].PublicIpAddress" \
--output=text) &&
echo $AWS_EC2_INSTANCE_PUBLIC

# Try to connect to the instance
chmod 400 vpc-cli-lab-key-pair.pem
ssh -i vpc-cli-lab-key-pair.pem ec2-user@$AWS_EC2_INSTANCE_PUBLIC

```
