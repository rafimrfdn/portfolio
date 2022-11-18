---
title: How To Connect A EBS Volume To An Windows EC2 Instance Using Powershell/GUI
slug: how-to-connect-a-ebs-volume-to-an-windows-ec2-instance-using-powershell-gui
tags: ['AWS', 'AWS CLI', 'VPC', 'EC2', 'EBS', 'Windows']
categories: ['AWS']
date: 2022-11-15T18:06:00.000Z
image: /assets/img/blog/0027-how-to-connect-a-ebs-volume-to-an-windows-ec2-instance-using-powershell-gui/how-to-connect-a-ebs-volume-to-an-windows-ec2-instance-using-powershell-gui.png
author: MKAbuMattar
description: 'In this post, we will learn how to connect a EBS volume to an Windows EC2 instance using Powershell/GUI'
prev: how-to-connect-a-two-ec2-instances-database-and-files-transfer-using-aws-cli
next: what-is-devops
featured: true
draft: true
---

## Introduction

In this post, we will learn how to connect a EBS volume to an Windows EC2 instance using Powershell/GUI and also how to mount the EBS volume to the EC2 instance.

## Prerequisites

- AWS CLI installed and configured
- IAM user with the following permissions:
  - AmazonVPCFullAccess
  - AmazonEC2FullAccess
  - AmazonElasticBlockStoreFullAccess

## Create an VPC

### Step 1: Create VPC

To create a VPC, run the following command:

```bash
# Create a VPC
AWS_VPC=$(aws ec2 create-vpc \
  --cidr-block 10.0.0.0/16 \
  --query 'Vpc.VpcId' \
  --output text)

# Add a name tag to the VPC
aws ec2 create-tags \
  --resources $AWS_VPC \
  --tags Key=Name,Value=aws-vpc
```

Explanation:

- `aws ec2 create-vpc` - Create a VPC
- `--cidr-block` - The IPv4 network range for the VPC, in CIDR notation.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `--resources` - The IDs of the resources.
- `--tags` - The tags to apply to the resource.

### Step 2: Modify your custom VPC and enable DNS hostname support, and DNS support

To modify your custom VPC and enable DNS hostname support, and DNS support, run the following command:

```bash
# Enable DNS hostnames
aws ec2 modify-vpc-attribute \
  --vpc-id $AWS_VPC \
  --enable-dns-hostnames "{\"Value\":true}"

# Enable DNS support
aws ec2 modify-vpc-attribute \
  --vpc-id $AWS_VPC \
  --enable-dns-support "{\"Value\":true}"
```

Explanation:

- `aws ec2 modify-vpc-attribute` - Modifies the specified attribute of the specified VPC.
- `--vpc-id` - The ID of the VPC.
- `--enable-dns-hostnames` - Indicates whether the instances launched in the VPC get DNS hostnames.
- `--enable-dns-support` - Indicates whether DNS resolution is supported for the VPC.

### Step 3: Create a Public Subnet

To create a public subnet, run the following command:

```bash
# Create a public subnet
AWS_PUBLIC_SUBNET=$(aws ec2 create-subnet \
  --vpc-id $AWS_VPC \
  --cidr-block 10.0.1.0/24 \
  --query 'Subnet.SubnetId' \
  --output text)

# Add a name tag to the public subnet
aws ec2 create-tags \
  --resources $AWS_PUBLIC_SUBNET \
  --tags Key=Name,Value=aws-public-subnet
```

Explanation:

- `aws ec2 create-subnet` - Creates a subnet in an existing VPC.
- `--vpc-id` - The ID of the VPC.
- `--cidr-block` - The IPv4 network range for the subnet, in CIDR notation.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `--resources` - The IDs of the resources.
- `--tags` - The tags to apply to the resource.

### Step 4: Enable Auto-assign Public IP on the subnet

To enable auto-assign public IP on the subnet, run the following command:

```bash
# Enable auto-assign public IP on the subnet
aws ec2 modify-subnet-attribute \
  --subnet-id $AWS_PUBLIC_SUBNET \
  --map-public-ip-on-launch
```

Explanation:

