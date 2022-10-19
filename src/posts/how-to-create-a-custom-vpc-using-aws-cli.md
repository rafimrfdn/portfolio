---
title: How To Create A Custom VPC Using AWS CLI
slug: how-to-create-a-custom-vpc-using-aws-cli
tags: ['AWS', 'VPC', 'CLI']
categories: ['AWS']
date: 2022-10-15
image: /assets/img/blog/how-to-create-a-custom-vpc-using-aws-cli/how-to-create-a-custom-vpc-using-aws-cli.png
author: MKAbuMattar
description: 'In the sample that follows, an IPv4 CIDR block, a public subnet, and a private subnet are all created using AWS CLI instructions. You can run an instance in the public subnet and connect to it once the VPC and subnets have been configured. Additionally, you may start an instance on the private subnet and link to it from the instance on the public network.'
prev: setting-up-jwt-authentication-in-typescript-with-express-mongodb-babel-prettier-eslint-and-husky-part-2
next: introduction-to-linux-cli
featured: true
---

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
  - [Configure AWS CLI: `aws configure`](#configure-aws-cli-aws-configure)
- [Create a VPC](#create-a-vpc)
- [Modify your custom VPC and enable DNS hostname support](#modify-your-custom-vpc-and-enable-dns-hostname-support)
- [Create a public subnet](#create-a-public-subnet)
- [Enable Auto-assign Public IP on the subnet](#enable-auto-assign-public-ip-on-the-subnet)
- [Create an Internet Gateway](#create-an-internet-gateway)
- [Attach the Internet gateway to your VPC](#attach-the-internet-gateway-to-your-vpc)
- [Create a custom route table](#create-a-custom-route-table)
- [Associate the subnet with route table, making it a public subnet](#associate-the-subnet-with-route-table-making-it-a-public-subnet)
- [Get security group ID’s](#get-security-group-ids)
- [Add tags to the resources in your VPC](#add-tags-to-the-resources-in-your-vpc)
- [Delete the VPC (Cleanup)](#delete-the-vpc-cleanup)
- [References](#references)

## Introduction

In the sample that follows, an IPv4 CIDR block, a public subnet, and a private subnet are all created using AWS CLI instructions. You can run an instance in the public subnet and connect to it once the VPC and subnets have been configured. Additionally, you may start an instance on the private subnet and link to it from the instance on the public network. The following example employs the following AWS CLI commands:

## Prerequisites

- AWS CLI
- AWS Account

### Configure AWS CLI: `aws configure`

```bash
# Configure AWS CLI

aws configure

#AWS Access Key ID [None]: # Enter your access key here
#AWS Secret Access Key [None]: # Enter your secret key here
#Default region name [None]: # Enter your region here
#Default output format [None]: # Enter your output format here
```

## Create a VPC

```bash
# Get help for aws commands

aws help

# aws [COMMAND] [SUB-COMMAND] help

aws ec2 create-vpc help

# Create a VPC

AWS_VPC_INFO=$(aws ec2 create-vpc \
--cidr-block 10.0.0.0/16 \
--query 'Vpc.{VpcId:VpcId}' \
--output text)
```

## Modify your custom VPC and enable DNS hostname support

```bash
# Modify your custom VPC and enable DNS hostname support

aws ec2 modify-vpc-attribute \
--vpc-id $AWS_VPC_INFO \
--enable-dns-hostnames "{\"Value\":true}"
```

## Create a public subnet

> NOTE: Availability zones: `us-east-1a`, `us-east-1b`, `us-east-1c`, `us-east-1d`, `us-east-1e`, `us-east-1f`.

```bash
# Create a public subnet

AWS_SUBNET_PUBLIC=$(aws ec2 create-subnet \
--vpc-id $AWS_VPC_INFO --cidr-block 10.0.1.0/24 \
--availability-zone us-east-1a --query 'Subnet.{SubnetId:SubnetId}' \
--output text)
```

## Enable Auto-assign Public IP on the subnet

```bash
# Enable Auto-assign Public IP on the subnet

aws ec2 modify-subnet-attribute \
--subnet-id $AWS_SUBNET_PUBLIC \
--map-public-ip-on-launch
```

## Create an Internet Gateway

```bash
# Create an Internet Gateway

AWS_INTERNET_GATEWAY=$(aws ec2 create-internet-gateway \
--query 'InternetGateway.{InternetGatewayId:InternetGatewayId}' \
--output text)
```

## Attach the Internet gateway to your VPC

```bash
# Attach the Internet gateway to your VPC

aws ec2 attach-internet-gateway \
--vpc-id $AWS_VPC_INFO \
--internet-gateway-id $AWS_INTERNET_GATEWAY
```

## Create a custom route table

```bash
# Create a custom route table

AWS_CUSTOM_ROUTE_TABLE=$(aws ec2 create-route-table \
--vpc-id $AWS_VPC_INFO \
--query 'RouteTable.{RouteTableId:RouteTableId}' \
--output text )
```

## Associate the subnet with route table, making it a public subnet

```bash
# Associate the subnet with route table, making it a public subnet

AWS_ROUTE_TABLE_ASSOCITATION=$(aws ec2 associate-route-table  \
--subnet-id $AWS_SUBNET_PUBLIC \
--route-table-id $AWS_CUSTOM_ROUTE_TABLE \
--output text)
```

## Get security group ID’s

```bash
# Get security group ID’s

AWS_DEFAULT_SECURITY_GROUP=$(aws ec2 describe-security-groups \
--filters "Name=vpc-id,Values=$AWS_VPC_INFO" \
--query 'SecurityGroups[?GroupName == `default`].GroupId' \
--output text)

AWS_CUSTOM_SECURITY_GROUP=$(aws ec2 describe-security-groups \
--filters "Name=vpc-id,Values=$AWS_VPC_INFO" \
--query 'SecurityGroups[?GroupName == `vpc-cli-lab-security-group`].GroupId' \
--output text)
```

## Add tags to the resources in your VPC

```bash
# Add tags to the resources in your VPC

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
```

## Delete the VPC (Cleanup)

```bash
# Delete custom security group

aws ec2 delete-security-group \
--group-id $AWS_CUSTOM_SECURITY_GROUP

# Delete internet gateway
aws ec2 detach-internet-gateway \
--internet-gateway-id $AWS_INTERNET_GATEWAY \
--vpc-id $AWS_VPC_INFO

aws ec2 delete-internet-gateway \
--internet-gateway-id $AWS_INTERNET_GATEWAY

# Delete the custom route table

aws ec2 disassociate-route-table \
--association-id $AWS_ROUTE_TABLE_ASSOCITATION

aws ec2 delete-route-table \
--route-table-id $AWS_CUSTOM_ROUTE_TABLE

# Delete the public subnet

aws ec2 delete-subnet \
--subnet-id $AWS_SUBNET_PUBLIC

# Delete the vpc

aws ec2 delete-vpc \
--vpc-id $AWS_VPC_INFO
```

## References

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
- [AWS CLI - Install](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- [AWS CLI - Configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
- [AWS CLI - Create VPC](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-vpc.html)
- [AWS CLI - Modify VPC](https://docs.aws.amazon.com/cli/latest/reference/ec2/modify-vpc-attribute.html)
- [AWS CLI - Create Subnet](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-subnet.html)
- [AWS CLI - Modify Subnet](https://docs.aws.amazon.com/cli/latest/reference/ec2/modify-subnet-attribute.html)
- [AWS CLI - Create Internet Gateway](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-internet-gateway.html)
- [AWS CLI - Attach Internet Gateway](https://docs.aws.amazon.com/cli/latest/reference/ec2/attach-internet-gateway.html)
- [AWS CLI - Create Route Table](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-route-table.html)
- [AWS CLI - Associate Route Table](https://docs.aws.amazon.com/cli/latest/reference/ec2/associate-route-table.html)
- [AWS CLI - Describe Security Groups](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-security-groups.html)
- [AWS CLI - Create Tags](https://docs.aws.amazon.com/cli/latest/reference/ec2/create-tags.html)
- [AWS CLI - Delete Security Group](https://docs.aws.amazon.com/cli/latest/reference/ec2/delete-security-group.html)
