---
title: VIM Cheat Sheet
slug: vim-cheat-sheet
tags: ['Linux', 'Text Editor']
categories: ['Linux']
date: 2022-10-20T00:00:00.000Z
image: /assets/img/blog/vim-cheat-sheet/vim-cheat-sheet.jpeg
author: MKAbuMattar
description: 'VIM is a text editor that is available on most Linux distributions. It is a powerful text editor that can be used to edit files from the command line. It is a modal text editor, which means that it has different modes for different tasks. This post is a cheat sheet for VIM.'
prev: introduction-to-linux-cli
next: customization-windows-terminal-with-starship
featured: true
---

## Table of Contents

- [What is a VIM?](#what-is-a-vim)
- [VIM Modes](#vim-modes)
  - [Normal Mode](#normal-mode)
  - [Insert Mode](#insert-mode)
  - [Command Mode](#command-mode)
- [VIM Commands](#vim-commands)
  - [Global](#global)
  - [Cursor movement](#cursor-movement)
  - [Insert mode](#insert-mode)
  - [Editing](#editing)
  - [Marking text (visual mode)](#marking-text-visual-mode)
  - [Visual commands](#visual-commands)
  - [Registers](#registers)
  - [Marks and positions](#marks-and-positions)
  - [Macros](#macros)
  - [Cut and paste](#cut-and-paste)
  - [Indent text](#indent-text)
  - [Exiting](#exiting)
  - [Search and replace](#search-and-replace)
  - [Search in multiple files](#search-in-multiple-files)
  - [Tabs](#tabs)
  - [Working with multiple files](#working-with-multiple-files)
- [Summary](#summary)

## What Is a VIM?

VIM is a text editor that is available on most Linux distributions. It is a powerful text editor that can be used to edit files from the command line. It is a modal text editor, which means that it has different modes for different tasks. This post is a cheat sheet for VIM.

## VIM Modes

VIM has three modes:

- Normal Mode
- Insert Mode
- Command Mode

### Normal Mode

In normal mode, you can move around the file, delete text, and perform other tasks. You can enter normal mode by pressing the `Esc` key.

### Insert Mode

In insert mode, you can type text. You can enter insert mode by pressing the `i` key.

### Command Mode

In command mode, you can perform actions on the file. You can enter command mode by pressing the `:` key.

## VIM Commands

### Global

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `:h[elp] keyword` | Open help for keyword.           |
| `:sav[eas] file`  | Save the file as file.           |
| `:clo[se]`        | Close the current file.          |
| `:ter[minal]`     | Open a terminal.                 |
| `K`               | Open help for word under cursor. |

### Cursor movement

| Command    | Description                                                                |
| ---------- | -------------------------------------------------------------------------- |
| `h`        | Move left.                                                                 |
| `j`        | Move down.                                                                 |
| `k`        | Move up.                                                                   |
| `l`        | Move right.                                                                |
| `gj`       | Move down a screen.                                                        |
| `gk`       | Move up a screen.                                                          |
| `H`        | Move to top of screen.                                                     |
| `M`        | Move to middle of screen.                                                  |
| `L`        | Move to bottom of screen.                                                  |
| `w`        | Move forward one word.                                                     |
| `W`        | Move forward one WORD.                                                     |
| `e`        | Move to end of word.                                                       |
| `E`        | Move to end of WORD.                                                       |
| `b`        | Move back one word.                                                        |
| `B`        | Move back one WORD.                                                        |
| `ge`       | Move to end of previous word.                                              |
| `gE`       | Move to end of previous WORD.                                              |
| `%`        | Move to matching character (default supported pairs: '()', '{}', '[]').    |
| `0`        | Move to the start of the line.                                             |
| `^`        | Move to the first non-blank character of the line.                         |
| `$`        | Move to the end of the line.                                               |
| `g_`       | Move to the last non-blank character of the line.                          |
| `gg`       | Move to the first line of the file.                                        |
| `G`        | Move to the last line of the file.                                         |
| `5G`       | Move to line 5.                                                            |
| `gd`       | Move to the definition of the word under the cursor.                       |
| `gD`       | Move to the definition of the WORD under the cursor.                       |
| `fx`       | Move to the next occurrence of character x.                                |
| `Fx`       | Move to the previous occurrence of character x.                            |
| `tx`       | Move to the character before the next occurrence of character x.           |
| `Tx`       | Move to the character after the previous occurrence of character x.        |
| `;`        | Repeat the previous f, t, F, or T movement.                                |
| `,`        | Repeat the previous f, t, F, or T movement, but in the opposite direction. |
| `}`        | Move to the next paragraph (or function/block, when editing code).         |
| `{`        | Move to the previous paragraph (or function/block, when editing code).     |
| `zz`       | Center cursor on screen.                                                   |
| `Ctrl + e` | Move screen down one line (without moving cursor).                         |
| `Ctrl + y` | Move screen up one line (without moving cursor).                           |
| `Ctrl + b` | Move back one full screen.                                                 |
| `Ctrl + f` | Move forward one full screen.                                              |
| `Ctrl + d` | Move forward half a screen.                                                |
| `Ctrl + u` | Move back half a screen.                                                   |

### Insert mode

| Command     | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| `i`         | Insert before the cursor.                                    |
| `I`         | Insert at the beginning of the line.                         |
| `a`         | Insert (append) after the cursor.                            |
| `A`         | Insert (append) at the end of the line.                      |
| `o`         | Append (open) a new line below the current line.             |
| `O`         | Append (open) a new line above the current line.             |
| `ea`        | Insert (append) at the end of the word.                      |
| `Ctrl + h`  | Delete the character before the cursor.                      |
| `Ctrl + w`  | Delete the word before the cursor.                           |
| `Ctrl + j`  | begin a new line.                                            |
| `Ctrl + t`  | Shift the current line one tab to the right.                 |
| `Ctrl + d`  | Shift the current line one tab to the left.                  |
| `Ctrl + n`  | Insert the next completion of the word under the cursor.     |
| `Ctrl + p`  | Insert the previous completion of the word under the cursor. |
| `Ctrl + rx` | Insert the register x contents.                              |
| `Ctrl + ox` | Temporarily enter normal mode to issue a single command.     |
| `ESC`       | Exit insert mode.                                            |

### Editing

| Command    | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| `r`        | Replace a single character.                                   |
| `R`        | Replace multiple characters.                                  |
| `J`        | Join line below to the current one with one space in between. |
| `gJ`       | Join line below to the current one without space in between.  |
| `gwip`     | Reformat paragraph.                                           |
| `g~`       | Switch case of character under cursor.                        |
| `gu`       | Make character under cursor lowercase.                        |
| `gU`       | Make character under cursor uppercase.                        |
| `cc`       | Change (replace) an entire line.                              |
| `c$`       | Change (replace) to the end of the line.                      |
| `C`        | Change (replace) to the end of the line.                      |
| `ciw`      | Change (replace) the entire word.                             |
| `cw`       | Change (replace) to the end of the word.                      |
| `ce`       | Change (replace) to the end of the word.                      |
| `s`        | Delete character under cursor and substitute text.            |
| `S`        | Delete line and substitute text (same as cc).                 |
| `xp`       | Transpose two letters (delete and paste).                     |
| `u`        | Undo.                                                         |
| `U`        | Undo all changes on line.                                     |
| `Ctrl + r` | Redo.                                                         |
| `.`        | Repeat last command.                                          |

### Marking text (visual mode)

| Command    | Description                                                     |
| ---------- | --------------------------------------------------------------- |
| `v`        | Start visual mode, mark lines, then do a command (like y-yank). |
| `V`        | Start linewise visual mode.                                     |
| `o`        | Move to other end of marked area.                               |
| `O`        | Move to other corner of block.                                  |
| `Ctrl + v` | Start visual block mode.                                        |
| `aw`       | Mark a word.                                                    |
| `ab`       | A block with ()                                                 |
| `aB`       | A block with {}                                                 |
| `at`       | A block with <>                                                 |
| `ib`       | Inner block with ()                                             |
| `iB`       | Inner block with {}                                             |
| `it`       | Inner block with <>                                             |
| `Esc`      | Exit visual mode.                                               |

### Visual commands

| Command | Description                      |
| ------- | -------------------------------- |
| `>`     | Shift text right.                |
| `<`     | Shift text left.                 |
| `y`     | Yank (copy) marked text.         |
| `d`     | Delete marked text.              |
| `~`     | Switch case.                     |
| `u`     | change marked text to lowercase. |
| `U`     | Change marked text to uppercase. |

### Registers

| Command        | Description                 |
| -------------- | --------------------------- |
| `:reg[isters]` | List all registers.         |
| `"xy`          | Yank text into register x.  |
| `"xp`          | Paste text from register x. |
| `"xP`          | Paste before cursor.        |
| `"+y`          | Yank into system clipboard. |

### Marks and positions

| Command    | Description                      |
| ---------- | -------------------------------- |
| `:marks`   | List all marks.                  |
| `ma`       | Set current position for mark a. |
| ``a`       | Jump to mark a.                  |
| `y'a`      | Yank to mark a.                  |
| ``0`       | Jump to start of line.           |
| ``"`       | Jump to last edit position.      |
| ``.`       | Jump to last edit position.      |
| ``         | Jump to last edit position.      |
| `:ju[mps]` | List all jump positions.         |
| `Ctrl + o` | Jump to previous position.       |
| `Ctrl + i` | Jump to next position.           |
| `:changes` | List all changes.                |
| `g,`       | Jump to previous change.         |
| `g;`       | Jump to next change.             |
| `Ctrl + j` | Jump to next change.             |

### Macros

| Command | Description              |
| ------- | ------------------------ |
| `qa`    | Start recording macro a. |
| `q`     | Stop recording macro.    |
| `@a`    | Execute macro a.         |
| `@@`    | Execute last macro.      |

### Cut and paste

| Command | Description                                                                                     |
| ------- | ----------------------------------------------------------------------------------------------- |
| `yy`    | Yank (copy) a line.                                                                             |
| `2yy`   | Yank (copy) 2 lines.                                                                            |
| `yw`    | Yank (copy) the characters of the word from the cursor position to the start of the next word.  |
| `y$`    | Yank (copy) to end of line.                                                                     |
| `yiw`   | Yank (copy) inner word.                                                                         |
| `yaw`   | Yank (copy) a word including the surrounding white space.                                       |
| `p`     | Put (paste) the clipboard after cursor.                                                         |
| `P`     | Put (paste) before cursor.                                                                      |
| `gp`    | Put (paste) after cursor.                                                                       |
| `gP`    | Put (paste) before cursor.                                                                      |
| `dd`    | Delete (cut) a line.                                                                            |
| `2dd`   | Delete (cut) 2 lines.                                                                           |
| `dw`    | Delete (cut) the characters of the word from the cursor position to the start of the next word. |
| `D`     | Delete (cut) to the end of the line.                                                            |
| `d$`    | Delete (cut) to the end of the line.                                                            |
| `diw`   | Delete (cut) inner word.                                                                        |
| `daw`   | Delete (cut) a word including the surrounding white space.                                      |
| `x`     | Delete (cut) character.                                                                         |

### Indent text

| Command | Description                 |
| ------- | --------------------------- |
| `>>`    | Shift text right.           |
| `<<`    | Shift text left.            |
| `>%`    | Shift selected lines right. |
| `<%`    | Shift selected lines left.  |
| `>ib`   | Shift inner block right.    |
| `<ib`   | Shift inner block left.     |
| `>at`   | Shift block right.          |
| `<at`   | Shift block left.           |
| `3==`   | Auto indent 3 lines.        |
| `=%`    | Auto indent selected lines. |
| `=iB`   | Auto indent inner block.    |
| `gg=G`  | Auto indent whole file.     |
| `]p`    | Paste and indent.           |

### Exiting

| Command          | Description                                |
| ---------------- | ------------------------------------------ |
| `:w`             | Write (save) the file, but don't exit.     |
| `:w !sudo tee %` | Write out the current file using sudo.     |
| `:wq`            | Write (save) and quit.                     |
| `:x`             | Write (save) and quit.                     |
| `ZZ`             | Write (save) and quit.                     |
| `:q`             | Quit (fails if there are unsaved changes). |
| `:q!`            | Quit and throw away unsaved changes.       |
| `ZQ`             | Quit and throw away unsaved changes.       |
| `:wqa`           | Write (save) and quit on all tabs.         |
| `:qa`            | Quit on all tabs.                          |

### Search and replace

| Command          | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `/pattern`       | Search for pattern.                                              |
| `?pattern`       | Search backward for pattern.                                     |
| `\vpattern`      | Search for lines not containing pattern.                         |
| `n`              | Repeat search in same direction.                                 |
| `N`              | Repeat search in opposite direction.                             |
| `:%s/old/new/g`  | Replace all old with new throughout file.                        |
| `:%s/old/new/gc` | Replace all old with new throughout file with confirmations.     |
| `:s/old/new/g`   | Replace all old with new in the current line.                    |
| `:s/old/new/gc`  | Replace all old with new in the current line with confirmations. |
| `:noh[lsearch]`  | Remove highlighting of search matches.                           |

### Search in multiple files

| Command                     | Description                           |
| --------------------------- | ------------------------------------- |
| `:vimgrep /pattern/ {file}` | Search for pattern in multiple files. |
| `:cn[ext]`                  | Jump to the next match.               |
| `:cp[revious]`              | Jump to the previous match.           |
| `:cope[n]`                  | Open a window containing the list.    |
| `:ccl[ose]`                 | Close the window.                     |

### Tabs

| Command                     | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| `:tabe`                     | Open a new tab.                                                   |
| `:tabnew {page.words.file}` | Open a new tab.                                                   |
| `gt`                        | Move to the next tab.                                             |
| `:tabn[ext]`                | Move to the next tab.                                             |
| `gT`                        | Move to the previous tab.                                         |
| `:tabp[revious]`            | Move to the previous tab.                                         |
| `#gt`                       | Move to tab #.                                                    |
| `:tabm[ove] {number}`       | Move the current tab to the {number}th position (indexed from 0). |
| `:tabc[lose]`               | Close the current tab.                                            |
| `:tabo[nly]`                | Close all tabs except for the current one.                        |
| `:tabr[ewind]`              | Move to the first tab.                                            |
| `:tabfir[st]`               | Move to the first tab.                                            |
| `:tabl[ast]`                | Move to the last tab.                                             |
| `:tabs`                     | List all tabs.                                                    |
| `:tabdo`                    | Run a command for each open tab.                                  |
| `:tabdo {cmd}`              | Run {cmd} for each open tab.                                      |

### Working with multiple files

| Command              | Description                                              |
| -------------------- | -------------------------------------------------------- |
| `:e[dit] {file}`     | Edit a file in a new buffer.                             |
| `:bn[ext]`           | Go to the next buffer.                                   |
| `:bp[revious]`       | Go to the previous buffer.                               |
| `:bd[elete]`         | Delete a buffer.                                         |
| `:b[uffer]{number}`  | Go to buffer {number}.                                   |
| `:b[uffer] file`     | Go to buffer {file}.                                     |
| `:ls`                | List all open buffers.                                   |
| `:buffers`           | List all open buffers.                                   |
| `:sp[lit] {file}`    | Open a file in a new buffer and split window.            |
| `:vsp[lit] {file}`   | Open a file in a new buffer and vertically split window. |
| `:vert[ical] ba[ll]` | Open a file in a new buffer and vertically split window. |
| `:tab ba[ll]`        | Open a file in a new buffer and split window.            |
| `:tabe[dit] {file}`  | Open a file in a new buffer and split window.            |
| `:tabnew {file}`     | Open a file in a new buffer and split window.            |
| `:tab sball`         | Open a file in a new buffer and split window.            |
| `Ctrl + ws`          | Split window.                                            |
| `Ctrl + ww`          | Move to the next window.                                 |
| `Ctrl + wq`          | Close the current window.                                |
| `Ctrl + wv`          | Split window vertically.                                 |
| `Ctrl + wh`          | Move to the window on the left.                          |
| `Ctrl + wl`          | Move to the window on the right.                         |
| `Ctrl + wj`          | Move to the window below.                                |
| `Ctrl + wk`          | Move to the window above.                                |
| `Ctrl + w=`          | Make all windows the same height.                        |
| `Ctrl + wH`          | Move the current window to the far left.                 |
| `Ctrl + wL`          | Move the current window to the far right.                |
| `Ctrl + wJ`          | Move the current window to the bottom.                   |
| `Ctrl + wK`          | Move the current window to the top.                      |

## Summary

In this article, we have learned how to use Vim to edit text files. We have learned how to move around the file, how to edit text, how to search and replace text, and how to work with multiple files.