- `aws ec2 modify-subnet-attribute` - Modifies a subnet attribute.
- `--subnet-id` - The ID of the subnet.
- `--map-public-ip-on-launch` - Specify true to indicate that network interfaces created in the specified subnet should be assigned a public IPv4 address.

### Step 5: Create an Internet Gateway

To create an Internet Gateway, run the following command:

```bash
# Create an Internet Gateway
AWS_INTERNET_GATEWAY=$(aws ec2 create-internet-gateway \
  --query 'InternetGateway.InternetGatewayId' \
  --output text)

# Add a name tag to the Internet Gateway
aws ec2 create-tags \
  --resources $AWS_INTERNET_GATEWAY \
  --tags Key=Name,Value=aws-internet-gateway
```

Explanation:

- `aws ec2 create-internet-gateway` - Creates an Internet gateway for use with a VPC.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `--resources` - The IDs of the resources.
- `--tags` - The tags to apply to the resource.

### Step 6: Attach the Internet Gateway to the VPC

To attach the Internet Gateway to the VPC, run the following command:

```bash
# Attach the Internet Gateway to the VPC
aws ec2 attach-internet-gateway \
  --internet-gateway-id $AWS_INTERNET_GATEWAY \
  --vpc-id $AWS_VPC
```

Explanation:

- `aws ec2 attach-internet-gateway` - Attaches an Internet gateway to a VPC, enabling connectivity between the Internet and the VPC.
- `--internet-gateway-id` - The ID of the Internet gateway.
- `--vpc-id` - The ID of the VPC.

### Step 7: Create a Route Table

To create a route table, run the following command:

```bash
# Create a route table
AWS_ROUTE_TABLE=$(aws ec2 create-route-table \
  --vpc-id $AWS_VPC \
  --query 'RouteTable.RouteTableId' \
  --output text)

# Add a name tag to the route table
aws ec2 create-tags \
  --resources $AWS_ROUTE_TABLE \
  --tags Key=Name,Value=aws-route-table
```

Explanation:

- `aws ec2 create-route-table` - Creates a route table for the specified VPC.
- `--vpc-id` - The ID of the VPC.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `--resources` - The IDs of the resources.
- `--tags` - The tags to apply to the resource.

### Step 8: Create a custom route table association

To create a custom route table association, run the following command:

```bash
# Create a custom route table association
aws ec2 associate-route-table \
  --subnet-id $AWS_PUBLIC_SUBNET \
  --route-table-id $AWS_ROUTE_TABLE
```

Explanation:

- `aws ec2 associate-route-table` - Associates a subnet with a route table.
- `--subnet-id` - The ID of the subnet.
- `--route-table-id` - The ID of the route table.

### Step 9: Associate the subnet with route table, making it a public subnet

To associate the subnet with route table, making it a public subnet, run the following command:

```bash
# Associate the subnet with route table, making it a public subnet
aws ec2 create-route \
  --route-table-id $AWS_ROUTE_TABLE \
  --destination-cidr-block 0.0.0.0/0 \
  --gateway-id $AWS_INTERNET_GATEWAY
```

Explanation:

- `aws ec2 create-route` - Creates a route in a route table within a VPC.
- `--route-table-id` - The ID of the route table for the route.
- `--destination-cidr-block` - The IPv4 CIDR address block used for the destination match.
- `--gateway-id` - The ID of an Internet gateway or virtual private gateway attached to your VPC.

### Step 10: Create a Security Group

To create a security group, run the following command:

```bash
# Create a security group
AWS_SECURITY_GROUP=$(aws ec2 create-security-group \
  --group-name aws-security-group \
  --description "AWS Security Group" \
  --vpc-id $AWS_VPC \
  --query 'GroupId' \
  --output text)

# Add a name tag to the security group
aws ec2 create-tags \
  --resources $AWS_SECURITY_GROUP \
  --tags Key=Name,Value=aws-security-group
```

Explanation:

- `aws ec2 create-security-group` - Creates a security group.
- `--group-name` - The name of the security group.
- `--description` - A description for the security group.
- `--vpc-id` - The ID of the VPC.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `--resources` - The IDs of the resources.
- `--tags` - The tags to apply to the resource.

### Step 11: Add a rule to the security group

To add a rule to the security group, run the following command:

