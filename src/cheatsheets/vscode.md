---
title: 'VSCode'
slug: 'vscode'
category: 'Toolkit'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS.'
color: '#007ACC'
icon: 'VSCodeIcon'
draft: false
---

## Table of Contents

<details>

<summary>Click to expand</summary>

- [Introduction](#introduction)
  - [What is Visual Studio Code?](#what-is-visual-studio-code)
  - [Features](#features)
  - [Installation](#installation)
    - [Windows](#windows)
    - [MacOS](#macos)
    - [Linux](#linux)
- [Shortcuts Windows / Linux](#shortcuts-windows--linux)
  - [NOTE](#note)
  - [General](#general)
  - [Navigation](#navigation)
  - [Basic editing](#basic-editing)
  - [Editor management](#editor-management)
  - [File management](#file-management)
  - [Search and replace](#search-and-replace)
  - [Multi-cursor and selection](#multi-cursor-and-selection)
  - [Rich languages editing](#rich-languages-editing)
  - [Display](#display)
  - [Debugging](#debugging)

</details>

## Introduction

<div class="cheat__container-content">

### What is Visual Studio Code?

Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring.

</div>

<div class="cheat__container-content">

### Features

- **IntelliSense** - IntelliSense provides smart completions based on variable types, function definitions, and imported modules.
- **Debugging** - Debug code right from the editor. Launch or attach to your running apps and debug with break points, call stacks, and an interactive console.
- **Git** - Work with Git repositories directly from the editor. Manage changes, stage lines, or make commits right from the editor and use the integrated Git console to pull, push, and fetch.
- **GitHub** - Connect to GitHub and work with your repositories directly from VS Code. Clone, fetch, and push to your repositories and open pull requests right from the editor.
- **Extensions** - Extend the editor with extensions that add new languages, debuggers, and tools to support your development workflow.
- **Themes** - Choose from a variety of themes to change the look and feel of the editor.
- **Settings** - Customize the editor to your liking with settings that enable you to change the font size and family, keybindings, colors, and preferences.
- **Integrated Terminal** - Use the integrated terminal to work with the command line. The terminal is fully customizable and supports multiple tabs.
- **Emmet** - Use Emmet abbreviations to quickly generate HTML tags and CSS rules.
- **Snippets** - Use snippets to quickly insert commonly used code patterns.
- **Code Actions** - Quickly fix errors and warnings with code actions that are suggested by the editor.

</div>

<div class="cheat__container-content">

### Installation

#### Windows

<details>

- Using winget

```bash
winget install Microsoft.VisualStudioCode
```

- Using Chocolatey

```bash
choco install vscode
```

- Using Scoop

```bash
scoop install vscode
```

- Using the installer

Download the installer from [here](https://code.visualstudio.com/Download).

</details>

#### MacOS

<details>

- Using Homebrew

```bash
brew install --cask visual-studio-code
```

- Using the installer

Download the installer from [here](https://code.visualstudio.com/Download).

</details>

#### Linux

<details>

- Arch Linux

```bash
sudo pacman -S code
```

- Debian/Ubuntu

```bash
sudo apt install code
```

- Fedora

```bash
sudo dnf install code
```

- openSUSE / SUSE Linux Enterprise

```bash
sudo zypper install code
```

- Red Hat Enterprise Linux

```bash
sudo yum install code
```

</details>

</div>

---

## Shortcuts Windows / Linux

<div class="cheat__container-content">

## NOTE

> **NOTE:** The shortcuts are for Windows / Linux. For Mac, replace `Ctrl` with `Cmd`.

---

> **NOTE:** The shortcuts are for the default keyboard layout. If you have changed the keyboard layout, you might need to change the shortcuts.

</div>

<div class="cheat__container-content">

### General

| Shortcut                  | Description               |
| :------------------------ | :------------------------ |
| `Ctrl + Shift + P` / `F1` | Open the Command Palette. |
| `Ctrl + P`                | Open the Quick Open.      |
| `Ctrl + Shift + N`        | New window.               |
| `Ctrl + Shift + W`        | Close window.             |
| `Ctrl + ,`                | Open settings.            |
| `Ctrl + K` / `Ctrl + S`   | Open keyboard shortcuts.  |

</div>

<div class="cheat__container-content">

### Navigation

| Shortcut                     | Description                      |
| :--------------------------- | :------------------------------- |
| `Ctrl + G`                   | Go to line number                |
| `Ctrl + T`                   | Go to symbol.                    |
| `Ctrl + P`                   | Go to file.                      |
| `Ctrl + Shift + O`           | Go to symbol in workspace.       |
| `Ctrl + Shift + M`           | Go to problems.                  |
| `F8`                         | Go to next error or warning.     |
| `Shift + F8`                 | Go to previous error or warning. |
| `Ctrl + Shift + Tab`         | Go to previous editor.           |
| `Alt + Left` / `Alt + Right` | Go back / forward.               |
| `Ctrl + M`                   | Toggle side bar.                 |

</div>

<div class="cheat__container-content">

### Basic editing

| Shortcut                                  | Description                    |
| :---------------------------------------- | :----------------------------- |
| `Ctrl + X`                                | Cut line.                      |
| `Ctrl + C`                                | Copy line.                     |
| `Alt + Up` / `Alt + Down`                 | Move line up/down.             |
| `Shift + Alt + Up` / `Shift + Alt + Down` | Copy line up/down.             |
| `Ctrl + Shift + K`                        | Delete line.                   |
| `Ctrl + Enter`                            | Insert line below.             |
| `Ctrl + Shift + Enter`                    | Insert line above.             |
| `Ctrl + Shift + \`                        | Jump to matching bracket.      |
| `Ctrl + [` / `Ctrl + ]`                   | Outdent / indent line.         |
| `Home` / `End`                            | Go to beginning / end of line. |
| `Ctrl + Home` / `Ctrl + End`              | Go to beginning / end of file. |
| `Ctrl + Up` / `Ctrl + Down`               | Scroll line up / down.         |
| `Alt + PgUp` / `Alt + PgDn`               | Scroll page up / down.         |
| `Ctrl + Shift + [` / `Ctrl + Shift + ]`   | Fold / unfold region.          |
| `Ctrl + K` / `Ctrl + 0`                   | Fold / unfold all regions.     |
| `Ctrl + K` / `Ctrl + J`                   | Fold / unfold all regions.     |
| `Ctrl + K` / `Ctrl + C`                   | Add line comment.              |
| `Ctrl + K` / `Ctrl + U`                   | Remove line comment.           |
| `Shift + Alt + A`                         | Toggle block comment.          |
| `Ctrl + /`                                | Toggle line comment.           |
| `Alt + Z`                                 | Toggle word wrap.              |

</div>

<div class="cheat__container-content">

### Editor management

| Shortcut                                      | Description                |
| :-------------------------------------------- | :------------------------- |
| `Ctrl + F4` / `Ctrl + W`                      | Close editor.              |
| `Ctrl + K` / `Ctrl + F`                       | Close folder.              |
| `Ctrl + \`                                    | Split editor.              |
| `Ctrl + 1` / `Ctrl + 2`                       | Focus editor 1 / 2.        |
| `Ctrl + K` / `Ctrl + Left` / `Ctrl + Right`   | Focus editor left / right. |
| `Ctrl + Shift + PgUp` / `Ctrl + Shift + PgDn` | Move editor left / right.  |
| `Ctrl + K` / `Ctrl + Left` / `Ctrl + Right`   | Move editor left / right.  |

</div>

<div class="cheat__container-content">

### File management

| Shortcut                 | Description               |
| :----------------------- | :------------------------ |
| `Ctrl + N`               | New file.                 |
| `Ctrl + O`               | Open file.                |
| `Ctrl + S`               | Save file.                |
| `Ctrl + Shift + S`       | Save file as.             |
| `Ctrl + K` / `Ctrl + S`  | Save all.                 |
| `Ctrl + F4` / `Ctrl + W` | Close editor.             |
| `Ctrl + T`               | Reopen closed editor.     |
| `Ctrl + K + Enter`       | Keep preview open.        |
| `Ctrl + Tab`             | Switch between open files |
| `Ctrl + Shift + Tab`     | Open previous file.       |
| `Ctrl + K + P`           | Copy path of active file. |
| `Ctrl + K + R`           | Reveal active file in OS. |
| `Ctrl + K + O`           | Open active file in OS.   |

</div>

<div class="cheat__container-content">

### Search and replace

| Shortcut                          | Description                                 |
| :-------------------------------- | :------------------------------------------ |
| `Ctrl + F`                        | Find.                                       |
| `Ctrl + H`                        | Replace.                                    |
| `F3` / `Shift + F3`               | Find next / previous.                       |
| `Alt + Enter`                     | Select all occurrences of find match.       |
| `Ctrl + D`                        | Add selection to next find match.           |
| `Ctrl + K` / `Ctrl + D`           | Move last selection to next find match.     |
| `Alt + C` / `Alt + R` / `Alt + W` | Toggle case sensitive / regex / whole word. |

</div>

<div class="cheat__container-content">

### Multi-cursor and selection

| Shortcut                                                  | Description                                  |
| :-------------------------------------------------------- | :------------------------------------------- |
| `Alt + Click`                                             | Insert cursor.                               |
| `Ctrl + Alt + Up` / `Ctrl + Alt + Down`                   | Insert cursor above / below.                 |
| `Ctrl + U`                                                | Undo last cursor operation.                  |
| `Shift + Alt + I`                                         | Insert cursor at end of each line selected.  |
| `Ctrl + I`                                                | Select current line.                         |
| `Ctrl + Shift + L`                                        | Select all occurrences of current selection. |
| `Ctrl + F2`                                               | Select all occurrences of current word.      |
| `Shift + Alt + Right` / `Shift + Alt + Left`              | Expand / shrink selection.                   |
| `Shift + Alt + [DRAG]`                                    | Column (box) selection.                      |
| `Ctrl + Shift + Alt + [ARROW]`                            | Column (box) selection.                      |
| `Ctrl + Shift + Alt + PgUp` / `Ctrl + Shift + Alt + PgDn` | Column (box) selection.                      |

</div>

<div class="cheat__container-content">

### Rich languages editing

| Shortcut                      | Description               |
| :---------------------------- | :------------------------ |
| `Ctrl + [SPACE]` / `Ctrl + I` | Trigger suggestions.      |
| `Ctrl + Shift + [SPACE]`      | Trigger parameter hints.  |
| `Ctrl + .`                    | Quick fix.                |
| `F12`                         | Go to definition.         |
| `Shift + Alt + F`             | Format document.          |
| `Shift + Alt + O`             | Organize imports.         |
| `Ctrl + K` / `Ctrl + F`       | Fold / unfold all regions |
| `Alt + F12`                   | Show all references.      |
| `Ctrl + K + F12`              | Show all implementations  |
| `Ctrl + K + M`                | Show problems.            |

</div>

<div class="cheat__container-content">

### Display

| Shortcut                  | Description               |
| :------------------------ | :------------------------ |
| `F11`                     | Toggle full screen.       |
| `Shift + Alt + 0`         | Toggle Zen mode.          |
| `Ctrl + B`                | Toggle sidebar visibility |
| `Ctrl + =` / `Ctrl + -`   | Zoom in / out.            |
| `Ctrl + 0`                | Reset zoom level.         |
| `Ctrl + Shift + E`        | Toggle explorer.          |
| `Ctrl + Shift + F`        | Toggle search.            |
| `Ctrl + Shift + G`        | Toggle source control.    |
| `Ctrl + Shift + D`        | Toggle debug.             |
| `Ctrl + Shift + X`        | Toggle extensions.        |
| `Ctrl + Shift + H`        | Toggle replace.           |
| `Ctrl + Shift + J`        | Toggle problems.          |
| `Ctrl + Shift + U`        | Toggle output.            |
| `Ctrl + Shift + V`        | Toggle markdown preview.  |
| `Ctrl + Shift + Y`        | Toggle terminal.          |
| `Ctrl + Shift + Z`        | Toggle Zen mode.          |
| `Ctrl + Shift + [NUMBER]` | Toggle editor group.      |
| `Ctrl + K + V`            | Toggle preview.           |
| `Ctrl + K + Z`            | Toggle word wrap.         |

</div>

<div class="cheat__container-content">

### Debugging

| Shortcut                                     | Description                    |
| :------------------------------------------- | :----------------------------- |
| `F9`                                         | Toggle breakpoint.             |
| `F5` / `F10` / `F11`                         | Start / step over / step into. |
| `Shift + F5` / `Shift + F10` / `Shift + F11` | Stop / step out / step out.    |
| `Ctrl + K` / `Ctrl + I`                      | Focus debug console.           |
| `Ctrl + K` / `Ctrl + M`                      | Focus debug repl.              |
| `Ctrl + K` / `Ctrl + P`                      | Focus debug variables.         |
| `Ctrl + K` / `Ctrl + W`                      | Focus debug watch.             |
| `Ctrl + K` / `Ctrl + T`                      | Focus debug call stack.        |
| `Ctrl + K` / `Ctrl + S`                      | Focus debug breakpoints.       |
| `Ctrl + K` / `Ctrl + G`                      | Focus debug loaded scripts.    |
| `Ctrl + K` / `Ctrl + \|`                     | Focus debug exception.         |
| `Shift + PgUp` / `Shift + PgDn`              | Scroll debug console.          |
| `Ctrl + Up` / `Ctrl + Down`                  | Scroll debug console.          |
| `Ctrl + Home` / `Ctrl + End`                 | Scroll debug console.          |

</div>
