---
title: Git SSH Keys for GitHub, GitLab, and Bitbucket on Windows
slug: git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows
tags: ['Windows', 'Git', 'SSH', 'GitHub', 'GitLab', 'Bitbucket']
categories: ['Windows']
date: 2022-10-22T00:00:00.000Z
image: /assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows/git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows.jpg
author: MKAbuMattar
description: Git connects to remotes by default via HTTPS, which requires you to enter your login and password every time you run a command like Git pull or git push, using the SSH protocol. You may connect to servers and authenticate to access their services. The three services listed allow Git to connect through SSH rather than HTTPS. Using public-key encryption eliminates the need to type a login and password for each Git command.
prev: customization-windows-terminal-with-starship
next: undefined
featured: true
---

## Introduction

Git connects to remotes by default via HTTPS, which requires you to enter your login and password every time you run a command like Git pull or git push, using the SSH protocol. You may connect to servers and authenticate to access their services. The three services listed allow Git to connect through SSH rather than HTTPS. Using public-key encryption eliminates the need to type a login and password for each Git command.

## Make sure a Git is installed

Make sure Git is installed before you start. Run the following command in your Windows terminal to see if Git is installed on your computer:

```powershell
git --version
```

### Install Git

To install Git, you can download the latest version from the official Git website. You can also install Git using Chocolatey or Winget package manager.

#### Install Git official website

To install Git from the official website, follow the steps below:

1. Go to the official Git website and download the latest version of Git for Windows.
2. Run the installer and follow the steps below:
   1. Click Next on the first two screens to accept the default options.
   2. Click Next on the Select Components screen.
   3. Click Next on the Choosing the default editor used by Git screen.
   4. Click Next on the Choosing the default terminal emulator screen.
   5. Select the Use Git from the Windows Command Prompt option.
   6. Select the Checkout Windows-style, commit Unix-style line endings option.
   7. Select the Use Windows' default console window option.
   8. Click Next on the Configuring the line ending conversions screen.
   9. Click Next on the Configuring the terminal emulator to use with Git Bash screen.
   10. Click Install on the Choosing HTTPS transport backend screen.
   11. Click Finish on the Completing the Git Setup screen.
3. Open a new command prompt window and verify that Git is installed correctly by typing `git --version`.

#### Install Git using Chocolatey

To install Git using Chocolatey, follow the steps below:

1. Open Windows Terminal.
2. Run the following command to install Git:

```powershell
choco install git -y
```

3. Verify that Git is installed correctly by typing `git --version`.

### Install Git using Winget

To install Git using Winget, follow the steps below:

1. Open Windows Terminal.
2. Run the following command to install Git:

```powershell
winget install --id=Git.Git  -e
```

3. Verify that Git is installed correctly by typing `git --version`.

---

> **Note:** Don’t forget to specify global Git settings using the following command after installing git:

```powershell
git config --global user.name 'USERNAME'
git config --global user.email 'YOUR_EMAIL@EXAMPLE.COM'
```

---

## Generate SSH keys

To generate SSH keys, follow the steps below:

1. Open Windows Terminal.
2. Run the following command to generate SSH keys:

```powershell
ssh-keygen -t rsa -b 4096 -C "YOUR_EMAIL@EXAMPLE.COM"
```

3. Press Enter to accept the default file location.

```powershell
Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa): [Press enter]
```

4. Enter a secure passphrase.

```powershell
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

5. Verify that the SSH key was created by running the following command:

```powershell
ls .\.ssh\
```

6. Copy the SSH key to your clipboard by running the following command:

```powershell
Get-Content .\.ssh\id_rsa.pub | Set-Clipboard
```