```bash
# Add a rule to the security group

# Allow RDP >> remote desktop protocol
aws ec2 authorize-security-group-ingress \
  --group-id $AWS_SECURITY_GROUP \
  --protocol tcp \
  --port 3389 \
  --cidr 0.0.0.0/0 \
  --output text

# Add HTTP rule
aws ec2 authorize-security-group-ingress \
  --group-id $AWS_SECURITY_GROUP \
  --protocol tcp \
  --port 80 \
  --cidr 0.0.0.0/0 \
  --output text

# Add HTTPS rule
aws ec2 authorize-security-group-ingress \
  --group-id $AWS_SECURITY_GROUP \
  --protocol tcp \
  --port 443 \
  --cidr 0.0.0.0/0 \
  --output text
```

Explanation:

- `aws ec2 authorize-security-group-ingress` - Adds one or more ingress rules to a security group.
- `--group-id` - The ID of the security group.
- `--protocol` - The IP protocol name or number.
- `--port` - The port number.
- `--cidr` - The IPv4 CIDR range.
- `--output` - The output format of the command.

## Create a Windows Server 2022 EC2 Instance

### Step 1: Get the latest AMI ID

To get the latest AMI ID, run the following command:

```bash
# Get the latest AMI ID
AWS_AMI=$(aws ec2 describe-images \
--owners 'amazon' \
--filters 'Name=name,Values=Windows_Server-2022-English-Full-Base-2022.11.10' \
'Name=state,Values=available' \
--query 'sort_by(Images, &CreationDate)[-1].[ImageId]' \
--output 'text')
```

Explanation:

- `aws ec2 describe-images` - Describes one or more of the images (AMIs, AKIs, and ARIs) available to you. Images available to you include public images, private images that you own, and private images owned by other AWS accounts but for which you have explicit launch permissions.
- `--owners` - Filters the images by the owner. Specify an AWS account ID, `self` (owner is the sender of the request), or an AWS owner alias (valid values are `amazon`, `aws-marketplace`, `microsoft`).
- `--filters` - One or more filters. Use a filter to return a more specific list of results.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.

### Step 2: Create a Key Pair

To create a key pair, run the following command:

```bash
# Create a key pair
aws ec2 create-key-pair \
  --key-name aws-key-pair \
  --query 'KeyMaterial' \
  --output text > aws-key-pair.pem

# Change the permissions of the key pair
chmod 400 aws-key-pair.pem
```

Explanation:

- `aws ec2 create-key-pair` - Creates a 2048-bit RSA key pair with the specified name. Amazon EC2 stores the public key and displays the private key for you to save to a file. The private key is returned as an unencrypted PEM encoded PKCS#8 private key. If a key with the specified name already exists, Amazon EC2 returns an error.
- `--key-name` - The name for your key pair.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.

> **NOTE:** The private key, which is returned as an unencrypted PEM encoded PKCS#8 private key, is only returned if you have access to the key pair. You must provide the corresponding key pair file when you launch an instance.

> **NOTE:** The key pair you will decrypted using AWS EC2 console, to get the password.

### Step 3: Create an EC2 Instance

To create an EC2 instance, run the following command:

```bash
# Create an EC2 instance
AWS_INSTANCE=$(aws ec2 run-instances \
  --image-id $AWS_AMI \
  --instance-type t2.micro \
  --key-name aws-key-pair \
  --monitoring "Enabled=false" \
  --security-group-ids $AWS_SECURITY_GROUP \
  --subnet-id $AWS_PUBLIC_SUBNET \
  --query 'Instances[0].InstanceId' \
  --output text)

# Add a name tag to the EC2 instance
aws ec2 create-tags \
  --resources $AWS_INSTANCE \
  --tags Key=Name,Value=aws-instance-windows
```

Explanation:

- `aws ec2 run-instances` - Launches the specified number of instances using an AMI for which you have permissions.
- `--image-id` - The ID of the AMI.
- `--instance-type` - The instance type.
- `--key-name` - The name of the key pair.
- `--monitoring` - Enables detailed monitoring (disabled by default).
- `--security-group-ids` - The IDs of the security groups.
- `--subnet-id` - The ID of the subnet in which to launch the instance.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.

