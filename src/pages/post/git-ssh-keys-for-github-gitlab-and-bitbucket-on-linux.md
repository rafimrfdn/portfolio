---
layout: ../../layouts/post.astro
title: Git SSH Keys for GitHub, GitLab, and Bitbucket on Linux
tags: Linux, Git, GitHub, GitLab, Bitbucket
date: 2021-12-18
image: /assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux/git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux.jpg
author: MKAbuMattar
authorImg: /assets/img/profile.jpeg
description: Git connects to remotes by default via HTTPS, which requires you to enter your login and password every time you run a command like Git pull or git push, using the SSH protocol. You may connect to servers and authenticate to access their services. The three services listed allow Git to connect through SSH rather than HTTPS. Using public-key encryption eliminates the need to type a login and password for each Git command.
featured: false
---

Git connects to remotes by default via HTTPS, which requires you to enter your login and password every time you run a command like Git pull or git push, using the SSH protocol. You may connect to servers and authenticate to access their services. The three services listed allow Git to connect through SSH rather than HTTPS. Using public-key encryption eliminates the need to type a login and password for each Git command.

## Make sure a Git and SSH client is installed

A Git and SSH client must be installed on your system to connect via the SSH protocol. It should be installed by default if you use Arch Linux-based distributions like Manjaro or Garuda Linux.

```bash
git --version
ssh -V
```

That command should return the Git version adn SSH client's version number:

```bash
git version 2.34.1
OpenSSH_8.8p1, OpenSSL 1.1.1l  24 Aug 2021
```

If the system tells you that the ssh or git commands are missing, use the following command to install them:

Arch-based Linux systems:

```bash
sudo pacman -Syu
sudo pacman -Syyu
sudo pacman -S git
sudo pacman -S openssh
```

Debian-based Linux systems:

```bash
sudo apt update
sudo apt upgrade
sudo apt install git
sudo apt install openssh
```

Red Hat-based Linux systems:

```bash
sudo yum upgrade
sudo yum install git
sudo yum install openssh
```

Suse-based Linux systems:

```bash
sudo zypper upgrade
sudo zypper install git
sudo zypper install openssh
```

Fedora-based Linux systems:

```bash
sudo dnf upgrade
sudo dnf install git
sudo dnf install openssh
```

Don't forget to specify global Git settings using the following command after installing git:

```bash
git config --global user.name 'USERNAME'
git config --global user.email 'YOUR_EMAIL@EXAMPLE.COM'
```

## Look for any SSH keys that have already been created

```bash
ls -lah ~/.ssh 
```

The contents of the ~/.ssh folder, where the SSH client stores its configuration files, should be listed by that command:

Don't worry if you get an error saying there is no /.ssh directory or no files in there: it just indicates you haven't established an SSH key pair yet. Proceed to the next subject if this is the case.

It is advised that you produce a fresh SSH key pair at least once a year for security reasons. It is advised that you go on to the following topic if you already have an SSH key pair that was established more than a year ago. You can skip the following subject if you already have an SSH key pair and wish to reuse it.

## Make a fresh set of SSH keys

Run the following command (change your `YOUR_EMAIL@EXAMPLE.COM` with your email address) to establish a new SSH key pair:

```bash
ssh-keygen -t rsa -b 4096 -C "YOUR_EMAIL@EXAMPLE.COM"
Generating public/private rsa key pair. Enter file in which to save the key (/home/your_user_name/.ssh/id_rsa):
```

It will ask you where you want to save the private key (id rsa), and you may accept the default location by pressing Enter.

Whether you already have a private key, it will ask if you want to override it:

```bash
/home/your_user_name/.ssh/id_rsa already exists.
Overwrite (y/n)?
```

If this happens, hit Enter and type y. Then, enter and re-enter the following passcode (think of it as a password):

