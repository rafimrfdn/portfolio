---
title: How to Install WordPress on Amazon Linux 2
slug: how-to-install-wordpress-on-amazon-linux-2
tags: ['WordPress', 'Apache', 'PHP', 'MariaDB', 'Amazon Linux 2']
categories: ['AWS']
date: 2022-10-24T03:00:00.000Z
image: /assets/img/blog/how-to-install-wordpress-on-amazon-linux-2/how-to-install-wordpress-on-amazon-linux-2.png
author: MKAbuMattar
description: 'We will learn how to install WordPress on Amazon Linux 2 in this tutorial. We will also discover how to set up WordPress so that it functions with the Apache web server. We will also discover how to set up WordPress so that it functions with PHP and MariaDB.'
prev: how-to-install-php-and-mariadb-on-amazon-linux-2
next: undefined
featured: true
---

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installing WordPress, setting up WordPress, and running a basic WordPress demo](#installing-wordpress-setting-up-wordpress-and-running-a-basic-wordpress-demo)
  - [Step 1 — Download WordPress](#step-1--download-wordpress)
  - [Step 2 — Extract WordPress](#step-2--extract-wordpress)
  - [Step 3 — Create a WordPress Database](#step-3--create-a-wordpress-database)
  - [Step 4 — Configure WordPress](#step-4--configure-wordpress)
  - [Step 5 — Set Up WordPress](#step-5--set-up-wordpress)
- [Conclusion](#conclusion)
- [Resources](#resources)

## Introduction

We will learn how to install WordPress on Amazon Linux 2 in this tutorial. We will also discover how to set up WordPress so that it functions with the Apache web server. We will also discover how to set up WordPress so that it functions with PHP and MariaDB.

## Prerequisites

To follow along with this tutorial, you will need:

- An Amazon Linux 2 EC2 instance with a public IP address.
- A non-root user with sudo privileges.
- A domain name pointing to the public IP address of your EC2 instance.
- Apache web server installed and running. [How to Install Apache Web Server on Amazon Linux 2](/blog/post/how-to-install-apache-web-server-on-amazon-linux-2).
- PHP installed and running. [How to Install PHP and MariaDB on Amazon Linux 2](/blog/post/how-to-install-php-and-mariadb-on-amazon-linux-2).

## Installing WordPress, setting up WordPress, and running a basic WordPress demo

### Step 1 — Download WordPress

WordPress is a free and open-source content management system (CMS) based on PHP and MySQL. It is the most popular CMS in the world.

To download WordPress, run the following command:

```bash
sudo wget https://wordpress.org/latest.tar.gz
```

### Step 2 — Extract WordPress

To extract the WordPress archive, run the following command:

```bash
sudo tar -xzvf latest.tar.gz
```

Next, move the extracted WordPress directory to the `/var/www/html` directory:

```bash
sudo mv wordpress /var/www/html/
```

### Step 3 — Create a WordPress Database

To create a WordPress database, run the following command:

```bash
sudo mysql -u root -p
```

Next, create a database for WordPress:

```sql
CREATE DATABASE wordpress;
```

Next, create a user for WordPress:

```sql
CREATE USER 'wordpressuser'@'localhost' IDENTIFIED BY 'password';
```

Next, grant all privileges to the WordPress user:

```sql
GRANT ALL PRIVILEGES ON wordpress.* TO 'wordpressuser'@'localhost';
```

Next, flush the privileges:

```sql
FLUSH PRIVILEGES;
```

Next, exit the MySQL shell:

```sql
exit
```

### Step 4 — Configure WordPress

To configure WordPress, run the following command:

```bash
sudo cp /var/www/html/wordpress/wp-config-sample.php /var/www/html/wordpress/wp-config.php
```

Next, open the WordPress configuration file:

```bash
sudo vi /var/www/html/wordpress/wp-config.php
```

Next, update the database name, user, and password:

```php
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');
/** Database username */
define('DB_USER', 'wordpressuser');
/** Database password */
define('DB_PASSWORD', 'password');
```

Next, save and close the file.

### Step 5 — Set Up WordPress

To set up WordPress, open your web browser and navigate to your domain name. For example, `https://example.com`.

Next, click on the **Let’s go!** button.

Next, enter the site title, username, password, and email address:

![WordPress Site Title, Username, Password, and Email Address](/assets/img/blog/how-to-install-wordpress-on-amazon-linux-2/wordpress-site-title-username-password-and-email-address.png)

Next, click on the **Install WordPress** button.

Next, click on the **Log In** button.

Next, enter the username and password:

![WordPress Username and Password](/assets/img/blog/how-to-install-wordpress-on-amazon-linux-2/wordpress-username-and-password.png)

Next, click on the **Log In** button.

Now, you have successfully installed WordPress on Amazon Linux 2.

![WordPress Dashboard](/assets/img/blog/how-to-install-wordpress-on-amazon-linux-2/wordpress-dashboard.png)

> **Note:** Remember to protect your WordPress Admin Panel and cover up the URL and WordPress version.

## Conclusion

In this tutorial, we learned how to install WordPress on Amazon Linux 2. We also discovered how to set up WordPress so that it functions with the Apache web server. We also discovered how to set up WordPress so that it functions with PHP and MariaDB.

## Resources

- [How to Install Apache Web Server on Amazon Linux 2](/blog/post/how-to-install-apache-web-server-on-amazon-linux-2)
- [How to Install PHP and MariaDB on Amazon Linux 2](/blog/post/how-to-install-php-and-mariadb-on-amazon-linux-2)
- [Tutorial: Host a WordPress blog on Amazon Linux 2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hosting-wordpress.html)
