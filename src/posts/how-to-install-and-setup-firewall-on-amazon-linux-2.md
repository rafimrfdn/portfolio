---
title: How to Install and Setup FireWall on Amazon Linux 2
slug: how-to-install-and-setup-firewall-on-amazon-linux-2
tags: ['Firewall', 'Amazon Linux 2']
categories: ['AWS']
date: 2022-10-24T00:00:00.000Z
image: /assets/img/blog/how-to-install-and-setup-firewall-on-amazon-linux-2/how-to-install-and-setup-firewall-on-amazon-linux-2.jpg
author: MKAbuMattar
description: 'We will learn how to install and setup FireWall on Amazon Linux 2 in this tutorial. We will also discover how to set up FireWall so that it functions with the Amazon Linux 2.'
prev: git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows
next: how-to-install-apache-web-server-on-amazon-linux-2
featured: true
---

## Introduction

We will learn how to install and setup FireWall on Amazon Linux 2 in this tutorial. We will also discover how to set up FireWall so that it functions with the Amazon Linux 2.

## Prerequisites

To follow along with this tutorial, you will need:

- An Amazon Linux 2 EC2 instance with a public IP address.
- A user with sudo privileges.

## Install and Setup FireWall on Amazon Linux 2

### Step 1: Install FireWall

Before we can install FireWall, we must first update the system.

```bash
# Update the system
sudo yum update -y
```

Now that the system has been updated, we can install FireWall.

```bash
# Install FireWall
sudo yum install firewalld -y
```

Next, after installing FireWall, it's time to verify whether the _iptables_ service is running.

```bash
# Check if the iptables service is running
sudo systemctl status iptables
```

If the _iptables_ service is running, we need to stop it.

```bash
# Stop the iptables service
sudo systemctl stop iptables
```

Now that the _iptables_ service is stopped, we can start the FireWall service.

```bash
# Start the FireWall service
sudo systemctl start firewalld
```

To verify that the FireWall service is running, we can use the following command.

```bash
# Check if the FireWall service is running
sudo systemctl status firewalld
```

Newly installed FireWall services are not enabled by default. To enable the FireWall service, we can use the following command.

```bash
# Enable the FireWall service
sudo systemctl enable firewalld
```

### Step 2: Configure FireWall

Now that the FireWall service is running, we can configure it. To configure the FireWall service, we can use the following command.

```bash
# Configure the FireWall service
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --permanent --zone=public --add-service=ssh
sudo firewall-cmd --reload
```

List Firewalld Zones

```bash
# List Firewalld Zones
sudo firewall-cmd --get-zones
```

List Services Default Zone

```bash
# List Services Default Zone
sudo firewall-cmd --get-services
```

To verify that the FireWall service is configured correctly, we can use the following command.

```bash
# Check the FireWall service configuration
sudo firewall-cmd --list-all
```

List All Firewalld Zones

```bash
# List All Firewalld Zones
sudo firewall-cmd --list-all-zones
```

### Step 3: Set Up Default Firewalld Zone

To set up the default Firewalld zone, we can use the following command.

```bash
# Set up the default Firewalld zone
sudo firewall-cmd --set-default-zone=public
```

### Step 4: Check FireWall Status

To check the FireWall status, we can use the following command.

```bash
# Check the FireWall status
sudo firewall-cmd --state
```

### Step 5: Assigning Services to Firewalld Zones

To assign services to Firewalld zones, we can use the following command.

```bash
# Assign services to Firewalld zones
firewall-cmd --state
firewall-cmd --get-active-zones
```

### Step 6: Adding Services to Firewalld Zones

To add services to Firewalld zones, we can use the following command.

```bash
# Add services to Firewalld zones
firewall-cmd --add-service=rtmp

# Remove services from Firewalld zones
firewall-cmd --zone=public --remove-service=rtmp

# add port to zone
firewall-cmd --zone=public --add-port=80/tcp --permanent

# remove port from zone
firewall-cmd --zone=public --remove-port=80/tcp --permanent
```

## Conclusion

In this tutorial, we learned how to install and setup FireWall on Amazon Linux 2. We also learned how to set up FireWall so that it functions with the Amazon Linux 2.
