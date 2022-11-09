---
title: 'Docker Compose'
slug: 'docker-compose'
category: 'DevOps'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.'
color: '#019BC6'
icon: 'DockerIcon'
draft: true
---

## Table of Contents

<details>

<summary>Click to expand contents</summary>

- [Introduction](#introduction)
  - [What is Docker?](#what-is-docker)
  - [What is Docker Compose?](#what-is-docker-compose)
  - [Why Docker?](#why-docker)
- [Getting Started](#getting-started)
  - [Docker Compose File](#docker-compose-file)
  - [Docker Compose Commands](#docker-compose-commands)
  - [Docker Compose Examples](#docker-compose-examples)
- [Reference](#reference)
  - [Docker Compose Create](#docker-compose-create)
  - [Docker Compose Build](#docker-compose-build)
  - [Docker Compose Ports](#docker-compose-ports)
  - [Docker Compose Environment variables](#docker-compose-environment-variables)
  - [Docker Compose Dependencies](#docker-compose-dependencies)
- [Advanced features](#advanced-features)
  - [Docker Compose User](#docker-compose-user)
  - [Docker Compose Labels](#docker-compose-labels)
  - [Docker Compose Volumes](#docker-compose-volumes)
  - [Docker Compose Devices](#docker-compose-devices)
  - [Docker Compose Capabilities](#docker-compose-capabilities)
  - [Docker Compose Hosts](#docker-compose-hosts)
  - [Docker Compose Network](#docker-compose-network)
  - [Docker Compose External network](#docker-compose-external-network)
  - [Docker Compose DNS servers](#docker-compose-dns-servers)
  - [Docker Compose External links](#docker-compose-external-links)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is Docker?

Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating-system kernel and are thus more lightweight than virtual machines.

</div>

<div class="cheat__container-content">

### What is Docker Compose?

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

</div>

<div class="cheat__container-content">

### Why Docker?

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

</div>

---

## Getting Started

<div class="cheat__container-content">

### Docker Compose File

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

```yaml
version: '3.9'
services:
  web:
    build: .
    ports:
      - '5000:5000'
    volumes:
      - .:/code
    depends_on:
      - redis
  redis:
    image: 'redis:alpine'
```

Explanation:

<details>

<summary>Click to expand explanation</summary>

- `version` - The version of the Compose file format being used. This is a required field.
- `services` - The services that make up your app. This is a required field.
- `web` - The name of the service. This is a required field.
- `build` - The build path for the service. This is a required field.
- `ports` - The port mapping for the service. This is a required field.
- `volumes` - The volume mapping for the service. This is a required field.
- `depends_on` - The service dependencies for the service. This is a required field.
- `redis` - The name of the service. This is a required field.
- `image` - The image name for the service. This is a required field.

</details>

</div>

<div class="cheat__container-content">

### Docker Compose Commands

```bash
# start and stop containers
docker-compose start
docker-compose stop

# pause and unpause services
docker-compose pause
docker-compose unpause

# build, (re)create, start, and attach to containers for a service
docker-compose up

# list containers
docker-compose ps

# down and remove containers
docker-compose down
docker-compose down --volumes

```

Explanation:

<details>

<summary>Click to expand explanation</summary>

- `docker-compose start` - Start services.
- `docker-compose stop` - Stop services.
- `docker-compose pause` - Pause services.
- `docker-compose unpause` - Unpause services.
- `docker-compose up` - Build, (re)create, start, and attach to containers for a service.
- `docker-compose ps` - List containers.
- `docker-compose down` - Stop and remove containers, networks, images, and volumes.
- `docker-compose down --volumes` - Stop and remove containers, networks, images, and volumes.

</details>

</div>

<div class="cheat__container-content">

### Docker Compose Examples

Example 1:

Create a Docker Compose, to run a React application.

```yaml
version: '3.9'
services:
  web:
    build: .
    ports:
      - '3000:3000'
    volumes:
      - .:/code
```

Run the following command to start the application:

```bash
docker-compose up
```

Example 2:

Create a Docker Compose, to run a Spring Boot Microservice, has a dependency on a PostgresSQL database, and run a Redis cache.

```yaml
version: '3.9'
services:
  web:
    build: .
    ports:
      - '8080:8080'
    volumes:
      - .:/code
    depends_on:
      - postgres
      - redis
  postgres:
    image: 'postgres:alpine'
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: 'postgres'
      POSTGRES_PASSWORD: 'postgres'
      POSTGRES_DB: 'postgres'
  redis:
    image: 'redis:alpine'
    ports:
      - '6379:6379'
```

Run the following command to start the application:

```bash
docker-compose up
```

</div>

---

## Reference

<div class="cheat__container-content">

### Docker Compose Create

```bash
docker-compose create
```

Explanation:

<details>

<summary>Click to expand explanation</summary>

- `docker-compose create` - Create containers for a service.

</details>

</div>

<div class="cheat__container-content">

### Docker Compose Build

```yaml
web:
  # build from Dockerfile
  build: .
  # Arguments to pass to the build
  args:
    APP_URL: https://example.com
```

```yaml
web:
  # build from custom Dockerfile
  build:
    context: .
    dockerfile: Dockerfile-alternate
```

```yaml
services:
  # build from image debian:nginx
  web:
    image: debian:nginx
```
