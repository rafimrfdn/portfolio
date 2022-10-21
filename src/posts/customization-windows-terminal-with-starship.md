---
title: Customization Windows Terminal With Starship
slug: customization-windows-terminal-with-starship
tags: ['Windows', 'Terminal', 'CLI', 'PowerShell', 'Starship']
categories: ['Windows']
date: 2022-10-21T00:00:00.000Z
image: /assets/img/blog/customization-windows-terminal-with-starship/customization-windows-terminal-with-starship.jpg
author: MKAbuMattar
description: 'Customization Windows Terminal With Starship, Windows Terminal is a new, modern, fast, efficient, powerful, and productive terminal application for users of command-line tools and shells like Command Prompt, PowerShell, and WSL.'
prev: vim-cheat-sheet
next: undefined
featured: true
---

## Table of Contents

- [Introduction](#introduction)
  - [What Is a Windows Terminal?](#what-is-a-windows-terminal)
  - [What Is a Starship?](#what-is-a-starship)
- [Installation](#installation)
  - [Install Windows Terminal](#install-windows-terminal)
  - [Install PowerShell](#install-powershell)
  - [Install Starship](#install-starship)
  - [Install Nerd Font](#install-nerd-font)
- [Configuration](#configuration)
  - [Configure Starship on PowerShell](#configure-starship-on-powershell)
  - [Configure PowerShell on Windows Terminal](#configure-powershell-on-windows-terminal)

## Introduction

In this article, we will learn how to install PowerShell and Starship, how to configure the Windows Terminal, and how to customize the Windows Terminal with Starship.

### What Is a Windows Terminal?

Windows Terminal is a new, modern, fast, efficient, powerful, and productive terminal application for users of command-line tools and shells like Command Prompt, PowerShell, and WSL. It includes many features that make it a great tool for developers and system administrators. It is a great replacement for the default Windows Command Prompt and PowerShell.

### What Is a Starship?

Starship is a cross-shell prompt for any shell. It shows information about the current directory, the active branch, the status of the repository, and much more. It is highly customizable and can be extended with custom modules. It is written in Rust and is blazingly fast.

## Installation

### Install Windows Terminal

To install Windows Terminal, you can download it from the Microsoft Store or from the GitHub repository, or you can use the Chocolatey package manager or Winget package manager.

#### Install Windows Terminal From Microsoft Store

To install Windows Terminal from the Microsoft Store, you can follow the steps below:

1. Open the Microsoft Store.
2. Search for Windows Terminal.
3. Click on the Get button.

#### Install Windows Terminal From GitHub

To install Windows Terminal from GitHub, you can follow the steps below:

1. Open the [GitHub repository](https://github.com/microsoft/terminal).
2. Click on the Releases tab.
3. Click on the latest release.
4. Click on the WindowsTerminal.exe file.
5. Click on the Download button.

#### Install Windows Terminal With Chocolatey

To install Windows Terminal with Chocolatey, you can follow the steps below:

1. Open the [Chocolatey website](https://chocolatey.org/).
2. Click on the Packages.
3. Search for Windows Terminal.
4. Click on the command to install Windows Terminal.
5. Run the command in CMD.

```powershell
choco install microsoft-windows-terminal --pre -y
```

#### Install Windows Terminal With Winget

To install Windows Terminal with Winget, you can follow the steps below:

1. Open the [Winget website](https://winstall.app/).
2. Search for Windows Terminal.
3. Click on the command to install Windows Terminal.
4. Run the command in CMD.

```powershell
winget install --id=Microsoft.WindowsTerminal  -e
```

### Install PowerShell

To install PowerShell, you can download it from the Microsoft Store or from the GitHub repository, or you can use the Chocolatey package manager or Winget package manager.

#### Install PowerShell From Microsoft Store

To install PowerShell from the Microsoft Store, you can follow the steps below:

1. Open the Microsoft Store.
2. Search for PowerShell.
3. Click on the Get button.

#### Install PowerShell From GitHub

To install PowerShell from GitHub, you can follow the steps below:

1. Open the [GitHub repository](https://github.com/PowerShell/PowerShell).
2. Click on the Releases tab.
3. Click on the latest release.
4. Click on the PowerShell-7.2.0-win-x64.msi file.
5. Click on the Download button.

#### Install PowerShell With Chocolatey

To install PowerShell with Chocolatey, you can follow the steps below:

1. Open the [Chocolatey website](https://chocolatey.org/).
2. Click on the Packages.
3. Search for PowerShell.
4. Click on the command to install PowerShell.
5. Run the command in CMD.

```powershell
choco install powershell -y
```

#### Install PowerShell With Winget

To install PowerShell with Winget, you can follow the steps below:

1. Open the [Winget website](https://winstall.app/).
2. Search for PowerShell.
3. Click on the command to install PowerShell.
4. Run the command in CMD.

```powershell
winget install --id=Microsoft.PowerShell  -e
```

### Install Starship

To install Starship, you can download it from the GitHub repository, or you can use the Chocolatey package manager or Winget package manager.

#### Install Starship From GitHub

To install Starship from GitHub, you can follow the steps below:

1. Open the [GitHub repository](https://github.com/starship/starship).
2. Click on the Releases tab.
3. Click on the latest release.
4. Click on the starship-x86_64-pc-windows-msvc.zip file.
5. Click on the Download button.

#### Install Starship With Chocolatey

To install Starship with Chocolatey, you can follow the steps below:

1. Open the [Chocolatey website](https://chocolatey.org/).
2. Click on the Packages.
3. Search for Starship.
4. Click on the command to install Starship.
5. Run the command in CMD.

```powershell
choco install starship -y
```

#### Install Starship With Winget

To install Starship with Winget, you can follow the steps below:

1. Open the [Winget website](https://winstall.app/).
2. Search for Starship.
3. Click on the command to install Starship.
4. Run the command in CMD.

```powershell
winget install --id=Starship  -e
```

### Install Nerd Font

Quick install a nerd font from the [Nerd Fonts website](https://www.nerdfonts.com/). You can choose any font you like. I will use the `Caskaydia Cove Nerd Font` font.

## Configuration

### Configure Starship on PowerShell

Every time a PowerShell instance launches, we'll need to instance starship, to achieve this, we'll need to add the following line to our PowerShell profile.

To create a PowerShell profile, and add the starship instance, you can follow the steps below:

1. Open Windows Terminal.
2. Run the following command to create a PowerShell profile.

```powershell
New-Item -Path $PROFILE -ItemType File -Force
```

3. Run the following command to `Set-Content` cmdlet to add the line to the profile.

```powershell
Set-Content -Path $PROFILE -Value
"function Invoke-Starship-TransientFunction {
  &starship module character
}

Invoke-Expression (&starship init powershell)

Enable-TransientPrompt -Command Invoke-Starship-TransientFunction"
```

> **Note**: You can check the location of this file by querying the `$PROFILE` variable in PowerShell. The path is often `~\Documents\PowerShell\Microsoft.PowerShell_profile.ps1`.

### Configure PowerShell on Windows Terminal

To configure PowerShell on Windows Terminal, you can follow the steps below:

1. Open Windows Terminal.
2. Click on the Settings button.