### Step 4: Wait for the EC2 Instance to be running

To wait for the EC2 instance to be running, run the following command:

```bash
# Wait for the EC2 instance to be running
aws ec2 wait instance-running \
  --instance-ids $AWS_INSTANCE
```

Explanation:

- `aws ec2 wait instance-running` - Wait until an instance is running.
- `--instance-ids` - The IDs of the instances.

### Step 5: Get the public IP address of the EC2 Instance

To get the public IP address of the EC2 instance, run the following command:

```bash
# Get the public IP address of the EC2 instance
AWS_PUBLIC_IP=$(aws ec2 describe-instances \
  --instance-ids $AWS_INSTANCE \
  --query 'Reservations[0].Instances[0].PublicIpAddress' \
  --output text)
```

Explanation:

- `aws ec2 describe-instances` - Describes one or more of your instances.
- `--instance-ids` - The IDs of the instances.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.

## Create an EBS Volume

### Step 1: Create an EBS Volume

To create an EBS volume, run the following command:

```bash
# Get the availability zone for the EC2 instance
AWS_AVAILABILITY_ZONE=$(aws ec2 describe-instances \
  --instance-ids $AWS_INSTANCE \
  --query 'Reservations[0].Instances[0].Placement.AvailabilityZone' \
  --output text)

# Create an EBS volume
AWS_VOLUME=$(aws ec2 create-volume \
  --availability-zone $AWS_AVAILABILITY_ZONE \
  --size 10 \
  --volume-type gp2 \
  --query 'VolumeId' \
  --output text)

# Add a name tag to the EBS volume
aws ec2 create-tags \
  --resources $AWS_VOLUME \
  --tags Key=Name,Value=aws-volume
```

Explanation:

- `aws ec2 describe-instances` - Describes one or more of your instances.
- `--instance-ids` - The IDs of the instances.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.
- `aws ec2 create-volume` - Creates an EBS volume that can be attached to an instance in the same Availability Zone.
- `--availability-zone` - The Availability Zone in which to create the volume.
- `--size` - The size of the volume, in GiBs.
- `--volume-type` - The volume type.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.

> **NOTE:** Availability zone for the EC2 instance and EBS volume must be the same. Otherwise, you will get the following error: `InvalidParameterValue: The requested Availability Zone is currently constrained and only m3.medium or m3.large instances can be launched.`

### Step 2: Wait for the EBS Volume to be available

To wait for the EBS volume to be available, run the following command:

```bash
# Wait for the EBS volume to be available
aws ec2 wait volume-available \
  --volume-ids $AWS_VOLUME
```

Explanation:

- `aws ec2 wait volume-available` - Wait until a volume is in the available state.
- `--volume-ids` - The IDs of the volumes.

## Attach the EBS Volume to the EC2 Instance

### Step 1: Attach the EBS Volume to the Windows Server EC2 Instance

To attach the EBS volume to the Windows Server EC2 instance, run the following command:

```bash
# Attach the EBS volume to the Windows Server EC2 instance
aws ec2 attach-volume \
  --device xvdf \
  --instance-id $AWS_INSTANCE \
  --volume-id $AWS_VOLUME
```

Explanation:

- `aws ec2 attach-volume` - Attaches an EBS volume to a running or stopped instance and exposes it to the instance with the specified device name.
- `--device` - The device name (for example, /dev/sdh or xvdh).
- `--instance-id` - The ID of the instance.
- `--volume-id` - The ID of the EBS volume.

### Step 2: Wait for the EBS Volume to be in-use

To wait for the EBS volume to be in-use, run the following command:

```bash
# Wait for the EBS volume to be in-use
aws ec2 wait volume-in-use \
  --volume-ids $AWS_VOLUME
```

Explanation:

- `aws ec2 wait volume-in-use` - Wait until a volume is in the in-use state.
- `--volume-ids` - The IDs of the volumes.

## Connect to the Windows Server EC2 Instance

### Step 1: Connect to the Windows Server EC2 Instance using RDP (Remote Desktop Protocol) in Linux

If you are using Linux, you can connect to the Windows Server EC2 instance using RDP (Remote Desktop Protocol) in Linux. To do so, you need to install the `remmina` package. To install the `remmina` package, run the following command:

