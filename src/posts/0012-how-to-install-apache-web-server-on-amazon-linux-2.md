---
title: How to Install Apache Web Server on Amazon Linux 2
slug: how-to-install-apache-web-server-on-amazon-linux-2
tags: ['Apache', 'Amazon Linux 2']
categories: ['AWS']
date: 2022-10-24T00:01:00.000Z
image: /assets/img/blog/0012-how-to-install-apache-web-server-on-amazon-linux-2/how-to-install-apache-web-server-on-amazon-linux-2.jpg
author: MKAbuMattar
description: 'In this tutorial, we will learn how to install Apache web server on Amazon Linux 2. We will also learn how to configure Apache web server to run simple HTML web page.'
prev: how-to-install-and-setup-firewall-on-amazon-linux-2
next: how-to-install-php-and-mariadb-on-amazon-linux-2
featured: false
draft: false
---

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Install Apache Web Server and run simple HTML web page](#install-apache-web-server-and-run-simple-html-web-page)
  - [Step 1: Install Apache Web Server](#step-1-install-apache-web-server)
  - [Step 2: Start Apache Web Server](#step-2-start-apache-web-server)
  - [Step 3: Configure Firewall](#step-3-configure-firewall)
  - [Step 4: Create a Simple HTML Web Page](#step-4-create-a-simple-html-web-page)
  - [Step 5: Test Apache Web Server](#step-5-test-apache-web-server)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

In this tutorial, we will learn how to install Apache web server on Amazon Linux 2. We will also learn how to configure Apache web server to run simple HTML web page.

## Prerequisites

To follow this tutorial, you will need:

- An Amazon Linux 2 EC2 instance.
- A user with sudo privileges.

## Install Apache Web Server and run simple HTML web page

### Step 1: Install Apache Web Server

Before we start, we need to update the package list and upgrade the installed packages:

```bash
sudo yum update -y
```

Now, we can install Apache web server:

```bash
sudo yum install httpd -y
```

### Step 2: Start Apache Web Server

Now, we can start Apache web server:

- Start Apache Server

```bash
sudo systemctl start httpd
```

- Configure Apache to run on system boot

```bash
sudo systemctl enable httpd
```

### Step 3: Configure Firewall

Now, we need to configure the firewall to allow HTTP traffic:

```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload
```

### Step 4: Create a Simple HTML Web Page

Before we can test Apache web server, we need to change the permissions of the `/var/www/html` directory:

```bash
sudo chmod 777 /var/www/html
```

Now, we can create a simple HTML web page:

```bash
sudo vi /var/www/html/index.html
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Apache Web Server</title>
  </head>
  <body>
    <h1>Apache Web Server</h1>
    <p>This is a simple HTML web page.</p>
  </body>
</html>
```

### Step 5: Test Apache Web Server

Now, we can test Apache web server by opening the public IP address of our Amazon Linux 2 EC2 instance in a web browser:

![Apache Web Server](/assets/img/blog/0012-how-to-install-apache-web-server-on-amazon-linux-2/apache-web-server.png)

## Conclusion

In this tutorial, we learned how to install Apache web server on Amazon Linux 2. We also learned how to configure Apache web server to run simple HTML web page.

## References

- [How to Install and Setup FireWall on Amazon Linux 2](/blog/post/how-to-install-and-setup-firewall-on-amazon-linux-2)
- [Install a web server on your EC2 instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html)
- [AWS - Amazon Linux 2 AMI](https://aws.amazon.com/amazon-linux-2/)
