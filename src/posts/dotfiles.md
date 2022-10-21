---
title: .dotfiles
slug: dotfiles
tags: ['Linux']
categories: ['Linux']
date: 2022-05-27T00:00:00.000Z
image: /assets/img/blog/linux-dotfiles/linux-dotfiles.png
author: MKAbuMattar
description: 'The easiest approach to keep your dotfiles safe is to keep them on your computer: A bare Git repository is a good place to start.'
prev: git-ssh-keys-for-github-gitlab-and-bitbucket-on-linux
next: setting-up-node-js-express-mongodb-prettier-eslint-and-husky-application-with-babel-and-authentication-as-an-example
featured: false
---

The easiest approach to keep your dotfiles safe is to keep them on your computer: A bare Git repository is a good place to start.

The approach outlined below, in his view, necessitates:

There is no need for additional software or symlinks; files are recorded in a version control system; you may use various branches for different machines; and you can quickly reproduce your setup on a fresh installation.

The method is placing a Git bare repository in a "side" folder (such as `$HOME/.dotfiles` or `$HOME/.mydotfiles`) and using a properly written alias to direct instructions to that repository rather than the usual.git local folder, which would conflict with any other Git repositories nearby.

## Starting at the beginning

If you've never kept track of your setups in a Git repository, you can get started right away with these lines, create bare git repository in `$HOME/.dotfiles`:

```bash
git init --bare $HOME/.dotfiles
```

add the following to your .bashrc or .bash_profile

```bash
alias config='git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
```

`config` will now be able to run any Git commands on your dotfiles.

```bash
# like this
config status
```

We set a repository-wide setting to conceal files that we aren't tracking yet. This prevents files you don't want to follow from showing up as untracked when you enter config status and other commands afterward. with the following command:

```bash
config config --local status.showUntrackedFiles no
```

After you've completed the setup, you may version any file in the `$HOME` folder using standard commands, substituting git with your newly generated config alias, for example:

```bash
config add .vimrc
config commit -m "Add .vimrc"
config add .bashrc
config commit -m "Add .bashrc"
config add .bash_profile
config commit -m "Add .bash_profile"
```

Now, just connect the config with your GitHub or GitLab account and you're ready to go.

```bash
## add readme file
echo "# `.dotfiles`" >> README.md
config add README.md
config commit -m 'add README'

## push to your github
config branch -M main
config remote add origin git@github.com:YOUR_USERNAME/.dotfiles.git
config push -u origin main
```

sample how to add to your .dotfiles

```bash
# .zshrc
config add .zshrc
config commit -m "Add .zshrc"
config add .zsh_aliases
config commit -m "Add .zsh_aliases"
config add .zsh_functions
config commit -m "Add .zsh_functions"
config add .zsh_plugins
config commit -m "Add .zsh_plugins"
config add .zsh_prompt
config commit -m "Add .zsh_prompt"
config add .zsh_profile
config commit -m "Add .zsh_profile"
config push origin main
```

## Install your .dotfiles onto a new system

add the following to your .bashrc or .bash_profile

```bash
alias config='git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
```

Also, make sure your source repository ignores the folder where you'll clone it so you don't end up with strange recursion issues:

```bash
echo ".dotfiles" >> .gitignore
```

Now clone your dotfiles into a bare repository in the `$HOME:dotfiles` folder.

```bash
git clone --bare <git-repo-url> $HOME/.dotfiles
```

Checkout the bare repository's real content to your `$HOME`:

```bash
config checkout -f
```

If the step above fails, you'll get a notice like this:

```bash
error: The following untracked working tree files would be overwritten by checkout:
    .bashrc
Please move or remove them before you can switch branches.
Aborting
```

Because your `$HOME` folder may already include certain stock configuration files, Git will overwrite them. The remedy is simple: back up the files if they are important to you, and delete them if they aren't. I'll give you a basic shortcut to move all the troublesome files to a backup location automatically:

```bash
mkdir -p .config-backup && \
config checkout 2>&1 | egrep "\s+\." | awk {'print $1'} | \
xargs -I{} mv {} .config-backup/{}
```

If you have issues with the checkout, try again:

```bash
config checkout -f
```

Keep in mind on this specific (local) repository, turn off the `showUntrackedFiles` flag:

```bash
config config --local status.showUntrackedFiles no
```

You're done; you may now add and update your dotfiles by typing config commands.

```bash
config add .vimrc
config commit -m "Add .vimrc"
config add .bashrc
config commit -m "Add .bashrc"
config add .bash_profile
config commit -m "Add .bash_profile"
```
