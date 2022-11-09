---
title: 'SSH'
slug: 'ssh'
category: 'DevOps'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'SSH is a network protocol that allows data exchange through a secure channel between two network devices.'
color: '#231F20'
icon: 'SSHIcon'
draft: false
---

## Table of Contents

<details open>

<summary>Click to expand</summary>

- [Introduction](#introduction)
  - [What is SSH?](#what-is-ssh)
  - [Why use SSH?](#why-use-ssh)
  - [SSH Terminology](#ssh-terminology)
- [Getting started](#getting-started)
  - [Config location](#config-location)
  - [Config sample](#config-sample)
  - [Connecting to a remote host](#connecting-to-a-remote-host)
  - [Executing a command on a remote host](#executing-a-command-on-a-remote-host)
  - [SCP](#scp)
  - [SCP Options](#scp-options)
  - [SSHFS](#sshfs)
  - [SSHFS Options](#sshfs-options)
  - [ProxyJump](#proxyjump)
  - [SSH Tunneling](#ssh-tunneling)
  - [SSH Copy ID](#ssh-copy-id)
- [SSH keygen](#ssh-keygen)
  - [keygen](#keygen)
  - [Generate a key pair](#generate-a-key-pair)
  - [List keys](#list-keys)
  - [Known hosts](#known-hosts)
  - [Key-based authentication](#key-based-authentication)
  - [Key Types](#key-types)
  - [key Format](#key-format)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is SSH?

SSH is a network protocol that allows data exchange through a secure channel between two network devices. SSH uses public-key cryptography to authenticate the remote computer and allow it to authenticate the user, if necessary. It also provides strong encryption of all data transmitted between the two parties.

</div>

<div class="cheat__container-content">

### Why use SSH?

SSH is a secure protocol that encrypts all traffic between the client and the server. It is the most secure way to connect to a remote server. It is also the most common way to connect to a remote server.

</div>

<div class="cheat__container-content">

### SSH Terminology

- **SSH Client**: The SSH client is the program that you use to connect to a remote server. It is usually called `ssh` or `ssh.exe`.
- **SSH Server**: The SSH server is the program that runs on the remote server. It is usually called `sshd` or `sshd.exe`.
- **SSH Key**: SSH keys are used to authenticate the client and the server. They are usually stored in the `~/.ssh` directory.
- **SSH Config**: The SSH config file is used to store the configuration of the SSH client. It is usually stored in the `~/.ssh/config` file.

</div>

---

## Getting started

<div class="cheat__container-content">

### Config location

| OS          | Location                    |
| ----------- | --------------------------- |
| Linux/macOS | `~/.ssh/config`             |
| Windows     | `%USERPROFILE%\.ssh\config` |

- Config file and directory

| File/Directory           | Description                           |
| ------------------------ | ------------------------------------- |
| `/etc/ssh/ssh_config`    | The system-wide configuration file.   |
| `~/.ssh/config`          | The user-specific configuration file. |
| `~/.ssh/known_hosts`     | The list of known hosts.              |
| `~/.ssh/authorized_keys` | The list of authorized public keys.   |
| `~/.ssh/id_{type}`       | The private key.                      |
| `~/.ssh/id_{type}.pub`   | The public key.                       |
| `~/.ssh/identity`        | The private key.                      |
| `~/.ssh/identity.pub`    | The public key.                       |

</div>

<div class="cheat__container-content">

### Config sample

```bash
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa

Host server1
  HostName 192.168.5.5
  User root
  Port 22
  IdentityFile ~/.ssh/id_rsa

Host server2
  HostName example.com
  User root
  Port 22
  IdentityFile ~/.ssh/id_rsa
```

- Launch the SSH client by alias

```bash
ssh server1
```

</div>

<div class="cheat__container-content">

### Connecting to a remote host

- Connect to a remote host

```bash
ssh user@host
```

> **Note**: The default port is 22.

- Connect to a remote host using a specific port

```bash
ssh user@host -p 2222
```

- Connect to a remote host using a specific `key.pem` file

```bash
ssh -i key.pem user@host
```

- Connect to a remote host using a specific `key.pem` file and a specific port

```bash
ssh -i key.pem user@host -p 2222
```

</div>

<div class="cheat__container-content">

### Executing a command on a remote host

- Execute a command on a remote host

```bash
ssh user@host "ls -la"
```

- Invoke a local script on a remote host

```bash
ssh user@host "bash -s" < script.sh
```

- Compress the data to improve the speed of the transfer

```bash
ssh user@host "bash -s" < script.sh -C
```

- Compresses and downloads from a remote host

```bash
ssh user@host "tar -czf - /path/to/dir" > dir.tar.gz
```

- Compresses and uploads to a remote host

```bash
ssh user@host "tar -xzf - -C /path/to/dir" < dir.tar.gz
```

</div>

<div class="cheat__container-content">

### SCP

`SCP` is a shorthand for `Secure Copy Protocol`. It is a command-line utility for copying files between hosts on a network. It uses SSH for data transfer and provides the same authentication and same level of security as SSH.

- Copy a file from a remote host to the local host

```bash
scp user@host:/path/to/file /path/to/file
```

- Copy a file from the local host to a remote host

```bash
scp /path/to/file user@host:/path/to/file
```

- Copy a file from a remote host to a remote host

```bash
scp user@host1:/path/to/file user@host2:/path/to/file
```

- Copy a whole directory from a remote host to the local host

```bash
scp -r user@host:/path/to/dir /path/to/dir
```

- Copy all files from a remote host to the local host

```bash
scp user@host:/path/to/dir/* /path/to/dir
```

- Copy from a remote host to the current directory

```bash
scp user@host:/path/to/dir/* .
```

</div>

<div class="cheat__container-content">

### SCP Options

| Option   | Description                                                                                 |
| -------- | ------------------------------------------------------------------------------------------- |
| `scp -r` | Recursively copy entire directories.                                                        |
| `scp -v` | Verbose mode. Displays progress during transfer.                                            |
| `scp -P` | Specifies the port number to connect to on the remote host.                                 |
| `scp -C` | Compresses the data to improve the speed of the transfer.                                   |
| `scp -p` | Preserves modification times, access times, and modes from the original file.               |
| `scp -q` | Quiet mode. Suppresses most error messages from the server.                                 |
| `scp -c` | Selects the cipher to use for encrypting the data transfer.                                 |
| `scp -l` | Limits the bandwidth used, in Kbit/s.                                                       |
| `scp -i` | Selects a file from which the identity (private key) for public key authentication is read. |
| `scp -o` | Can be used to pass options to ssh.                                                         |
| `scp -F` | Specifies an alternative per-user configuration file.                                       |
| `scp -B` | Forces scp to use the batch mode (prevents asking for passwords or passphrases).            |

</div>

<div class="cheat__container-content">

### SFTP

`SFTP` is a shorthand for `SSH File Transfer Protocol`. It is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It uses the SSH protocol for data transfer and provides the same authentication and same level of security as SSH.

- Connect to a remote host using SFTP

```bash
sftp user@host
```

- Connect to a remote host using SFTP and a specific port

```bash
sftp -P 2222 user@host
```

- Connect to a remote host using SFTP and a specific `key.pem` file

```bash
sftp -i key.pem user@host
```

- Connect to a remote host using SFTP and a specific `key.pem` file and a specific port

```bash
sftp -i key.pem user@host -P 2222
```

</div>

<div class="cheat__container-content">

### SSHFS Options

| Option     | Description                                                                        |
| ---------- | ---------------------------------------------------------------------------------- |
| `sshfs`    | Mounts a remote filesystem using SSH.                                              |
| `sshfs -p` | Specifies the port number to connect to on the remote host.                        |
| `sshfs -C` | Compresses the data to improve the speed of the transfer.                          |
| `sshfs -o` | Can be used to pass options to ssh.                                                |
| `sshfs -F` | Specifies an alternative per-user configuration file.                              |
| `sshfs -B` | Forces sshfs to use the batch mode (prevents asking for passwords or passphrases). |

</div>

<div class="cheat__container-content">

### ProxyJump

`ProxyJump` is a shorthand for `ProxyJump`. It is a command-line utility for connecting to a remote host through a proxy host. It uses SSH for data transfer and provides the same authentication and same level of security as SSH.

- Connect to a remote host through a proxy host

```bash
ssh -J user@proxy user@host
```

- Connect to a remote host through a proxy host using a specific port

```bash
ssh -J user@proxy -p 2222 user@host
```

- Multiple proxy hosts

```bash
ssh -J user@proxy1,user@proxy2 user@host
```

- Multiple proxy hosts using a specific port

```bash
ssh -J user@proxy1 -p 2222,user@proxy2 -p 2222 user@host
```

</div>

<div class="cheat__container-content">

### SSH Tunneling

`SSH Tunneling` is a shorthand for `SSH Tunneling`. It is a command-line utility for creating a secure connection between two hosts over an insecure network. It uses SSH for data transfer and provides the same authentication and same level of security as SSH.

- Local port forwarding

```bash
ssh -L 8080:localhost:80 user@host
```

- Remote port forwarding

```bash
ssh -R 8080:localhost:80 user@host
```

- Dynamic port forwarding

```bash
ssh -D 8080 user@host
```

</div>

<div class="cheat__container-content">

### SSH Copy ID

`SSH Copy ID` is a shorthand for `SSH Copy ID`. It is a command-line utility for copying an SSH public key to a remote host. It uses SSH for data transfer and provides the same authentication and same level of security as SSH.

- Copy an SSH public key to a remote host

```bash
ssh-copy-id user@host
```

- Copy an SSH public key to a remote host using a specific port

```bash
ssh-copy-id -p 2222 user@host
```

- Copy an SSH public key to a remote host using a specific `key.pem` file

```bash
ssh-copy-id -i key.pem user@host
```

- Copy an SSH public key to a remote host using a specific `key.pem` file and a specific port

```bash
ssh-copy-id -i key.pem user@host -p 2222
```

</div>

---

## SSH keygen

<div class="cheat__container-content">

### Keygen

```bash
ssh-keygen -t rsa -b 4096 -C "YOUR@EMAIL.COM"
```

| Option | Description                                        |
| ------ | -------------------------------------------------- |
| `-t`   | Specifies the type of key to create.               |
| `-b`   | Specifies the number of bits in the key to create. |
| `-C`   | Provides a new comment to the public key.          |

</div>

<div class="cheat__container-content">

### Generate a key pair

- Generate a key interactively

```bash
ssh-keygen
```

- Generate a key specifying a file name

```bash
ssh-keygen -f ~/.ssh/id_rsa
```

- Generate a public key from a private key

```bash
ssh-keygen -y -f ~/.ssh/id_rsa > ~/.ssh/id_rsa.pub
```

- Change comment of a public key

```bash
ssh-keygen -c -f ~/.ssh/id_rsa.pub
```

- Change the passphrase of a private key

```bash
ssh-keygen -p -f ~/.ssh/id_rsa
```

</div>

<div class="cheat__container-content">

### List keys

- List all keys

```bash
ssh-add -l
```

- List all keys with fingerprints

```bash
ssh-add -l -E md5
```

</div>

<div class="cheat__container-content">

### Known hosts

- List all known hosts

```bash
ssh-keygen -H -F '*'
```

- List all known hosts with fingerprints

```bash
ssh-keygen -H -F '*' -E md5
```

- Search from known hosts

```bash
ssh-keygen -F host
```

- Search for a specific host

```bash
ssh-keygen -H -F host
```

- Search for a specific host with fingerprints

```bash
ssh-keygen -H -F host -E md5
```

- Remove a specific host

```bash
ssh-keygen -R host
```

- Remove all known hosts

```bash
ssh-keygen -R '*'
```

</div>

<div class="cheat__container-content">

### Key-based authentication

- Add a key to the authentication agent

```bash
ssh-add ~/.ssh/id_rsa
```

- Remove a key from the authentication agent

```bash
ssh-add -d ~/.ssh/id_rsa
```

- Remove all keys from the authentication agent

```bash
ssh-add -D
```

</div>

<div class="cheat__container-content">

### Key Types

| Type          | Description                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| `rsa`         | The RSA algorithm is a widely used public-key encryption algorithm.                  |
| `dsa`         | The DSA algorithm is a digital signature algorithm.                                  |
| `ecdsa`       | The ECDSA algorithm is a digital signature algorithm based on elliptic curves.       |
| `ed25519`     | The Ed25519 algorithm is a digital signature algorithm based on elliptic curves.     |
| `ed448`       | The Ed448 algorithm is a digital signature algorithm based on elliptic curves.       |
| `rsa1`        | The RSA1 algorithm is a widely used public-key encryption algorithm.                 |
| `ssh-rsa`     | The SSH-RSA algorithm is a widely used public-key encryption algorithm.              |
| `ssh-dss`     | The SSH-DSS algorithm is a digital signature algorithm.                              |
| `ssh-ed25519` | The SSH-Ed25519 algorithm is a digital signature algorithm based on elliptic curves. |
| `ssh-ed448`   | The SSH-Ed448 algorithm is a digital signature algorithm based on elliptic curves.   |
| `ssh-ecdsa`   | The SSH-ECDSA algorithm is a digital signature algorithm based on elliptic curves.   |

</div>

<div class="cheat__container-content">

### key Format

| Format  | Description                                              |
| ------- | -------------------------------------------------------- |
| `PEM`   | The PEM format is a standard for storing private keys.   |
| `PKCS8` | The PKCS8 format is a standard for storing private keys. |
| `PKCS1` | The PKCS1 format is a standard for storing private keys. |

</div>
