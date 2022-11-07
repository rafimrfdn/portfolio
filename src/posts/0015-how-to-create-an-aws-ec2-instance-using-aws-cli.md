---
title: How To Create An AWS EC2 Instance Using AWS CLI
slug: how-to-create-an-aws-ec2-instance-using-aws-cli
tags: ['AWS', 'EC2', 'AWS CLI', 'Amazon Linux 2', 'WordPress']
categories: ['AWS']
date: 2022-10-30T03:00:00.000Z
image: /assets/img/blog/0015-how-to-create-an-aws-ec2-instance-using-aws-cli/how-to-create-an-aws-ec2-instance-using-aws-cli.png
author: MKAbuMattar
description: 'We will learn how to create an AWS EC2 instance using AWS CLI in this tutorial. We will also discover how to set up an AWS EC2 instance so that it functions with the Apache web server. We will also discover how to set up an AWS EC2 instance so that it functions with WordPress.'
prev: how-to-install-wordpress-on-amazon-linux-2
next: how-to-run-an-apache-web-server-using-docker-on-an-aws-ec2-instance
featured: false
---

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Create an AWS VPC](#create-an-aws-vpc)
  - [Create an VPC](#create-an-vpc)
  - [Modify your custom VPC and enable DNS hostname support, and DNS support](#modify-your-custom-vpc-and-enable-dns-hostname-support-and-dns-support)
  - [Create a Public Subnet](#create-a-public-subnet)
  - [Create a Private Subnet](#create-a-private-subnet)
  - [Enable Auto-assign Public IP on the subnet](#enable-auto-assign-public-ip-on-the-subnet)
  - [Create an Internet Gateway](#create-an-internet-gateway)
  - [Create an NAT gateway](#create-an-nat-gateway)
  - [Attach the Internet gateway to your VPC](#attach-the-internet-gateway-to-your-vpc)
  - [Create a custom route table](#create-a-custom-route-table)
  - [Create a custom route table association](#create-a-custom-route-table-association)
  - [Associate the subnet with route table, making it a public subnet](#associate-the-subnet-with-route-table-making-it-a-public-subnet)
  - [Associate the NAT gateway with the route table, making it a private subnet](#associate-the-nat-gateway-with-the-route-table-making-it-a-private-subnet)
  - [Create a security group](#create-a-security-group)
  - [Add a rule to the security group](#add-a-rule-to-the-security-group)
- [Create an AWS EC2 instance](#create-an-aws-ec2-instance)
  - [Get the latest AMI ID](#get-the-latest-ami-id)
  - [Create a key pair](#create-a-key-pair)
  - [Create an EC2 instance](#create-an-ec2-instance)
  - [Check the status of the EC2 instance](#check-the-status-of-the-ec2-instance)
  - [Get the public ip address of your instance](#get-the-public-ip-address-of-your-instance)
  - [SSH into the EC2 instance](#ssh-into-the-ec2-instance)
  - [Show the WordPress website](#show-the-wordpress-website)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

We will learn how to create an AWS EC2 instance using AWS CLI in this tutorial. We will also discover how to set up an AWS EC2 instance so that it functions with the Apache web server. We will also discover how to set up an AWS EC2 instance so that it functions with WordPress.

## Prerequisites

To follow along with this tutorial, you will need:

- An AWS account.
- An AWS IAM user with the following permissions:
  - AmazonEC2FullAccess
  - AmazonVPCFullAccess
- An AWS CLI installed on your computer.
- An SSH client installed on your computer.

## Create an AWS VPC

Before we create an AWS EC2 instance using AWS CLI, we need to create a VPC. We will also create a public and private subnet, an internet gateway, and a route table.

### Create an VPC

To create a VPC, run the following command:

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
```

### Modify your custom VPC and enable DNS hostname support, and DNS support

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

### Create a Public Subnet

To create a public subnet, run the following command:

```bash
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
```

### Create a Private Subnet

To create a private subnet, run the following command:

```bash
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
```

### Enable Auto-assign Public IP on the subnet

To enable auto-assign public IP on the subnet, run the following command:

```bash
# Enable auto-assign public IP on the public subnet
aws ec2 modify-subnet-attribute \
--subnet-id $AWS_PUBLIC_SUBNET \
--map-public-ip-on-launch
```

### Create an Internet Gateway

To create an internet gateway, run the following command:

```bash
AWS_INTERNET_GATEWAY=$(aws ec2 create-internet-gateway \
--query 'InternetGateway.{InternetGatewayId:InternetGatewayId}' \
--output text)

# Add a name tag to the Internet Gateway
aws ec2 create-tags \
--resources $AWS_INTERNET_GATEWAY \
--tags Key=Name,Value=DevOpsInternetGateway
```

### Create an NAT gateway

To create an NAT gateway, run the following command:

```bash
# Get Elastic IP
AWS_ELASTIC_IP=$(aws ec2 allocate-address \
--domain vpc \
--query 'AllocationId' \
--output text)

# Create a NAT gateway
AWS_NAT_GATEWAY=$(aws ec2 create-nat-gateway \
--subnet-id $AWS_PUBLIC_SUBNET \
--allocation-id $AWS_EIP_ALLOCATION \
--query 'NatGateway.{NatGatewayId:NatGatewayId}' \
--output text)

# Add a name tag to the NAT gateway
aws ec2 create-tags \
--resources $AWS_NAT_GATEWAY \
--tags Key=Name,Value=DevOpsNATGateway
```

### Attach the Internet gateway to your VPC

To attach the Internet gateway to your VPC, run the following command:

```bash
# Attach the Internet gateway to your VPC
aws ec2 attach-internet-gateway \
--vpc-id $AWS_VPC \
--internet-gateway-id $AWS_INTERNET_GATEWAY \
--query 'InternetGateway.{InternetGatewayId:InternetGatewayId}' \
--output text
```

### Create a custom route table

To create a route table, run the following command:

```bash
# Create a custom route table
AWS_ROUTE_TABLE=$(aws ec2 create-route-table \
--vpc-id $AWS_VPC \
--query 'RouteTable.{RouteTableId:RouteTableId}' \
--output text)

# Add a name tag to the route table
aws ec2 create-tags \
--resources $AWS_ROUTE_TABLE \
--tags Key=Name,Value=DevOpsRouteTable
```

### Create a custom route table association

To create a custom route table association, run the following command:

```bash
# Create a custom route table association
aws ec2 associate-route-table \
--route-table-id $AWS_ROUTE_TABLE \
--subnet-id $AWS_PUBLIC_SUBNET \
--output text
```

### Associate the subnet with route table, making it a public subnet

To associate the subnet with route table, making it a public subnet, run the following command:

```bash
# Associate the subnet with route table, making it a public subnet
aws ec2 create-route \
--route-table-id $AWS_ROUTE_TABLE \
--destination-cidr-block 0.0.0.0/0 \
--gateway-id $AWS_INTERNET_GATEWAY \
--output text
```

### Associate the NAT gateway with the route table, making it a private subnet

To associate the NAT gateway with the route table, making it a private subnet, run the following command:

```bash
# Associate the NAT gateway with the route table, making it a private subnet
aws ec2 create-route \
--route-table-id $AWS_ROUTE_TABLE \
--destination-cidr-block 10.2.0.0/24 \
--nat-gateway-id $AWS_NAT_GATEWAY \
--output text
```

### Create a security group

To create a security group, run the following command:

```bash
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
```

### Add a rule to the security group

To add a rule to the security group, run the following command:

```bash
# Add a rule to the security group

# Add SSH rule
aws ec2 authorize-security-group-ingress \
--group-id $AWS_SECURITY_GROUP \
--protocol tcp \
--port 22 \
--cidr 0.0.0.0/0 \
--output text

# Add HTTP rule
aws ec2 authorize-security-group-ingress \
--group-id $AWS_SECURITY_GROUP \
--protocol tcp \
--port 80 \
--cidr 0.0.0.0/0 \
--output text
```

## Create an AWS EC2 instance

### Get the latest AMI ID

To get the latest AMI ID, run the following command:

```bash
# Get the latest AMI ID
AWS_AMI=$(aws ec2 describe-images \
--owners 'amazon' \
--filters 'Name=name,Values=amzn2-ami-hvm-2.0.20221004.0-x86_64-gp2' \
'Name=state,Values=available' \
--query 'sort_by(Images, &CreationDate)[-1].[ImageId]' \
--output 'text')
```

### Create a key pair

To create a key pair, run the following command:

```bash
# Create a key pair
aws ec2 create-key-pair \
--key-name DevOpsKeyPair \
--query 'KeyMaterial' \
--output text > DevOpsKeyPair.pem

# Change the permission of the key pair
chmod 400 DevOpsKeyPair.pem
```

### Create an EC2 instance

Before creating an EC2 instance, you need to create a user data script. That script will be automation previous three blog posts:

- [How to Install Apache Web Server on Amazon Linux 2](/blog/post/how-to-install-apache-web-server-on-amazon-linux-2)
- [How to Install PHP and MariaDB on Amazon Linux 2](/blog/post/how-to-install-php-and-mariadb-on-amazon-linux-2)
- [How to Install WordPress on Amazon Linux 2](/blog/post/0015-how-to-create-an-aws-ec2-instance-using-aws-cli/how-to-create-an-aws-ec2-instance-using-aws-cli)

You can find the user data script in the [GitHub repository](https://github.com/MKAbuMattar/install-and-setup-wordpress-on-amazon-linux-2)

```bash
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
```

To create an EC2 instance, run the following command:

```bash
# Create an EC2 instance
AWS_EC2_INSTANCE=$(aws ec2 run-instances \
--image-id $AWS_AMI \
--instance-type t2.micro \
--key-name DevOpsKeyPair \
--monitoring "Enabled=false" \
--security-group-ids $AWS_SECURITY_GROUP \
--subnet-id $AWS_PUBLIC_SUBNET \
--user-data file://install.sh \
--private-ip-address 10.0.1.10 \
--query 'Instances[0].InstanceId' \
--output text)

# Add a name tag to the EC2 instance
aws ec2 create-tags \
--resources $AWS_EC2_INSTANCE \
--tags "Key=Name,Value=DevOpsInstance"
```

### Check the status of the EC2 instance

To check the status of the EC2 instance, run the following command:

```bash
# Check the status of the EC2 instance
aws ec2 describe-instances \
--instance-ids $AWS_EC2_INSTANCE \
--query 'Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress]' \
--output text
```

### Get the public ip address of your instance

To get the public ip address of your instance, run the following command:

```bash
# Get the public ip address of your instance
AWS_PUBLIC_IP=$(aws ec2 describe-instances \
--instance-ids $AWS_EC2_INSTANCE \
--query 'Reservations[*].Instances[*].[PublicIpAddress]' \
--output text)

echo $AWS_EC2_INSTANCE_PUBLIC_IP
```

### SSH into the EC2 instance

To SSH into the EC2 instance, run the following command:

```bash
# SSH into the EC2 instance
ssh -i DevOpsKeyPair.pem ec2-user@$AWS_PUBLIC_IP
```

### Show the WordPress website

![WordPress on Amazon Linux 2](/assets/img/blog/0015-how-to-create-an-aws-ec2-instance-using-aws-cli/wordpress-on-amazon-linux-2-1.png)

## Conclusion

In this blog post, you learned how to create a VPC, a public subnet, a private subnet, a NAT gateway, a route table, a security group, and an EC2 instance. You also learned how to SSH into the EC2 instance.

## References

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
- [AWS CLI - Create VPC](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-vpc.html)
- [AWS CLI - Create Subnet](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-subnet.html)
- [AWS CLI - Create Internet Gateway](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-internet-gateway.html)
- [AWS CLI - Create Route Table](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-route-table.html)
- [AWS CLI - Create Security Group](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html)
- [AWS CLI - Create Key Pair](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-key-pair.html)
- [AWS CLI - Create EC2 Instance](https://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html)
- [AWS CLI - Create Tag](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-tags.html)
