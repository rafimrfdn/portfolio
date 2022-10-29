# Create A Custom VPC Using AWS CLI

- Create a VPC
- Create private and public subnets
- Enable Auto-assign Public IP on the subnet
- Enable Auto-assign Private IP on the subnet
- Create an internet gateway
- Create a NAT gateway
- Attach the Internet gateway to your VPC
- Create a custom route table
- Create a custom route table association
- Associate the subnet with route table, making it a public subnet, and associate the NAT gateway with the route table, making it a private subnet
- Create a security group
- Creat a bash script to install appache web server with a custom index.html file
- Create a EC2 instance

> AMI name: amzn2-ami-hvm-2.0.20221004.0-x86_64-gp2

# Create a VPC

```bash
# Create a VPC
AWS_VPC=$(aws ec2 create-vpc \
--cidr-block 10.0.0.0/16 \
--query 'Vpc.{VpcId:VpcId}' \
--output text)

# Add a name tag to the VPC
aws ec2 create-tags \
--resources $AWS_VPC \
--tags Key=Name,Value=DevOpsVPC

# Enable DNS hostnames
aws ec2 modify-vpc-attribute \
--vpc-id $AWS_VPC \
--enable-dns-hostnames "{\"Value\":true}"

# Enable DNS support
aws ec2 modify-vpc-attribute \
--vpc-id $AWS_VPC \
--enable-dns-support "{\"Value\":true}"

# Create a public subnet
AWS_PUBLIC_SUBNET=$(aws ec2 create-subnet \
--vpc-id $AWS_VPC \
--cidr-block 10.0.1.0/24 \
--availability-zone us-east-1a \
--query 'Subnet.{SubnetId:SubnetId}' \
--output text)

# Add a name tag to the public subnet
aws ec2 create-tags \
--resources $AWS_PUBLIC_SUBNET \
--tags Key=Name,Value=DevOpsPublicSubnet

# create a private subnet
AWS_PRIVATE_SUBNET=$(aws ec2 create-subnet \
--vpc-id $AWS_VPC \
--cidr-block 10.0.2.0/24 \
--availability-zone us-east-1a \
--query 'Subnet.{SubnetId:SubnetId}' \
--output text)

# Add a name tag to the private subnet
aws ec2 create-tags \
--resources $AWS_PRIVATE_SUBNET \
--tags Key=Name,Value=DevOpsPrivateSubnet

# Enable Auto-assign Public IP on the subnet
aws ec2 modify-subnet-attribute \
--subnet-id $AWS_PUBLIC_SUBNET \
--map-public-ip-on-launch

# Create an Internet Gateway
AWS_INTERNET_GATEWAY=$(aws ec2 create-internet-gateway \
--query 'InternetGateway.{InternetGatewayId:InternetGatewayId}' \
--output text)

# Add a name tag to the Internet Gateway
aws ec2 create-tags \
--resources $AWS_INTERNET_GATEWAY \
--tags Key=Name,Value=DevOpsInternetGateway

#  get allocation-id
AWS_EIP_ALLOCATION=$(aws ec2 allocate-address \
--domain vpc \
--query 'AllocationId' \
--output text)

# Create an NAT gateway
AWS_NAT_GATEWAY=$(aws ec2 create-nat-gateway \
--subnet-id $AWS_PUBLIC_SUBNET \
--allocation-id $AWS_EIP_ALLOCATION \
--query 'NatGateway.{NatGatewayId:NatGatewayId}' \
--output text)

# Add a name tag to the NAT gateway
aws ec2 create-tags \
--resources $AWS_NAT_GATEWAY \
--tags Key=Name,Value=DevOpsNATGateway

# Attach the Internet gateway to your VPC
aws ec2 attach-internet-gateway \
--vpc-id $AWS_VPC \
--internet-gateway-id $AWS_INTERNET_GATEWAY \
--query 'InternetGateway.{InternetGatewayId:InternetGatewayId}' \
--output text

# Create a custom route table
AWS_ROUTE_TABLE=$(aws ec2 create-route-table \
--vpc-id $AWS_VPC \
--query 'RouteTable.{RouteTableId:RouteTableId}' \
--output text)

# Add a name tag to the route table
aws ec2 create-tags \
--resources $AWS_ROUTE_TABLE \
--tags Key=Name,Value=DevOpsRouteTable

# Create a custom route table association
aws ec2 associate-route-table \
--route-table-id $AWS_ROUTE_TABLE \
--subnet-id $AWS_PUBLIC_SUBNET \
--query 'Association.{AssociationId:AssociationId}' \
--output text

# Associate the subnet with route table, making it a public subnet
aws ec2 create-route \
--route-table-id $AWS_ROUTE_TABLE \
--destination-cidr-block 0.0.0.0/0 \
--gateway-id $AWS_INTERNET_GATEWAY \
--query 'Route.{RouteTableId:RouteTableId}' \
--output text

# Associate the NAT gateway with the route table, making it a private subnet
aws ec2 create-route \
--route-table-id $AWS_ROUTE_TABLE \
--destination-cidr-block 10.2.0.0/24 \
--nat-gateway-id $AWS_NAT_GATEWAY \
--query 'Route.{RouteTableId:RouteTableId}' \
--output text

# Create a security group
AWS_SECURITY_GROUP=$(aws ec2 create-security-group \
--group-name DevOpsSG \
--description "DevOps Security Group" \
--vpc-id $AWS_VPC \
--query 'GroupId' \
--output text)

# Add a name tag to the security group
aws ec2 create-tags \
--resources $AWS_SECURITY_GROUP \
--tags Key=Name,Value=DevOpsSG

# Add a rule to the security group
aws ec2 authorize-security-group-ingress \
--group-id $AWS_SECURITY_GROUP \
--protocol tcp \
--port 22 \
--cidr 0.0.0.0/0 \
--output text

aws ec2 authorize-security-group-ingress \
--group-id $AWS_SECURITY_GROUP \
--protocol tcp \
--port 80 \
--cidr 0.0.0.0/0 \
--output text

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

# Get the latest AMI
AWS_AMI=$(aws ec2 describe-images \
--owners 'amazon' \
--filters 'Name=name,Values=amzn2-ami-hvm-2.0.20221004.0-x86_64-gp2' \
'Name=state,Values=available' \
--query 'sort_by(Images, &CreationDate)[-1].[ImageId]' \
--output 'text')

# Create a keypair
aws ec2 create-key-pair \
--key-name my-vpc-keypair \
--query 'KeyMaterial' \
--output text > my-vpc-keypair.pem

# Run the instance
AWS_EC2_INSTANCE=$(aws ec2 run-instances \
--image-id $AWS_AMI \
--instance-type t2.micro \
--key-name my-vpc-keypair \
--monitoring "Enabled=false" \
--security-group-ids $AWS_SECURITY_GROUP \
--subnet-id $AWS_PUBLIC_SUBNET \
--user-data file://install.sh \
--private-ip-address 10.0.1.10 \
--query 'Instances[0].InstanceId' \
--output text)

# Add a name tag to the instance
aws ec2 create-tags \
--resources $AWS_EC2_INSTANCE \
--tags "Key=Name,Value=DevOpsInstance"

# Check if the instance is running
aws ec2 describe-instance-status \
--instance-ids $AWS_EC2_INSTANCE --output text

# Get the public ip address of your instance
AWS_EC2_INSTANCE_PUBLIC_IP=$(aws ec2 describe-instances \
--query "Reservations[*].Instances[*].PublicIpAddress" \
--output=text)

echo $AWS_EC2_INSTANCE_PUBLIC_IP

```
