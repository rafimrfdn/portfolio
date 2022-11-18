---
title: 'Vim'
slug: 'vim'
category: 'Toolkits'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'Vim is a highly configurable text editor built to enable efficient text editing. It is an improved version of the vi editor distributed with most UNIX systems.'
color: '#179A33'
icon: 'VimIcon'
draft: false
---

## Table of Contents

<details>

<summary>Click to expand</summary>

- [Introduction](#introduction)
  - [What is Vim?](#what-is-vim)
  - [Why Vim?](#why-vim)
  - [Vim vs. Vi](#vim-vs-vi)
  - [Vim vs. Emacs](#vim-vs-emacs)
- [Getting started](#getting-started)
  - [Exiting](#exiting)
  - [Exiting insert mode](#exiting-insert-mode)
  - [Visual mode](#visual-mode)
  - [Navigating](#navigating)
  - [Editing](#editing)
  - [Clipboard](#clipboard)
- [Operators](#operators)
  - [Usage operators](#usage-operators)
  - [Operators list](#operators-list)
  - [Motions list](#motions-list)
- [Text objects](#text-objects)
  - [Usage text objects](#usage-text-objects)
  - [Text objects list](#text-objects-list)
  - [Diff](#diff)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is Vim?

Vim is a highly configurable text editor built to enable efficient text editing. It is an improved version of the vi editor distributed with most UNIX systems.

</div>

<div class="cheat__container-content">

### Why Vim?

Vim is included as "vi" with most UNIX systems and with Apple OS X. It is also available for Windows, the Macintosh, and many other platforms. It is distributed free as charityware.

</div>

<div class="cheat__container-content">

### Vim vs. Vi

Vim is a clone, with additions, of Bill Joy's vi editor for UNIX. The license is compatible with the GNU General Public License as far as I know.

</div>

<div class="cheat__container-content">

### Vim vs. Emacs

Vim is often compared to GNU Emacs, another popular text editor. Vim is designed for use both from a command line interface and as a standalone application in a graphical user interface. Emacs is designed to be used as a standalone application in a graphical user interface.

</div>

---

## Getting started

<div class="cheat__container-content">

### Exiting

| Command      | Description                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| `:q`         | Quit (fails if there are unsaved changes)                                                             |
| `:q!`        | Quit and throw away unsaved changes                                                                   |
| `:qa`        | Quit all windows                                                                                      |
| `:qa!`       | Quit all windows and throw away unsaved changes                                                       |
| `:w`         | Write (save) the file, but don't exit                                                                 |
| `:wq` / `:x` | Write and quit                                                                                        |
| `ZZ`         | Write and quit if the file has been changed, quit without writing if the file has not been changed    |
| `ZQ`         | Quit without writing if the file has been changed, quit with writing if the file has not been changed |

</div>

<div class="cheat__container-content">

### Exiting insert mode

| Command         | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
| `Esc` / `<C-[>` | Exit insert mode                                                          |
| `<C-c>`         | Exit insert mode, like `<C-[>` but leaves the command line in normal mode |

</div>

<div class="cheat__container-content">

### Visual mode

#### Entering visual mode

| Command | Description                                                         |
| ------- | ------------------------------------------------------------------- |
| `v`     | Start visual mode, mark lines, then do a command (like `y` to yank) |
| `V`     | Start linewise visual mode                                          |
| `<C-v>` | Start visual block mode                                             |

#### In visual mode

| Command   | Description                |
| --------- | -------------------------- |
| `d` / `x` | Delete (cut) selected text |
| `s`       | Delete (cut) selected text |
| `y`       | Yank (copy) selected text  |

</div>

<div class="cheat__container-content">

### Navigating

| Command           | Description                |
| ----------------- | -------------------------- |
| `h`               | Move cursor left           |
| `j`               | Move cursor down           |
| `k`               | Move cursor up             |
| `l`               | Move cursor right          |
| `<C-U>` / `<C-D>` | Scroll up/down half a page |
| `<C-B>` / `<C-F>` | Scroll up/down one page    |

#### Moving around words

| Command    | Description                |
| ---------- | -------------------------- |
| `b` / `w`  | Move back/forward one word |
| `ge` / `e` | Move to end of word        |

#### Moving around lines

| Command | Description                                       |
| ------- | ------------------------------------------------- |
| `0`     | Move to the start of the line                     |
| `^`     | Move to the first non-blank character of the line |
| `$`     | Move to the end of the line                       |

#### Moving around character

| Command | Description                                    |
| ------- | ---------------------------------------------- |
| `fc`    | Move to the next occurrence of character c     |
| `Fc`    | Move to the previous occurrence of character c |

#### Moving around document

| Command | Description                        |
| ------- | ---------------------------------- |
| `gg`    | Move to the first line of the file |
| `G`     | Move to the last line of the file  |
| `:n`    | Move to line n                     |
| `nG`    | Move to line n                     |

#### Moving around window

| Command | Description                                         |
| ------- | --------------------------------------------------- |
| `zz`    | Scroll the current line to the center of the window |
| `zt`    | Scroll the current line to the top of the window    |
| `zb`    | Scroll the current line to the bottom of the window |
| `H`     | Move to the top of the window                       |
| `M`     | Move to the middle of the window                    |
| `L`     | Move to the bottom of the window                    |

#### Moving around search

| Command | Description                                                    |
| ------- | -------------------------------------------------------------- |
| `n`     | Repeat the last search in the same direction                   |
| `N`     | Repeat the last search in the opposite direction               |
| `*`     | Search for the word under the cursor                           |
| `#`     | Search for the word under the cursor in the opposite direction |

#### Moving around tab pages

| Command                  | Description                                 |
| ------------------------ | ------------------------------------------- |
| `:tabedit <file>`        | Open a new tab page with the specified file |
| `:tabfind <file>`        | Open a new tab page with the specified file |
| `:tabclose`              | Close the current tab page                  |
| `:tabonly`               | Close all other tab pages                   |
| `:tabnext`               | Move to the next tab page                   |
| `:tabprevious`           | Move to the previous tab page               |
| `:tabs`                  | List all tab pages                          |
| `:tabfirst` / `:tablast` | Move to the first/last tab page             |
| `:tabn`                  | Move to the nth tab page                    |
| `:tabp`                  | Move to the previous tab page               |

</div>

<div class="cheat__container-content">

### Editing

| Command | Description                                                    |
| ------- | -------------------------------------------------------------- |
| `a`     | Insert text after the cursor                                   |
| `A`     | Insert text at the end of the line                             |
| `i`     | Insert text before the cursor                                  |
| `o`     | Insert new line below the cursor                               |
| `O`     | Insert new line above the cursor                               |
| `s`     | Delete character and substitute text                           |
| `S`     | Delete line and substitute text (same as cc)                   |
| `C`     | Delete to the end of the line and substitute text (same as c$) |
| `r`     | Replace a single character                                     |
| `R`     | Replace multiple characters                                    |
| `U`     | Undo                                                           |
| `<C-r>` | Redo                                                           |

</div>

<div class="cheat__container-content">

### Clipboard

| Command       | Description                       |
| ------------- | --------------------------------- |
| `x`           | Delete character                  |
| `dd`          | Delete (cut) a line               |
| `yy`          | Yank (copy) a line                |
| `P`           | Put (paste) before cursor         |
| `p`           | Put (paste) after cursor          |
| `"*p` / `"+p` | Put (paste) from system clipboard |
| `"*y` / `"+y` | Yank (copy) to system clipboard   |

</div>

---

## Operators

<div class="cheat__container-content">

### Usage operators

| Command | Description                                   |
| ------- | --------------------------------------------- |
| `d`     | Operator, tells Vim to delete                 |
| `w`     | Motion, tells Vim to operate on the next word |

</div>

<div class="cheat__container-content">

### Operators list

| Command | Description                             |
| ------- | --------------------------------------- |
| `d`     | Delete (cut) text                       |
| `y`     | Yank (copy) text                        |
| `c`     | Change text                             |
| `>`     | Shift text right                        |
| `<`     | Shift text left                         |
| `=`     | Auto-indent text                        |
| `g~`    | Toggle case of text                     |
| `gu`    | Make text lowercase                     |
| `gU`    | Make text uppercase                     |
| `!`     | Filter text through an external program |

> **Note:** To see the full list of operators, run `:help operator`.

</div>

<div class="cheat__container-content">

### Motions list

| Command | Description                             |
| ------- | --------------------------------------- |
| `vip`   | Select a paragraph                      |
| `vap`   | Select a paragraph including whitespace |
| `vib`   | Select a block                          |
| `vab`   | Select a block including whitespace     |

> **Note:** To see the full list of motions, run `:help motion`.

</div>

## Text objects

<div class="cheat__container-content">

### Usage text objects

| Command | Description                                   |
| ------- | --------------------------------------------- |
| `d`     | Operator, tells Vim to delete                 |
| `i`     | Text object, tells Vim to operate on the word |
| `p`     | Motion, tells Vim to operate on the next word |

</div>

<div class="cheat__container-content">

### Text objects list

| Command             | Description   |
| ------------------- | ------------- |
| `p`                 | Paragraph     |
| `w`                 | Word          |
| `s`                 | Sentence      |
| `[`/ `(` / `{` /`<` | Block of code |
| `'` / `"`/ `        | Quote         |
| `b`                 | Brackets, [{  |
| `B`                 | Brackets, [{  |
| `t`                 | A XML tag     |

> **Note:** To see the full list of text objects, run `:help text-objects`.

</div>

<div class="cheat__container-content">

### Diff

| Command | Description                                                  |
| ------- | ------------------------------------------------------------ |
| `do`    | Open a diff window                                           |
| `dp`    | Put the changes from the diff window into the current buffer |
| `do`    | Open a diff window                                           |
| `dp`    | Put the changes from the diff window into the current buffer |
| `]c`    | Jump to the next change                                      |
| `[c`    | Jump to the previous change                                  |

- `:gvimdiff file1 file2` - Open a diff window for two files, side by side.

</div>
