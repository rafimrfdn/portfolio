---
title: 'Git'
slug: 'git'
category: 'Toolkit'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.'
color: '#F34F29'
icon: 'GitIcon'
draft: false
---

## Table of Contents

<details open>

<summary>Table of Contents</summary>

- [Introduction](#introduction)
  - [What is Git?](#what-is-git)
  - [Why Git?](#why-git)
- [Getting started](#getting-started)
  - [Create a Repository](#create-a-repository)
  - [Configuration](#configuration)
  - [Make a change](#make-a-change)
  - [Working with Branches](#working-with-branches)
  - [Remote Repositories](#remote-repositories)
  - [Synchronize](#synchronize)
  - [Tracking path Changes](#tracking-path-changes)
  - [Temporary Commits](#temporary-commits)
  - [Ignoring Files](#ignoring-files)
- [Git Tricks](#git-tricks)
  - [Rename branch](#rename-branch)
  - [Commit amend](#commit-amend)
  - [Log](#log)
  - [Revert](#revert)
  - [Reset](#reset)
  - [Git Aliases](#git-aliases)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is Git?

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows.

</div>

<div class="cheat__container-content">

### Why Git?

Git is a distributed version control system. It is a tool that helps you manage your source code history. It allows you to track changes to files, revert changes, see who last modified something that might be causing a problem, who introduced an issue and when, and more. Using Git, you can collaborate with other developers on the same project and merge their changes into your code.

</div>

---

## Getting started

<div class="cheat__container-content">

### Create a Repository

- Create a new local repository

```bash
git init [project-name]
```

- Clone an existing repository

```bash
git clone [url]
```

- Clone a specific branch

```bash
git clone -b [branch] [url]
```

- Clone a specific branch and create a new directory

```bash
git clone -b [branch] [url] [new-directory]
```

</div>

<div class="cheat__container-content">

### Configuration

- Set the name that will be attached to your commits and tags

```bash
git config --global user.name "[name]"
```

- Set the email address that will be attached to your commits and tags

```bash
git config --global user.email "[email address]"
```

- Edit the global configuration file in a text editor

```bash
git config --global --edit
```

- Set a default branch name other than master

```bash
git config --global init.defaultBranch [branch-name]
```

- Enable some colorization of Git output

```bash
git config --global color.ui auto
```

- Set Git to use the credential memory cache

```bash
git config --global credential.helper cache
```

- Set Git to use credential memory cache for 1 hour

```bash
git config --global credential.helper 'cache --timeout=3600'
```

</div>

<div class="cheat__container-content">

### Make a change

- Show modified files in working directory

```bash
git status
```

- Stages the file, ready for commit to HEAD

```bash
git add [file]
```

- Stage all changed files, ready for commit to HEAD

```bash
git add .
```

- Stages all modified and deleted files, ready for commit to HEAD

```bash
git add -A
```

- Commit all local changes in tracked files

```bash
git commit -a
```

- Commit previously staged changes

```bash
git commit -m "[descriptive message]"
```

- Commit all local changes in tracked files

```bash
git commit -a -m "[descriptive message]"
```

- Unstages file, but preserve its contents

```bash
git reset [file]
```

- Discard all local changes in your working directory

```bash
git reset --hard
```

- Diff of what is changed but not staged

```bash
git diff
```

- Diff of what is staged but not yet commited

```bash
git diff --staged
```

- Diff of what is changed between two branches

```bash
git diff [first-branch]...[second-branch]
```

- Apply any commits of current branch a HEAD of specified one

```bash
git rebase [branch]
```

- Discard all history and changes back to the specified commit

```bash
git reset --hard [commit]
```

</div>

<div class="cheat__container-content">

### Working with Branches

- List all existing branches

```bash
git branch -a
```

- List all existing and remote branches

```bash
git branch -r
```

- List all branches, local and remote, in long format

```bash
git branch -a -v
```

- List all branches, local and remote, in long format with commit info

```bash
git branch -a -v --abbrev-commit
```

- Switch HEAD branch

```bash
git checkout [branch-name]
```

- Create a new branch based on your current HEAD

```bash
git branch [branch]
```

- Delete the specified branch

```bash
git branch -d [branch-name]
```

- Delete the specified branch, even if it has not been merged

```bash
git branch -D [branch-name]
```

- Rename a branch and its reflog

```bash
git branch -m [old-branch] [new-branch]
```

- Switch to the branch

```bash
git checkout [branch-name]
```

- Switch to the branch and create it if it doesn't exist

```bash
git checkout -b [branch]
```

- Create a new tracking branch based on a remote branch

```bash
git checkout --track [remote-branch]
```

- Switch to the branch, and discard all changes in working directory

```bash
git checkout -f [branch-name]
```

- Merge the specified branch's history into the current one

```bash
git merge [branch]
```

- Tag the current commit with a version number

```bash
git tag [tag]
```

</div>

<div class="cheat__container-content">

### Remote Repositories

- Add a new remote

```bash
git remote add [shortname] [url]
```

- Show the names of the remote repositories you've added

```bash
git remote
```

- List all currently configured remote repositories

```bash
git remote -v
```

- Show information about a remote repository

```bash
git remote show [remote]
```

- Remove a remote repository

```bash
git remote rm [remote]
```

- Change a remote's URL

```bash
git remote set-url --push [remote] [newUrl]
```

</div>

<div class="cheat__container-content">

### Synchronize

- Fetch all branches from remote repository

```bash
git fetch --all
```

- Fetch all branches from remote repository and prune

```bash
git fetch --all --prune
```

- Merge a remote branch into your current branch to bring it up to date

```bash
git merge [remote]/[branch]
```

- Transfers commits, files, and refs from one remote to another

```bash
git push [remote] [branch]
```

- Fetch and merge any commits from the tracking remote branch

```bash
git pull
```

- Merge just one specific commit from another branch into your current branch

```bash
git cherry-pick [commit]
```

- Download all history from the repository

```bash
git fetch --unshallow
```

</div>

<div class="cheat__container-content">

### Tracking path Changes

- Show all commit logs with indication of any paths that moved

```bash
git log --stat -M
```

- Change an existing file path and stage the move

```bash
git mv [existing-path] [new-path]
```

- Delete a file from the working tree and stage the deletion

```bash
git rm [file]
```

- Remove a file from the working tree and stage the removal

```bash
git rm --cached [file]
```

- Add a file as if it was deleted and then re-created

```bash
git rm --cached -r .
```

</div>

<div class="cheat__container-content">

### Temporary Commits

- Save modified and staged changes

```bash
git stash
```

- List stack-order of stashed file changes

```bash
git stash list
```

- Write working from top of stash stack

```bash
git stash pop
```

- Discard the changes from top of stash stack

```bash
git stash drop
```

</div>

<div class="cheat__container-content">

### Ignoring Files

Ignoring Files is a powerful feature that lets you tell Git to ignore certain files and directories. This is useful for files that are automatically generated, such as log files, temporary files, or files produced by your build system. You can also use it to ignore files that you don't want to share with others, such as your private SSH keys.

- Create a .gitignore file

```bash
touch .gitignore
```

- Add a file to .gitignore

```bash
echo "file.txt" >> .gitignore
```

- Add a directory to .gitignore

```bash
echo "directory/" >> .gitignore
```

- Add a file extension to .gitignore

```bash
echo "*.extension" >> .gitignore
```

- Add a file pattern to .gitignore

```bash
echo "file*" >> .gitignore
```

- Add a file extension pattern to .gitignore

```bash
echo "*.ext*" >> .gitignore
```

- Add a exclude pattern to .gitignore

```bash
echo "!file.txt" >> .gitignore
```

- Add a exclude pattern to .gitignore

```bash
echo "!directory/" >> .gitignore
```

- Add a exclude pattern to .gitignore

```bash
echo "!*.extension" >> .gitignore
```

</div>

---

## Git Tricks

<div class="cheat__container-content">

### Rename branch

- Rename your current branch

```bash
git branch -m new-name
```

- Rename any branch

```bash
git branch -m old-name new-name
```

- Push the new branch and delete the old one

```bash
git push origin :old-name new-name
```

- Reset the upstream branch for the new name

```bash
git push origin -u new-name
```

- Delete the old branch

```bash
git branch -d old-name
```

</div>

<div class="cheat__container-content">

### Commit amend

- Amend the most recent commit

```bash
git commit --amend
```

- Amend the most recent commit with a new message

```bash
git commit --amend -m "New commit message"
```

- Amend the most recent commit with the staged changes

```bash
git commit --amend --no-edit
```

- Amend the most recent commit with the staged changes and a new message

```bash
git commit --amend -m "New commit message" --no-edit
```

</div>

<div class="cheat__container-content">

### Log

- Show the commit history for the currently active branch

```bash
git log
```

- Show the commit history for the currently active branch, including all commits from all branches and remotes

```bash
git log --all --graph --decorate --oneline
```

- Show the commit history for the currently active branch, including all commits from all branches and remotes, and the diffs between each commit

```bash
git log --all --graph --decorate --oneline --patch
```

- Show out visual representation of the commit history

```bash
git log --graph --oneline --decorate --all
```

- Search the commit history for the given author

```bash
git log --author="[name]"
```

- Search the commit history for the given commit message

```bash
git log --grep="[message]"
```

- Search the commit history for the given file

```bash
git log -- [file]
```

- Search the commit history for the given file, including diffs

```bash
git log -p -- [file]
```

- Search the change by connected with the given commit

```bash
git log -S [string]
```

</div>

<div class="cheat__container-content">

### Revert

- Revert a commit by creating a new commit

```bash
git revert [commit]
```

- Revert a commit by creating a new commit, and edit the commit message

```bash
git revert -m 1 [commit]
```

</div>

<div class="cheat__container-content">

### Reset

- Reset the current HEAD to the specified state

```bash
git reset [commit]
```

- Reset the current HEAD to the specified state, and keep the changes in the working tree

```bash
git reset --keep [commit]
```

</div>

<div class="cheat__container-content">

### Git Aliases

- Create a new alias

```bash
git config --global alias.[alias] [command]
```

- Create a new alias with arguments

```bash
git config --global alias.[alias] "[command] [arguments]"
```

- Create a new alias with arguments and options

```bash
git config --global alias.[alias] "[command] [arguments] --[option]"
```

</div>
