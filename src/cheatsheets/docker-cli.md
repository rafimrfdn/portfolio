---
title: 'Docker CLI'
slug: 'docker-cli'
category: 'DevOps'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'Docker CLI is a tool for defining and running multi-container Docker applications. With CLI, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.'
color: '#019BC6'
icon: 'DockerIcon'
draft: false
---

## Table of Contents

<details>

<summary>Click to expand contents</summary>

- [Introduction](#introduction)
  - [What is Docker?](#what-is-docker)
  - [What is Docker CLI?](#what-is-docker-cli)
  - [Why Docker?](#why-docker)
  - [Docker Architecture](#docker-architecture)
- [Getting started](#getting-started)
  - [Bocker build](#docker-build)
  - [Docker run](#docker-run)
- [Manage containers](#manage-containers)
  - [Docker ps](#docker-ps)
  - [Docker create](#docker-create)
  - [Docker exec](#docker-exec)
  - [Docker start](#docker-start)
  - [Docker logs](#docker-logs)
- [Images](#images)
  - [Docker images](#docker-images)
  - [Docker pull](#docker-pull)
  - [Docker push](#docker-push)
  - [Docker rmi](#docker-rmi)
  - [Docker tag](#docker-tag)
- [Clean up](#clean-up)
  - [Clean all](#clean-all)
  - [Clean containers](#clean-containers)
  - [Clean images](#clean-images)
  - [Clean volumes](#clean-volumes)
  - [Clean networks](#clean-networks)

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

## Getting started

<div class="cheat__container-content">

### Docker build

```yaml
docker build [options] .
  -t <name>[:<tag>] # Name and optionally a tag in the ‘name:tag’ format
  -f <dockerfile> # Name of the Dockerfile (Default is ‘PATH/Dockerfile’)
  --no-cache # Do not use cache when building the image
  --pull # Always attempt to pull a newer version of the image
  --rm # Remove intermediate containers after a successful build (default true)
  --build-arg <varname>=<value> # Set build-time variables
```

Explanation:

- `docker build` command builds Docker images from a Dockerfile and a “context”. A build’s context is the set of files located in the specified PATH or URL. The build process can refer to any of the files in the context. The Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.
- `docker build -t` command is used to tag an image in the ‘name:tag’ format. If you omit the tag the builder uses the ‘latest’ as a default tag.
- `docker build -f` command is used to specify name of the Dockerfile (Default is ‘PATH/Dockerfile’).
- `docker build --no-cache` command is used to do not use cache when building the image.
- `docker build --pull` command is used to always attempt to pull a newer version of the image.
- `docker build --rm` command is used to remove intermediate containers after a successful build (default true).
- `docker build --build-arg` command is used to set build-time variables.

Example:

Build Docker image from Dockerfile in current directory and tag it as `myimage:latest`:

```yaml
docker build .
-t myimage:latest
-f Dockerfile
--no-cache
--pull
--rm
--build-arg NODE_ENV=production
```

</div>

<div class="cheat__container-content">

### Docker run

```yaml
docker run [options] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
  -d # Run container in background and print container ID
  -it # Keep STDIN open even if not attached and allocate a pseudo-TTY
  -p # Publish a container’s port(s) to the host
  -v # Bind mount a volume
  --name # Assign a name to the container
  --rm # Automatically remove the container when it exits
  --env # Set environment variables
  --env-file # Read in a file of environment variables
```

Explanation:

- `docker run` command is used to run a command in a new container.
- `IMAGE[:TAG|@DIGEST]` is the name of the image you want to run. The image can be a name or ID. If you omit the tag the builder uses the ‘latest’ as a default tag.
- `COMMAND` is the command you want to run in the container.
- `docker run -d` command is used to run container in background and print container ID.
- `docker run -it` command is used to keep STDIN open even if not attached and allocate a pseudo-TTY.
- `docker run -p` command is used to publish a container’s port(s) to the host.
- `docker run -v` command is used to bind mount a volume.
- `docker run --name` command is used to assign a name to the container.
- `docker run --rm` command is used to automatically remove the container when it exits.
- `docker run --env` command is used to set environment variables.
- `docker run --env-file` command is used to read in a file of environment variables.

Example:

Run Docker container from `myimage:latest` image and tag it as `mycontainer`:

```yaml
docker run
-d myimage:latest
-it myimage:latest
-p 8080:80
-v /home/user/myapp:/app
--name mycontainer
--rm
--env NODE_ENV=production
--env-file .env
```

</div>

---

## Manage containers

<div class="cheat__container-content">

### Docker ps

```yaml
docker ps [options]
  -a # Show all containers (default shows just running)
  -f # Filter output based on conditions provided
  -n # Show n last created containers (includes all states)
  -l # Show the latest created container (includes all states)
  -q # Only display container IDs
```

Explanation:

- `docker ps` command is used to list containers.
- `docker ps -a` command is used to show all containers (default shows just running).
- `docker ps -f` command is used to filter output based on conditions provided.
- `docker ps -n` command is used to show n last created containers (includes all states).
- `docker ps -l` command is used to show the latest created container (includes all states).
- `docker ps -q` command is used to only display container IDs.

Example:

List all containers:

```yaml
docker ps -a
```

</div>

<div class="cheat__container-content">

### Docker create

```yaml
docker create [options] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
  -a # Attach to STDIN, STDOUT or STDERR
  -i # Keep STDIN open even if not attached
  -t # Allocate a pseudo-TTY
  -p # Publish a container’s port(s) to the host
  -P # Publish all exposed ports to random ports
  -v # Bind mount a volume
  -e # Set environment variables
  --name # Assign a name to the container
  --env-file # Read in a file of environment variables
  --label # Add metadata to a container (e.g., --label com.example.key=value)
```

Explanation:

- `docker create` command is used to create a new container but does not start it.
- `IMAGE[:TAG|@DIGEST]` is the name of the image you want to run. The image can be a name or ID. If you omit the tag the builder uses the ‘latest’ as a default tag.
- `COMMAND` is the command you want to run in the container.
- `docker create -a` command is used to attach to STDIN, STDOUT or STDERR.
- `docker create -i` command is used to keep STDIN open even if not attached.
- `docker create -t` command is used to allocate a pseudo-TTY.
- `docker create -p` command is used to publish a container’s port(s) to the host.
- `docker create -P` command is used to publish all exposed ports to random ports.
- `docker create -v` command is used to bind mount a volume.
- `docker create -e` command is used to set environment variables.
- `docker create --name` command is used to assign a name to the container.
- `docker create --env-file` command is used to read in a file of environment variables.
- `docker create --label` command is used to add metadata to a container (e.g., --label com.example.key=value).

Example:

Create Docker container from `myimage:latest` image and tag it as `mycontainer`:

```yaml
docker create
-a myimage:latest
-i myimage:latest
-t myimage:latest
-p 8080:80
-P myimage:latest
-v /home/user/myapp:/app
-e NODE_ENV=production
--name mycontainer
--env-file .env
--label com.example.key=value
```

</div>

<div class="cheat__container-content">

### Docker exec

```yaml
docker exec [options] CONTAINER COMMAND [ARG...]
  -d # Detached mode: run command in the background
  -i # Keep STDIN open even if not attached
  -t # Allocate a pseudo-TTY
  -u # Username or UID (format: <name|uid>[:<group|gid>])
  -w # Working directory inside the container
  --privileged # Give extended privileges to the command
```

Explanation:

- `docker exec` command is used to run a command in a running container.
- `CONTAINER` is the name or ID of the container.
- `COMMAND` is the command you want to run in the container.
- `docker exec -d` command is used to detached mode: run command in the background.
- `docker exec -i` command is used to keep STDIN open even if not attached.
- `docker exec -t` command is used to allocate a pseudo-TTY.
- `docker exec -u` command is used to username or UID (format: <name|uid>[:<group|gid>]).
- `docker exec -w` command is used to working directory inside the container.
- `docker exec --privileged` command is used to give extended privileges to the command.

Example:

Run `ls` command in `mycontainer` container:

```yaml
docker exec mycontainer ls
```

</div>

<div class="cheat__container-content">

### Docker start

```yaml
docker start [options] CONTAINER [CONTAINER...]
  -a # Attach STDOUT/STDERR and forward signals
  -i # Attach container’s STDIN
```

Explanation:

- `docker start` command is used to start one or more stopped containers.
- `CONTAINER` is the name or ID of the container.
- `docker start -a` command is used to attach STDOUT/STDERR and forward signals.
- `docker start -i` command is used to attach container’s STDIN.

Example:

Start `mycontainer` container:

```yaml
docker start mycontainer
```

</div>

<div class="cheat__container-content">

### Docker logs

```yaml
docker logs [options] CONTAINER
  -f # Follow log output
  -t # Show timestamps
  --tail # Number of lines to show from the end of the logs
```

Explanation:

- `docker logs` command is used to fetch the logs of a container.
- `CONTAINER` is the name or ID of the container.
- `docker logs -f` command is used to follow log output.
- `docker logs -t` command is used to show timestamps.
- `docker logs --tail` command is used to number of lines to show from the end of the logs.

Example:

Show logs of `mycontainer` container:

```yaml
docker logs mycontainer
```

</div>

---

## Images

<div class="cheat__container-content">

### Docker images

```yaml
docker images [options] [REPOSITORY[:TAG]]
  -a # Show all images (default hides intermediate images)
  -q # Only show numeric IDs
```

Explanation:

- `docker images` command is used to list images.
- `REPOSITORY[:TAG]` is the name of the image you want to run. The image can be a name or ID. If you omit the tag the builder uses the ‘latest’ as a default tag.
- `docker images -a` command is used to show all images (default hides intermediate images).
- `docker images -q` command is used to only show numeric IDs.

Example:

List all images:

```yaml
docker images -a
```

</div>

<div class="cheat__container-content">

### Docker pull

```yaml
docker pull [options] NAME[:TAG|@DIGEST]
-a # Download all tagged images in the repository
```

Explanation:

- `docker pull` command is used to pull an image or a repository from a registry.
- `NAME[:TAG|@DIGEST]` is the name of the image you want to run. The image can be a name or ID. If you omit the tag the builder uses the ‘latest’ as a default tag.
- `docker pull -a` command is used to download all tagged images in the repository.

Example:

Pull `httpd` image:

```yaml
docker pull httpd
```

</div>

<div class="cheat__container-content">

### Docker push

```yaml
docker push [options] NAME[:TAG]
```

Explanation:

- `docker push` command is used to push an image or a repository to a registry.
- `NAME[:TAG]` is the name of the image you want to run. The image can be a name or ID. If you omit the tag the builder uses the ‘latest’ as a default tag.

Example:

Push `httpd` image:

```yaml
docker push httpd
```

</div>

<div class="cheat__container-content">

### Docker rmi

```yaml
docker rmi [options] IMAGE [IMAGE...]
-f # Force removal of the image
```

Explanation:

- `docker rmi` command is used to remove one or more images.
- `IMAGE` is the name or ID of the image.
- `docker rmi -f` command is used to force removal of the image.

Example:

Remove `httpd` image:

```yaml
docker rmi httpd
```

</div>

<div class="cheat__container-content">

### Docker tag

```yaml
docker tag [options] SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
```

Explanation:

- `docker tag` command is used to create a tag TARGET_IMAGE that refers to SOURCE_IMAGE.
- `SOURCE_IMAGE[:TAG]` is the name of the image you want to run. The image can be a name or ID. If you omit the tag the builder uses the ‘latest’ as a default tag.
- `TARGET_IMAGE[:TAG]` is the name of the image you want to run. The image can be a name or ID. If you omit the tag the builder uses the ‘latest’ as a default tag.

Example:

Tag `httpd` image:

```yaml
docker tag httpd httpd:latest
```

</div>

---

## Clean up

<div class="cheat__container-content">

### Clean all

```yaml
docker system prune -a
```

Explanation:

- `docker system prune -a` command is used to remove all unused data.

Example:

Clean all:

```yaml
docker system prune -a
```

</div>

<div class="cheat__container-content">

### Clean containers

```yaml
# stop all running containers
docker stop $(docker ps -a -q)

# remove all containers
docker rm $(docker ps -a -q)
```

Explanation:

- `docker stop $(docker ps -a -q)` command is used to stop all running containers.
- `docker rm $(docker ps -a -q)` command is used to remove all containers.

Example:

Clean containers:

```yaml
# stop all running containers
docker stop $(docker ps -a -q)

# remove all containers
docker rm $(docker ps -a -q)
```

</div>

<div class="cheat__container-content">

### Clean images

```yaml
# remove all dangling images
docker image prune
-a # Remove all unused images not just dangling ones
```

Explanation:

- `docker image prune` command is used to remove all unused images not just dangling ones.
- `docker image prune -a` command is used to remove all unused images not just dangling ones.

Example:

Clean images:

```yaml
# remove all dangling images
docker image prune
-a # Remove all unused images not just dangling ones
```

</div>

<div class="cheat__container-content">

### Clean volumes

```yaml
# remove all unused volumes
docker volume prune
-f # Do not prompt for confirmation
```

Explanation:

- `docker volume prune` command is used to remove all unused volumes not just dangling ones.
- `docker volume prune -f` command is used to remove all unused volumes not just dangling ones.

Example:

Clean volumes:

```yaml
# remove all unused volumes
docker volume prune
-f # Do not prompt for confirmation
```

</div>

<div class="cheat__container-content">

### Clean networks

```yaml
# remove all unused networks
docker network prune
-f # Do not prompt for confirmation
```

Explanation:

- `docker network prune` command is used to remove all unused networks not just dangling ones.
- `docker network prune -f` command is used to remove all unused networks not just dangling ones.

Example:

Clean networks:

```yaml
# remove all unused networks
docker network prune
-f # Do not prompt for confirmation
```

</div>
