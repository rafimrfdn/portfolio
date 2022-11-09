---
title: 'Docker CLI'
slug: 'docker-cli'
category: 'DevOps'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'Docker CLI is a tool for defining and running multi-container Docker applications. With CLI, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.'
color: '#019BC6'
icon: 'DockerIcon'
draft: true
---

## Table of Contents

<details>

<summary>Click to expand contents</summary>

- [Introduction](#introduction)
  - [What is Docker?](#what-is-docker)
  - [What is Docker CLI?](#what-is-docker-cli)
  - [What is Dockerfile?](#what-is-dockerfile)
  - [Why Docker?](#why-docker)
  - [Docker Architecture](#docker-architecture)
- [Getting started](#getting-started)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is Docker?

Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating-system kernel and are thus more lightweight than virtual machines.

</div>

<div class="cheat__container-content">

### What is Docker CLI?

Docker CLI is a command line interface for Docker. It allows you to run Docker commands from the terminal. Docker CLI is a client-server application with the Docker daemon as the server. The Docker CLI uses the Docker API to interact with the daemon. The Docker CLI is the primary way that many Docker users interact with Docker.

</div>

<div class="cheat__container-content">

### Why Docker?

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

</div>

<div class="cheat__container-content">

### Docker Architecture

Docker is a client-server application with the Docker daemon as the server. The Docker CLI uses the Docker API to interact with the daemon. The Docker CLI is the primary way that many Docker users interact with Docker. The Docker daemon creates and manages Docker objects. A Docker object can be an image, container, network, or volume. The Docker daemon also listens for Docker API requests and manages Docker objects. The Docker client is the primary way that many Docker users interact with Docker. When you use commands such as docker run, the client sends these commands to dockerd, which carries them out. The Docker client can communicate with more than one daemon.

</div>

---
