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
next: how-to-install-apache-web-server-on-amazon-linux-2
featured: false
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
2. Run the following command (change your `YOUR_EMAIL@EXAMPLE.COM` with your email address) to establish a new SSH key pair:

```powershell
ssh-keygen -t rsa -b 4096 -C "YOUR_EMAIL@EXAMPLE.COM"
```

3. It will ask you where you want to save the private key (id rsa), and you may accept the default location by pressing Enter.

> Whether you already have a private key, it will ask if you want to override it:

```powershell
Overwrite (y/n)?
```

4. If this happens, hit Enter and type y. Then, enter and re-enter the following passcode (think of it as a password):

```powershell
Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa): [Press enter]
```

5. Enter a secure passphrase.

```powershell
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

6. The SSH key pair is created in ~/.ssh, and the whole interaction should look like this:

```powershell

```

7. Verify that the SSH key was created by running the following command:

```powershell
ls .\.ssh\
```

## Add SSH key to the ssh-agent to your account

Copy the SSH key to your clipboard by running the following command:

```powershell
Get-Content .\.ssh\id_rsa.pub | Set-Clipboard
```

### GitHub

Sign in to your GitHub account using a browser by going to github.com and entering your username and password. Click your profile photo in the upper-right corner of the page, then Settings:

![GitHub Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows/github1.png)

Select SSH and GPG keys from the user settings sidebar. Then select New SSH key from the drop-down menu. Put a descriptive label for the new key in the Title area (for example, your computer's name) and paste your public key into the Key field. Last but not least, click Add SSH key:

![GitHub Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows/github2.png)

The key is now visible in the list of SSH keys linked to your account:

![GitHub Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows/github3.png)

### GitLab

Sign in to your GitLab account using a browser by going to gitlab.com and entering your username and password. Click your profile photo in the upper-right corner of the page, then Settings:

![GitLab Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows/gitlab1.png)

Click SSH Keys in the User Settings sidebar. In the Key area, paste your public key. Fill in the Title area for the new key with a descriptive term (for example, the name of your computer). Finally, click the Add key:

![GitLab Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows/gitlab2.png)

The key is now visible in the list of SSH keys linked to your account:

![GitLab Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows/gitlab3.png)

### Bitbucket

Log in to your Bitbucket account using a browser by going to bitbucket.org and entering your username and password. Click your profile photo in the lower-left corner of the website, then Bitbucket settings:

![Bitbucket Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows/bitbucket1.png)

SSH keys may be found in the Settings sidebar's Security section. After that, select Add key from the drop-down menu. Fill up the Description box with a descriptive label for the new key (such as your computer's name), and then paste your public key into the Key field. Last but not least, choose to Add key:

![Bitbucket Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows/bitbucket2.png)

The key has now been added to your account's list of SSH keys:

![Bitbucket Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows/bitbucket3.png)

## Test connecting via SSH

Before utilizing SSH with Git, GitHub, GitLab, and Bitbucket allow you to verify whether the connection has been set up successfully.

### GitHub Test Connecting via SSH

Open the terminal once you've added your SSH key to your GitHub account and type:

```bash
ssh -T git@github.com
```

If you're connecting to GitHub over SSH for the first time, the SSH client will ask if you trust the GitHub server's public key:

```bash
The authenticity of host 'github.com (140.82.113.4)' can't be established.
RSA key fingerprint is SHA256:a5d6c20b1790b4c144b9d26c9b201bbee3797aa010f2701c09c1b3a6262d2c02.
Are you sure you want to continue connecting (yes/no)?
```

Press Enter after typing yes. GitHub has been added to the list of trustworthy hosts in the SSH client:

```bash
Warning: Permanently added 'github.com,140.82.113.4' (RSA) to the list of known hosts.
```

You won't be asked about GitHub's public key again once you've added it to the list of known hosts.

The server notifies you that you have successfully authenticated and ends the connection: Because this remote access through SSH is offered by GitHub only for testing purposes and not for practical usage, the server informs you that you have successfully authenticated and terminates the connection:

```bash
Hi YOUR_USER_NAME! You've successfully authenticated, but GitHub does not provide shell access.
```

If you passed the test, you may now utilize SSH with GitHub.

The entire interaction should look something like this:

```bash
ssh -T git@github.com

The authenticity of host 'github.com (140.82.113.4)' can't be established.
RSA key fingerprint is SHA256:a5d6c20b1790b4c144b9d26c9b201bbee3797aa010f2701c09c1b3a6262d2c02.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'github.com,140.82.113.4' (RSA) to the list of known hosts.
Hi your_user_name! You've successfully authenticated, but GitHub does not provide shell access.
YOUR_USER_NAME@YOUR_HOST_NAME:~>
```

### GitLab Test Connecting via SSH

The test is pretty similar if you've added your SSH key to your GitLab account:

```bash
ssh -T git@gitlab.com

The authenticity of host 'gitlab.com (35.231.145.151)' can't be established.
ECDSA key fingerprint is SHA256:4ac7a7fd4296d5e6267c9188346375ff78f6097a802e83c0feaf25277c9e70cc.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'gitlab.com,35.231.145.151' (ECDSA) to the list of known hosts.
Welcome to GitLab, @YOUR_USER_NAME!
```

If you passed the test, you may now utilize SSH with GitLab.

### Bitbucket Test Connecting via SSH

The test is pretty similar if you've added your SSH key to your Bitbucket account:

```bash
ssh -T git@bitbucket.org

The authenticity of host 'bitbucket.org (104.192.143.1)' can't be established.
RSA key fingerprint is SHA256:fb7d37d5497c43f73325e0a98638cac8dda3b01a8c31f4ee11e2e953c19e0252.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'bitbucket.org,104.192.143.1' (RSA) to the list of known hosts.
logged in as YOUR_USER_NAME.

You can use git or hg to connect to Bitbucket. Shell access is disabled.
```

If you passed the test, you may now utilize SSH with Bitbucket.

---

## References

- [GitHub SSH Key Setup](https://help.github.com/articles/generating-ssh-keys)
- [GitLab SSH Key Setup](https://about.gitlab.com/2016/05/22/how-to-add-ssh-key-to-gitlab-account/)
- [Bitbucket SSH Key Setup](https://help.atlassian.com/bitbucket/docs/advanced/ssh-key-setup/)
