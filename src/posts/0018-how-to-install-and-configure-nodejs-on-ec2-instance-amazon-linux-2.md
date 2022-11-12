---
title: How to Install and Configure Node.js on EC2 Instance Amazon Linux 2
slug: how-to-install-and-configure-nodejs-on-ec2-instance-amazon-linux-2
tags: ['AWS', 'Node.js', 'EC2']
categories: ['AWS']
date: 2022-11-07T03:18:00.000Z
image: /assets/img/blog/0018-how-to-install-and-configure-nodejs-on-ec2-instance-amazon-linux-2/how-to-install-and-configure-nodejs-on-ec2-instance-amazon-linux-2.png
author: MKAbuMattar
description: 'Node.js does not exist in the default Amazon Linux 2 repository. So, we need to add the Node.js repository to the system. In this post, we will learn how to install and configure Node.js on EC2 Instance Amazon Linux 2.'
prev: how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench
next: how-to-connect-to-aws-rds-mysql-database-to-ec2-instance-with-php-by-using-pdo
featured: false
draft: false
---

## Introduction

Node.js does not exist in the default Amazon Linux 2 repository. So, we need to add the Node.js repository to the system. In this post, we will learn how to install and configure Node.js on EC2 Instance Amazon Linux 2.

## Prerequisites

- AWS Account
- EC2 Instance Amazon Linux 2
- SSH Client

## Step 1: Update the System Packages and Install Dependencies Packages

First, we need to update the system packages and install dependencies packages.

```bash
# Update the system packages
sudo yum update -y

# Install dependencies packages
sudo yum install gcc-c++ make -y
```

## Step 2: Install Node.js

First, we need to install Node.js on our EC2 Instance. To do that, we need to add the Node.js repository to the system. To add the Node.js repository, we need to run the following command:

```bash
# Install Node.js repository 14.x
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -

# Install Node.js repository 16.x
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -

# Install Node.js repository 17.x
curl -sL https://rpm.nodesource.com/setup_17.x | sudo bash -

# Install Node.js repository 18.x
curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
```

## Step 3: Install Node.js

After choosing the Node.js version, we need to install Node.js on our EC2 Instance. To do that, we need to run the following command:

```bash
# update the system
sudo yum update -y

# Install Node.js
sudo yum install nodejs -y
```

## Step 4: Check Node.js Version

After installing Node.js, we need to check the Node.js version. To do that, we need to run the following command:

```bash
node -v
```

Output depends on the Node.js version that you choose.

```bash
# Node.js 14.x
v14.18.1

# Node.js 16.x
v16.13.0

# Node.js 17.x
v17.0.1

# Node.js 18.x
v18.0.0
```

## Conclusion

In this post, we learned how to install and configure Node.js on EC2 Instance Amazon Linux 2. We learned how to add the Node.js repository to the system and install Node.js on our EC2 Instance.

## References

- [Node.js](https://nodejs.org/en/)
- [AWS - Amazon Linux 2 AMI](https://aws.amazon.com/amazon-linux-2/)
- [AWS - Amazon EC2](https://aws.amazon.com/ec2/)