```bash
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

The SSH key pair is created in ~/.ssh, and the whole interaction should look like this:

```bash
your_user_name@your_host_name:~> ssh-keygen -t rsa -b 4096 -C "YOUR_EMAIL@EXAMPLE.COM"
Generating public/private rsa key pair.
Enter file in which to save the key (/home/YOUR_USER_NAME/.ssh/id_rsa):
/home/YOUR_USER_NAME/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/YOUR_USER_NAME/.ssh/id_rsa.
Your public key has been saved in /home/YOUR_USER_NAME/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:XenY8FOQmvIsjKVp6oAlITe3k1aMKRdViOFePP6/CuK YOUR_EMAIL@EXAMPLE.COM
The key's randomart image is:
+---[RSA 4096]----+
|o.=@X++.         |
|o*@O++           |
|=Bo+=+           |
|Oo+ oo..         |
|=+ . .. S        |
|...   o          |
| .   o .         |
|    . . o        |
|   E   . o.      |
+----[SHA256]-----+
YOUR_USER_NAME@YOUR_HOST_NAME:~>
```

## To the ssh-agent, add your private SSH key

If you don't want to input your password every time you use your SSH keys, add it to the ssh-agent, which is a background application that saves your keys in memory while you're signed in to the system.

Run the following commands to start the ssh-agent in the background:

```bash
eval "$(ssh-agent -s)"
```

The ssh-agent process identification is returned by this command:

```bash
Agent pid 2887
```

Then, in the ssh-agent, add your SSH private key:

```bash
ssh-add ~/.ssh/id_rsa
```

Press Enter once you've typed your password:

```bash
Enter passphrase for /home/YOUR_USER_NAME/.ssh/id_rsa:
```

The ssh-agent has been updated with the private SSH key, according to this command:

```bash
Identity added: /home/YOUR_USER_NAME/.ssh/id_rsa (YOUR_EMAIL@EXAMPLE.COM)
```

## To your account, add the public SSH key

You can connect through SSH after you have an SSH key and have added it to the ssh-agent. Let's take a look at how to implement it with each of the three servers: GitHub, GitLab, and Bitbucket.

The procedure is the same in all three circumstances, xclip is a command-line tool that gives you access to the clipboard in the graphical user interface from the terminal. If it isn't already installed, perform the following commands to do so:

Arch-based Linux systems:

```bash
sudo pacman -Syu
sudo pacman -Syyu
sudo pacman -S xclip
```

Debian-based Linux systems:

```bash
sudo apt update
sudo apt upgrade
sudo apt install xclip
```

Red Hat-based Linux systems:

```bash
sudo yum upgrade
sudo yum install xclip
```

Suse-based Linux systems:

```bash
sudo zypper upgrade
sudo zypper install xclip
```

Fedora-based Linux systems:

```bash
sudo dnf upgrade
sudo dnf install xclip
```

Using the xclip command, copy the contents of your public SSH key (/.ssh/id rsa.pub) file to the clipboard:

```bash
xclip -sel clip < ~/.ssh/id_rsa.pub 
```

### GitHub

Sign in to your GitHub account using a browser by going to github.com and entering your username and password. Click your profile photo in the upper-right corner of the page, then Settings:

![GitHub Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux/github1.png)

Select SSH and GPG keys from the user settings sidebar. Then select New SSH key from the drop-down menu. Put a descriptive label for the new key in the Title area (for example, your computer's name) and paste your public key into the Key field. Last but not least, click Add SSH key:

![GitHub Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux/github2.png)

The key is now visible in the list of SSH keys linked to your account:

![GitHub Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux/github3.png)

### GitLab

Sign in to your GitLab account using a browser by going to gitlab.com and entering your username and password. Click your profile photo in the upper-right corner of the page, then Settings:

![GitLab Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux/gitlab1.png)

Click SSH Keys in the User Settings sidebar. In the Key area, paste your public key. Fill in the Title area for the new key with a descriptive term (for example, the name of your computer). Finally, click the Add key:

![GitLab Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux/gitlab2.png)

The key is now visible in the list of SSH keys linked to your account:

![GitLab Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux/gitlab3.png)

### Bitbucket

Log in to your Bitbucket account using a browser by going to bitbucket.org and entering your username and password. Click your profile photo in the lower-left corner of the website, then Bitbucket settings:

![Bitbucket Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux/bitbucket1.png)

SSH keys may be found in the Settings sidebar's Security section. After that, select Add key from the drop-down menu. Fill up the Description box with a descriptive label for the new key (such as your computer's name), and then paste your public key into the Key field. Last but not least, choose to Add key:

![Bitbucket Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux/bitbucket2.png)

The key has now been added to your account's list of SSH keys:

![Bitbucket Settings](/assets/img/blog/git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux/bitbucket3.png)

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

- - -

## References

- [GitHub SSH Key Setup](https://help.github.com/articles/generating-ssh-keys)
- [GitLab SSH Key Setup](https://about.gitlab.com/2016/05/22/how-to-add-ssh-key-to-gitlab-account/)
- [Bitbucket SSH Key Setup](https://help.atlassian.com/bitbucket/docs/advanced/ssh-key-setup/)
