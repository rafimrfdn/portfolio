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
next: git-ssh-keys-for-github-gitlab-and-bitbucket-on-windows
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
  - [Configure Starship](#configure-starship)
  - [Configure Starship on PowerShell](#configure-starship-on-powershell)
  - [Configure PowerShell on Windows Terminal](#configure-powershell-on-windows-terminal)
  - [Extra Configuration](#extra-configuration)
- [References](#references)

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
winget install --id=Starship.Starship  -e
```

### Install Nerd Font

Quick install a nerd font from the [Nerd Fonts website](https://www.nerdfonts.com/). You can choose any font you like. I will use the `Caskaydia Cove Nerd Font` font.

## Configuration

### Configure Starship

To configure Starship, you can follow the steps below:

1. Open the powershell.
2. Run the command below to create the configuration file.

```powershell
mkdir -p ~/.config && touch ~/.config/starship.toml
```

3. Open the configuration file with your favorite text editor.

```powershell
notepad ~/.config/starship.toml
```

4. Copy the configuration below and paste it in the configuration file. [GitHub | starship.toml](https://raw.githubusercontent.com/MKAbuMattar/.dotfiles/main/.config/starship.toml)

<details>

```toml
# ~/.config/starship.toml
#
#                             .
#         ..                .''
#         .,'..,.         ..,;,'
#          ,;;;;,,       .,,;;;
#           ,;;;;;'    .',;;;
#            ,;;;;,'...,;;;,
#             ,;;;;;,,;;;;.
#              ,;;;;;;;;;
#              .,;;;;;;;
#              .,;;;;;;;'
#              .,;;;;;;;,'
#            .',;;;;;;;;;;,.
#          ..,;;;;;;;;;;;;;,.
#         .';;;;;.   ';;;;;;,'
#        .,;;;;.      ,; .;; .,
#        ',;;;.        .
#        .,;;.
#        ,;
#
## FIRST LINE/ROW: Info & Status
# First param ─┌
[username]
format = " [╭─$user]($style)@"
show_always = true
style_root = "bold red"
style_user = "bold red"

# Second param
[hostname]
disabled = false
format = "[$hostname]($style) in "
ssh_only = false
style = "bold dimmed red"
trim_at = "-"

# Third param
[directory]
style = "purple"
truncate_to_repo = true
truncation_length = 0
truncation_symbol = "repo: "

# Fourth param
[sudo]
disabled = false

# Before all the version info (python, nodejs, php, etc.)
[git_status]
ahead = "⇡${count}"
behind = "⇣${count}"
deleted = "x"
diverged = "⇕⇡${ahead_count}⇣${behind_count}"
style = "white"

# Last param in the first line/row
[cmd_duration]
disabled = false
format = "took [$duration]($style)"
min_time = 1


## SECOND LINE/ROW: Prompt
# Somethere at the beginning
[battery]
charging_symbol = ""
disabled = true
discharging_symbol = ""
full_symbol = ""

[[battery.display]]  # "bold red" style when capacity is between 0% and 10%
disabled = false
style = "bold red"
threshold = 15

[[battery.display]]  # "bold yellow" style when capacity is between 10% and 30%
disabled = true
style = "bold yellow"
threshold = 50

[[battery.display]]  # "bold green" style when capacity is between 10% and 30%
disabled = true
style = "bold green"
threshold = 80

# Prompt: optional param 1
[time]
disabled = true
format = " 🕙 $time($style)\n"
style = "bright-white"
time_format = "%T"

# Prompt: param 2
[character]
error_symbol = " [×](bold red)"
success_symbol = " [╰─λ](bold red)"

# SYMBOLS
[status]
disabled = false
format = '[\[$symbol$status_common_meaning$status_signal_name$status_maybe_int\]]($style)'
map_symbol = true
pipestatus = true
symbol = "🔴"

[aws]
symbol = " "

[conda]
symbol = " "

[dart]
symbol = " "

[docker_context]
symbol = " "

[elixir]
symbol = " "

[elm]
symbol = " "

[git_branch]
symbol = " "

[golang]
symbol = " "

[hg_branch]
symbol = " "

[java]
symbol = " "

[julia]
symbol = " "

[nim]
symbol = " "

[nix_shell]
symbol = " "

[nodejs]
symbol = " "

[package]
symbol = " "

[perl]
symbol = " "

[php]
symbol = " "

[python]
symbol = " "

[ruby]
symbol = " "

[rust]
symbol = " "

[swift]
symbol = "ﯣ "
```

</details>

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
$CONFIG_PROFILE = {function Invoke-Starship-TransientFunction {
  &starship module character
}

Invoke-Expression (&starship init powershell)}

Set-Content -Path $PROFILE -Value $CONFIG_PROFILE
```

> **Note**: You can check the location of this file by querying the `$PROFILE` variable in PowerShell. The path is often `~\Documents\PowerShell\Microsoft.PowerShell_profile.ps1`.

### Configure PowerShell on Windows Terminal

To configure PowerShell on Windows Terminal, you can follow the steps below:

1. Open Windows Terminal.
2. Click on `Ctrl + ,` to open the settings.
3. Click on `settings.json` to open the settings file.
4. Add the following lines to the `profiles` section.

```json
{
  "guid": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
  "hidden": false,
  "name": "PowerShell",
  "source": "Windows.Terminal.PowershellCore"
}
```

5. Change the `hidden` property to `true` for the `Windows PowerShell` profile.

```json
{
  "commandline": "%SystemRoot%\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
  "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
  "hidden": true,
  "name": "Windows PowerShell"
}
```

6. Add `Dracula schemes` to the `schemes` section.

```json
{
  "background": "#282A36",
  "black": "#21222C",
  "blue": "#BD93F9",
  "brightBlack": "#6272A4",
  "brightBlue": "#D6ACFF",
  "brightCyan": "#A4FFFF",
  "brightGreen": "#69FF94",
  "brightPurple": "#FF92DF",
  "brightRed": "#FF6E6E",
  "brightWhite": "#FFFFFF",
  "brightYellow": "#FFFFA5",
  "cursorColor": "#F8F8F2",
  "cyan": "#8BE9FD",
  "foreground": "#F8F8F2",
  "green": "#50FA7B",
  "name": "Dracula",
  "purple": "#FF79C6",
  "red": "#FF5555",
  "selectionBackground": "#44475A",
  "white": "#F8F8F2",
  "yellow": "#F1FA8C"
}
```

7. Save the file and close it.
8. Back to Windows Terminal, click on `Ctrl + ,` to open the settings.
9. Go to Profiles >> Defaults >> Appearance >> Color scheme choose `Dracula`.
10. Go to Profiles >> Defaults >> Appearance >> Font face choose `Caskaydia Cove Nerd Font`.

![Settings](/assets/img/blog/customization-windows-terminal-with-starship/2022-10-21-183905.png)

#### Extra Configuration

1. Open Windows Terminal.
2. Run the command

```powershell
# Allow scripts to run
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Install PSReadLine
Install-Module PSReadLine -AllowPrerelease -Force

# Install Terminal-Icons
Install-Module Terminal-Icons -AllowPrerelease -Force
```

3. Run the following command to `Set-Content` cmdlet to add the line to the profile.

```powershell
$CONFIG_PROFILE = {function Invoke-Starship-TransientFunction {
  &starship module character
}

Invoke-Expression (&starship init powershell)

# set PowerShell to UTF-8
[console]::InputEncoding = [console]::OutputEncoding = New-Object System.Text.UTF8Encoding

Import-Module -Name Terminal-Icons

Set-PSReadLineOption -PredictionViewStyle ListView
Set-PSReadLineOption -PredictionViewStyle InlineView

Set-PSReadLineOption -EditMode WindowS

Set-PSReadLineKeyHandler -Chord Ctrl+B -ScriptBlock {
    [Microsoft.PowerShell.PSConsoleReadLine]::RevertLine()
    [Microsoft.PowerShell.PSConsoleReadLine]::Insert('build')
    [Microsoft.PowerShell.PSConsoleReadLine]::AcceptLine()
}


# This is an example of a macro that you might use to execute a command.
# This will add the command to history.
Set-PSReadLineKeyHandler -Key Ctrl+Shift+b `
                         -BriefDescription BuildCurrentDirectory `
                         -LongDescription "Build the current directory" `
                         -ScriptBlock {
    [Microsoft.PowerShell.PSConsoleReadLine]::RevertLine()
    [Microsoft.PowerShell.PSConsoleReadLine]::Insert("dotnet build")
    [Microsoft.PowerShell.PSConsoleReadLine]::AcceptLine()
}}

Set-Content -Path $PROFILE -Value $CONFIG_PROFILE
```

![Settings](/assets/img/blog/customization-windows-terminal-with-starship/2022-10-21-184138.png)

## References

- [Starship](https://starship.rs/)
- [Nerd Fonts](https://www.nerdfonts.com/)
- [Dracula Theme](https://draculatheme.com/)
- [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab)
- [PowerShell](https://docs.microsoft.com/en-us/powershell/)
- [PSReadLine](https://docs.microsoft.com/en-us/powershell/module/psreadline/?view=powershell-7.2)
- [Terminal-Icons](https://www.powershellgallery.com/packages/Terminal-Icons/0.1.0)
- [Windows Terminal - Customization](https://docs.microsoft.com/en-us/windows/terminal/customize-settings/profile-general)
- [Windows Terminal - Themes](https://docs.microsoft.com/en-us/windows/terminal/customize-settings/color-schemes)
- [Windows Terminal - Fonts](https://docs.microsoft.com/en-us/windows/terminal/customize-settings/font-settings)
