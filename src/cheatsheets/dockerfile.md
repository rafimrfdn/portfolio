---
title: 'Dockerfile'
slug: 'dockerfile'
category: 'DevOps'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.'
color: '#019BC6'
icon: 'DockerIcon'
draft: false
---

## Table of Contents

<details>

<summary>Click to expand contents</summary>

- [Introduction](#introduction)
  - [What is Docker?](#what-is-docker)
  - [What is Dockerfile?](#what-is-dockerfile)
  - [Why Docker?](#why-docker)
- [Getting Started](#getting-started)
  - [Inheritance](#inheritance)
  - [Variables](#variables)
  - [Initialization](#initialization)
  - [Run commands in strict shell mode](#run-commands-in-strict-shell-mode)
  - [Onbuild](#onbuild)
  - [Commands](#commands)
  - [Entrypoint](#entrypoint)
  - [Metadata](#metadata)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is Docker?

Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating-system kernel and are thus more lightweight than virtual machines.

</div>

<div class="cheat__container-content">

### What is Dockerfile?

A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.

</div>

<div class="cheat__container-content">

### Why Docker?

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

</div>

---

## Getting Started

<div class="cheat__container-content">

### Inheritance

```yaml
FROM <image>[:<tag>]
```

Explanation:

- `FROM` is the first instruction in a Dockerfile. It tells Docker which image you base your image on. Docker will pull the image from the Docker Hub registry if it doesn't already have it locally.
- `<image>` is the name of the image you're deriving from. This can be an official image or one from your private registry.
- `<tag>` is the tag of the image you're deriving from. If you omit the tag, Docker will use the `latest` tag by default.

Example:

```yaml
FROM ubuntu:16.04
```

</div>

<div class="cheat__container-content">

### Variables

```yaml
ARG <name>[=<default value>]
RUN mkdir /<name>
```

Explanation:

- `ARG` defines a variable that users can pass at build-time to the builder with the docker build command using the `--build-arg <varname>=<value>` flag.
- `<name>` is the name of the variable.
- `<default value>` is the default value for the variable.
- `RUN` executes any commands in a new layer on top of the current image and commits the results.
- `mkdir` creates a directory.
- `/<name>` is the path of the directory.

Example:

```yaml
ARG CONT_IMG_VER
RUN mkdir /$CONT_IMG_VER
```

</div>

<div class="cheat__container-content">

### Initialization

```yaml
RUN bundle install
WORKDIR /myapp
VOLUME /myapp
ADD . /myapp
COPY . /myapp
```

Explanation:

- `RUN` executes any commands in a new layer on top of the current image and commits the results.
- `bundle install` installs the dependencies specified in your Gemfile.
- `WORKDIR` sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY` and `ADD` instructions that follow it in the Dockerfile.
- `/myapp` is the path of the working directory.
- `VOLUME` creates a mount point with the specified name and marks it as holding externally mounted volumes from native host or other containers.
- `ADD` copies new files, directories or remote file URLs from `<src>` and adds them to the filesystem of the image at the path `<dest>`.
- `COPY` copies new files or directories from `<src>` and adds them to the filesystem of the container at the path `<dest>`.

Example:

```yaml
RUN bundle install
WORKDIR /myapp
VOLUME /myapp
ADD . /myapp
COPY . /myapp
```

</div>

<div class="cheat__container-content">

### Run commands in strict shell mode

```yaml
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
```

Explanation:

- `SHELL` sets the default shell used for the shell form of commands.
- `["/bin/bash", "-o", "pipefail", "-c"]` is the default shell used for the shell form of commands.

Example:

```yaml
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
```

</div>

<div class="cheat__container-content">

### Onbuild

```yaml
ONBUILD RUN <INSTRUCTION> <arguments>
```

Explanation:

- `ONBUILD` adds to the image a trigger instruction to be executed at a later time, when the image is used as the base for another build.
- `RUN` executes any commands in a new layer on top of the current image and commits the results.
- `<INSTRUCTION>` is the instruction to be executed at a later time.
- `<arguments>` are the arguments to be passed to the instruction.

Example:

```yaml
ONBUILD RUN bundle install
```

</div>

<div class="cheat__container-content">

### Commands

```yaml
EXPOSE 5900
CMD    ["bundle", "exec", "rails", "server"]
```

Explanation:

- `EXPOSE` informs Docker that the container listens on the specified network ports at runtime.
- `5900` is the port number.
- `CMD` provides defaults for an executing container.
- `["bundle", "exec", "rails", "server"]` is the command to be executed.

Example:

```yaml
EXPOSE 5900
CMD    ["bundle", "exec", "rails", "server"]
```

</div>

<div class="cheat__container-content">

### Entrypoint

```yaml
ENTRYPOINT ["bundle", "exec"]
ENTRYPOINT command param1 param2
ENTRYPOINT exec top -b -d 1
```

Explanation:

- `ENTRYPOINT` configures a container that will run as an executable.
- `["bundle", "exec"]` is the command to be executed.
- `command param1 param2` is the command to be executed.
- `exec top -b -d 1` is the command to be executed.

Example:

```yaml
ENTRYPOINT ["bundle", "exec"]
```

</div>

<div class="cheat__container-content">

### Metadata

```yaml
LABEL <key>=<value> <key>=<value> <key>=<value> ...
```

Explanation:

- `LABEL` adds metadata to an image.
- `<key>=<value>` is the key-value pair.

Example:

```yaml
LABEL version="1.0" Description="This is a sample image"
```

</div>
