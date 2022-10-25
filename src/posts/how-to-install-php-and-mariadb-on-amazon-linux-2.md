---
title: How to Install PHP and MariaDB on Amazon Linux 2
slug: how-to-install-php-and-mariadb-on-amazon-linux-2
tags: ['Apache', 'PHP', 'MariaDB', 'Amazon Linux 2']
categories: ['AWS']
date: 2022-10-24T02:00:00.000Z
image: /assets/img/blog/how-to-install-php-and-mariadb-on-amazon-linux-2/how-to-install-php-and-mariadb-on-amazon-linux-2.png
author: MKAbuMattar
description: 'We will learn how to set up PHP and MariaDB on Amazon Linux 2 in this tutorial. We will also discover how to set up PHP so that it functions with the Apache web server. We will also discover how to set up MariaDB so that it functions with PHP.'
prev: how-to-install-apache-web-server-on-amazon-linux-2
next: how-to-install-wordpress-on-amazon-linux-2
featured: true
---

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installing PHP/MariaDB, setting up MariaDB, and running a basic PHP demo](#installing-phpmariadb-setting-up-mariadb-and-running-a-basic-php-demo)
  - [Step 1 — Installing PHP](#step-1--installing-php)
  - [Step 2 — Installing MariaDB](#step-2--installing-mariadb)
  - [Step 3 — Configuring PHP to Work with Apache](#step-3--configuring-php-to-work-with-apache)
  - [Step 4 — Configuring MariaDB to Work with PHP](#step-4--configuring-mariadb-to-work-with-php)
- [Conclusion](#conclusion)
- [Resources](#resources)

## Introduction

We will learn how to set up PHP and MariaDB on Amazon Linux 2 in this tutorial. We will also discover how to set up PHP so that it functions with the Apache web server. We will also discover how to set up MariaDB so that it functions with PHP.

## Prerequisites

To follow along with this tutorial, you will need:

- An Amazon Linux 2 EC2 instance with a public IP address.
- A non-root user with sudo privileges.
- A domain name pointing to the public IP address of your EC2 instance.
- Apache web server installed and running. [How to Install Apache Web Server on Amazon Linux 2](/blog/post/how-to-install-apache-web-server-on-amazon-linux-2).

## Installing PHP/MariaDB, setting up MariaDB, and running a basic PHP demo

### Step 1 — Installing PHP

PHP is a free and open-source scripting language that is used to create dynamic web pages. It is the most popular web scripting language in the world.

At first, we will enable `amazon-linux-extras` so that we can specify the PHP version that we want to install.

```bash
sudo amazon-linux-extras enable php7.4 -y
```

Next, we will install PHP.

```bash
sudo yum install php php-{pear,cgi,common,curl,mbstring,gd,mysqlnd,gettext,bcmath,json,xml,fpm,intl,zip,imap} -y
```

We will now verify that PHP has been installed.

```bash
php -v
```

The output should look like this:

```bash
PHP 7.4.30 (cli) (built: Jun 23 2022 20:19:00) ( NTS )
Copyright (c) The PHP Group
Zend Engine v3.4.0, Copyright (c) Zend Technologies
```

### Step 2 — Installing MariaDB

MariaDB is a free and open-source relational database management system (RDBMS) that is used to store data for dynamic web pages. It is a fork of MySQL.

At first, we will install MariaDB.

```bash
sudo yum install mariadb-server -y
```

Next, we will start MariaDB.

```bash
sudo systemctl start mariadb
```

We will configure MariaDB so that it starts automatically when the system boots.

```bash
sudo systemctl enable mariadb
```

We will now secure MariaDB.

```bash
sudo mysql_secure_installation
```

You will be prompted to enter the current root password for MariaDB. Press `Enter` to continue.

```bash
Enter current password for root (enter for none):
```

Next, you will be prompted to set a new root password for MariaDB. Enter a new password and press `Enter`.

```bash
Set root password? [Y/n]
```

You will be prompted to remove anonymous users. Press `Y` and then press `Enter`.

```bash
Remove anonymous users? [Y/n]
```

You will be prompted to disable remote root login. Press `Y` and then press `Enter`.

```bash
Disallow root login remotely? [Y/n]
```

You will be prompted to remove the test database and access to it. Press `Y` and then press `Enter`.

```bash
Remove test database and access to it? [Y/n]
```

You will be prompted to reload the privilege tables now. Press `Y` and then press `Enter`.

```bash
Reload privilege tables now? [Y/n]
```

### Step 3 — Configuring PHP to Work with Apache

At first, we need to restart Apache.

```bash
sudo systemctl restart httpd
```

We will create a directory for our PHP files.

```bash
sudo mkdir /var/www/html/php
```

Next, we will create a PHP file.

```bash
sudo vi /var/www/html/php/index.php
```

We will add the following content to the file.

```php
<?php
  phpinfo();
```

We will now open the file in a web browser.

```bash
http://your_domain_name/php/index.php
```

You should see the following output:

![phpinfo](/assets/img/blog/how-to-install-php-and-mariadb-on-amazon-linux-2/phpinfo.png)

### Step 4 — Configuring MariaDB to Work with PHP

At first, we will create a database for our PHP files.

```bash
sudo mysql -u root -p
```

```sql
CREATE DATABASE php;
```

Next, we will create a user for our PHP files.

```sql
CREATE USER 'php'@'localhost' IDENTIFIED BY 'password';
```

We will grant all privileges to the user.

```sql
GRANT ALL PRIVILEGES ON php.* TO 'php'@'localhost';
```

We will now exit MariaDB.

```sql
exit
```

We will create a PHP file.

```bash
sudo vi /var/www/html/php/db.php
```

We will add the following content to the file.

```php
<?php
  $db = new mysqli('localhost', 'php', 'password', 'php');
  if ($db->connect_error) {
    die('Connection failed: ' . $db->connect_error);
  }
  echo 'Connected successfully';
```

We will now open the file in a web browser.

```bash
http://your_domain_name/php/db.php
```

You should see the following output:

![phpdb](/assets/img/blog/how-to-install-php-and-mariadb-on-amazon-linux-2/phpdb.png)

## Conclusion

In this tutorial, we learned how to set up PHP and MariaDB on Amazon Linux 2. We also learned how to set up PHP so that it functions with the Apache web server. We also learned how to set up MariaDB so that it functions with PHP.

## Resources

- [How to Install Apache Web Server on Amazon Linux 2](/blog/post/how-to-install-apache-web-server-on-amazon-linux-2)
- [AWS - Amazon Linux 2](https://aws.amazon.com/amazon-linux-2/)
