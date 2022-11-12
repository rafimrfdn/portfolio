---
title: How to Run an Apache Web Server Using Docker on an AWS EC2 Instance
slug: how-to-run-an-apache-web-server-using-docker-on-an-aws-ec2-instance
tags: ['Docker', 'AWS', 'EC2', 'Apache']
categories: ['AWS']
date: 2022-10-31T09:18:00.000Z
image: /assets/img/blog/0016-how-to-run-an-apache-web-server-using-docker-on-an-aws-ec2-instance/how-to-run-an-apache-web-server-using-docker-on-an-aws-ec2-instance.png
author: MKAbuMattar
description: 'In this post, we will learn how to run an Apache web server using Docker on an AWS EC2 instance.'
prev: how-to-create-an-aws-ec2-instance-using-aws-cli
next: how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench
featured: false
draft: false
---

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup and Configure Docker to Run an Apache Web Server on an AWS EC2 Instance](#setup-and-configure-docker-to-run-an-apache-web-server-on-an-aws-ec2-instance)
  - [Step 1: Install Docker on the AWS EC2 Instance](#step-1-install-docker-on-the-aws-ec2-instance)
  - [Step 2: Start the Docker Service](#step-2-start-the-docker-service)
  - [Step 3: Add the `ec2-user` to the Docker Group](#step-3-add-the-ec2-user-to-the-docker-group)
  - [Step 4: Run the Apache Web Server Using Docker](#step-4-run-the-apache-web-server-using-docker)
  - [Step 5: Test the Apache Web Server](#step-5-test-the-apache-web-server)
  - [Step 6: Edit The Web Page on Docker Container](#step-6-edit-the-web-page-on-docker-container)
  - [Step 7: Stop the Docker Container](#step-7-stop-the-docker-container)
  - [Step 8: Restart the Docker Container](#step-8-restart-the-docker-container)
  - [Step 9: Remove the Docker Container](#step-9-remove-the-docker-container)
  - [Step 10: Remove the Docker Image](#step-10-remove-the-docker-image)
- [Conclusion](#conclusion)
- [References](#references)

## Introduction

In this post, we will learn how to run an Apache web server using Docker on an AWS EC2 instance. We will use the following tools:

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Docker](https://www.docker.com/)
- [Apache](https://httpd.apache.org/)

## Prerequisites

To follow this tutorial, you will need:

- An AWS account
- An AWS EC2 instance

> **Note:** You can follow this tutorial to create an [AWS EC2 instance Using AWS CLI](/blog/post/how-to-create-an-aws-ec2-instance-using-aws-cli) wthout using user data, or you can create an AWS EC2 instance using the AWS console.

## Setup and Configure Docker to Run an Apache Web Server on an AWS EC2 Instance

### Step 1: Install Docker on the AWS EC2 Instance

Before we can install Docker on the AWS EC2 instance, we need to update the package list.

```bash
sudo yum update -y
```

Then, we need to install Docker on the AWS EC2 instance.

```bash
sudo amazon-linux-extras install docker -y
```

### Step 2: Start the Docker Service

After installing Docker on the AWS EC2 instance, we need to start the Docker service.

```bash
sudo service docker start
```

### Step 3: Add the `ec2-user` to the Docker Group

Try to run the following command to check if the Docker service is running.

```bash
docker info
```

Explination:

- `docker info` - This command will show the information about the Docker service.

If you get the following error:

```bash
Client:
  Context:    default
  Debug Mode: false

Server:
  ERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
errors pretty printing info
```

Then, you need to add the `ec2-user` to the Docker group.

```bash
sudo usermod -a -G docker ec2-user
```

Exit the SSH session and reconnect to the AWS EC2 instance.

After reconnecting to the AWS EC2 instance, try to run the following command again.

```bash
docker info
```

If you get the following output:

```bash
Client:
  Context:    default
  Debug Mode: false

Server:
 Containers: 0
  Running: 0
  Paused: 0
  Stopped: 0
 Images: 0
 Server Version: 20.10.17
 Storage Driver: overlay2
  Backing Filesystem: xfs
  Supports d_type: true
  Native Overlay Diff: true
  userxattr: false
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: 1
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog
 Swarm: inactive
 Runtimes: io.containerd.runc.v2 io.containerd.runtime.v1.linux runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 10c12954828e7c7c9b6e0ea9b0c02b01407d3ae1
 runc version: 1e7bb5b773162b57333d57f612fd72e3f8612d94
 init version: de40ad0
 Security Options:
  seccomp
   Profile: default
 Kernel Version: 5.10.144-127.601.amzn2.x86_64
 Operating System: Amazon Linux 2
 OSType: linux
 Architecture: x86_64
 CPUs: 1
 Total Memory: 964.8MiB
 Name: ip-172-31-95-171.ec2.internal
 ID: VWQG:27RB:ARKI:V77B:34E2:BRGC:6DDJ:EKSF:VUQP:TX5G:UXVF:Q444
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 Registry: https://index.docker.io/v1/
 Labels:
 Experimental: false
 Insecure Registries:
  127.0.0.0/8
 Live Restore Enabled: false
```

Then, you have successfully installed Docker on the AWS EC2 instance.

### Step 4: Run the Apache Web Server Using Docker

First, we need to pull the Apache image from Docker Hub.

```bash
docker pull httpd
```

Explination:

- `docker pull` - Pull an image or a repository from a registry like [Docker Hub](https://hub.docker.com/), or from a private registry like [AWS ECR](https://aws.amazon.com/ecr/).

Then, we need to run the Apache web server using Docker.

```bash
docker run -dit --name apache -p 80:80 httpd
```

Explination:

- `docker run` - Run a command in a new container.
- `-dit` - Run container in background and print container ID.
- `--name` - Assign a name to the container.
- `-p` - Publish a container's port(s) to the host.
- `httpd` - The image name.

### Step 5: Test the Apache Web Server

To test the Apache web server, we need to get the public IP address of the AWS EC2 instance.

```bash
curl http://PUBLIC_IP_ADDRESS
```

Or, we can use the the private IP address of the AWS EC2 instance.

```bash
curl http://PRIVATE_IP_ADDRESS
```

If you get the following output:

```bash
<html><body><h1>It works!</h1></body></html>
```

Then, the Apache web server is running successfully.

### Step 6: Edit The Web Page on Docker Container

To edit the web page, we need to open the `index.html` file, in the `/usr/local/apache2/htdocs` directory.

Before we can edit the `index.html` file, we need to get the container ID of the Apache container.

```bash
docker ps
```

Explination:

- `docker ps` - List containers.

Then, we need to open the Docker container.

```bash
docker exec -it CONTAINER_ID /bin/bash
```

Explination:

- `docker exec` - Run a command in a running container.
- `-it` - Keep STDIN open even if not attached.
- `CONTAINER_ID` - The container ID.
- `/bin/bash` - The command to run.

Then, we need to open the `index.html` file, in the `/usr/local/apache2/htdocs` directory.

```bash
vi /usr/local/apache2/htdocs/index.html
```

If you get the following output:

```bash
bash: vi: command not found
```

Then, you need to install the `vi` editor.

```bash
# update the package list
apt-get update -y

# upgrade the packages
apt-get upgrade -y

# install the vi editor
apt-get install -y vim
```

Then, we need to open the `index.html` file, in the `/usr/local/apache2/htdocs` directory.

```bash
vi /usr/local/apache2/htdocs/index.html
```

Then, we need to add the following content to the `index.html` file.

```html
<html>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

Then, we need to save the `index.html` file.

```bash
:wq
```

Then, we need to exit the Docker container.

```bash
exit
```

Then, we need to refresh the web page.

```bash
curl http://PUBLIC_IP_ADDRESS
```

If you get the following output:

```bash
<html>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

Then, the web page has been updated successfully.

### Step 7: Stop the Docker Container

To stop the Docker container, we need to get the container ID of the Apache container.

```bash
# To get the Docker container ID
docker ps

# To stop the Apache web server
docker stop CONTAINER_ID

# Or, you can use the container name
docker stop apache
```

Or, you can stop all the Docker containers using the following command.

```bash
docker stop $(docker ps -a -q)
```

Explination:

- `docker ps` - List containers.
- `docker stop` - Stop one or more running containers.

### Step 8: Restart the Docker Container

To restart the Docker container by using the container name, we need to run the following command.

```bash
docker start apache
```

Explination:

- `docker start` - Start one or more stopped containers.

### Step 9: Remove the Docker Container

To remove the Docker container, we need to get the container ID of the Apache container.

```bash
# To get the Docker container ID
docker ps -a

# To remove the Apache web server
docker rm CONTAINER_ID

# Or, you can use the container name
docker rm apache
```

Or, you can remove all the Docker containers using the following command.

```bash
docker rm $(docker ps -a -q)
```

Explination:

- `docker ps` - List containers.
- `docker rm` - Remove one or more containers.

### Step 10: Remove the Docker Image

To remove the Docker image, we need to get the image ID of the Apache image.

```bash
# To get the Docker image ID
docker images

# To remove the Apache web server
docker rmi IMAGE_ID

# Or, you can use the image name
docker rmi httpd
```

Or, you can remove all the Docker images using the following command.

```bash
docker rmi $(docker images -q)
```

Explination:

- `docker images` - List images.
- `docker rmi` - Remove one or more images.

## Conclusion

In this post, we learned how to run an Apache web server using Docker on an AWS EC2 instance. We also learned how to update and install packages on Docker containers.

> **NOTE:** If you have any questions, please leave a comment below.

## References

- [Docker - Docker Hub](https://hub.docker.com/)
- [AWS - Amazon Linux Extras](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/amazon-linux-2-virtual-machine.html#extras)
- [AWS - Amazon Linux 2 AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/amazon-linux-2-virtual-machine.html)
- [Apache HTTP Server](https://httpd.apache.org/)
