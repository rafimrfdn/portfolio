---
title: 'Docker'
slug: 'docker'
category: 'DevOps'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.'
color: '#019BC6'
icon: 'DockerIcon'
---

## Table of Contents

<details>

<summary>Click to expand contents</summary>

- [Introduction](#introduction)
  - [What is Docker?](#what-is-docker)
  - [What is Docker CLI?](#what-is-docker-cli)
  - [What is Docker Compose?](#what-is-docker-compose)
  - [What is Docker Swarm?](#what-is-docker-swarm)
  - [What is Docker Stack?](#what-is-docker-stack)
  - [What is Docker Machine?](#what-is-docker-machine)
  - [What is Docker Node?](#what-is-docker-node)
  - [What is Docker Registry?](#what-is-docker-registry)
  - [What is Docker Hub?](#what-is-docker-hub)
  - [What is Docker Image?](#what-is-docker-image)
  - [What is Docker Container?](#what-is-docker-container)
  - [What is Dockerfile?](#what-is-dockerfile)
  - [Why Docker?](#why-docker)
  - [Docker Architecture](#docker-architecture)
- [Getting started](#getting-started)
  - [Docker CLI Commands](#docker-cli-commands)
  - [Docker CLI Options](#docker-cli-options)
  - [Docker CLI Build](#docker-cli-build)
  - [Docker CLI Run](#docker-cli-run)
- [Docker Manage containers](#docker-manage-containers)
  - [Docker Create](#docker-create)
  - [Docker PS](#docker-ps)
  - [Docker Exec](#docker-exec)
  - [Docker Start](#docker-start)
  - [Docker Stop](#docker-stop)
  - [Docker Restart](#docker-restart)
  - [Docker Logs](#docker-logs)
  - [Docker Kill](#docker-kill)
  - [Docker Pause](#docker-pause)
  - [Docker Unpause](#docker-unpause)
  - [Docker Attach](#docker-attach)
  - [Docker Wait](#docker-wait)
  - [Docker Remove](#docker-remove)
- [Docker Manage Images](#docker-manage-images)
  - [Docker Images](#docker-images)
  - [Docker Pull](#docker-pull)
  - [Docker Push](#docker-push)
  - [Docker Search](#docker-search)
  - [Docker Tag](#docker-tag)
  - [Docker Rmi](#docker-rmi)
  - [Docker History](#docker-history)
  - [Docker Save](#docker-save)
  - [Docker Load](#docker-load)
  - [Docker Import](#docker-import)
  - [Docker Export](#docker-export)
- [Docker Manage Volumes](#docker-manage-volumes)
  - [Docker Volumes](#docker-volumes)
  - [Docker Volume Create](#docker-volume-create)
  - [Docker Volume Inspect](#docker-volume-inspect)
  - [Docker Volume List](#docker-volume-list)
  - [Docker Volume Remove](#docker-volume-remove)
  - [Docker Volume Prune](#docker-volume-prune)
- [Docker Manage Networks](#docker-manage-networks)
  - [Docker Networks](#docker-networks)
  - [Docker Network Create](#docker-network-create)
  - [Docker Network Inspect](#docker-network-inspect)
  - [Docker Network List](#docker-network-list)
  - [Docker Network Connect](#docker-network-connect)
  - [Docker Network Disconnect](#docker-network-disconnect)
  - [Docker Network Remove](#docker-network-remove)
  - [Docker Network Prune](#docker-network-prune)
- [Docker Manage Docker Compose](#docker-manage-docker-compose)
  - [Docker Compose](#docker-compose)
  - [Docker Compose Build](#docker-compose-build)
  - [Docker Compose Config](#docker-compose-config)
  - [Docker Compose Create](#docker-compose-create)
  - [Docker Compose Down](#docker-compose-down)
  - [Docker Compose Up](#docker-compose-up)
  - [Docker Compose Start](#docker-compose-start)
  - [Docker Compose Stop](#docker-compose-stop)
  - [Docker Compose Restart](#docker-compose-restart)
  - [Docker Compose Push](#docker-compose-push)
  - [Docker Compose Pull](#docker-compose-pull)
  - [Docker Compose Logs](#docker-compose-logs)
  - [Docker Compose Kill](#docker-compose-kill)
  - [Docker Compose Exec](#docker-compose-exec)
  - [Docker Compose Ps](#docker-compose-ps)
  - [Docker Compose Port](#docker-compose-port)
  - [Docker Compose Top](#docker-compose-top)
  - [Docker Compose Events](#docker-compose-events)
  - [Docker Compose Scale](#docker-compose-scale)
- [Docker Manage Docker Swarm](#docker-manage-docker-swarm)
  - [Docker Swarm Init](#docker-swarm-init)
  - [Docker Swarm Join](#docker-swarm-join)
  - [Docker Swarm Join Token](#docker-swarm-join-token)
  - [Docker Swarm Leave](#docker-swarm-leave)
  - [Docker Swarm Update](#docker-swarm-update)
- [Docker Manage Docker Stack](#docker-manage-docker-stack)
  - [Docker Stack Deploy](#docker-stack-deploy)
  - [Docker Stack List](#docker-stack-list)
  - [Docker Stack Ps](#docker-stack-ps)
  - [Docker Stack Remove](#docker-stack-remove)
  - [Docker Stack Services](#docker-stack-services)
  - [Docker Stack Rm](#docker-stack-rm)
- [Docker Manage Docker Machine](#docker-manage-docker-machine)
  - [Docker Machine Create](#docker-machine-create)
  - [Docker Machine Inspect](#docker-machine-inspect)
  - [Docker Machine List](#docker-machine-list)
  - [Docker Machine Regenerate Certs](#docker-machine-regenerate-certs)
  - [Docker Machine Env](#docker-machine-env)
  - [Docker Machine SSH](#docker-machine-ssh)
  - [Docker Machine Start](#docker-machine-start)
  - [Docker Machine Stop](#docker-machine-stop)
  - [Docker Machine Restart](#docker-machine-restart)
  - [Docker Machine Upgrade](#docker-machine-upgrade)
- [Docker Manage Docker Node](#docker-manage-docker-node)
  - [Docker Node Inspect](#docker-node-inspect)
  - [Docker Node List](#docker-node-list)
  - [Docker Node Ps](#docker-node-ps)
  - [Docker Node Update](#docker-node-update)
- [Docker Manage Docker Registry](#docker-manage-docker-registry)
  - [Docker Registry Login](#docker-registry-login)
  - [Docker Registry Logout](#docker-registry-logout)
  - [Docker Registry Inspect](#docker-registry-inspect)
  - [Docker Registry List](#docker-registry-list)
  - [Docker Registry Create](#docker-registry-create)
  - [Docker Registry Update](#docker-registry-update)
- [Docker Manage Docker Hub](#docker-manage-docker-hub)
  - [Docker Hub Login](#docker-hub-login)
  - [Docker Hub Logout](#docker-hub-logout)
  - [Docker Hub Search](#docker-hub-search)
  - [Docker Hub Pull](#docker-hub-pull)
  - [Docker Hub Push](#docker-hub-push)
  - [Docker Hub Create](#docker-hub-create)
  - [Docker Hub Update](#docker-hub-update)
  - [Docker Hub Delete](#docker-hub-delete)
  - [Docker Hub Rm](#docker-hub-rm)
  - [Docker Hub Version](#docker-hub-version)
- [Docker Mahage Docker Image](#docker-mahage-docker-image)
  - [Docker Image Build](#docker-image-build)
  - [Docker Image History](#docker-image-history)
  - [Docker Image Import](#docker-image-import)
  - [Docker Image Load](#docker-image-load)
  - [Docker Image Pull](#docker-image-pull)
  - [Docker Image Push](#docker-image-push)
  - [Docker Image Save](#docker-image-save)
  - [Docker Image Tag](#docker-image-tag)
  - [Docker Image Inspect](#docker-image-inspect)
  - [Docker Image List](#docker-image-list)
  - [Docker Image Prune](#docker-image-prune)
  - [Docker Image Remove](#docker-image-remove)
  - [Docker Image Rmi](#docker-image-rmi)
  - [Docker Image Version](#docker-image-version)
- [Docker Manage Docker Container](#docker-manage-docker-container)
  - [Docker Container Create](#docker-container-create)
  - [Docker Container Run](#docker-container-run)
  - [Docker Container Start](#docker-container-start)
  - [Docker Container Stop](#docker-container-stop)
  - [Docker Container Restart](#docker-container-restart)
  - [Docker Container Kill](#docker-container-kill)
  - [Docker Container Pause](#docker-container-pause)
  - [Docker Container Unpause](#docker-container-unpause)
  - [Docker Container Wait](#docker-container-wait)
  - [Docker Container Remove](#docker-container-remove)
  - [Docker Container Rm](#docker-container-rm)
  - [Docker Container Rename](#docker-container-rename)
  - [Docker Container Update](#docker-container-update)
  - [Docker Container Exec](#docker-container-exec)
  - [Docker Container Attach](#docker-container-attach)
  - [Docker Container Top](#docker-container-top)
  - [Docker Container Inspect](#docker-container-inspect)
  - [Docker Container List](#docker-container-list)
  - [Docker Container Logs](#docker-container-logs)
  - [Docker Container Stats](#docker-container-stats)
  - [Docker Container Version](#docker-container-version)
- [Docker Manage Dockerfiles](#docker-manage-dockerfiles)
  - [Docker dockerfile](#docker-dockerfile)
  - [Docker dockerignore](#docker-dockerignore)
- [Docker Clean up](#docker-clean-up)
  - [Clean all](#clean-all)
  - [Clean Volumes](#clean-volumes)
  - [Clean Containers](#clean-containers)
  - [Clean Images](#clean-images)
  - [Clean Networks](#clean-networks)
  - [Clean Docker](#clean-docker)

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

### What is Docker Compose?

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

</div>

<div class="cheat__container-content">

### What is Docker Swarm?

Docker Swarm is a native clustering tool for Docker. It turns a pool of Docker hosts into a single, virtual Docker host. Because Docker Swarm serves the standard Docker API, any tool that already communicates with a Docker daemon can use Swarm to transparently scale to multiple hosts: Compose, Swarm mode, Kubernetes, and any other tool that already speaks Docker’s API.

</div>

<div class="cheat__container-content">

### What is Docker Stack?

Docker Stack is a tool for defining and running multi-container Docker applications. With Stack, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

</div>

<div class="cheat__container-content">

### What is Docker Machine?

Docker Machine is a tool that lets you install Docker Engine on virtual hosts, and manage the hosts with docker-machine commands. You can use Machine to create Docker hosts on your local Mac or Windows box, on your company network, in your data center, or on cloud providers like Azure, AWS, or Digital Ocean.

</div>

<div class="cheat__container-content">

### What is Docker Node?

Docker Node is a tool that lets you install Docker Engine on virtual hosts, and manage the hosts with docker-machine commands. You can use Machine to create Docker hosts on your local Mac or Windows box, on your company network, in your data center, or on cloud providers like Azure, AWS, or Digital Ocean.

</div>

<div class="cheat__container-content">

### What is Docker Registry?

A Docker registry is a storage and content delivery system, holding named Docker images, available in different tagged versions. The registry is the central service that stores and lets you distribute Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default.

</div>

<div class="cheat__container-content">

### What is Docker Hub?

Docker Hub is a cloud-based registry service which allows you to link to code repositories, build your images and test them, store automated builds, and link to cloud services.

</div>

<div class="cheat__container-content">

### What is Docker Image?

A Docker image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings. Available for both Linux and Windows-based applications, containerized software will always run the same, regardless of the environment. Containers isolate software from its surroundings, for example differences between development and staging environments and help reduce conflicts between teams running different software on the same infrastructure.

</div>

<div class="cheat__container-content">

### What is Docker Container?

A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings. Available for both Linux and Windows-based applications, containerized software will always run the same, regardless of the environment. Containers isolate software from its surroundings, for example differences between development and staging environments and help reduce conflicts between teams running different software on the same infrastructure.

</div>

<div class="cheat__container-content">

### What is Dockerfile?

A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.

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

### Docker CLI Commands

| Command          | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| `docker build`   | Build an image from a Dockerfile                                     |
| `docker run`     | Run a command in a new container                                     |
| `docker create`  | Create a new container                                               |
| `docker exec`    | Run a command in a running container                                 |
| `docker ps`      | List containers                                                      |
| `docker start`   | Start one or more stopped containers                                 |
| `docker stop`    | Stop one or more running containers                                  |
| `docker restart` | Restart one or more containers                                       |
| `docker kill`    | Kill one or more running containers                                  |
| `docker rm`      | Remove one or more containers                                        |
| `docker rmi`     | Remove one or more images                                            |
| `docker logs`    | Fetch the logs of a container                                        |
| `docker cp`      | Copy files/folders between a container and the local filesystem      |
| `docker search`  | Search the Docker Hub for images                                     |
| `docker pull`    | Pull an image or a repository from a registry                        |
| `docker push`    | Push an image or a repository to a registry                          |
| `docker login`   | Log in to a Docker registry                                          |
| `docker logout`  | Log out from a Docker registry                                       |
| `docker version` | Show the Docker version information                                  |
| `docker info`    | Display system-wide information                                      |
| `docker inspect` | Return low-level information on Docker objects                       |
| `docker stats`   | Display a live stream of container(s) resource usage statistics      |
| `docker top`     | Display the running processes of a container                         |
| `docker tag`     | Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE                |
| `docker pause`   | Pause all processes within one or more containers                    |
| `docker unpause` | Unpause all processes within one or more containers                  |
| `docker wait`    | Block until one or more containers stop, then print their exit codes |
| `docker rename`  | Rename a container                                                   |
| `docker network` | Manage Docker networks                                               |
| `docker volume`  | Manage Docker volumes                                                |
| `docker system`  | Manage Docker                                                        |
| `docker service` | Manage services                                                      |

</div>

<div class="cheat__container-content">

### Docker CLI Options

| Option              | Description                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| `--help`            | Print usage                                                               |
| `--version`         | Print version information and quit                                        |
| `-D`, `--debug`     | Enable debug mode                                                         |
| `-H`, `--host list` | Daemon socket(s) to connect to                                            |
| `-l`, `--log-level` | Set the logging level (`debug` \| `info` \| `warn` \| `error` \| `fatal`) |
| `--tls`             | Use TLS; implied by `--tlsverify`                                         |
| `--tlscacert`       | Trust certs signed only by this CA                                        |
| `--tlscert`         | Path to TLS certificate file                                              |
| `--tlskey`          | Path to TLS key file                                                      |
| `--tlsverify`       | Use TLS and verify the remote                                             |
| `--config`          | Location of client config files                                           |

</div>

<div class="cheat__container-content">

### Docker CLI Build

```yaml
docker build [OPTIONS] .
  -t, --tag list               # Name and optionally a tag in the 'name:tag' format
  --build-arg list             # Set build-time variables
  --cache-from strings         # Images to consider as cache sources
  --cgroup-parent string       # Optional parent cgroup for the container
  --compress                   # Compress the build context using gzip
  --cpu-period int             # Limit the CPU CFS (Completely Fair Scheduler) period
  --cpu-quota int              # Limit the CPU CFS (Completely Fair Scheduler) quota
  --cpu-shares int             # CPU shares (relative weight)
  --cpuset-cpus string         # CPUs in which to allow execution (0-3, 0,1)
  --cpuset-mems string         # MEMs in which to allow execution (0-3, 0,1)
  --disable-content-trust      # Skip image verification (default true)
  --file string                # Name of the Dockerfile (Default is 'PATH/Dockerfile')
  --force-rm                   # Always remove intermediate containers
  --iidfile string             # Write the image ID to the file
  --isolation string           # Container isolation technology
  --label list                 # Set metadata for an image
  --memory bytes               # Memory limit
  --memory-swap bytes          # Swap limit equal to memory plus swap: '-1' to enable unlimited swap
  --network string             # Set the networking mode for the RUN instructions during build (default "default")
  --no-cache                   # Do not use cache when building the image
  --pull                       # Always attempt to pull a newer version of the image
  --quiet, -q                  # Suppress the build output and print image ID on success
  --rm                         # Remove intermediate containers after a successful build (default true)
  --security-opt strings       # Security options
  --shm-size bytes             # Size of /dev/shm
  --squash                     # Squash newly built layers into a single new layer
  --ssh default                # SSH agent socket or keys to expose to the build (format: default|<id>[=<socket>|<key>[,<key>]])
  --stream                     # Stream attaches to server to negotiate build context (default true)
  --target string              # Set the target build stage to build.
  --ulimit ulimit              # Ulimit options (default [])
```

</div>

<div class="cheat__container-content">

### Docker CLI Run

```yaml
docker run [options] IMAGE
  -a, --attach list            # Attach to STDIN, STDOUT or STDERR
  --add-host list              # Add a custom host-to-IP mapping (host:ip)
  --blkio-weight uint16        # Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)
  --blkio-weight-device list   # Block IO weight (relative device weight) (default [])
  --cap-add list               # Add Linux capabilities
  --cap-drop list              # Drop Linux capabilities
  --cgroup-parent string       # Optional parent cgroup for the container
  --cidfile string             # Write the container ID to the file
  --cpu-shares int             # CPU shares (relative weight)
  --cpus decimal               # Number of CPUs
  --cpuset-cpus string         # CPUs in which to allow execution (0-3, 0,1)
  --cpuset-mems string         # MEMs in which to allow execution (0-3, 0,1)
  --detach, -d                 # Run container in background and print container ID
  --device list                # Add a host device to the container
  --device-cgroup-rule list    # Add a rule to the cgroup allowed devices list
  --device-read-bps list       # Limit read rate (bytes per second) from a device (default [])
  --device-read-iops list      # Limit read rate (IO per second) from a device (default [])
  --device-write-bps list      # Limit write rate (bytes per second) to a device (default [])
  --device-write-iops list     # Limit write rate (IO per second) to a device (default [])
  --disable-content-trust      # Skip image verification (default true)
  --dns list                   # Set custom DNS servers
  --dns-option list            # Set DNS options
  --dns-search list            # Set custom DNS search domains
  --entrypoint string          # Overwrite the default ENTRYPOINT of the image
  --env list                   # Set environment variables
  --env-file list              # Read in a file of environment variables
  --expose list                # Expose a port or a range of ports
  --group-add list             # Add additional groups to join
  --health-cmd string          # Command to run to check health
```

</div>

---

## Docker Manage containers

<div class="cheat__container-content">

### Docker Create

```yaml
docker create [options] IMAGE
  -a, --attach                  # Attach to STDIN, STDOUT or STDERR
  -i, --interactive            # Keep STDIN open even if not attached
  -t, --tty                    # Allocate a pseudo-TTY
  --name string                # Assign a name to the container
  -p, --publish 6379:6379      # Publish a container's port(s) to the host
  --link container:alias       # Add link to another container
  -v, --volume /tmp:/tmp       # Bind mount a volume
  -e, --env KEY=VAL            # Set environment variables
```

Example:

Create a container named `redis` from the `redis` image and publish port 6379 on the host to port 6379 in the container.

```yaml
docker create --name app_redis \
-p 6379:6379 \
redis:latest \
--requirepass "password" \
--appendonly yes
```

</div>

<div class="cheat__container-content">

### Docker PS

```yaml
docker ps [options]
  -a, --all             # Show all containers (default shows just running)
  -f, --filter filter   # Filter output based on conditions provided
  -n, --last int        # Show n last created containers (includes all states) (default -1)
  -l, --latest          # Show the latest created container (includes all states)
  -q, --quiet           # Only display numeric IDs
```

</div>

<div class="cheat__container-content">

### Docker Exec

```yaml
docker exec [options] CONTAINER COMMAND [ARG...]
  -d, --detach               # Detached mode: run command in the background
  -i, --interactive          # Keep STDIN open even if not attached
  -t, --tty                  # Allocate a pseudo-TTY
  --detach-keys string       # Override the key sequence for detaching a container
  --privileged               # Give extended privileges to the command
  --user string              # Run as specified username or uid
  --workdir string           # Working directory inside the container
```

Example:

```yaml
docker exec -it app_redis redis-cli -a password
```

</div>

<div class="cheat__container-content">

### Docker Start

```yaml
docker start [options] CONTAINER [CONTAINER...]
  -a, --attach              # Attach STDOUT/STDERR and forward signals
  -i, --interactive         # Attach container's STDIN
```

</div>

<div class="cheat__container-content">

### Docker Stop

```yaml
docker stop [options] CONTAINER [CONTAINER...]
-t, --time int # Seconds to wait for stop before killing it (default 10)
```

</div>

<div class="cheat__container-content">

### Docker Restart

```yaml
docker restart [options] CONTAINER [CONTAINER...]
-t, --time int # Seconds to wait for stop before killing it (default 10)
```

</div>

<div class="cheat__container-content">

### Docker Logs

```yaml
docker logs [options] CONTAINER
  -f, --follow     # Follow log output
  --since string   # Show logs since timestamp (e.g. 2013-01-02T13:23:37) or relative (e.g. 42m for 42 minutes)
  --tail string    # Number of lines to show from the end of the logs (default "all")
  -t, --timestamps # Show timestamps
  --until string   # Show logs before a timestamp (e.g. 2013-01-02T13:23:37) or relative (e.g. 42m for 42 minutes)
```

</div>

<div class="cheat__container-content">

### Docker Kill

```yaml
docker kill [options] CONTAINER [CONTAINER...]
-s, --signal string # Signal to send to the container (default "KILL")
```

</div>

<div class="cheat__container-content">

### Docker Pause

```yaml
docker pause CONTAINER [CONTAINER...]
  -a, --all           # Pause all running containers
  -f, --force         # Force pause a running container (uses SIGKILL)
  -l, --latest        # Pause the latest container created
  -n, --last int      # Pause n last created containers
  -q, --quiet         # Only display numeric IDs
  -s, --signal string # Signal to send to the container (default "KILL")
  -t, --timeout int   # Seconds to wait for stop before killing it (default 10)
  -v, --volumes       # Also pause volumes
```

</div>

<div class="cheat__container-content">

### Docker Unpause

```yaml
docker unpause CONTAINER [CONTAINER...]
  -a, --all         # Pause all running containers
  -f, --force       # Force pause of a running container (uses SIGKILL)
  -l, --latest      # Act on the latest container created
  -n, --last int    # Act on n last created containers
  -q, --quiet       # Only display numeric IDs
  -s, --size        # Display total file sizes
  -v, --verbose     # Show all
  --no-trunc        # Don't truncate output
  --format string   # Pretty-print containers using a Go template
```

</div>

<div class="cheat__container-content">

### Docker Attach

```yaml
docker attach [options] CONTAINER
  -a, --detach-keys string   # Override the key sequence for detaching a container
  -d, --detach               # Detached mode: run command in the background
  -i, --interactive          # Keep STDIN open even if not attached
  -l, --logs                 # View live logs for the container
  -s, --sig-proxy            # Proxy all received signals to the process (default true)
  -t, --tty                  # Allocate a pseudo-TTY
```

</div>

<div class="cheat__container-content">

### Docker Wait

```yaml
docker wait CONTAINER [CONTAINER...]
  -f, --filter filter   # Filter output based on conditions provided
  -n, --last int        # Show n last created containers (includes all states) (default -1)
  -l, --latest          # Show the latest created container (includes all states)
  -q, --quiet           # Only display numeric IDs
```

</div>

<div class="cheat__container-content">

### Docker Remove

```yaml
docker rm [options] CONTAINER [CONTAINER...]
  -f, --force     # Force the removal of a running container (uses SIGKILL)
  -l, --link      # Remove the specified link
  -v, --volumes   # Remove the volumes associated with the container
```

</div>

---

## Docker Manage Images

<div class="cheat__container-content">

### Docker Images

```yaml
docker images [options] [REPOSITORY[:TAG]]
  -a, --all             # Show all images (default hides intermediate images)
  --digests             # Show digests
  -f, --filter filter   # Filter output based on conditions provided
  --format string       # Pretty-print images using a Go template
  -n, --last int        # Show n last created images (includes all states) (default -1)
  -l, --latest          # Show the latest created image (includes all states)
  --no-trunc            # Don't truncate output
  -q, --quiet           # Only display numeric IDs
  --no-trunc            # Don't truncate output
```

</div>

<div class="cheat__container-content">

### Docker Pull

```yaml
docker pull [options] NAME[:TAG|@DIGEST]
  -a, --all-tags     # Download all tagged images in the repository
  --disable-content-trust # Skip image verification (default true)
  -q, --quiet        # Suppress verbose output
```

</div>

<div class="cheat__container-content">

### Docker Push

```yaml
docker push [options] NAME[:TAG]
  --disable-content-trust # Skip image verification (default true)
  -q, --quiet        # Suppress verbose output
```

</div>

<div class="cheat__container-content">

### Docker Search

```yaml
docker search [options] TERM
  --filter filter    # Filter output based on conditions provided
  --format string    # Pretty-print search using a Go template
  --limit int        # Max number of search results (default 25)
  --no-trunc         # Don't truncate output
```

</div>

<div class="cheat__container-content">

### Docker Tag

```yaml
docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
  -f, --force       # Force
  -q, --quiet       # Suppress verbose output
```

</div>

<div class="cheat__container-content">

### Docker Rmi

```yaml
docker rmi [options] IMAGE [IMAGE...]
  -f, --force   # Force removal of the image
  -n, --no-prune # Do not delete untagged parents
```

</div>

<div class="cheat__container-content">

### Docker History

```yaml
docker history [options] IMAGE
  --no-trunc   # Don't truncate output
  --format string   # Pretty-print images using a Go template
```

</div>

<div class="cheat__container-content">

### Docker Save

```yaml
docker save [options] IMAGE [IMAGE...]
  -o, --output string   # Write to a file, instead of STDOUT
  -q, --quiet           # Suppress the progress output
```

</div>

<div class="cheat__container-content">

### Docker Load

```yaml
docker load [options]
  -i, --input string   # Read from a tar archive file, instead of STDIN
  -q, --quiet          # Suppress the load output
```

</div>

<div class="cheat__container-content">

### Docker Import

```yaml
docker import [options] file|URL|- [REPOSITORY[:TAG]]
  -c, --change list   # Apply Dockerfile instruction to the created image
  -m, --message string   # Set commit message for imported image
  -q, --quiet         # Suppress the import output
```

</div>

<div class="cheat__container-content">

### Docker Export

```yaml
docker export [options] CONTAINER
-o, --output string # Write to a file, instead of STDOUT
```

</div>

---

## Docker Manage Volumes

<div class="cheat__container-content">

### Docker Volumes

```yaml
docker volume [options] [VOLUME]
  -f, --filter filter   # Filter output based on conditions provided
  --format string       # Pretty-print volumes using a Go template
  -q, --quiet           # Only display volume names
```

</div>

<div class="cheat__container-content">

### Docker Volume Create

```yaml
docker volume create [options] [VOLUME]
  -d, --driver string   # Specify volume driver name
  -o, --opt map         # Set driver specific options
```

</div>

<div class="cheat__container-content">

### Docker Volume Inspect

```yaml
docker volume inspect [options] VOLUME [VOLUME...]
  -f, --format string   # Format the output using the given Go template
  -s, --size            # Display total file sizes
```

</div>

<div class="cheat__container-content">

### Docker Volume List

```yaml
docker volume ls [options]
  -f, --filter filter   # Filter output based on conditions provided
  --format string       # Pretty-print volumes using a Go template
  -q, --quiet           # Only display volume names
```

</div>

<div class="cheat__container-content">

### Docker Volume Remove

```yaml
docker volume rm [options] VOLUME [VOLUME...]
-f, --force # Force the removal of one or more volumes
```

</div>

<div class="cheat__container-content">

### Docker Volume Prune

```yaml
docker volume prune [options]
  -f, --force   # Do not prompt for confirmation
  -a, --all     # Remove all unused local volumes
```

</div>

---

## Docker Manage Networks

<div class="cheat__container-content">

### Docker Networks

```yaml
docker network [options] [COMMAND]
  -f, --filter filter   # Filter output based on conditions provided
  --format string       # Pretty-print networks using a Go template
  -q, --quiet           # Only display network names
```

</div>

<div class="cheat__container-content">

### Docker Network Create

```yaml
docker network create [options] NETWORK
  -d, --driver string   # Specify network driver
  -o, --opt map         # Set driver specific options
  --attachable          # Enable manual container attachment
  --config-from string  # The network from which copying the configuration
  --config-only         # Create a configuration only network
  --ipv6                # Enable IPv6 networking
  --internal            # Restrict external access to the network
  --ipam-driver string  # Specify IPAM driver
  --ipam-opt map        # Set IPAM driver specific options
  --ipam-config list    # IPAM Configuration
  --subnet string       # Subnet in CIDR format that represents a network segment
  --gateway string      # IPv4 or IPv6 Gateway for the master subnet
  --ip-range string     # Allocate container ip from a sub-range
  --aux-address map     # Auxiliary ipv4 or ipv6 addresses used by Network driver
  --label list          # Set metadata on a network
  --scope string        # Control the network's scope
  --ingress             # Create swarm routing-mesh network
```

</div>

<div class="cheat__container-content">

### Docker Network Inspect

```yaml
docker network inspect [options] NETWORK [NETWORK...]
-f, --format string # Format the output using the given Go template
```

</div>

<div class="cheat__container-content">

### Docker Network List

```yaml
docker network ls [options]
  -f, --filter filter   # Filter output based on conditions provided
  --format string       # Pretty-print networks using a Go template
  -q, --quiet           # Only display network names
```

</div>

<div class="cheat__container-content">

### Docker Network Connect

```yaml
docker network connect [options] NETWORK CONTAINER
  --alias list   # Add network-scoped alias for the container
  --ip string    # IPv4 address (e.g.,
  --ip6 string   # IPv6 address (e.g.,
  --link list    # Add link to another container
  --link-local-ip list   # Add a link-local address for the container
```

</div>

<div class="cheat__container-content">

### Docker Network Disconnect

```yaml
docker network disconnect [options] NETWORK CONTAINER
--force # Force the container to disconnect from a network
```

</div>

<div class="cheat__container-content">

### Docker Network Remove

```yaml
docker network rm [options] NETWORK [NETWORK...]
-f, --force # Force the removal of one or more networks
```

</div>

<div class="cheat__container-content">

### Docker Network Prune

```yaml
docker network prune [options]
  -f, --force   # Do not prompt for confirmation
  -a, --all     # Remove all unused local networks
```

</div>

---

## Docker Manage Docker Compose

<div class="cheat__container-content">

### Docker Compose

```yaml
docker-compose [options] [COMMAND] [ARGS...]
  -f, --file stringArray   # Specify an alternate compose file (default: docker-compose.yaml)
  -p, --project-name string   # Specify an alternate project name (default: directory name)
  --verbose   # Show more output
  --log-level string   # Set log level (DEBUG, INFO, WARNING, ERROR, CRITICAL)
  --ansi string   # Control when to print ANSI control characters ("never"|"always"|"auto") (default "auto")
  --no-ansi   # Do not print ANSI control characters
  --version   # Print version and exit
```

</div>

<div class="cheat__container-content">

### Docker Compose Build

```yaml
docker-compose build [options] [--build-arg key=value...] [SERVICE...]
  --build-arg list   # Set build-time variables for services
  --compress   # Compress the build context using gzip
  --force-rm   # Always remove intermediate containers
  --no-cache   # Do not use cache when building the image
  --parallel   # Build images in parallel
  --pull       # Always attempt to pull a newer version of the image
  --no-rm      # Do not remove intermediate containers after a successful build
  --memory string   # Set memory limit for the build container
  --memory-swap string   # Total memory (memory + swap), '-1' to disable swap
  --shm-size string   # Size of /dev/shm, default value is 64MB
  --ulimit ulimit   # Ulimit options (default [])
  --build-arg list   # Set build-time variables for services
  --compress   # Compress the build context using gzip
  --force-rm   # Always remove intermediate containers
  --no-cache   # Do not use cache when building the image
  --parallel   # Build images in parallel
  --pull       # Always attempt to pull a newer version of the image
  --no-rm      # Do not remove intermediate containers after a successful build
  --memory string   # Set memory limit for the build container
  --memory-swap string   # Total memory (memory + swap), '-1' to disable swap
  --shm-size string   # Size of /dev/shm, default value is 64MB
  --ulimit ulimit   # Ulimit options (default [])
```

</div>

<div class="cheat__container-content">

### Docker Compose Config

```yaml
docker-compose config [options]
  --resolve-image-digests   # Pin image tags to digests
  --no-interpolate   # Don't interpolate environment variables
  --q, --quiet   # Only validate the configuration, don't print
```

</div>

<div class="cheat__container-content">

### Docker Compose Create

```yaml
docker-compose create [options] [SERVICE...]
  --force-recreate   # Recreate containers even if their configuration and image haven't changed.
  --no-recreate      # If containers already exist, don't recreate them. Incompatible with --force-recreate.
  --no-build         # Don't build an image, even if it's missing.
  --build            # Build images before creating containers.
```

</div>

<div class="cheat__container-content">

### Docker Compose Down

```yaml
docker-compose down [options]
  -v, --volumes   # Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumes attached to containers.
  --remove-orphans   # Remove containers for services not defined in the Compose file
  --rmi string   # Remove images. Type must be one of: 'all': Remove all images used by any service.
  --timeout TIMEOUT   # Specify a shutdown timeout in seconds.
  --remove-orphans   # Remove containers for services not defined in the Compose file
  --rmi string   # Remove images. Type must be one of: 'all': Remove all images used by any service.
  --timeout TIMEOUT   # Specify a shutdown timeout in seconds.
```

</div>

<div class="cheat__container-content">

### Docker Compose Up

```yaml
docker-compose up [options] [SERVICE...]
  -d, --detach   # Detached mode: Run containers in the background, print new container names.
  --no-color   # Produce monochrome output.
  --quiet-pull   # Pull without printing progress information
  --no-deps   # Don't start linked services.
  --force-recreate   # Recreate containers even if their configuration and image haven't changed.
  --always-recreate-deps   # Recreate dependent containers.
  --no-recreate   # If containers already exist, don't recreate them. Incompatible with --force-recreate.
  --no-build   # Don't build an image, even if it's missing.
  --build   # Build images before starting containers.
  --abort-on-container-exit   # Stops all containers if any container was stopped. Incompatible with --detach.
  --attach-dependencies   # Attach to dependent containers.
  --timeout TIMEOUT   # Use this timeout in seconds for container shutdown when attached or when containers are already running. (default 10)
  --scale SERVICE=NUM   # Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present.
  --exit-code-from SERVICE   # Return the exit code of the selected service container. Implies --abort-on-container-exit.
  --renew-anon-volumes   # Recreate anonymous volumes instead of retrieving data from the previous containers.
  --remove-orphans   # Remove containers for services not defined in the Compose file
  --no-start   # Don't start the services after creating them.
  --detach-keys string   # Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-<value> where <value> is one of: a-z, @, ^, [, , or _.
  --stop-signal string   # Signal to stop the container. (default "SIGTERM")
  --stop-timeout int   # Timeout (in seconds) to stop the container. (default 10)
  --rmi string   # Remove images. Type must be one of: 'all': Remove all images used by any service.
  --volumes   # Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumes attached to containers.
  --follow   # Follow log output.
  --timestamps
  --tail string   # Number of lines to show from the end of the logs for each container.
  --no-color   # Produce monochrome output.
  --quiet-pull   # Pull without printing progress information
  --no-deps   # Don't start linked services.
  --force-recreate   # Recreate containers even if their configuration and image haven't changed.
  --always-recreate-deps   # Recreate dependent containers.
```

</div>

<div class="cheat__container-content">

### Docker Compose Start

```yaml
docker-compose start [options] [SERVICE...]
  --detach   # Detached mode: Run containers in the background, print new container names.
  --no-color   # Produce monochrome output.
  --quiet-pull   # Pull without printing progress information
  --no-deps   # Don't start linked services.
  --force-recreate   # Recreate containers even if their configuration and image haven't changed.
  --always-recreate-deps   # Recreate dependent containers.
  --no-recreate   # If containers already exist, don't recreate them. Incompatible with --force-recreate.
  --no-build   # Don't build an image, even if it's missing.
  --build   # Build images before starting containers.
  --abort-on-container-exit   # Stops all containers if any container was stopped. Incompatible with --detach.
  --attach-dependencies   # Attach to dependent containers.
  --timeout TIMEOUT   # Use this timeout in seconds for container shutdown when attached or when containers are already running. (default 10)
  --scale SERVICE=NUM   # Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present.
  --exit-code-from SERVICE   # Return the exit code of the selected service container. Implies --abort-on-container-exit.
  --renew-anon-volumes   # Recreate anonymous volumes instead of retrieving data from the previous containers.
  --remove-orphans   # Remove containers for services not defined in the Compose file
  --no-start   # Don't start the services after creating them.
  --detach-keys string   # Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-<value> where <value> is one of: a-z, @, ^, [, , or _.
  --stop-signal string   # Signal to stop the container. (default "SIGTERM")
  --stop-timeout int   # Timeout (in seconds) to stop the container. (default 10)
  --rmi string   # Remove images. Type must be one of: 'all': Remove all images used by any service.
  --volumes   # Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumes attached to containers.
  --follow   # Follow log output.
  --timestamps
  --tail
```

</div>

<div class="cheat__container-content">

### Docker Compose Stop

```yaml
docker-compose stop [options] [SERVICE...]
--timeout TIMEOUT # Specify a shutdown timeout in seconds.
```

</div>

<div class="cheat__container-content">

### Docker Compose Restart

```yaml
docker-compose restart [options] [SERVICE...]
--timeout TIMEOUT # Specify a shutdown timeout in seconds.
```

</div>

<div class="cheat__container-content">

### Docker Compose Push

```yaml
docker-compose push [options] [SERVICE...]
--ignore-push-failures # Push what it can and ignores images with push failures.
```

</div>

<div class="cheat__container-content">

### Docker Compose Pull

```yaml
docker-compose pull [options] [SERVICE...]
--ignore-pull-failures # Pull what it can and ignores images with pull failures.
```

</div>

<div class="cheat__container-content">

### Docker Compose Logs

```yaml
docker-compose logs [options] [SERVICE...]
  --no-color   # Produce monochrome output.
  --timestamps   # Show timestamps.
  --tail string   # Number of lines to show from the end of the logs for each container.
  --follow   # Follow log output.
```

</div>

<div class="cheat__container-content">

### Docker Compose Kill

```yaml
docker-compose kill [options] [SERVICE...]
--signal string # Signal to send to the container. Default signal is SIGKILL.
```

</div>

<div class="cheat__container-content">

### Docker Compose Exec

```yaml
docker-compose exec [options] [-T] SERVICE COMMAND [ARGS...]
  -T, --tty   # Disable pseudo-tty allocation. By default `docker-compose exec` allocates a TTY.
  --privileged   # Give extended privileges to the process.
  --user string   # Run the command as this user.
  --index int   # Index of the container if there are multiple instances of a service [default: 1].
```

</div>

<div class="cheat__container-content">

### Docker Compose Ps

```yaml
docker-compose ps [options]
  --services   # Print the service names
  --filter KEY=VAL # Filter services by a property
```

</div>

<div class="cheat__container-content">

### Docker Compose Port

```yaml
docker-compose port [options] SERVICE PRIVATE_PORT
--protocol string # tcp or udp [default: tcp]
```

</div>

<div class="cheat__container-content">

### Docker Compose Top

```yaml
docker-compose top [options] [SERVICE...]
--pid string # Print the PID column
```

</div>

<div class="cheat__container-content">

### Docker Compose Events

```yaml
docker-compose events [options]
--json # Output events as a stream of json objects
```

</div>

<div class="cheat__container-content">

### Docker Compose Scale

```yaml
docker-compose scale [options] [SERVICE=NUM...]
--timeout TIMEOUT # Specify a shutdown timeout in seconds.
```

</div>

---

## Docker Manage Docker Swarm

<div class="cheat__container-content">

### Docker Swarm Init

```yaml
docker swarm init [OPTIONS]
  --advertise-addr string   # Advertised address (format: <ip|interface>[:port])
  --listen-addr string   # Listen address (format: <ip|interface>[:port])
  --data-path-addr string   # Address or interface to use for data path traffic (format: <ip|interface>)
  --default-addr-pool stringSlice   # Default subnet pool for global scope networks
  --default-addr-pool-mask-length int   # Default subnet pool mask size for global scope networks
  --force-new-cluster   # Force create a new Swarm
  --subnet-size int   # Subnet size for each network created on the default subnet pool
  --autolock   # Enable manager autolocking (requiring an unlock key to start a stopped manager)
  --autolock-managers   # Enable manager autolocking (requiring an unlock key to start a stopped manager)
  --cert-expiry duration   # Validity period for node certificates (ns|us|ms|s|m|h)
  --dispatcher-heartbeat duration   # Dispatcher heartbeat period (ns|us|ms|s|m|h)
  --external-ca stringSlice   # Specifications of one or more certificate signing endpoints
  --max-snapshots int   # Number of additional Raft snapshots to retain
  --snapshot-interval duration   # Number of log entries between Raft snapshots (ns|us|ms|s|m|h)
  --task-history-limit int   # Maximum number of tasks history stored (default 5)
  --keep-old-snapshots int   # Number of snapshots to keep beyond the current snapshot (default 0)
  --rotate-worker-token   # Rotate the worker join token
  --rotate-manager-token   # Rotate the manager join token
  --rotate-manager-lock-key   # Rotate the manager lock key
  --root-ca-cert string   # Path to the root CA certificate to use for the new cluster
  --root-ca-key string   # Path to the root CA key to use for the new cluster
  --availability string   # Availability of the node (default "active")
  --listen-control-api string   # Listen address for the control API
  --cert-dir string   # Directory where TLS certificates are kept (default "/etc/docker/swarm/certificates")
  --heartbeat-period duration   # Heartbeat
```

</div>

<div class="cheat__container-content">

### Docker Swarm Join

```yaml
docker swarm join [OPTIONS] [TOKEN]
  --advertise-addr string   # Advertised address (format: <ip|interface>[:port])
  --listen-addr string   # Listen address (format: <ip|interface>[:port])
  --data-path-addr string   # Address or interface to use for data path traffic (format: <ip|interface])
  --default-addr-pool stringSlice   # Default subnet pool for global scope networks
  --default-addr-pool-mask-length int   # Default subnet pool mask size for global scope networks
  --force-new-cluster   # Force create a new Swarm
  --subnet-size int   # Subnet size for each network created on the default subnet pool
  --autolock   # Enable manager autolocking (requiring an unlock key to start a stopped manager)
  --autolock-managers   # Enable manager autolocking (requiring an unlock key to start a stopped manager)
  --cert-expiry duration   # Validity period for node certificates (ns|us|ms|s|m|h)
  --dispatcher-heartbeat duration   # Dispatcher heartbeat period (ns|us|ms|s|m|h)
  --external-ca stringSlice   # Specifications of one or more certificate signing endpoints
  --max-snapshots int   # Number of additional Raft snapshots to retain
  --snapshot-interval duration   # Number of log entries between Raft snapshots (ns|us|ms|s|m|h)
  --task-history-limit int   # Maximum number of tasks history stored (default 5)
  --keep-old-snapshots int   # Number of snapshots to keep beyond the current snapshot (default 0)
  --rotate-worker-token   # Rotate the worker join token
  --rotate-manager-token   # Rotate the manager join token
  --rotate-manager-lock-key   # Rotate the manager lock key
  --root-ca-cert string   # Path to the root CA certificate to use for the new cluster
  --root-ca-key string   # Path to the root CA key to use for the new cluster
  --availability string   # Availability of the node (default "active")
  --listen-control-api string   # Listen address for the control API
  --cert-dir string   # Directory where TLS certificates are kept (default "/etc/docker/swarm/certificates")
  --heartbeat-period duration   # Heartbeat period (ns|us|ms|s|m|h) (default 5s)
```

</div>

<div class="cheat__container-content">

### Docker Swarm Join Token

```yaml
docker swarm join-token [OPTIONS] [ROLE]
--rotate # Rotate join token
```

</div>

<div class="cheat__container-content">

### Docker Swarm Leave

```yaml
docker swarm leave [OPTIONS]
--force # Force leave swarm
```

</div>

<div class="cheat__container-content">

### Docker Swarm Update

```yaml
docker swarm update [OPTIONS]
  --rotate-manager-token   # Rotate the manager join token
  --rotate-worker-token   # Rotate the worker join token
  --rotate-manager-lock-key   # Rotate the manager lock key
  --autolock   # Enable manager autolocking (requiring an unlock key to start a stopped manager)
  --autolock-managers   # Enable manager autolocking (requiring an unlock key to start a stopped manager)
  --cert-expiry duration   # Validity period for node certificates (ns|us|ms|s|m|h)
  --dispatcher-heartbeat duration   # Dispatcher heartbeat period (ns|us|ms|s|m|h)
  --external-ca stringSlice   # Specifications of one or more certificate signing endpoints
  --max-snapshots int   # Number of additional Raft snapshots to retain
  --snapshot-interval duration   # Number of log entries between Raft snapshots (ns|us|ms|s|m|h)
  --task-history-limit int   # Maximum number of tasks history stored (default 5)
  --keep-old-snapshots int   # Number of snapshots to keep beyond the current snapshot (default 0)
  --cert-dir string   # Directory where TLS certificates are kept (default "/etc/docker/swarm/certificates")
  --heartbeat-period duration   # Heartbeat period (ns|us|ms|s|m|h) (default 5s)
```

</div>

---

## Docker Manage Docker Stack

<div class="cheat__container-content">

### Docker Stack Deploy

```yaml
docker stack deploy [OPTIONS] STACK
  --compose-file stringSlice   # Path to a Compose file
  --prune   # Prune services that are no longer referenced
  --with-registry-auth   # Send registry authentication details to Swarm agents
  --resolve-image string   # Query the registry to resolve image digest and supported platforms (always|changed|never) (default "always")
  --bundle-file string   # Path to a Distributed Application Bundle file
  --orchestrator string   # Orchestrator to use (swarm|kubernetes|all)
```

</div>

<div class="cheat__container-content">

### Docker Stack List

```yaml
docker stack ls [OPTIONS]
  --format string   # Pretty-print stacks using a Go template
  --orchestrator string   # Orchestrator to use (swarm|kubernetes|all)
```

</div>

<div class="cheat__container-content">

### Docker Stack Ps

```yaml
docker stack ps [OPTIONS] STACK
  --no-trunc   # Don't truncate output
  --filter string   # Filter output based on conditions provided
  --format string   # Pretty-print tasks using a Go template
  --orchestrator string   # Orchestrator to use (swarm|kubernetes|all)
```

</div>

<div class="cheat__container-content">

### Docker Stack Remove

```yaml
docker stack rm [OPTIONS] STACK
--orchestrator string # Orchestrator to use (swarm|kubernetes|all)
```

</div>

<div class="cheat__container-content">

### Docker Stack Services

```yaml
docker stack services [OPTIONS] STACK
  --no-trunc   # Don't truncate output
  --filter string   # Filter output based on conditions provided
  --format string   # Pretty-print services using a Go template
  --orchestrator string   # Orchestrator to use (swarm|kubernetes|all)
```

</div>

<div class="cheat__container-content">

### Docker Stack Rm

```yaml
docker stack rm [OPTIONS] STACK
--orchestrator string # Orchestrator to use (swarm|kubernetes|all)
```

</div>

---

## Docker Manage Docker Machine

<div class="cheat__container-content">

### Docker Machine Create

```yaml
docker-machine create [OPTIONS] [arg...]
  --amazonec2-access-key string   # Amazon EC2 access key
  --amazonec2-ami string   # Amazon EC2 AMI
  --amazonec2-ami-filter string   # Filter to use when searching for AMI
  --amazonec2-ami-owners stringSlice   # Owner(s) of the AMI to use
  --amazonec2-block-duration-minutes int   # The duration, in minutes, for the block device mapping
  --amazonec2-device-name string   # The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh)
  --amazonec2-ebs-optimized   # Enable EBS optimization for the instance
  --amazonec2-endpoint string   # Amazon EC2 endpoint URL (required for non-AWS-standard endpoints)
  --amazonec2-iam-instance-profile string   # Amazon EC2 instance profile
  --amazonec2-instance-type string   # Amazon EC2 instance type
  --amazonec2-insecure   # Disable SSL when connecting to Amazon EC2
  --amazonec2-monitoring   # Enable CloudWatch monitoring for the instance
  --amazonec2-open-port intSlice   # Open port on the instance's security group
  --amazonec2-private-address-only   # Use only an instance's private address
  --amazonec2-region string   # Amazon EC2 region
  --amazonec2-request-spot-instance   # Request a spot instance instead of a on-demand instance
  --amazonec2-root-size int   # Amazon EC2 root disk size (in GB)
  --amazonec2-root-type string   # Amazon EC2 root disk type (ebs or instance-store)
  --amazonec2-security-group stringSlice   # Amazon EC2 security group
  --amazonec2-session-token string   # Amazon EC2 session token
  --amazonec2-spot-price string   # Spot bid price, in dollars (e.g. 0.05)
  --amazonec2-subnet-id string   # Amazon VPC subnet ID
  --amazonec2-tags stringSlice
  --amazonec2-use-ebs-optimized-instance   # Use an EBS-optimized instance
  --amazonec2-use-private-address   # Use private IP address
  --amazonec2-username string   # SSH username
  --amazonec2-vpc-id string   # Amazon VPC ID
  --azure-availability-set string   # Azure availability set
```

</div>

<div class="cheat__container-content">

### Docker Machine Inspect

```yaml
docker-machine inspect [OPTIONS] [arg...]
--format string # Format the output using the given Go template
```

</div>

<div class="cheat__container-content">

### Docker Machine List

```yaml
docker-machine ls [OPTIONS] [arg...]
  --filter string   # Filter output based on conditions provided
  --format string   # Format the output using the given Go template
  --no-trunc   # Don't truncate output
  --quiet   # Only display machine names
```

</div>

<div class="cheat__container-content">

### Docker Machine Regenerate Certs

```yaml
docker-machine regenerate-certs [OPTIONS] [arg...]
--force # Force regeneration, even if certs already exist
```

</div>

<div class="cheat__container-content">

### Docker Machine Env

```yaml
docker-machine env [OPTIONS] [arg...]
--shell string # Force environment to be configured for a specified shell: [fish, cmd, powershell, tcsh, bash, zsh, elvish] (default "bash")
```

</div>

<div class="cheat__container-content">

### Docker Machine SSH

```yaml
docker-machine ssh [OPTIONS] [arg...]
--native-ssh # Use the native (Go-based) SSH client
--shell string # Force environment to be configured for a specified shell: [fish, cmd, powershell, tcsh, bash, zsh, elvish] (default "bash")
```

</div>

<div class="cheat__container-content">

### Docker Machine Start

```yaml
docker-machine start [OPTIONS] [arg...]
```

</div>

<div class="cheat__container-content">

### Docker Machine Stop

```yaml
docker-machine stop [OPTIONS] [arg...]
```

</div>

<div class="cheat__container-content">

### Docker Machine Restart

```yaml
docker-machine restart [OPTIONS] [arg...]
```

</div>

<div class="cheat__container-content">

### Docker Machine Upgrade

```yaml
docker-machine upgrade [OPTIONS] [arg...]
```

</div>

---

## Docker Manage Docker Node

<div class="cheat__container-content">

### Docker Node Inspect

```yaml
docker node inspect [OPTIONS] [arg...]
--format string # Format the output using the given Go template
```

</div>

<div class="cheat__container-content">

### Docker Node List

```yaml
docker node ls [OPTIONS] [arg...]
  --filter string   # Filter output based on conditions provided
  --format string   # Format the output using the given Go template
  --no-trunc   # Don't truncate output
  --quiet   # Only display node IDs
```

</div>

<div class="cheat__container-content">

### Docker Node Ps

```yaml
docker node ps [OPTIONS] [arg...]
  --filter string   # Filter output based on conditions provided
  --format string   # Format the output using the given Go template
  --no-trunc   # Don't truncate output
  --quiet   # Only display task IDs
```

</div>

<div class="cheat__container-content">

### Docker Node Update

```yaml
docker node update [OPTIONS] [arg...]
  --availability string   # Availability of the node (active/pause/drain)
  --label-add list   # Add or update a node label (key=value)
  --label-rm list   # Remove a node label if it exists
  --role string   # Role of the node (worker/manager)
```

</div>

---

## Docker Manage Docker Registry

<div class="cheat__container-content">

### Docker Registry Login

```yaml
docker login [OPTIONS] [arg...]
  --password string   # Password
  --password-stdin   # Take the password from stdin
  --username string   # Username
```

</div>

<div class="cheat__container-content">

### Docker Registry Logout

```yaml
docker logout [OPTIONS] [arg...]
```

</div>

<div class="cheat__container-content">

### Docker Registry Inspect

```yaml
docker registry inspect [OPTIONS] [arg...]
--format string # Format the output using the given Go template
```

</div>

<div class="cheat__container-content">

### Docker Registry List

```yaml
docker registry ls [OPTIONS] [arg...]
  --filter string   # Filter output based on conditions provided
  --format string   # Format the output using the given Go template
  --no-trunc   # Don't truncate output
  --quiet   # Only display registry IDs
```

</div>

<div class="cheat__container-content">

### Docker Registry Create

```yaml
docker registry create [OPTIONS] [arg...]
  --description string   # Registry description
  --name string   # Registry name
  --serveraddress string   # Registry server address
```

</div>

<div class="cheat__container-content">

### Docker Registry Update

```yaml
docker registry update [OPTIONS] [arg...]
  --description string   # Registry description
  --name string   # Registry name
  --serveraddress string   # Registry server address
```

</div>

---

# **_in progress now_**
