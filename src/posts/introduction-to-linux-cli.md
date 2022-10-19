---
title: Introduction to Linux CLI
slug: introduction-to-linux-cli
tags: ['Linux', 'CLI']
categories: ['Linux']
date: 2022-10-19
image: /assets/img/blog/introduction-to-linux-cli/introduction-to-linux-cli.jpeg
author: MKAbuMattar
description: 'Introduction to Linux command-line interface CLI, Linux is a Unix-like computer operating system assembled under the model of free and open-source software development and distribution.'
prev: how-to-create-a-custom-vpc-using-aws-cli
next: vim-cheat-sheet
featured: true
---

## Table of Contents

<details>

- [Introduction](#introduction)
- [What Is a Linux Command?](#what-is-a-linux-command)
- [File Management](#file-management)
  - [pwd](#pwd)
  - [ls](#ls)
  - [cd](#cd)
  - [pwd](#pwd)
  - [mkdir](#mkdir)
  - [touch](#touch)
  - [cp](#cp)
  - [mv](#mv)
  - [rm](#rm)
  - [rmdir](#rmdir)
  - [cat](#cat)
  - [more](#more)
  - [less](#less)
  - [head](#head)
  - [tail](#tail)
- [Finding files and directories](#finding-files-and-directories)
  - [find](#find)
  - [locate](#locate)
  - [which](#which)
  - [whereis](#whereis)
- [Check User Information](#check-user-information)
  - [whoami](#whoami)
  - [who](#who)
  - [w](#w)
  - [id](#id)
  - [groups](#groups)
- [Managing Users and Groups](#managing-users-and-groups)
  - [useradd](#useradd)
  - [userdel](#userdel)
  - [usermod](#usermod)
  - [passwd](#passwd)
  - [groupadd](#groupadd)
  - [groupdel](#groupdel)
  - [groupmod](#groupmod)
- [Managing Permissions](#managing-permissions)
  - [chown](#chown)
  - [chgrp](#chgrp)
  - [chmod](#chmod)
  - [groups](#groups)
  - [newgrp](#newgrp)
  - [setfacl](#setfacl)
  - [umask](#umask)
  - [getfacl](#getfacl)
  - [chattr](#chattr)
  - [lsattr](#lsattr)
- [Check System Information](#check-system-information)
  - [uptime](#uptime)
  - [uname](#uname)
  - [lscpu](#lscpu)
  - [lspci](#lspci)
  - [lsusb](#lsusb)
  - [free](#free)
- [Configure and Troubleshoot Network](#configure-and-troubleshoot-network)
  - [ifconfig](#ifconfig)
  - [ip](#ip)
  - [netstat](#netstat)
  - [route](#route)
  - [ethtool](#ethtool)
  - [tcpdump](#tcpdump)
  - [ping](#ping)
  - [traceroute](#traceroute)
  - [dig](#dig)
  - [nslookup](#nslookup)
  - [host](#host)
  - [drill](#drill)
  - [ss](#ss)
  - [wget](#wget)
  - [curl](#curl)
  - [nmap](#nmap)
- [Manage System Processes](#manage-system-processes)
  - [ps](#ps)
  - [top](#top)
  - [kill](#kill)
  - [killall](#killall)
  - [pkill](#pkill)
  - [pgrep](#pgrep)
  - [nice](#nice)
  - [renice](#renice)
  - [at](#at)
  - [atq](#atq)
  - [atrm](#atrm)
  - [batch](#batch)
  - [crontab](#crontab)
  - [iostat](#iostat)
  - [vmstat](#vmstat)
  - [sar](#sar)
- [Manage logging](#manage-logging)
  - [journalctl](#journalctl)

</details>

## Introduction

The Linux operating system family is a group of free and open-source Unix systems. They consist of Red Hat, Arch Linux, Ubuntu, Debian, openSUSE, and Fedora. You must utilize a shell when using Linux, an application that allows you access to the system's features. The majority of Linux distributions have a graphical user interface (GUI), which makes them user-friendly for beginners. I advise using the command-line interface (CLI), as it is speedier and gives you more control. By putting commands into the CLI, tasks that take many steps on the GUI may be completed in a matter of seconds.

## What Is a Linux Command?

An application or tool that runs on the CLI, a console that communicates with the system via text and processes, is known as a Linux command. It resembles Windows' Command Prompt program in many ways. By hitting Enter at the end of the line, Linux commands are run on the terminal. You may use commands to carry out a range of operations, including managing users, installing packages, and manipulating files.

The general syntax of a Linux command is as follows:

**CommandName [flag(s)] [parameter(s)]**

- **CommandName** is the name of the command you want to run.
- **Flag(s)** are optional arguments that modify the behavior of the command.
- **Parameter(s)** are required arguments that specify the command's input.

> **Note:** Remember that case affects the syntax of every Linux command.

## File Management

Every system administrator should be familiar with the very basic commands listed in this section. This collection of Linux commands for managing files is undoubtedly incomplete, but it can serve as a starting point and cover the majority of simple to complicated situations.

### `pwd`

The `pwd` command is used to print the current working directory. The working directory is the directory you are currently in. The output of the `pwd` command is the path to the working directory.

```bash
# Print the current working directory
pwd
```

#### `pwd` Flags

<details>

- `-L` - If the current working directory is a symbolic link, print the path of the symbolic link.
- `-P` - If the current working directory is a symbolic link, print the path of the symbolic link's target.

```bash
# Print the current working directory
pwd -L

# Print the current working directory
pwd -P
```

</details>

### `ls`

`ls` is A system's files and directories are listed using the `ls` command. It will display the contents of the current working directory when run without a flag or argument.

```bash
# List the contents of the current working directory
ls
```

#### `ls` Flags

<details>

- `-a` - List all files, including hidden files.
- `-l` - List files in long format.
- `-h` - List files in human-readable format.
- `-r` - List files in reverse order.
- `-t` - List files by the time they were last modified.

```bash
# List all files, including hidden files
ls -a

# List files in long format
ls -l

# List files in human-readable format
ls -h

# List files in reverse order
ls -r

# List files by the time they were last modified
ls -t
```

</details>

### `cd`

The `cd` command is used to change the current working directory. It takes a directory as an argument. The output of the `cd` command is the new working directory.

```bash
# Change the current working directory to the home directory
cd ~
```

### `mkdir`

The `mkdir` command is used to create a new directory. It takes a directory name as an argument. The output of the `mkdir` command is the newly created directory.

```bash
# Create a new directory named "new-directory"
mkdir new-directory
```

#### `mkdir` Flags

<details>

- `-p` - Create parent directories as needed.

```bash
# Create a new directory named "new-directory" and its parent directories
mkdir -p new-directory
```

</details>

### `touch`

The `touch` command is used to create a new file. It takes a file name as an argument. The output of the `touch` command is the newly created file.

```bash
# Create a new file named "new-file"
touch new-file
```

#### `touch` Flags

<details>

- `-a` - Change the access time of the file.
- `-m` - Change the modification time of the file.
- `-t` - Change the access and modification times of the file.

```bash
# Change the access time of the file
touch -a new-file

# Change the modification time of the file
touch -m new-file

# Change the access and modification times of the file
touch -t new-file
```

</details>

### `cp`

The `cp` command is used to copy files and directories. It takes the source and destination as arguments. The output of the `cp` command is the copied file or directory.

```bash
# Copy the file "file" to the directory "directory"
cp file directory
```

#### `cp` Flags

<details>

- `-r` - Copy directories recursively.

```bash
# Copy the directory "directory" to the directory "new-directory"
cp -r directory new-directory
```

</details>

### `mv`

The `mv` command is used to move files and directories. It takes the source and destination as arguments. The output of the `mv` command is the moved file or directory.

```bash
# Move the file "file" to the directory "directory"
mv file directory
```

#### `mv` Flags

<details>

- `-i` - Prompt before overwriting an existing file.
- `-f` - Force the move of a file, even if it already exists.
- `-u` - Move a file only if the source file is newer than the destination file.

```bash
# Move the file "file" to the directory "directory" and prompt before overwriting an existing file
mv -i file directory

# Move the file "file" to the directory "directory" and force the move of a file, even if it already exists
mv -f file directory

# Move the file "file" to the directory "directory" and move a file only if the source file is newer than the destination file
mv -u file directory
```

</details>

### `rm`

The `rm` command is used to remove files and directories. It takes the file or directory as an argument. The output of the `rm` command is the removed file or directory.

```bash
# Remove the file "file"
rm file
```

#### `rm` Flags

<details>

- `-r` - Remove directories and their contents recursively.
- `-f` - Force remove files without prompting for confirmation.

```bash
# Remove the directory "directory" and its contents recursively
rm -r directory

# Remove the file "file" without prompting for confirmation
rm -f file
```

</details>

### `rmdir`

The `rmdir` command is used to remove empty directories. It takes the directory as an argument. The output of the `rmdir` command is the removed directory.

```bash
# Remove the directory "directory"
rmdir directory
```

#### `rmdir` Flags

<details>

- `-p` - Remove parent directories as needed.

```bash
# Remove the directory "directory" and its parent directories
rmdir -p directory
```

</details>

### `cat`

The `cat` command is used to display the contents of a file. It takes a file as an argument. The output of the `cat` command is the contents of the specified file.

```bash
# Display the contents of the file "file"
cat file
```

#### `cat` Flags

<details>

- `-n` - Number all output lines.

```bash
# Display the contents of the file "file" and number all output lines
cat -n file
```

</details>

### `more`

The `more` command is used to display the contents of a file. It takes a file as an argument. The output of the `more` command is the contents of the specified file.

```bash
# Display the contents of the file "file"
more file
```

#### `more` Flags

<details>

- `-d` - Display the contents of the file "file" and number all output lines.

```bash
# Display the contents of the file "file" and number all output lines
more -d file
```

</details>

### `less`

The `less` command is used to display the contents of a file. It takes a file as an argument. The output of the `less` command is the contents of the specified file.

```bash
# Display the contents of the file "file"
less file
```

#### `less` Flags

<details>

- `-N` - Display the contents of the file "file" and number all output lines.

```bash
# Display the contents of the file "file" and number all output lines
less -N file
```

</details>

### `head`

The `head` command is used to display the first 10 lines of a file. It takes a file as an argument. The output of the `head` command is the first 10 lines of the specified file.

```bash
# Display the first 10 lines of the file "file"
head file
```

#### `head` Flags

<details>

- `-n` - Display the first n lines of the file "file".

```bash
# Display the first 5 lines of the file "file"
head -n 5 file
```

</details>

### `tail`

The `tail` command is used to display the last 10 lines of a file. It takes a file as an argument. The output of the `tail` command is the last 10 lines of the specified file.

```bash
# Display the last 10 lines of the file "file"
tail file
```

#### `tail` Flags

<details>

- `-n` - Display the last n lines of the file "file".

```bash
# Display the last 5 lines of the file "file"
tail -n 5 file
```

</details>

## Finding files and directories

The find command will be used the majority of the time to locate files and folders. But I also enjoy the which command since it provides the binary's path, which is necessary on several occasions when we must run a binary with a complete PATH.

### `find`

The `find` command is used to find files and directories. It takes a directory as an argument. The output of the `find` command is the files and directories that match the specified criteria.

```bash
# Find all files and directories in the current directory
find .
```

#### `find` Flags

<details>

- `-name` - Find files and directories with the specified name.
- `-type` - Find files and directories of the specified type.
- `-size` - Find files and directories of the specified size.
- `-mtime` - Find files and directories that have been modified in the specified number of days.
- `-exec` - Execute the specified command on the found files and directories.

```bash
# Find all files and directories in the current directory with the name "file"
find . -name file

# Find all files and directories in the current directory of the type "file"
find . -type file

# Find all files and directories in the current directory of the size "1M"
find . -size 1M

# Find all files and directories in the current directory that have been modified in the last 5 days
find . -mtime 5

# Find all files and directories in the current directory with the name "file" and execute the command "ls" on them
find . -name file -exec ls {} \;
```

</details>

### `locate`

The `locate` command is used to find files and directories. It takes a file or directory name as an argument. The output of the `locate` command is the files and directories that match the specified criteria.

```bash
# Find all files and directories in the current directory with the name "file"
locate file
```

#### `locate` Flags

<details>

- `-i` - Find files and directories with the specified name, ignoring case.

```bash
# Find all files and directories in the current directory with the name "file" ignoring case
locate -i file
```

</details>

### `which`

The `which` command is used to find the location of a command. It takes a command as an argument. The output of the `which` command is the location of the specified command.

```bash
# Find the location of the command "command"
which command
```

#### `which` Flags

<details>

- `-a` - Find all locations of the specified command.
- `-s` - Find the location of the specified command and return a status code of 0 if the command is found and 1 if the command is not found.

```bash
# Find all locations of the command "command"
which -a command

# Find the location of the command "command" and return a status code of 0 if the command is found and 1 if the command is not found
which -s command
```

</details>

### `whereis`

The `whereis` command is used to find the location of a command. It takes a command as an argument. The output of the `whereis` command is the location of the specified command.

```bash
# Find the location of the command "command"
whereis command
```

#### `whereis` Flags

<details>

- `-b` - Find the location of the specified command and return a status code of 0 if the command is found and 1 if the command is not found.

```bash
# Find the location of the command "command" and return a status code of 0 if the command is found and 1 if the command is not found
whereis -b command
```

</details>

## Check User Information

These are a few of the commands we employ to verify the details of the most recent person to log in, as well as a few others to obtain further information regarding an existing user.

### `whoami`

The `whoami` command is used to display the current user. It takes no arguments. The output of the `whoami` command is the current user.

```bash
# Display the current user
whoami
```

#### `whoami` Flags

<details>

- `-u` - Display the current user and return a status code of 0 if the user is found and 1 if the user is not found.

```bash
# Display the current user and return a status code of 0 if the user is found and 1 if the user is not found
whoami -u
```

</details>

### `who`

The `who` command is used to display the current users. It takes no arguments. The output of the `who` command is the current users.

```bash
# Display the current users
who
```

#### `who` Flags

<details>

- `-u` - Display the current users and return a status code of 0 if the users are found and 1 if the users are not found.

```bash
# Display the current users and return a status code of 0 if the users are found and 1 if the users are not found
who -u
```

</details>

### `w`

The `w` command is used to display the current users. It takes no arguments. The output of the `w` command is the current users.

```bash
# Display the current users
w
```

#### `w` Flags

<details>

- `-u` - Display the current users and return a status code of 0 if the users are found and 1 if the users are not found.

```bash
# Display the current users and return a status code of 0 if the users are found and 1 if the users are not found
w -u
```

</details>

### `id`

The `id` command is used to display the current user. It takes no arguments. The output of the `id` command is the current user.

```bash
# Display the current user
id
```

#### `id` Flags

<details>

- `-u` - Display the current user and return a status code of 0 if the user is found and 1 if the user is not found.

```bash
# Display the current user and return a status code of 0 if the user is found and 1 if the user is not found
id -u
```

</details>

### `groups`

The `groups` command is used to display the current user's groups. It takes no arguments. The output of the `groups` command is the current user's groups.

```bash
# Display the current user's groups
groups
```

## Managing Users and Groups

These are some of the fundamental Linux commands for managing users, including adding, editing, and removing individuals or groups.

### `useradd`

The `useradd` command is used to add a user. It takes a username as an argument. The output of the `useradd` command is the user that was added.

```bash
# Add a user with the username "user"
useradd user
```

#### `useradd` Flags

<details>

- `-c` - Add a user with the specified comment.
- `-d` - Add a user with the specified home directory.
- `-g` - Add a user with the specified primary group.
- `-G` - Add a user with the specified supplementary groups.
- `-m` - Add a user with the specified home directory.
- `-s` - Add a user with the specified shell.
- `-u` - Add a user with the specified user ID.

```bash
# Add a user with the username "user" and comment "comment"
useradd -c "comment" user

# Add a user with the username "user" and home directory "/home/user"
useradd -d /home/user user

# Add a user with the username "user" and primary group "group"
useradd -g group user

# Add a user with the username "user" and supplementary groups "group1", "group2", and "group3"
useradd -G group1,group2,group3 user

# Add a user with the username "user" and home directory "/home/user"
useradd -m /home/user user

# Add a user with the username "user" and shell "/bin/sh"
useradd -s /bin/sh user

# Add a user with the username "user" and user ID "1000"
useradd -u 1000 user
```

</details>

### `userdel`

The `userdel` command is used to delete a user. It takes a username as an argument. The output of the `userdel` command is the user that was deleted.

```bash
# Delete a user with the username "user"
userdel user
```

#### `userdel` Flags

<details>

- `-r` - Delete a user with the specified home directory.

```bash
# Delete a user with the username "user" and home directory "/home/user"
userdel -r /home/user user
```

</details>

### `usermod`

The `usermod` command is used to modify a user. It takes a username as an argument. The output of the `usermod` command is the user that was modified.

```bash
# Modify a user with the username "user"
usermod user
```

#### `usermod` Flags

<details>

- `-c` - Modify a user with the specified comment.
- `-d` - Modify a user with the specified home directory.
- `-e` - Modify a user with the specified expiration date.
- `-g` - Modify a user with the specified primary group.
- `-G` - Modify a user with the specified supplementary groups.
- `-l` - Modify a user with the specified username.
- `-m` - Modify a user with the specified home directory.
- `-s` - Modify a user with the specified shell.
- `-u` - Modify a user with the specified user ID.

```bash
# Modify a user with the username "user" and comment "comment"
usermod -c "comment" user

# Modify a user with the username "user" and home directory "/home/user"
usermod -d /home/user user

# Modify a user with the username "user" and expiration date "2023-01-01"
usermod -e 2023-01-01 user

# Modify a user with the username "user" and primary group "group"
usermod -g group user

# Modify a user with the username "user" and supplementary groups "group1", "group2", and "group3"
usermod -G group1,group2,group3 user

# Modify a user with the username "user" and username "user2"
usermod -l user2 user

# Modify a user with the username "user" and home directory "/home/user"
usermod -m /home/user user

# Modify a user with the username "user" and shell "/bin/sh"
usermod -s /bin/sh user

# Modify a user with the username "user" and user ID "1000"
usermod -u 1000 user
```

</details>

### `passwd`

The `passwd` command is used to change a user's password. It takes a username as an argument. The output of the `passwd` command is the user's password that was changed.

```bash
# Change a user's password with the username "user"
passwd user
```

#### `passwd` Flags

<details>

- `-d` - Change a user's password with the specified username and delete the password.
- `-e` - Change a user's password with the specified username and expire the password.
- `-l` - Change a user's password with the specified username and lock the password.
- `-u` - Change a user's password with the specified username and unlock the password.

```bash
# Change a user's password with the username "user" and delete the password
passwd -d user

# Change a user's password with the username "user" and expire the password
passwd -e user

# Change a user's password with the username "user" and lock the password
passwd -l user

# Change a user's password with the username "user" and unlock the password
passwd -u user
```

</details>

### `groupadd`

The `groupadd` command is used to add a group. It takes a group name as an argument. The output of the `groupadd` command is the group that was added.

```bash
# Add a group with the group name "group"
groupadd group
```

#### `groupadd` Flags

<details>

- `-g` - Add a group with the specified group ID.
- `-r` - Add a group with the specified system group.
- `-f` - Add a group with the specified force.

```bash
# Add a group with the group name "group" and group ID "1000"
groupadd -g 1000 group

# Add a group with the group name "group" and system group
groupadd -r group

# Add a group with the group name "group" and force
groupadd -f group
```

</details>

### `groupdel`

The `groupdel` command is used to delete a group. It takes a group name as an argument. The output of the `groupdel` command is the group that was deleted.

```bash
# Delete a group with the group name "group"
groupdel group
```

#### `groupdel` Flags

<details>

- `-f` - Delete a group with the specified force.

```bash
# Delete a group with the group name "group" and force
groupdel -f group
```

</details>

### `groupmod`

The `groupmod` command is used to modify a group. It takes a group name as an argument. The output of the `groupmod` command is the group that was modified.

```bash
# Modify a group with the group name "group"
groupmod group
```

#### `groupmod` Flags

<details>

- `-g` - Modify a group with the specified group ID.
- `-n` - Modify a group with the specified group name.

```bash
# Modify a group with the group name "group" and group ID "1000"
groupmod -g 1000 group

# Modify a group with the group name "group" and group name "group2"
groupmod -n group2 group
```

</details>

## Managing Permissions

I have simply addressed the fundamental commands that we use to assign, change, and remove rights from files and directories because the topic of Linux permissions is rather broad.

### `chown`

The `chown` command is used to change the owner of a file or directory. It takes a username and a file or directory as arguments. The output of the `chown` command is the file or directory that was changed.

```bash
# Change the owner of a file or directory with the username "user" and file or directory "/home/user/file"
chown user /home/user/file
```

#### `chown` Flags

<details>

- `-R` - Change the owner of a file or directory with the specified recursive.
- `-c` - Change the owner of a file or directory with the specified verbose.
- `-f` - Change the owner of a file or directory with the specified force.
- `-h` - Change the owner of a file or directory with the specified symbolic links.
- `-v` - Change the owner of a file or directory with the specified verbose.

```bash
# Change the owner of a file or directory with the username "user" and file or directory "/home/user/file" and recursive
chown -R user /home/user/file

# Change the owner of a file or directory with the username "user" and file or directory "/home/user/file" and verbose
chown -c user /home/user/file

# Change the owner of a file or directory with the username "user" and file or directory "/home/user/file" and force
chown -f user /home/user/file

# Change the owner of a file or directory with the username "user" and file or directory "/home/user/file" and symbolic links
chown -h user /home/user/file

# Change the owner of a file or directory with the username "user" and file or directory "/home/user/file" and verbose
chown -v user /home/user/file
```

</details>

### `chgrp`

The `chgrp` command is used to change the group of a file or directory. It takes a group name and a file or directory as arguments. The output of the `chgrp` command is the file or directory that was changed.

```bash
# Change the group of a file or directory with the group name "group" and file or directory "/home/user/file"
chgrp group /home/user/file
```

#### `chgrp` Flags

<details>

- `-R` - Change the group of a file or directory with the specified recursive.
- `-c` - Change the group of a file or directory with the specified verbose.
- `-f` - Change the group of a file or directory with the specified force.
- `-h` - Change the group of a file or directory with the specified symbolic links.
- `-v` - Change the group of a file or directory with the specified verbose.

```bash
# Change the group of a file or directory with the group name "group" and file or directory "/home/user/file" and recursive
chgrp -R group /home/user/file

# Change the group of a file or directory with the group name "group" and file or directory "/home/user/file" and verbose
chgrp -c group /home/user/file

# Change the group of a file or directory with the group name "group" and file or directory "/home/user/file" and force
chgrp -f group /home/user/file

# Change the group of a file or directory with the group name "group" and file or directory "/home/user/file" and symbolic links
chgrp -h group /home/user/file

# Change the group of a file or directory with the group name "group" and file or directory "/home/user/file" and verbose
chgrp -v group /home/user/file
```

</details>

### `chmod`

The `chmod` command is used to change the permissions of a file or directory. It takes a permission and a file or directory as arguments. The output of the `chmod` command is the file or directory that was changed.

```bash
# Change the permissions of a file or directory with the permission "777" and file or directory "/home/user/file"
chmod 777 /home/user/file
```

> **Note:** The `chmod` command can also be used to change the permissions of a file or directory using the symbolic notation. 777 is the same as `rwxrwxrwx`. The first character is for the owner, the second character is for the group, and the third character is for everyone else. 7 is the same as `rwx`. 6 is the same as `rw-`. 5 is the same as `r-x`. 4 is the same as `r--`. 3 is the same as `-wx`. 2 is the same as `-w-`. 1 is the same as `--x`. 0 is the same as `---`.

#### `chmod` Flags

<details>

- `-R` - Change the permissions of a file or directory with the specified recursive.
- `-c` - Change the permissions of a file or directory with the specified verbose.
- `-f` - Change the permissions of a file or directory with the specified force.
- `-h` - Change the permissions of a file or directory with the specified symbolic links.
- `-v` - Change the permissions of a file or directory with the specified verbose.

```bash
# Change the permissions of a file or directory with the permission "777" and file or directory "/home/user/file" and recursive
chmod -R 777 /home/user/file

# Change the permissions of a file or directory with the permission "777" and file or directory "/home/user/file" and verbose
chmod -c 777 /home/user/file

# Change the permissions of a file or directory with the permission "777" and file or directory "/home/user/file" and force
chmod -f 777 /home/user/file

# Change the permissions of a file or directory with the permission "777" and file or directory "/home/user/file" and symbolic links
chmod -h 777 /home/user/file

# Change the permissions of a file or directory with the permission "777" and file or directory "/home/user/file" and verbose
chmod -v 777 /home/user/file
```

</details>

### `newgrp`

The `newgrp` command is used to change the group of the current user. It takes a group name as an argument. The output of the `newgrp` command is the group that was changed.

```bash
# Change the group of the current user with the group name "group"
newgrp group
```

#### `newgrp` Flags

<details>

- `-` - Change the group of the current user with the specified login shell.
- `-l` - Change the group of the current user with the specified login shell.
- `-s` - Change the group of the current user with the specified login shell.

```bash
# Change the group of the current user with the group name "group" and login shell
newgrp - group

# Change the group of the current user with the group name "group" and login shell
newgrp -l group

# Change the group of the current user with the group name "group" and login shell
newgrp -s group
```

</details>

### `setfacl`

The `setfacl` command is used to set the access control list of a file or directory. It takes a file or directory as an argument. The output of the `setfacl` command is the file or directory that was changed.

```bash
# Set the access control list of a file or directory with the file or directory "/home/user/file"
setfacl /home/user/file
```

#### `setfacl` Flags

<details>

- `-m` - Set the access control list of a file or directory with the specified modify.
- `-x` - Set the access control list of a file or directory with the specified remove.
- `-b` - Set the access control list of a file or directory with the specified remove all.
- `-k` - Set the access control list of a file or directory with the specified remove default.
- `-R` - Set the access control list of a file or directory with the specified recursive.
- `-c` - Set the access control list of a file or directory with the specified verbose.
- `-f` - Set the access control list of a file or directory with the specified force.
- `-h` - Set the access control list of a file or directory with the specified symbolic links.
- `-v` - Set the access control list of a file or directory with the specified verbose.

```bash
# Set the access control list of a file or directory with the file or directory "/home/user/file" and modify
setfacl -m /home/user/file

# Set the access control list of a file or directory with the file or directory "/home/user/file" and remove
setfacl -x /home/user/file

# Set the access control list of a file or directory with the file or directory "/home/user/file" and remove all
setfacl -b /home/user/file

# Set the access control list of a file or directory with the file or directory "/home/user/file" and remove default
setfacl -k /home/user/file

# Set the access control list of a file or directory with the file or directory "/home/user/file" and recursive
setfacl -R /home/user/file

# Set the access control list of a file or directory with the file or directory "/home/user/file" and verbose
setfacl -c /home/user/file

# Set the access control list of a file or directory with the file or directory "/home/user/file" and force
setfacl -f /home/user/file

# Set the access control list of a file or directory with the file or directory "/home/user/file" and symbolic links
setfacl -h /home/user/file

# Set the access control list of a file or directory with the file or directory "/home/user/file" and verbose
setfacl -v /home/user/file
```

</details>

### `umask`

The `umask` command is used to set the default permissions of a file or directory. It takes a permission as an argument. The output of the `umask` command is the permission that was changed.

```bash
# Set the default permissions of a file or directory with the permission "777"
umask 777
```

#### `umask` Flags

<details>

- `-S` - Set the default permissions of a file or directory with the specified symbolic notation.

```bash
# Set the default permissions of a file or directory with the permission "777" and symbolic notation
umask -S 777
```

</details>

### `getfacl`

The `getfacl` command is used to get the access control list of a file or directory. It takes a file or directory as an argument. The output of the `getfacl` command is the access control list of the file or directory.

```bash
# Get the access control list of a file or directory with the file or directory "/home/user/file"
getfacl /home/user/file
```

#### `getfacl` Flags

<details>

- `-R` - Get the access control list of a file or directory with the specified recursive.
- `-c` - Get the access control list of a file or directory with the specified verbose.
- `-f` - Get the access control list of a file or directory with the specified force.
- `-h` - Get the access control list of a file or directory with the specified symbolic links.
- `-v` - Get the access control list of a file or directory with the specified verbose.

```bash
# Get the access control list of a file or directory with the file or directory "/home/user/file" and recursive
getfacl -R /home/user/file

# Get the access control list of a file or directory with the file or directory "/home/user/file" and verbose
getfacl -c /home/user/file

# Get the access control list of a file or directory with the file or directory "/home/user/file" and force
getfacl -f /home/user/file

# Get the access control list of a file or directory with the file or directory "/home/user/file" and symbolic links
getfacl -h /home/user/file

# Get the access control list of a file or directory with the file or directory "/home/user/file" and verbose
getfacl -v /home/user/file
```

</details>

### `chattr`

The `chattr` command is used to change the attributes of a file or directory. It takes a file or directory as an argument. The output of the `chattr` command is the file or directory that was changed.

```bash
# Change the attributes of a file or directory with the file or directory "/home/user/file"
chattr /home/user/file
```

#### `chattr` Flags

<details>

- `-i` - Change the attributes of a file or directory with the specified immutable.
- `-a` - Change the attributes of a file or directory with the specified append only.
- `-A` - Change the attributes of a file or directory with the specified no append.
- `-d` - Change the attributes of a file or directory with the specified no dump.
- `-D` - Change the attributes of a file or directory with the specified dump.
- `-e` - Change the attributes of a file or directory with the specified extent.
- `-E` - Change the attributes of a file or directory with the specified no extent.
- `-h` - Change the attributes of a file or directory with the specified no follow.
- `-H` - Change the attributes of a file or directory with the specified follow.
- `-j` - Change the attributes of a file or directory with the specified data journaling.
- `-J` - Change the attributes of a file or directory with the specified no data journaling.
- `-s` - Change the attributes of a file or directory with the specified secure deletion.
- `-S` - Change the attributes of a file or directory with the specified no secure deletion.
- `-t` - Change the attributes of a file or directory with the specified notail.
- `-T` - Change the attributes of a file or directory with the specified tail.
- `-u` - Change the attributes of a file or directory with the specified undelete.
- `-U` - Change the attributes of a file or directory with the specified no undelete.
- `-v` - Change the attributes of a file or directory with the specified verbose.

```bash
# Change the attributes of a file or directory with the file or directory "/home/user/file" and immutable
chattr -i /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and append only
chattr -a /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and no append
chattr -A /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and no dump
chattr -d /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and dump
chattr -D /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and extent
chattr -e /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and no extent
chattr -E /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and no follow
chattr -h /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and follow
chattr -H /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and data journaling
chattr -j /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and no data journaling
chattr -J /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and secure deletion
chattr -s /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and no secure deletion
chattr -S /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and notail
chattr -t /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and tail
chattr -T /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and undelete
chattr -u /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and no undelete
chattr -U /home/user/file

# Change the attributes of a file or directory with the file or directory "/home/user/file" and verbose
chattr -v /home/user/file
```

<details>

### `lsattr`

The `lsattr` command is used to list the attributes of a file or directory. It takes a file or directory as an argument. The output of the `lsattr` command is the attributes of the file or directory.

```bash
# List the attributes of a file or directory with the file or directory "/home/user/file"
lsattr /home/user/file
```

#### `lsattr` Flags

<details>

- `-R` - List the attributes of a file or directory with the specified recursive.
- `-a` - List the attributes of a file or directory with the specified all.
- `-d` - List the attributes of a file or directory with the specified directory.
- `-h` - List the attributes of a file or directory with the specified symbolic links.
- `-l` - List the attributes of a file or directory with the specified long format.
- `-v` - List the attributes of a file or directory with the specified verbose.

```bash
# List the attributes of a file or directory with the file or directory "/home/user/file" and recursive
lsattr -R /home/user/file

# List the attributes of a file or directory with the file or directory "/home/user/file" and all
lsattr -a /home/user/file

# List the attributes of a file or directory with the file or directory "/home/user/file" and directory
lsattr -d /home/user/file

# List the attributes of a file or directory with the file or directory "/home/user/file" and symbolic links
lsattr -h /home/user/file

# List the attributes of a file or directory with the file or directory "/home/user/file" and long format
lsattr -l /home/user/file

# List the attributes of a file or directory with the file or directory "/home/user/file" and verbose
lsattr -v /home/user/file
```

</details>

## Check System Information

You must be acquainted with these commands if you want to be a system and Linux administrator. These, such as load, CPU model, hardware model, hardware type, etc., will assist you in identifying the sort of server you are using.

### `uptime`

The `uptime` command is used to display the system uptime. It takes no arguments. The output of the `uptime` command is the system uptime.

```bash
# Display the system uptime
uptime
```

#### `uptime` Flags

<details>

- `-p` - Display the system uptime with the specified pretty format.
- `-s` - Display the system uptime with the specified since.
- `-V` - Display the system uptime with the specified version.

```bash
# Display the system uptime with the specified pretty format
uptime -p

# Display the system uptime with the specified since
uptime -s

# Display the system uptime with the specified version
uptime -V
```

</details>

### `uname`

The `uname` command is used to display the system information. It takes no arguments. The output of the `uname` command is the system information.

```bash
# Display the system information
uname
```

#### `uname` Flags

<details>

- `-a` - Display the system information with the specified all.
- `-m` - Display the system information with the specified machine.
- `-n` - Display the system information with the specified nodename.
- `-r` - Display the system information with the specified kernel release.
- `-s` - Display the system information with the specified kernel name.
- `-v` - Display the system information with the specified kernel version.

```bash
# Display the system information with the specified all
uname -a

# Display the system information with the specified machine
uname -m

# Display the system information with the specified nodename
uname -n

# Display the system information with the specified kernel release
uname -r

# Display the system information with the specified kernel name
uname -s

# Display the system information with the specified kernel version
uname -v
```

</details>

### `lscpu`

The `lscpu` command is used to display the CPU information. It takes no arguments. The output of the `lscpu` command is the CPU information.

```bash
# Display the CPU information
lscpu
```

#### `lscpu` Flags

<details>

- `-a` - Display the CPU information with the specified all.
- `-e` - Display the CPU information with the specified extended.
- `-h` - Display the CPU information with the specified human-readable.
- `-i` - Display the CPU information with the specified size in bytes.
- `-p` - Display the CPU information with the specified physical.
- `-x` - Display the CPU information with the specified XML.

```bash
# Display the CPU information with the specified all
lscpu -a

# Display the CPU information with the specified extended
lscpu -e

# Display the CPU information with the specified human-readable
lscpu -h

# Display the CPU information with the specified size in bytes
lscpu -i

# Display the CPU information with the specified physical
lscpu -p

# Display the CPU information with the specified XML
lscpu -x
```

</details>

### `lspci`

The `lspci` command is used to display the PCI information. It takes no arguments. The output of the `lspci` command is the PCI information.

```bash
# Display the PCI information
lspci
```

#### `lspci` Flags

<details>

- `-a` - Display the PCI information with the specified all.
- `-b` - Display the PCI information with the specified brief.
- `-d` - Display the PCI information with the specified device.
- `-D` - Display the PCI information with the specified dump.
- `-k` - Display the PCI information with the specified kernel.
- `-n` - Display the PCI information with the specified numeric.
- `-s` - Display the PCI information with the specified slot.
- `-t` - Display the PCI information with the specified tree.
- `-v` - Display the PCI information with the specified verbose.

```bash
# Display the PCI information with the specified all
lspci -a

# Display the PCI information with the specified brief
lspci -b

# Display the PCI information with the specified device
lspci -d

# Display the PCI information with the specified dump
lspci -D

# Display the PCI information with the specified kernel
lspci -k

# Display the PCI information with the specified numeric
lspci -n

# Display the PCI information with the specified slot
lspci -s

# Display the PCI information with the specified tree
lspci -t

# Display the PCI information with the specified verbose
lspci -v
```

</details>

### `lsusb`

The `lsusb` command is used to display the USB information. It takes no arguments. The output of the `lsusb` command is the USB information.

```bash
# Display the USB information
lsusb
```

#### `lsusb` Flags

<details>

- `-a` - Display the USB information with the specified all.
- `-b` - Display the USB information with the specified brief.
- `-d` - Display the USB information with the specified device.
- `-D` - Display the USB information with the specified dump.
- `-k` - Display the USB information with the specified kernel.
- `-n` - Display the USB information with the specified numeric.
- `-s` - Display the USB information with the specified slot.
- `-t` - Display the USB information with the specified tree.
- `-v` - Display the USB information with the specified verbose.

```bash
# Display the USB information with the specified all
lsusb -a

# Display the USB information with the specified brief
lsusb -b

# Display the USB information with the specified device
lsusb -d

# Display the USB information with the specified dump
lsusb -D

# Display the USB information with the specified kernel
lsusb -k

# Display the USB information with the specified numeric
lsusb -n

# Display the USB information with the specified slot
lsusb -s

# Display the USB information with the specified tree
lsusb -t

# Display the USB information with the specified verbose
lsusb -v
```

</details>

### `free`

The `free` command is used to display the memory information. It takes no arguments. The output of the `free` command is the memory information.

```bash
# Display the memory information
free
```

#### `free` Flags

<details>

- `-b` - Display the memory information with the specified bytes.
- `-k` - Display the memory information with the specified kilobytes.
- `-m` - Display the memory information with the specified megabytes.
- `-g` - Display the memory information with the specified gigabytes.
- `-h` - Display the memory information with the specified human-readable.
- `-t` - Display the memory information with the specified total.
- `-s` - Display the memory information with the specified seconds.
- `-c` - Display the memory information with the specified continuous.
- `-o` - Display the memory information with the specified omit header.
- `-V` - Display the memory information with the specified version.

```bash
# Display the memory information with the specified bytes
free -b

# Display the memory information with the specified kilobytes
free -k

# Display the memory information with the specified megabytes
free -m

# Display the memory information with the specified gigabytes
free -g

# Display the memory information with the specified human-readable
free -h

# Display the memory information with the specified total
free -t

# Display the memory information with the specified seconds
free -s

# Display the memory information with the specified continuous
free -c

# Display the memory information with the specified omit header
free -o

# Display the memory information with the specified version
free -V
```

</details>

## Configure and Troubleshoot Network

Network engineers fresh to the Linux environment can benefit from reading this section. I made an effort to include the most used network troubleshooting commands. Tcpdump, iperf, netperf, and several more networking tools are also available for debugging network-related problems, but because of their complexity, they are not included in this list.

### `ifconfig`

The `ifconfig` command is used to configure and display the network interface information. It takes no arguments. The output of the `ifconfig` command is the network interface information.

```bash
# Display the network interface information
ifconfig
```

#### `ifconfig` Flags

<details>

- `-a` - Display the network interface information with the specified all.
- `-s` - Display the network interface information with the specified summary.
- `-v` - Display the network interface information with the specified verbose.
- `-V` - Display the network interface information with the specified version.

```bash
# Display the network interface information with the specified all
ifconfig -a

# Display the network interface information with the specified summary
ifconfig -s

# Display the network interface information with the specified verbose
ifconfig -v

# Display the network interface information with the specified version
ifconfig -V
```

</details>

### `ip`

The `ip` command is used to configure and display the network interface information. It takes no arguments. The output of the `ip` command is the network interface information.

```bash
# Display the network interface information
ip
```

#### `ip` Flags

<details>

- `-s` - Display the network interface information with the specified statistics.
- `-d` - Display the network interface information with the specified details.
- `-h` - Display the network interface information with the specified help.
- `-v` - Display the network interface information with the specified verbose.
- `-V` - Display the network interface information with the specified version.

```bash
# Display the network interface information with the specified statistics
ip -s

# Display the network interface information with the specified details
ip -d

# Display the network interface information with the specified help
ip -h

# Display the network interface information with the specified verbose
ip -v

# Display the network interface information with the specified version
ip -V
```

</details>

### `netstat`

The `netstat` command is used to display the network information. It takes no arguments. The output of the `netstat` command is the network information.

```bash
# Display the network information
netstat
```

#### `netstat` Flags

<details>

- `-a` - Display the network information with the specified all.
- `-c` - Display the network information with the specified continuous.
- `-e` - Display the network information with the specified extended.
- `-g` - Display the network information with the specified multicast.
- `-i` - Display the network information with the specified interfaces.
- `-l` - Display the network information with the specified listening.
- `-m` - Display the network information with the specified memory.
- `-n` - Display the network information with the specified numeric.
- `-p` - Display the network information with the specified protocol.
- `-r` - Display the network information with the specified routing.

```bash
# Display the network information with the specified all
netstat -a

# Display the network information with the specified continuous
netstat -c

# Display the network information with the specified extended
netstat -e

# Display the network information with the specified multicast
netstat -g

# Display the network information with the specified interfaces
netstat -i

# Display the network information with the specified listening
netstat -l

# Display the network information with the specified memory
netstat -m

# Display the network information with the specified numeric
netstat -n

# Display the network information with the specified protocol
netstat -p

# Display the network information with the specified routing
netstat -r
```

</details>

### `route`

The `route` command is used to display the routing information. It takes no arguments. The output of the `route` command is the routing information.

```bash
# Display the routing information
route
```

#### `route` Flags

<details>

- `-n` - Display the routing information with the specified numeric.
- `-v` - Display the routing information with the specified verbose.
- `-V` - Display the routing information with the specified version.

```bash
# Display the routing information with the specified numeric
route -n

# Display the routing information with the specified verbose
route -v

# Display the routing information with the specified version
route -V
```

</details>

### `ethtool`

The `ethtool` command is used to display the network interface information. It takes no arguments. The output of the `ethtool` command is the network interface information.

```bash
# Display the network interface information
ethtool
```

#### `ethtool` Flags

<details>

- `-a` - Display the network interface information with the specified all.
- `-i` - Display the network interface information with the specified interface.
- `-k` - Display the network interface information with the specified kernel.
- `-S` - Display the network interface information with the specified statistics.
- `-c` - Display the network interface information with the specified command.
- `-h` - Display the network interface information with the specified help.
- `-V` - Display the network interface information with the specified version.

```bash
# Display the network interface information with the specified all
ethtool -a

# Display the network interface information with the specified interface
ethtool -i

# Display the network interface information with the specified kernel
ethtool -k

# Display the network interface information with the specified statistics
ethtool -S

# Display the network interface information with the specified command
ethtool -c

# Display the network interface information with the specified help
ethtool -h

# Display the network interface information with the specified version
ethtool -V
```

</details>

### `tcpdump`

The `tcpdump` command is used to capture and display the network packets. It takes no arguments. The output of the `tcpdump` command is the network packets.

```bash
# Capture and display the network packets
tcpdump
```

#### `tcpdump` Flags

<details>

- `-c` - Capture and display the network packets with the specified count.
- `-i` - Capture and display the network packets with the specified interface.
- `-n` - Capture and display the network packets with the specified numeric.
- `-r` - Capture and display the network packets with the specified read.
- `-s` - Capture and display the network packets with the specified snapshot.
- `-w` - Capture and display the network packets with the specified write.
- `-A` - Capture and display the network packets with the specified ASCII.
- `-C` - Capture and display the network packets with the specified file.
- `-D` - Capture and display the network packets with the specified devices.
- `-F` - Capture and display the network packets with the specified output.
- `-G` - Capture and display the network packets with the specified rotate.
- `-H` - Capture and display the network packets with the specified hex.
- `-L` - Capture and display the network packets with the specified follow.
- `-N` - Capture and display the network packets with the specified no.
- `-S` - Capture and display the network packets with the specified size.
- `-T` - Capture and display the network packets with the specified timestamp.
- `-Z` - Capture and display the network packets with the specified user.
- `-d` - Capture and display the network packets with the specified decode.
- `-V` - Capture and display the network packets with the specified version.

```bash
# Capture and display the network packets with the specified count
tcpdump -c

# Capture and display the network packets with the specified interface
tcpdump -i

# Capture and display the network packets with the specified numeric
tcpdump -n

# Capture and display the network packets with the specified read
tcpdump -r

# Capture and display the network packets with the specified snapshot
tcpdump -s

# Capture and display the network packets with the specified write
tcpdump -w

# Capture and display the network packets with the specified ASCII
tcpdump -A

# Capture and display the network packets with the specified file
tcpdump -C

# Capture and display the network packets with the specified devices
tcpdump -D

# Capture and display the network packets with the specified output
tcpdump -F

# Capture and display the network packets with the specified rotate
tcpdump -G

# Capture and display the network packets with the specified hex
tcpdump -H

# Capture and display the network packets with the specified follow
tcpdump -L

# Capture and display the network packets with the specified no
tcpdump -N

# Capture and display the network packets with the specified size
tcpdump -S

# Capture and display the network packets with the specified timestamp
tcpdump -T

# Capture and display the network packets with the specified user
tcpdump -Z

# Capture and display the network packets with the specified decode
tcpdump -d

# Capture and display the network packets with the specified version
tcpdump -V
```

</details>

### `ping`

The `ping` command is used to send the ICMP echo request packets to the specified host. It takes no arguments. The output of the `ping` command is the ICMP echo reply packets.

```bash
# Send the ICMP echo request packets to the specified host
ping <host>
```

#### `ping` Flags

<details>

- `-c` - Send the ICMP echo request packets to the specified host with the specified count.
- `-i` - Send the ICMP echo request packets to the specified host with the specified interval.
- `-I` - Send the ICMP echo request packets to the specified host with the specified interface.
- `-s` - Send the ICMP echo request packets to the specified host with the specified size.
- `-t` - Send the ICMP echo request packets to the specified host with the specified ttl.
- `-v` - Send the ICMP echo request packets to the specified host with the specified verbose.
- `-V` - Send the ICMP echo request packets to the specified host with the specified version.

```bash
# Send the ICMP echo request packets to the specified host with the specified count
ping -c <host>

# Send the ICMP echo request packets to the specified host with the specified interval
ping -i <host>

# Send the ICMP echo request packets to the specified host with the specified interface
ping -I <host>

# Send the ICMP echo request packets to the specified host with the specified size
ping -s <host>

# Send the ICMP echo request packets to the specified host with the specified ttl
ping -t <host>

# Send the ICMP echo request packets to the specified host with the specified verbose
ping -v <host>

# Send the ICMP echo request packets to the specified host with the specified version
ping -V <host>
```

</details>

### `traceroute`

The `traceroute` command is used to trace the route to the specified host. It takes no arguments. The output of the `traceroute` command is the route to the specified host.

```bash
# Trace the route to the specified host
traceroute <host>
```

#### `traceroute` Flags

<details>

- `-d` - Trace the route to the specified host with the specified debug.
- `-f` - Trace the route to the specified host with the specified first.
- `-g` - Trace the route to the specified host with the specified gateway.
- `-I` - Trace the route to the specified host with the specified interface.
- `-m` - Trace the route to the specified host with the specified max.
- `-n` - Trace the route to the specified host with the specified numeric.
- `-p` - Trace the route to the specified host with the specified port.
- `-q` - Trace the route to the specified host with the specified query.
- `-s` - Trace the route to the specified host with the specified source.
- `-t` - Trace the route to the specified host with the specified ttl.
- `-v` - Trace the route to the specified host with the specified verbose.
- `-V` - Trace the route to the specified host with the specified version.

```bash
# Trace the route to the specified host with the specified debug
traceroute -d <host>

# Trace the route to the specified host with the specified first
traceroute -f <host>

# Trace the route to the specified host with the specified gateway
traceroute -g <host>

# Trace the route to the specified host with the specified interface
traceroute -I <host>

# Trace the route to the specified host with the specified max
traceroute -m <host>

# Trace the route to the specified host with the specified numeric
traceroute -n <host>

# Trace the route to the specified host with the specified port
traceroute -p <host>

# Trace the route to the specified host with the specified query
traceroute -q <host>

# Trace the route to the specified host with the specified source
traceroute -s <host>

# Trace the route to the specified host with the specified ttl
traceroute -t <host>

# Trace the route to the specified host with the specified verbose
traceroute -v <host>

# Trace the route to the specified host with the specified version
traceroute -V <host>
```

</details>

### `dig`

The `dig` command is used to query the DNS name servers. It takes no arguments. The output of the `dig` command is the DNS name servers.

```bash
# Query the DNS name servers
dig <host>
```

#### `dig` Flags

<details>

- `-a` - Query the DNS name servers with the specified all.
- `-b` - Query the DNS name servers with the specified bind.
- `-c` - Query the DNS name servers with the specified class.
- `-d` - Query the DNS name servers with the specified debug.
- `-f` - Query the DNS name servers with the specified file.
- `-i` - Query the DNS name servers with the specified interface.
- `-k` - Query the DNS name servers with the specified key.
- `-m` - Query the DNS name servers with the specified max.
- `-n` - Query the DNS name servers with the specified numeric.
- `-p` - Query the DNS name servers with the specified port.
- `-q` - Query the DNS name servers with the specified query.
- `-r` - Query the DNS name servers with the specified recurse.
- `-s` - Query the DNS name servers with the specified server.
- `-t` - Query the DNS name servers with the specified type.
- `-v` - Query the DNS name servers with the specified verbose.
- `-V` - Query the DNS name servers with the specified version.

```bash
# Query the DNS name servers with the specified all
dig -a <host>

# Query the DNS name servers with the specified bind
dig -b <host>

# Query the DNS name servers with the specified class
dig -c <host>

# Query the DNS name servers with the specified debug
dig -d <host>

# Query the DNS name servers with the specified file
dig -f <host>

# Query the DNS name servers with the specified interface
dig -i <host>

# Query the DNS name servers with the specified key
dig -k <host>

# Query the DNS name servers with the specified max
dig -m <host>

# Query the DNS name servers with the specified numeric
dig -n <host>

# Query the DNS name servers with the specified port
dig -p <host>

# Query the DNS name servers with the specified query
dig -q <host>

# Query the DNS name servers with the specified recurse
dig -r <host>

# Query the DNS name servers with the specified server
dig -s <host>

# Query the DNS name servers with the specified type
dig -t <host>

# Query the DNS name servers with the specified verbose
dig -v <host>

# Query the DNS name servers with the specified version
dig -V <host>
```

</details>

### `nslookup`

The `nslookup` command is used to query the DNS name servers. It takes no arguments. The output of the `nslookup` command is the DNS name servers.

```bash
# Query the DNS name servers
nslookup <host>
```

#### `nslookup` Flags

<details>

- `-a` - Query the DNS name servers with the specified all.
- `-b` - Query the DNS name servers with the specified bind.
- `-c` - Query the DNS name servers with the specified class.
- `-d` - Query the DNS name servers with the specified debug.
- `-f` - Query the DNS name servers with the specified file.
- `-i` - Query the DNS name servers with the specified interface.
- `-k` - Query the DNS name servers with the specified key.
- `-m` - Query the DNS name servers with the specified max.
- `-n` - Query the DNS name servers with the specified numeric.
- `-p` - Query the DNS name servers with the specified port.
- `-q` - Query the DNS name servers with the specified query.
- `-r` - Query the DNS name servers with the specified recurse.
- `-s` - Query the DNS name servers with the specified server.
- `-t` - Query the DNS name servers with the specified type.
- `-v` - Query the DNS name servers with the specified verbose.
- `-V` - Query the DNS name servers with the specified version.

```bash
# Query the DNS name servers with the specified all
nslookup -a <host>

# Query the DNS name servers with the specified bind
nslookup -b <host>

# Query the DNS name servers with the specified class
nslookup -c <host>

# Query the DNS name servers with the specified debug
nslookup -d <host>

# Query the DNS name servers with the specified file
nslookup -f <host>

# Query the DNS name servers with the specified interface
nslookup -i <host>

# Query the DNS name servers with the specified key
nslookup -k <host>

# Query the DNS name servers with the specified max
nslookup -m <host>

# Query the DNS name servers with the specified numeric
nslookup -n <host>

# Query the DNS name servers with the specified port
nslookup -p <host>

# Query the DNS name servers with the specified query
nslookup -q <host>

# Query the DNS name servers with the specified recurse
nslookup -r <host>

# Query the DNS name servers with the specified server
nslookup -s <host>

# Query the DNS name servers with the specified type
nslookup -t <host>

# Query the DNS name servers with the specified verbose
nslookup -v <host>

# Query the DNS name servers with the specified version
nslookup -V <host>
```

</details>

### `host`

The `host` command is used to query the DNS name servers. It takes no arguments. The output of the `host` command is the DNS name servers.

```bash
# Query the DNS name servers
host <host>
```

#### `host` Flags

<details>

- `-a` - Query the DNS name servers with the specified all.
- `-b` - Query the DNS name servers with the specified bind.
- `-c` - Query the DNS name servers with the specified class.
- `-d` - Query the DNS name servers with the specified debug.
- `-f` - Query the DNS name servers with the specified file.
- `-i` - Query the DNS name servers with the specified interface.
- `-k` - Query the DNS name servers with the specified key.
- `-m` - Query the DNS name servers with the specified max.
- `-n` - Query the DNS name servers with the specified numeric.
- `-p` - Query the DNS name servers with the specified port.
- `-q` - Query the DNS name servers with the specified query.
- `-r` - Query the DNS name servers with the specified recurse.
- `-s` - Query the DNS name servers with the specified server.
- `-t` - Query the DNS name servers with the specified type.
- `-v` - Query the DNS name servers with the specified verbose.
- `-V` - Query the DNS name servers with the specified version.

```bash
# Query the DNS name servers with the specified all
host -a <host>

# Query the DNS name servers with the specified bind
host -b <host>

# Query the DNS name servers with the specified class
host -c <host>

# Query the DNS name servers with the specified debug
host -d <host>

# Query the DNS name servers with the specified file
host -f <host>

# Query the DNS name servers with the specified interface
host -i <host>

# Query the DNS name servers with the specified key
host -k <host>

# Query the DNS name servers with the specified max
host -m <host>

# Query the DNS name servers with the specified numeric
host -n <host>

# Query the DNS name servers with the specified port
host -p <host>

# Query the DNS name servers with the specified query
host -q <host>

# Query the DNS name servers with the specified recurse
host -r <host>

# Query the DNS name servers with the specified server
host -s <host>

# Query the DNS name servers with the specified type
host -t <host>

# Query the DNS name servers with the specified verbose
host -v <host>

# Query the DNS name servers with the specified version
host -V <host>
```

</details>

### `drill`

The `drill` command is used to query the DNS name servers. It takes no arguments. The output of the `drill` command is the DNS name servers.

```bash
# Query the DNS name servers
drill <host>
```

#### `drill` Flags

<details>

- `-a` - Query the DNS name servers with the specified all.
- `-b` - Query the DNS name servers with the specified bind.
- `-c` - Query the DNS name servers with the specified class.
- `-d` - Query the DNS name servers with the specified debug.
- `-f` - Query the DNS name servers with the specified file.
- `-i` - Query the DNS name servers with the specified interface.
- `-k` - Query the DNS name servers with the specified key.
- `-m` - Query the DNS name servers with the specified max.
- `-n` - Query the DNS name servers with the specified numeric.
- `-p` - Query the DNS name servers with the specified port.
- `-q` - Query the DNS name servers with the specified query.
- `-r` - Query the DNS name servers with the specified recurse.
- `-s` - Query the DNS name servers with the specified server.
- `-t` - Query the DNS name servers with the specified type.
- `-v` - Query the DNS name servers with the specified verbose.
- `-V` - Query the DNS name servers with the specified version.

```bash
# Query the DNS name servers with the specified all
drill -a <host>

# Query the DNS name servers with the specified bind
drill -b <host>

# Query the DNS name servers with the specified class
drill -c <host>

# Query the DNS name servers with the specified debug
drill -d <host>

# Query the DNS name servers with the specified file
drill -f <host>

# Query the DNS name servers with the specified interface
drill -i <host>

# Query the DNS name servers with the specified key
drill -k <host>

# Query the DNS name servers with the specified max
drill -m <host>

# Query the DNS name servers with the specified numeric
drill -n <host>

# Query the DNS name servers with the specified port
drill -p <host>

# Query the DNS name servers with the specified query
drill -q <host>

# Query the DNS name servers with the specified recurse
drill -r <host>

# Query the DNS name servers with the specified server
drill -s <host>

# Query the DNS name servers with the specified type
drill -t <host>

# Query the DNS name servers with the specified verbose
drill -v <host>

# Query the DNS name servers with the specified version
drill -V <host>
```

</details>

### `ss`

The `ss` command is used to query the DNS name servers. It takes no arguments. The output of the `ss` command is the DNS name servers.

```bash
# Query the DNS name servers
ss <host>
```

#### `ss` Flags

<details>

- `-a` - Query the DNS name servers with the specified all.
- `-b` - Query the DNS name servers with the specified bind.
- `-c` - Query the DNS name servers with the specified class.
- `-d` - Query the DNS name servers with the specified debug.
- `-f` - Query the DNS name servers with the specified file.
- `-i` - Query the DNS name servers with the specified interface.
- `-k` - Query the DNS name servers with the specified key.
- `-m` - Query the DNS name servers with the specified max.
- `-n` - Query the DNS name servers with the specified numeric.
- `-p` - Query the DNS name servers with the specified port.
- `-q` - Query the DNS name servers with the specified query.
- `-r` - Query the DNS name servers with the specified recurse.
- `-s` - Query the DNS name servers with the specified server.
- `-t` - Query the DNS name servers with the specified type.
- `-v` - Query the DNS name servers with the specified verbose.
- `-V` - Query the DNS name servers with the specified version.

```bash
# Query the DNS name servers with the specified all
ss -a <host>

# Query the DNS name servers with the specified bind
ss -b <host>

# Query the DNS name servers with the specified class
ss -c <host>

# Query the DNS name servers with the specified debug
ss -d <host>

# Query the DNS name servers with the specified file
ss -f <host>

# Query the DNS name servers with the specified interface
ss -i <host>

# Query the DNS name servers with the specified key
ss -k <host>

# Query the DNS name servers with the specified max
ss -m <host>

# Query the DNS name servers with the specified numeric
ss -n <host>

# Query the DNS name servers with the specified port
ss -p <host>

# Query the DNS name servers with the specified query
ss -q <host>

# Query the DNS name servers with the specified recurse
ss -r <host>

# Query the DNS name servers with the specified server
ss -s <host>

# Query the DNS name servers with the specified type
ss -t <host>

# Query the DNS name servers with the specified verbose
ss -v <host>

# Query the DNS name servers with the specified version
ss -V <host>
```

</details>

### `wget`

The `wget` command is used to query the DNS name servers. It takes no arguments. The output of the `wget` command is the DNS name servers.

```bash
# Query the DNS name servers
wget <host>
```

#### `wget` Flags

<details>

- `-a` - Query the DNS name servers with the specified all.
- `-b` - Query the DNS name servers with the specified bind.
- `-c` - Query the DNS name servers with the specified class.
- `-d` - Query the DNS name servers with the specified debug.
- `-f` - Query the DNS name servers with the specified file.
- `-i` - Query the DNS name servers with the specified interface.
- `-k` - Query the DNS name servers with the specified key.
- `-m` - Query the DNS name servers with the specified max.
- `-n` - Query the DNS name servers with the specified numeric.
- `-p` - Query the DNS name servers with the specified port.
- `-q` - Query the DNS name servers with the specified query.
- `-r` - Query the DNS name servers with the specified recurse.
- `-s` - Query the DNS name servers with the specified server.
- `-t` - Query the DNS name servers with the specified type.
- `-v` - Query the DNS name servers with the specified verbose.
- `-V` - Query the DNS name servers with the specified version.

```bash
# Query the DNS name servers with the specified all
wget -a <host>

# Query the DNS name servers with the specified bind
wget -b <host>

# Query the DNS name servers with the specified class
wget -c <host>

# Query the DNS name servers with the specified debug
wget -d <host>

# Query the DNS name servers with the specified file
wget -f <host>

# Query the DNS name servers with the specified interface
wget -i <host>

# Query the DNS name servers with the specified key
wget -k <host>

# Query the DNS name servers with the specified max
wget -m <host>

# Query the DNS name servers with the specified numeric
wget -n <host>

# Query the DNS name servers with the specified port
wget -p <host>

# Query the DNS name servers with the specified query
wget -q <host>

# Query the DNS name servers with the specified recurse
wget -r <host>

# Query the DNS name servers with the specified server
wget -s <host>

# Query the DNS name servers with the specified type
wget -t <host>

# Query the DNS name servers with the specified verbose
wget -v <host>

# Query the DNS name servers with the specified version
wget -V <host>
```

</details>

### `curl`

The `curl` command is used to query the DNS name servers. It takes no arguments. The output of the `curl` command is the DNS name servers.

```bash
# Query the DNS name servers
curl <host>
```

#### `curl` Flags

<details>

- `-a` - Query the DNS name servers with the specified all.
- `-b` - Query the DNS name servers with the specified bind.
- `-c` - Query the DNS name servers with the specified class.
- `-d` - Query the DNS name servers with the specified debug.
- `-f` - Query the DNS name servers with the specified file.
- `-i` - Query the DNS name servers with the specified interface.
- `-k` - Query the DNS name servers with the specified key.
- `-m` - Query the DNS name servers with the specified max.
- `-n` - Query the DNS name servers with the specified numeric.
- `-p` - Query the DNS name servers with the specified port.
- `-q` - Query the DNS name servers with the specified query.
- `-r` - Query the DNS name servers with the specified recurse.
- `-s` - Query the DNS name servers with the specified server.
- `-t` - Query the DNS name servers with the specified type.
- `-v` - Query the DNS name servers with the specified verbose.
- `-V` - Query the DNS name servers with the specified version.

```bash
# Query the DNS name servers with the specified all
curl -a <host>

# Query the DNS name servers with the specified bind
curl -b <host>

# Query the DNS name servers with the specified class
curl -c <host>

# Query the DNS name servers with the specified debug
curl -d <host>

# Query the DNS name servers with the specified file
curl -f <host>

# Query the DNS name servers with the specified interface
curl -i <host>

# Query the DNS name servers with the specified key
curl -k <host>

# Query the DNS name servers with the specified max
curl -m <host>

# Query the DNS name servers with the specified numeric
curl -n <host>

# Query the DNS name servers with the specified port
curl -p <host>

# Query the DNS name servers with the specified query
curl -q <host>

# Query the DNS name servers with the specified recurse
curl -r <host>

# Query the DNS name servers with the specified server
curl -s <host>

# Query the DNS name servers with the specified type
curl -t <host>

# Query the DNS name servers with the specified verbose
curl -v <host>

# Query the DNS name servers with the specified version
curl -V <host>
```

</details>

### `nmap`

The `nmap` command is used to query the DNS name servers. It takes no arguments. The output of the `nmap` command is the DNS name servers.

```bash
# Query the DNS name servers
nmap <host>
```

#### `nmap` Flags

<details>

- `-A` - Query the DNS name servers with the specified all.
- `-V` - Query the DNS name servers with the specified version.

```bash
# Query the DNS name servers with the specified all
nmap -A <host>

# Query the DNS name servers with the specified version
nmap -V <host>
```

</details>

## Manage System Processes

You may control Linux processes and troubleshoot any server resource-related issues with the use of these Linux commands. These commands let you keep an eye on your server's RAM, CPU, disk IO, and other resources.

### `ps`

The `ps` command is used to list the processes running on the system. It takes no arguments. The output of the `ps` command is the processes running on the system.

```bash
# List the processes running on the system
ps
```

#### `ps` Flags

<details>

- `-a` - List the processes running on the system with the specified all.
- `-f` - List the processes running on the system with the specified full.
- `-l` - List the processes running on the system with the specified long.
- `-u` - List the processes running on the system with the specified user.

```bash
# List the processes running on the system with the specified all
ps -a

# List the processes running on the system with the specified full
ps -f

# List the processes running on the system with the specified long
ps -l

# List the processes running on the system with the specified user
ps -u
```

</details>

### `top`

The `top` command is used to display the processes running on the system. It takes no arguments. The output of the `top` command is the processes running on the system.

```bash
# Display the processes running on the system
top
```

#### `top` Flags

<details>

- `-b` - Display the processes running on the system with the specified batch.
- `-c` - Display the processes running on the system with the specified command.
- `-d` - Display the processes running on the system with the specified delay.
- `-h` - Display the processes running on the system with the specified help.
- `-i` - Display the processes running on the system with the specified idle.
- `-n` - Display the processes running on the system with the specified iterations.
- `-p` - Display the processes running on the system with the specified pid.
- `-s` - Display the processes running on the system with the specified sort.
- `-u` - Display the processes running on the system with the specified user.
- `-v` - Display the processes running on the system with the specified version.

```bash
# Display the processes running on the system with the specified batch
top -b

# Display the processes running on the system with the specified command
top -c

# Display the processes running on the system with the specified delay
top -d

# Display the processes running on the system with the specified help
top -h

# Display the processes running on the system with the specified idle
top -i

# Display the processes running on the system with the specified iterations
top -n

# Display the processes running on the system with the specified pid
top -p

# Display the processes running on the system with the specified sort
top -s

# Display the processes running on the system with the specified user
top -u

# Display the processes running on the system with the specified version
top -v
```

</details>

### `kill`

The `kill` command is used to kill a process. It takes one argument. The output of the `kill` command is the killed process.

```bash
# Kill a process
kill <pid>
```

#### `kill` Flags

<details>

- `-l` - Kill a process with the specified list.

```bash
# Kill a process with the specified list
kill -l <pid>
```

</details>

### `killall`

The `killall` command is used to kill a process. It takes one argument. The output of the `killall` command is the killed process.

```bash
# Kill a process
killall <process>
```

#### `killall` Flags

<details>

- `-l` - Kill a process with the specified list.

```bash
# Kill a process with the specified list
killall -l <process>
```

</details>

### `pkill`

The `pkill` command is used to kill a process. It takes one argument. The output of the `pkill` command is the killed process.

```bash
# Kill a process
pkill <process>
```

#### `pkill` Flags

<details>

- `-l` - Kill a process with the specified list.

```bash
# Kill a process with the specified list
pkill -l <process>
```

</details>

### `pgrep`

The `pgrep` command is used to kill a process. It takes one argument. The output of the `pgrep` command is the killed process.

```bash
# Kill a process
pgrep <process>
```

#### `pgrep` Flags

<details>

- `-l` - Kill a process with the specified list.

```bash
# Kill a process with the specified list
pgrep -l <process>
```

</details>

### `nice`

The `nice` command is used to run a process with a nice value. It takes one argument. The output of the `nice` command is the process with a nice value.

```bash
# Run a process with a nice value
nice <process>
```

#### `nice` Flags

<details>

- `-n` - Run a process with a nice value with the specified nice.
- `-p` - Run a process with a nice value with the specified pid.
- `-v` - Run a process with a nice value with the specified verbose.

```bash
# Run a process with a nice value with the specified nice
nice -n <process>

# Run a process with a nice value with the specified pid
nice -p <process>

# Run a process with a nice value with the specified verbose
nice -v <process>
```

</details>

### `renice`

The `renice` command is used to run a process with a nice value. It takes one argument. The output of the `renice` command is the process with a nice value.

```bash
# Run a process with a nice value
renice <process>
```

#### `renice` Flags

<details>

- `-n` - Run a process with a nice value with the specified nice.
- `-p` - Run a process with a nice value with the specified pid.
- `-v` - Run a process with a nice value with the specified verbose.

```bash
# Run a process with a nice value with the specified nice
renice -n <process>

# Run a process with a nice value with the specified pid
renice -p <process>

# Run a process with a nice value with the specified verbose
renice -v <process>
```

</details>

### `at`

The `at` command is used to run a process at a specified time. It takes one argument. The output of the `at` command is the process at a specified time.

```bash
# Run a process at a specified time
at <time>
```

#### `at` Flags

<details>

- `-f` - Run a process at a specified time with the specified file.
- `-q` - Run a process at a specified time with the specified queue.
- `-r` - Run a process at a specified time with the specified remove.
- `-v` - Run a process at a specified time with the specified verbose.

```bash
# Run a process at a specified time with the specified file
at -f <time>

# Run a process at a specified time with the specified queue
at -q <time>

# Run a process at a specified time with the specified remove
at -r <time>

# Run a process at a specified time with the specified verbose
at -v <time>
```

</details>

### `atq`

The `atq` command is used to run a process at a specified time. It takes one argument. The output of the `atq` command is the process at a specified time.

```bash
# Run a process at a specified time
atq <time>
```

#### `atq` Flags

<details>

- `-c` - Run a process at a specified time with the specified clear.
- `-q` - Run a process at a specified time with the specified queue.
- `-v` - Run a process at a specified time with the specified verbose.

```bash
# Run a process at a specified time with the specified clear
atq -c <time>

# Run a process at a specified time with the specified queue
atq -q <time>

# Run a process at a specified time with the specified verbose
atq -v <time>
```

</details>

### `atrm`

The `atrm` command is used to run a process at a specified time. It takes one argument. The output of the `atrm` command is the process at a specified time.

```bash
# Run a process at a specified time
atrm <time>
```

#### `atrm` Flags

<details>

- `-v` - Run a process at a specified time with the specified verbose.

```bash
# Run a process at a specified time with the specified verbose
atrm -v <time>
```

</details>

### `batch`

The `batch` command is used to run a process at a specified time. It takes one argument. The output of the `batch` command is the process at a specified time.

```bash
# Run a process at a specified time
batch <time>
```

#### `batch` Flags

<details>

- `-f` - Run a process at a specified time with the specified file.
- `-q` - Run a process at a specified time with the specified queue.
- `-r` - Run a process at a specified time with the specified remove.
- `-v` - Run a process at a specified time with the specified verbose.

```bash
# Run a process at a specified time with the specified file
batch -f <time>

# Run a process at a specified time with the specified queue
batch -q <time>

# Run a process at a specified time with the specified remove
batch -r <time>

# Run a process at a specified time with the specified verbose
batch -v <time>
```

</details>

### `crontab`

The `crontab` command is used to run a process at a specified time. It takes one argument. The output of the `crontab` command is the process at a specified time.

```bash
# Run a process at a specified time
crontab <time>
```

#### `crontab` Flags

<details>

- `-e` - Run a process at a specified time with the specified edit.
- `-l` - Run a process at a specified time with the specified list.
- `-r` - Run a process at a specified time with the specified remove.

```bash
# Run a process at a specified time with the specified edit
crontab -e <time>

# Run a process at a specified time with the specified list
crontab -l <time>

# Run a process at a specified time with the specified remove
crontab -r <time>
```

</details>

### `iostat`

The `iostat` command is used to run a process at a specified time. It takes one argument. The output of the `iostat` command is the process at a specified time.

```bash
# Run a process at a specified time
iostat <time>
```

#### `iostat` Flags

<details>

- `-c` - Run a process at a specified time with the specified count.
- `-d` - Run a process at a specified time with the specified device.
- `-h` - Run a process at a specified time with the specified help.
- `-k` - Run a process at a specified time with the specified kilobytes.
- `-m` - Run a process at a specified time with the specified megabytes.
- `-p` - Run a process at a specified time with the specified partition.
- `-q` - Run a process at a specified time with the specified quiet.
- `-t` - Run a process at a specified time with the specified time.
- `-x` - Run a process at a specified time with the specified extended.
- `-y` - Run a process at a specified time with the specified summary.

```bash
# Run a process at a specified time with the specified count
iostat -c <time>

# Run a process at a specified time with the specified device
iostat -d <time>

# Run a process at a specified time with the specified help
iostat -h <time>

# Run a process at a specified time with the specified kilobytes
iostat -k <time>

# Run a process at a specified time with the specified megabytes
iostat -m <time>

# Run a process at a specified time with the specified partition
iostat -p <time>

# Run a process at a specified time with the specified quiet
iostat -q <time>

# Run a process at a specified time with the specified time
iostat -t <time>

# Run a process at a specified time with the specified extended
iostat -x <time>

# Run a process at a specified time with the specified summary
iostat -y <time>
```

</details>

### `vmstat`

The `vmstat` command is used to run a process at a specified time. It takes one argument. The output of the `vmstat` command is the process at a specified time.

```bash
# Run a process at a specified time
vmstat <time>
```

#### `vmstat` Flags

<details>

- `-a` - Run a process at a specified time with the specified all.
- `-d` - Run a process at a specified time with the specified disk.
- `-f` - Run a process at a specified time with the specified file.
- `-h` - Run a process at a specified time with the specified help.
- `-i` - Run a process at a specified time with the specified interrupt.

```bash
# Run a process at a specified time with the specified all
vmstat -a <time>

# Run a process at a specified time with the specified disk
vmstat -d <time>

# Run a process at a specified time with the specified file
vmstat -f <time>

# Run a process at a specified time with the specified help
vmstat -h <time>

# Run a process at a specified time with the specified interrupt
vmstat -i <time>
```

</details>

### `sar`

The `sar` command is used to run a process at a specified time. It takes one argument. The output of the `sar` command is the process at a specified time.

```bash
# Run a process at a specified time
sar <time>
```

#### `sar` Flags

<details>

- `-A` - Run a process at a specified time with the specified all.
- `-B` - Run a process at a specified time with the specified block.
- `-b` - Run a process at a specified time with the specified boot.
- `-d` - Run a process at a specified time with the specified device.
- `-e` - Run a process at a specified time with the specified error.
- `-f` - Run a process at a specified time with the specified file.
- `-h` - Run a process at a specified time with the specified help.
- `-H` - Run a process at a specified time with the specified huge.
- `-I` - Run a process at a specified time with the specified interrupt.
- `-j` - Run a process at a specified time with the specified job.
- `-k` - Run a process at a specified time with the specified kernel.
- `-l` - Run a process at a specified time with the specified lock.
- `-m` - Run a process at a specified time with the specified memory.
- `-n` - Run a process at a specified time with the specified network.
- `-o` - Run a process at a specified time with the specified output.
- `-p` - Run a process at a specified time with the specified partition.
- `-q` - Run a process at a specified time with the specified queue.
- `-r` - Run a process at a specified time with the specified remove.
- `-R` - Run a process at a specified time with the specified reboot.
- `-S` - Run a process at a specified time with the specified swap.
- `-s` - Run a process at a specified time with the specified system.
- `-t` - Run a process at a specified time with the specified time.
- `-u` - Run a process at a specified time with the specified user.
- `-v` - Run a process at a specified time with the specified version.
- `-w` - Run a process at a specified time with the specified wait.
- `-W` - Run a process at a specified time with the specified watchdog.
- `-x` - Run a process at a specified time with the specified extended.
- `-y` - Run a process at a specified time with the specified summary.

```bash
# Run a process at a specified time with the specified all
sar -A <time>

# Run a process at a specified time with the specified block
sar -B <time>

# Run a process at a specified time with the specified boot
sar -b <time>

# Run a process at a specified time with the specified device
sar -d <time>

# Run a process at a specified time with the specified error
sar -e <time>

# Run a process at a specified time with the specified file
sar -f <time>

# Run a process at a specified time with the specified help
sar -h <time>

# Run a process at a specified time with the specified huge
sar -H <time>

# Run a process at a specified time with the specified interrupt
sar -I <time>

# Run a process at a specified time with the specified job
sar -j <time>

# Run a process at a specified time with the specified kernel
sar -k <time>

# Run a process at a specified time with the specified lock
sar -l <time>

# Run a process at a specified time with the specified memory
sar -m <time>

# Run a process at a specified time with the specified network
sar -n <time>

# Run a process at a specified time with the specified output
sar -o <time>

# Run a process at a specified time with the specified partition
sar -p <time>

# Run a process at a specified time with the specified queue
sar -q <time>

# Run a process at a specified time with the specified remove
sar -r <time>

# Run a process at a specified time with the specified reboot
sar -R <time>

# Run a process at a specified time with the specified swap
sar -S <time>

# Run a process at a specified time with the specified system
sar -s <time>

# Run a process at a specified time with the specified time
sar -t <time>

# Run a process at a specified time with the specified user
sar -u <time>

# Run a process at a specified time with the specified version
sar -v <time>

# Run a process at a specified time with the specified wait
sar -w <time>

# Run a process at a specified time with the specified watchdog
sar -W <time>

# Run a process at a specified time with the specified extended
sar -x <time>

# Run a process at a specified time with the specified summary
sar -y <time>
```

</details>

## Manage logging

The majority of Linux commands for controlling various aspects of a Linux server are already familiar to you, but you also need to understand how Linux handles logging. Based on various distributions, this could change. Older distributions utilized syslog-ng for logging, but practically all major distributions now use an rsyslog alternative.

> **Note:** still in progress

### `journalctl`

The `journalctl` command is used to manage logging. It takes no arguments. The output of the `journalctl` command is the logging.

```bash
# Manage logging
journalctl
```