```bash
# Install the remmina package

# Arch Linux
sudo pacman -S remmina

# Debian/Ubuntu
sudo apt install remmina -y

# CentOS/RHEL
sudo yum install remmina -y

# Fedora
sudo dnf install remmina -y

# OpenSUSE
sudo zypper install remmina -y
```

Explanation:

- `pacman` - Arch Linux package manager.
- `apt` - Debian/Ubuntu package manager.
- `yum` - CentOS/RHEL package manager.
- `dnf` - Fedora package manager.
- `zypper` - OpenSUSE package manager.

#### Step 1.1: Create a new RDP connection

- Click on the `+` button to add a new connection.
- Enter the following details:
  - `Name` - Enter a name for the connection.
  - `Protocol` - Select `RDP`.
  - `Server` - Enter the public IP address of the Windows Server EC2 instance.
  - `Username` - Enter the username of the Windows Server EC2 instance.
  - `Password` - Enter the password of the Windows Server EC2 instance.
- Click on the `Save` button.

> **NOTE:** To get the password of the Windows Server EC2 instance, run the following command:

```bash
# Get the password of the Windows Server EC2 instance
EC2_INSTANCE_PASSWORD=$(aws ec2 get-password-data \
  --instance-id $AWS_INSTANCE \
  --priv-launch-key aws-key-pair.pem \
  --query 'PasswordData' \
  --output text)

# Desplay the password of the Windows Server EC2 instance
echo $EC2_INSTANCE_PASSWORD
```

Explanation:

- `aws ec2 get-password-data` - Retrieves the encrypted administrator password for the instances running Windows.
- `--instance-id` - The ID of the instance.
- `--priv-launch-key` - The private key that is required to decrypt the password data.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.

![remmina](/assets/img/blog/0027-how-to-connect-a-ebs-volume-to-an-windows-ec2-instance-using-powershell-gui/remmina.png)

#### Step 1.2: Connect to the Windows Server EC2 Instance

- Click on the `Connect` button to connect to the Windows Server EC2 instance.

![Connect to the Windows Server EC2 Instance](/assets/img/blog/0027-how-to-connect-a-ebs-volume-to-an-windows-ec2-instance-using-powershell-gui/connect-to-the-windows-server-ec2-instance.png)

### Step 2: Connect to the Windows Server EC2 Instance using RDP (Remote Desktop Protocol) in Windows

If you are using Windows, you can connect to the Windows Server EC2 instance using RDP (Remote Desktop Protocol) in Windows. To do so, you need to install the `Microsoft Remote Desktop` app. To install the `Microsoft Remote Desktop` app, run the following command:

```bash
# Install the Microsoft Remote Desktop app
winget install Microsoft.RemoteDesktop
```

Explanation:

- `winget` - Windows package manager.

#### Step 2.1: Create a new RDP connection

- Click on the `+` button to add a new connection.
- Enter the following details:
  - `Name` - Enter a name for the connection.
  - `Computer` - Enter the public IP address of the Windows Server EC2 instance.
  - `Username` - Enter the username of the Windows Server EC2 instance.
  - `Password` - Enter the password of the Windows Server EC2 instance.

> **NOTE:** To get the password of the Windows Server EC2 instance, run the following command:

```bash
# Get the password of the Windows Server EC2 instance
EC2_INSTANCE_PASSWORD=$(aws ec2 get-password-data \
  --instance-id $AWS_INSTANCE \
  --priv-launch-key aws-key-pair.pem \
  --query 'PasswordData' \
  --output text)

# Desplay the password of the Windows Server EC2 instance
echo $EC2_INSTANCE_PASSWORD
```

Explanation:

- `aws ec2 get-password-data` - Retrieves the encrypted administrator password for the instances running Windows.
- `--instance-id` - The ID of the instance.
- `--priv-launch-key` - The private key that is required to decrypt the password data.
- `--query` - The JMESPath query that is applied to the output.
- `--output` - The output format of the command.

![Microsoft Remote Desktop](/assets/img/blog/0027-how-to-connect-a-ebs-volume-to-an-windows-ec2-instance-using-powershell-gui/microsoft-remote-desktop.png)

#### Step 2.2: Connect to the Windows Server EC2 Instance

- Click on the `Connect` button to connect to the Windows Server EC2 instance.

![Connect to the Windows Server EC2 Instance](/assets/img/blog/0027-how-to-connect-a-ebs-volume-to-an-windows-ec2-instance-using-powershell-gui/connect-to-the-windows-server-ec2-instance-windows.png)

## Connect to the EBS Volume

### Connect to the EBS Volume using PowerShell

#### Step 1: Connect to the EBS Volume using PowerShell

- Open the `PowerShell` app.
- Run the following command to connect to the EBS volume:

```powershell
# Connect to diskpart
diskpart

# List the disks
list disk

# Select the disk
select disk 1

# initialize the disk
convert gpt

# Create a new partition
create partition primary

# List the partitions
list partition

# Select the partition
select partition 2

# Assign a drive letter
assign letter=D

# Format the partition
format fs=ntfs quick

# Exit diskpart
exit
```

Explanation:

- `diskpart` - DiskPart is a command-line tool that you can use to manage disks and volumes.
- `list disk` - Lists all disks on the computer.
- `select disk` - Selects a disk for use.
- `convert gpt` - Converts a disk to the GPT partition style.
- `create partition primary` - Creates a primary partition on the selected disk.
- `list partition` - Lists all partitions on the selected disk.
- `select partition` - Selects a partition for use.
- `assign letter` - Assigns a drive letter to the selected partition.
- `format fs=ntfs quick` - Formats the selected partition.
- `exit` - Exits DiskPart.

![Connect to the EBS Volume using PowerShell](/assets/img/blog/0027-how-to-connect-a-ebs-volume-to-an-windows-ec2-instance-using-powershell-gui/connect-to-the-ebs-volume-using-powershell.png)

#### Step 2: Check the EBS Volume

- Run the following command to check the EBS volume:

```powershell
# List the disks
Get-Partition | Get-Volume
```

Explanation:

- `Get-Partition` - Gets the partitions on a disk.
- `Get-Volume` - Gets the volumes on a disk.

![Check the EBS Volume](/assets/img/blog/0027-how-to-connect-a-ebs-volume-to-an-windows-ec2-instance-using-powershell-gui/check-the-ebs-volume.png)

### Connect to the EBS Volume using Disk Management

#### Step 1: Connect to the EBS Volume using Disk Management

- Open the Sersh bar by pressing the `Windows` key + `S`.
- Type `diskmgmt.msc` and press `Enter`.
- Right-click on the `Disk 1` and click on the `Online` option.
- Right-click on the `Disk 1` and click on the `Initialize Disk` option.
- Right-click on the `Unallocated` space and click on the `New Simple Volume` option.
- Click on the `Next` button.
- Click on the `Next` button.
- Click on the `Next` button.
- Click on the `Finish` button.

![Connect to the EBS Volume using Disk Management](/assets/img/blog/0027-how-to-connect-a-ebs-volume-to-an-windows-ec2-instance-using-powershell-gui/connect-to-the-ebs-volume-using-disk-management.png)

#### Step 2: Check the EBS Volume using Disk Management

- Right-click on the `Disk 1` and click on the `Properties` option.
- Click on the `Volumes` tab.
- Click on the `D:` drive.

![Check the EBS Volume](/assets/img/blog/0027-how-to-connect-a-ebs-volume-to-an-windows-ec2-instance-using-powershell-gui/check-the-ebs-volume-using-disk-management.png)

## Conclusion

In this tutorial, we learned how to connect a EBS volume to an Windows EC2 instance using PowerShell GUI.

## References

- [AWS - AWS AIM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)
- [AWS - AWS VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
- [AWS - AWS EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)
- [AWS - AWS EC2 Instance Types](https://aws.amazon.com/ec2/instance-types/)
- [AWS - AWS EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
- [AWS - AWS VPC CLI](https://docs.aws.amazon.com/cli/latest/reference/ec2/index.html)
- [AWS - AWS EC2 CLI](https://docs.aws.amazon.com/cli/latest/reference/ec2/index.html)
- [AWS - AWS EBS CLI](https://docs.aws.amazon.com/cli/latest/reference/ec2/index.html)
