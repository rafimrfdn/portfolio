---
title: 'Bash'
slug: 'bash'
category: 'Programming'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used widely as the default login shell for most Linux distributions.'
color: '#293138'
icon: 'BashIcon'
---

## Table of Contents

<details>

<summary>Click to expand contents</summary>

- [Introduction](#introduction)
  - [What is Bash?](#what-is-bash)
  - [Why Bash?](#why-bash)
  - [How to use Bash?](#how-to-use-bash)
- [Getting started](#getting-started)
  - [Hello World](#hello-world)
  - [Variables](#variables)
  - [Bash Comments](#bash-comments)
  - [Arguments](#arguments)
  - [Functions](#functions)
  - [Conditionals](#conditionals)
  - [Brace expansion](#brace-expansion)
  - [Shell execution](#shell-execution)
- [Bash Parameter expansions](#bash-parameter-expansions)
  - [Syntax](#syntax)
  - [Substitution](#substitution)
  - [Slicing](#slicing)
  - [Basepath & Dirpath](#basepath--dirpath)
  - [Transform](#transform)
- [Bash Arrays](#bash-arrays)
  - [Defining arrays](#defining-arrays)
  - [Indexing arrays](#indexing-arrays)
  - [Iterating arrays](#iterating-arrays)
  - [Bash Arrays Operations](#bash-arrays-operations)
  - [Arrays as arguments](#arrays-as-arguments)
- [Bash Dictionaries](#bash-dictionaries)
  - [Defining dictionaries](#defining-dictionaries)
  - [Working with dictionaries](#working-with-dictionaries)
  - [Iteration over dictionaries](#iteration-over-dictionaries)
- [Bash Conditionals](#bash-conditionals)
  - [Integer conditions](#integer-conditions)
  - [String conditions](#string-conditions)
  - [File conditions](#file-conditions)
  - [More conditions](#more-conditions)
  - [Logical and, or, not](#logical-and-or-not)
- [Bash Loops](#bash-loops)
  - [For loop](#for-loop)
  - [For loop like C](#for-loop-like-c)
  - [Ranges](#ranges)
  - [While loop](#while-loop)
  - [Continue](#continue)
  - [Break](#break)
  - [Until loop](#until-loop)
  - [Infinite loop](#infinite-loop)
  - [Loop over `file.txt` Read line by line](#loop-over-filetxt-read-line-by-line)
- [Bash Functions](#bash-functions)
  - [Defining functions](#defining-functions)
  - [Returning values](#returning-values)
  - [Raising errors](#raising-errors)
  - [Passing arguments](#passing-arguments)
- [Bash Options](#bash-options)
  - [Options](#options)
  - [Glob options](#glob-options)
- [Bash History](#bash-history)
  - [Commands](#commands)
  - [Expansions](#expansions)
  - [Bash History Operations](#bash-history-operations)
  - [Slices](#slices)
- [Others](#others)
  - [Numeric calculations](#numeric-calculations)
  - [printf](#printf)
  - [Subshells](#subshells)
  - [Inspecting commands](#inspecting-commands)
  - [Redirection](#redirection)
  - [Pipes](#pipes)
  - [Process substitution](#process-substitution)
  - [Source relative](#source-relative)
  - [Directory of script](#directory-of-script)
  - [Switch/Case](#switchcase)
  - [Trap errors](#trap-errors)
  - [Getting options](#getting-options)
  - [Check for command's result](#check-for-commands-result)
  - [Grep check](#grep-check)
  - [Special variables](#special-variables)
  - [Backslash escapes](#backslash-escapes)
  - [Heredoc](#heredoc)
  - [Reading input](#reading-input)
  - [Optional arguments](#optional-arguments)
  - [Strict mode](#strict-mode)
- [Resources](#resources)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is Bash?

Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used widely as the default login shell for most Linux distributions.

</div>

<div class="cheat__container-content">

### Why Bash?

Bash is a powerful scripting language that can be used to automate tasks and make your life easier. It is also a great way to learn about the Linux operating system and how it works.

</div>

<div class="cheat__container-content">

### How to use Bash?

Bash is a command line interface (CLI) that is used to interact with the operating system. It is used to run commands and programs on the system. Bash is a great way to learn about the Linux operating system and how it works.

</div>

---

## Getting started

<div class="cheat__container-content">

### Hello World

```bash
#!/bin/bash

echo "Hello World"
```

Execute the script

```bash
bash ./hello-world.sh
```

</div>

<div class="cheat__container-content">

### Variables

```bash
#!/bin/bash

# Assign a value to a variable
name="John Doe"

# Print the variable
echo $name
```

</div>

<div class="cheat__container-content">

### Bash Comments

```bash
#!/bin/bash

# This is an inline comment

: '
This is an
multi-line comment
'
```

> **Note:** Multi-line comments use :' to open and ' to close

</div>

<div class="cheat__container-content">

### Arguments

| Argument  | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `$1 … $9` | The first 9 arguments to the Bash script. (As mentioned above.) |
| `$0`      | The name of the Bash script.                                    |
| `$#`      | How many arguments were passed to the Bash script.              |
| `$$`      | The process ID of the current script.                           |
| `$*`      | All the arguments                                               |
| `$@`      | All the arguments, starting from the first one.                 |
| `$-`      | Options passed to the shell.                                    |
| `$?`      | The exit status of the last command that was run.               |

<br />

Example:

```bash
#!/bin/bash

# Print the first argument
echo $1

# Print all the arguments
echo $*

# Print all the arguments starting from the first one
echo $@
```

Execute the script

```bash
bash ./arguments.sh "Hello" "World"
```

</div>

<div class="cheat__container-content">

### Functions

```bash
#!/bin/bash

# Define a function
function World() {
  echo "World"
}

# Call the function
echo "Hello $(World)"
```

Go to [Bash Functions](#bash-functions)

</div>

<div class="cheat__container-content">

### Conditionals

```bash
#!/bin/bash

# Define a variable
name="John Doe"

# Check if the variable is empty
if [ -z "$name" ]; then
  echo "The variable is empty"
else
  echo "The variable is not empty"
fi
```

Go to [Bash Conditionals](#bash-conditionals)

</div>

<div class="cheat__container-content">

### Brace expansion

| Expression   | Description                     |
| ------------ | ------------------------------- |
| `{a,b,c}`    | Matches a, b, or c.             |
| `{a,b,c}.ts` | Matches a.ts, b.ts, or c.ts.    |
| `{1..5}`     | Matches any number from 1 to 5. |

<br />

Example:

```bash
#!/bin/bash

# Create a directory a, b, c
mkdir {a,b,c}

# Create a file with the name a.ts, b.ts, c.ts
touch {a,b,c}.ts

# Create a file with the name 1.txt, 2.txt, 3.txt, 4.txt, 5.txt
touch {1..5}.txt
```

</div>

<div class="cheat__container-content">

### Shell execution

```bash
#!/bin/bash

# Execute a command
echo "Hello $(whoami)"

# Execute a command with ``
echo "Hello `whoami`"
```

</div>

---

## Bash Parameter expansions

</div>

<div class="cheat__container-content">

### Syntax

| Expression        | Description                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| `${FOO%suffix}`   | Remove the shortest matching suffix pattern from the end of `$FOO`.       |
| `${FOO#prefix}`   | Remove the shortest matching prefix pattern from the beginning of `$FOO`. |
| `${FOO%%suffix}`  | Remove the longest matching suffix pattern from the end of `$FOO`.        |
| `${FOO##prefix}`  | Remove the longest matching prefix pattern from the beginning of `$FOO`.  |
| `${FOO/from/to}`  | Replace the first matching instance of `from` with `to` in `$FOO`.        |
| `${FOO//from/to}` | Replace all matching instances of `from` with `to` in `$FOO`.             |
| `${FOO/%from/to}` | Replace the suffix matching `from` with `to` in `$FOO`.                   |
| `${FOO/#from/to}` | Replace the prefix matching `from` with `to` in `$FOO`.                   |
| Substrings        |                                                                           |
| `${FOO:0:3}`      | Extract the first 3 characters of `$FOO`.                                 |
| `${FOO:(-3):3}`   | Extract the last 3 characters of `$FOO`.                                  |
| Length            |                                                                           |
| `${#FOO}`         | The length of `$FOO`.                                                     |
| Default values    |                                                                           |
| `${FOO:-bar}`     | Use the value of `$FOO` if it is set, otherwise use `bar`.                |
| `${FOO:=bar}`     | Use the value of `$FOO` if it is set, otherwise set it to `bar`.          |
| `${FOO:+bar}`     | Use `bar` if `$FOO` is set, otherwise use the empty string.               |
| `${FOO:?bar}`     | Use the value of `$FOO` if it is set, otherwise print `bar` to stderr.    |

</div>

<div class="cheat__container-content">

### Substitution

```bash
# !/bin/bash

echo ${FOO:-val} # Use the value of $FOO if it is set, otherwise use val.

STR="/path/to/file.txt"

# Remove the extension
echo ${STR%.txt} # /path/to/file

# Change the extension
echo ${STR%.txt}.md # /path/to/file.md

# Get the directory
echo ${STR%/*} # /path/to

# Get the extension
echo ${STR##*.} # txt

# Get the file
echo ${STR##*/} # file.txt

# Change the file name to test
echo ${STR/file/test} # /path/to/test.txt
```

</div>

<div class="cheat__container-content">

### Slicing

```bash
#!/bin/bash

STR="Hello World"

# Get the first 5 characters
echo ${STR:0:5} # Hello

# Get the last 5 characters
echo ${STR:(-5):5} # World
```

</div>

<div class="cheat__container-content">

### Basepath & Dirpath

```bash
#!/bin/bash

STR="/path/to/file.txt"

# Get the basepath
echo ${STR##*/} # file.txt

# Get the dirpath
echo ${STR%/*} # /path/to
```

</div>

<div class="cheat__container-content">

### Transform

```bash
#!/bin/bash

STR="Hello World"

# Convert to uppercase
echo ${STR^^} # HELLO WORLD

# Convert to lowercase
echo ${STR,,} # hello world

# Capitalize the first letter
echo ${STR^} # Hello world

# Capitalize the first letter of each word
echo ${STR^^^} # Hello World

# Capitalize the first letter of each word
echo ${STR^ ^} # Hello World

# Capitalize the first letter of each word
echo "${STR[@]^}" # Hello World

# lowercase the first letter of each word
echo "${STR[@],}" # hello world
```

</div>

---

## Bash Arrays

<div class="cheat__container-content">

### Defining arrays

```bash
#!/bin/bash

# Define an array
NUMBERS=(1 2 3)

# Define an array with a range
array[0]=1
array[1]=2
array[2]=3

# Define an array with a range
array=({1..3})

# Define an array1, array2, and array3
array1=(1 2 3)
array2=(4 5 6)
array3=(7 8 9)

# Merge the arrays
array=("${array1[@]}" "${array2[@]}" "${array3[@]}")

# Declare an array with a range
declare -a numbers(1 2 3)

# Add an element to the array in the last position
numbers+=4

# Add an element to the array in the first position
numbers=(0 "${numbers[@]}")

# Add an element to the array in the second position
numbers=("${numbers[@]:0:1}" "1" "${numbers[@]:1}")
```

</div>

<div class="cheat__container-content">

### Indexing arrays

| Expression          | Description                                     |
| ------------------- | ----------------------------------------------- |
| `${NUMBERS[0]}`     | Get the first element of the array.             |
| `${NUMBERS[-1]}`    | Get the last element of the array.              |
| `${NUMBERS[@]}`     | Get all elements of the array.                  |
| `${NUMBERS[*]}`     | Get all elements of the array.                  |
| `${#NUMBERS[@]}`    | Get the length of the array.                    |
| `${#NUMBERS}`       | Get the length of the 1st element of the array. |
| `${#NUMBERS[n]}`    | Get the length of the nth element of the array. |
| `${NUMBERS[@]:3:2}` | Get the 2 elements starting at index 3.         |
| `${!NUMBERS[@]}`    | Get all indexes of the array.                   |

</div>

<div class="cheat__container-content">

### Iterating arrays

```bash
#!/bin/bash

# Define an array
NUMBERS=(1 2 3)

# Iterate over the array
for i in "${NUMBERS[@]}"; do
  echo $i
done

# Iterate over the array with index

for i in "${!NUMBERS[@]}"; do
  echo "$i: ${NUMBERS[$i]}"
done
```

</div>

<div class="cheat__container-content">

### Bash Arrays Operations

```bash
#!/bin/bash

# Define an array
NAMES=("John" "Jane" "Jack")

# Push an element to the array
NAMES=("${NAMES[@]}" "Jill")

# Other way to push an element to the array
NAMES+=("Jill")

# Remove by RegEx pattern matching
NAMES=("${NAMES[@]/*ll*/}")

# Remove one element by index
unset NAMES[0]

# Duplicate an array
NAMES2=("${NAMES[@]}")

# Concatenate two arrays
NAMES3=("${NAMES[@]}" "${NAMES2[@]}")

# Reverse an array
NAMES=("${NAMES[@]}" | tac)

# Sort an array
NAMES=($(printf '%s\n' "${NAMES[@]}" | sort))

# Read from file
NAMES=($(cat file.txt))
```

</div>

<div class="cheat__container-content">

### Arrays as arguments

```bash
#!/bin/bash

# Define an array
NAMES=("John" "Jane" "Jack")

# Pass the array as arguments
function print_names() {
  for i in "${@}"; do
    echo $i
  done
}

print_names "${NAMES[@]}"
```

</div>

---

## Bash Dictionaries

<div class="cheat__container-content">

### Defining dictionaries

```bash
#!/bin/bash

# Define a dictionary
declare -A DICT

# Add dictionary with values
DICT["key1"]="value1"
DICT["key2"]="value2"
DICT["key3"]="value3"
```

</div>

<div class="cheat__container-content">

### Working with dictionaries

```bash
#!/bin/bash

# Pritn by key
echo ${DICT["key1"]}

# Print all values
echo ${DICT[@]}

# Print all keys
echo ${!DICT[@]}

# Length of the dictionary
echo ${#DICT[@]}

# Delete a key2
unset DICT["key2"]
```

</div>

<div class="cheat__container-content">

### Iteration over dictionaries

```bash
#!/bin/bash

# Iterate over the dictionary
for val in "${DICT[@]}"; do
  echo $val
done

# Iterate over the keys
for key in "${!DICT[@]}"; do
  echo $key
done

# Iterate over the dictionary with keys
for key in "${!DICT[@]}"; do
  echo "$key: ${DICT[$key]}"
done
```

</div>

---

## Bash Conditionals

<div class="cheat__container-content">

### Integer conditions

| Operator            | Description           |
| ------------------- | --------------------- |
| `[[ NUM -eq NUM ]]` | Equal                 |
| `[[ NUM -ne NUM ]]` | Not equal             |
| `[[ NUM -gt NUM ]]` | Greater than          |
| `[[ NUM -ge NUM ]]` | Greater than or equal |
| `[[ NUM -lt NUM ]]` | Less than             |
| `[[ NUM -le NUM ]]` | Less than or equal    |
| `(( NUM > NUM ))`   | Greater than          |
| `(( NUM >= NUM ))`  | Greater than or equal |
| `(( NUM < NUM ))`   | Less than             |
| `(( NUM <= NUM ))`  | Less than or equal    |

</div>

<div class="cheat__container-content">

### String conditions

| Operator               | Description              |
| ---------------------- | ------------------------ |
| `[[ -z STR ]]`         | Empty string             |
| `[[ -n STR ]]`         | Not empty                |
| `[[ STR ]]`            | Not empty                |
| `[[ STR == STR ]]`     | Equal                    |
| `[[ STR = STR ]]`      | Equal (deprecated)       |
| `[[ STR < STR ]]`      | Less than                |
| `[[ STR > STR ]]`      | Greater than             |
| `[[ STR =~ REGEX ]]`   | Match regex              |
| `[[ STR =~ ^REGEX$ ]]` | Match regex (full match) |

</div>

<div class="cheat__container-content">

### File conditions

| Operator                | Description               |
| ----------------------- | ------------------------- |
| `[[ -f FILE ]]`         | File exists               |
| `[[ -e FILE ]]`         | File exists               |
| `[[ -d FILE ]]`         | Directory exists          |
| `[[ -r FILE ]]`         | File is readable          |
| `[[ -h FILE ]]`         | File is a symbolic link   |
| `[[ -w FILE ]]`         | File is writable          |
| `[[ -x FILE ]]`         | File is executable        |
| `[[ -s FILE ]]`         | File is not empty         |
| `[[ -O FILE ]]`         | File is owned by you      |
| `[[ -G FILE ]]`         | File is owned by group    |
| `[[ -L FILE ]]`         | File is a symbolic link   |
| `[[ FILE1 -nt FILE2 ]]` | File1 is newer than File2 |
| `[[ FILE1 -ot FILE2 ]]` | File1 is older than File2 |
| `[[ FILE1 -ef FILE2 ]]` | File1 is same as File2    |

</div>

<div class="cheat__container-content">

### More conditions

| Operator                           | Description             |
| ---------------------------------- | ----------------------- |
| `[[ -o OPTION ]]`                  | Option is enabled       |
| `[[ -v VAR ]]`                     | Variable is set         |
| `[[ -R VAR ]]`                     | Variable is read-only   |
| `[[ -S VAR ]]`                     | Variable is a socket    |
| `[[ -p VAR ]]`                     | Variable is a pipe      |
| `[[ -b VAR ]]`                     | Variable is a block dev |
| `[[ ! CONDITION ]]`                | Negate condition        |
| `[[ CONDITION1 && CONDITION2 ]]`   | AND                     |
| `[[ CONDITION1 \|\| CONDITION2 ]]` | OR                      |

Example:

```bash
#!/bin/bash

# String
if [[ -z $STR ]]; then
  echo "Empty string"
elif [[ -n $STR ]]; then
  echo "Not empty"
else
  echo "Not empty"
fi

# Combinations
if [[ $X && $Y ]]; then
  echo "Both are true"
elif [[ $X || $Y ]]; then
  echo "One is true"
else
  echo "Both are false"
fi

# Regex
if [[ $STR =~ ^[0-9]+$ ]]; then
  echo "String is a number"
fi

# Smaller
if [[ $X < $Y ]]; then
  echo "X is smaller than Y"
fi

# Exists
if [[ -f $FILE ]]; then
  echo "File exists"
fi
```

</div>

<div class="cheat__container-content">

### Logical and, or, not

```bash
#!/bin/bash

# Logical and
if [[ $X && $Y ]]; then
  echo "Both are true"
fi

# Logical or
if [[ $X || $Y ]]; then
  echo "One is true"
fi

# Logical not
if [[ ! $X ]]; then
  echo "X is false"
fi
```

</div>

---

## Bash Loops

<div class="cheat__container-content">

### For loop

```bash
#!/bin/bash

# For loop
for i in {1..10}; do
  echo $i
done
```

</div>

<div class="cheat__container-content">

### For loop like C

```bash
#!/bin/bash

# For loop like C
for ((i=1; i<=10; i++)); do
  echo $i
done
```

</div>

<div class="cheat__container-content">

### Ranges

```bash
#!/bin/bash

# Ranges
for i in {1..10}; do
  echo $i
done

# Ranges with step
for i in {1..10..2}; do
  echo $i
done
```

</div>

<div class="cheat__container-content">

### While loop

```bash
#!/bin/bash

# While loop with auto increment
i=1
while [[ $i -le 10 ]]; do
  echo $i
  ((i++))
done

# While loop with auto decrement
i=10
while [[ $i -ge 1 ]]; do
  echo $i
  ((i--))
done
```

</div>

<div class="cheat__container-content">

### Continue

```bash
#!/bin/bash

# Continue
for i in {1..10}; do
  if [[ $i -eq 5 ]]; then
    continue
  fi
  echo $i
done
```

</div>

<div class="cheat__container-content">

### Break

```bash
#!/bin/bash

# Break
for i in {1..10}; do
  if [[ $i -eq 5 ]]; then
    break
  fi
  echo $i
done
```

</div>

<div class="cheat__container-content">

### Until loop

```bash
#!/bin/bash

# Until loop
i=1
until [[ $i -gt 10 ]]; do
  echo $i
  ((i++))
done
```

</div>

<div class="cheat__container-content">

### Infinite loop

```bash
#!/bin/bash

# Infinite loop
while true; do
  echo "Infinite loop"
done

# Infinite loop with (shorthand)
while :; do
  echo "Infinite loop"
done
```

</div>

<div class="cheat__container-content">

### Loop over `file.txt` Read line by line

```bash
#!/bin/bash

# Loop over file.txt
while read -r line; do
  echo $line
done < file.txt
```

</div>

---

## Bash Functions

<div class="cheat__container-content">

### Defining functions

```bash
#!/bin/bash

# Defining functions
function hello() {
  echo "Hello World"
}

# Defining functions (shorthand), same as above
hello() {
  echo "Hello World"
}

# Calling functions
hello
```

</div>

<div class="cheat__container-content">

### Returning values

```bash
#!/bin/bash

# Returning values
function myfunc() {
  local myresult='Hello World'
  echo $myresult
}

# Calling functions
result="$(myfunc)"

# Printing result
echo $result
```

</div>

<div class="cheat__container-content">

### Raising errors

```bash
#!/bin/bash

# Raising errors
function myfunc() {
  local myresult='Hello World'
  echo $myresult
  return 1
}

# Calling functions
if myfunc; then
  echo "Success"
else
  echo "Failed"
fi
```

</div>

<div class="cheat__container-content">

### Passing arguments

```bash
#!/bin/bash

# Passing arguments
function myfunc() {
  echo "First argument: $1"
  echo "Second argument: $2"
  echo "All arguments: $@"
}

# Calling functions
myfunc "Hello" "World"
```

</div>

---

## Bash Options

<div class="cheat__container-content">

### Options

| Option         | Description                                             |
| -------------- | ------------------------------------------------------- |
| `-o`           | Set options                                             |
| `-o noclobber` | Disable file overwriting                                |
| `-o errexit`   | Exit on error                                           |
| `-o errtrace`  | Exit on error in function                               |
| `-o functrace` | Exit on error in function                               |
| `-o nounset`   | Exit on undefined variable                              |
| `-o pipefail`  | Exit on pipe error                                      |
| `-o xtrace`    | Print commands and their arguments as they are executed |
| `-o verbose`   | Print shell input lines as they are read                |

<br />

Example:

```bash
#!/bin/bash

# Options

# Disable file overwriting
set -o noclobber

# Exit on error
set -o errexit

# Exit on error in function
set -o errtrace

# Exit on error in function
set -o functrace

# Exit on undefined variable
set -o nounset

# Exit on pipe error
set -o pipefail

# Print commands and their arguments as they are executed
set -o xtrace

# Print shell input lines as they are read
set -o verbose
```

</div>

<div class="cheat__container-content">

### Glob options

| Option                     | Description                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| `shopt`                    | Set options                                                         |
| `shopt -s nullglob`        | Disable globbing and return an empty string if no matches are found |
| `shopt -s failglob`        | Disable globbing and return an empty string if no matches are found |
| `shopt -s dotglob`         | Include hidden files in globbing                                    |
| `shopt -s nocaseglob`      | Case insensitive globbing                                           |
| `shopt -s globstar`        | Enable recursive globbing                                           |
| `shopt -s globasciiranges` | Enable globbing of ASCII character ranges                           |
| `shopt -s extglob`         | Enable extended globbing                                            |

<br />

Example:

```bash
#!/bin/bash

# Glob options

# Disable globbing and return an empty string if no matches are found
shopt -s nullglob

# Disable globbing and return an empty string if no matches are found
shopt -s failglob

# Include hidden files in globbing
shopt -s dotglob

# Case insensitive globbing
shopt -s nocaseglob

# Enable recursive globbing
shopt -s globstar

# Enable globbing of ASCII character ranges
shopt -s globasciiranges

# Enable extended globbing
shopt -s extglob
```

</div>

---

## Bash History

<div class="cheat__container-content">

### Commands

| Command               | Description                                    |
| --------------------- | ---------------------------------------------- |
| `history`             | List history                                   |
| `sudo !!`             | Run last command as root                       |
| `shopt -s histappend` | Append to the history file, don't overwrite it |

</div>

<div class="cheat__container-content">

### Expansions

| Expansion    | Description                          |
| ------------ | ------------------------------------ |
| `!$`         | Last argument of last command        |
| `!*`         | All arguments of last command        |
| `!^`         | First argument of last command       |
| `!-n`        | Command number `n`                   |
| `!-n:p`      | Print command number `n`             |
| `!-n:e`      | Edit command number `n` in `$EDITOR` |
| `!n`         | Command starting with `n`            |
| `!<command>` | Last command starting with `command` |
| `!?command?` | Last command containing `command`    |

</div>

<div class="cheat__container-content">

### Bash History Operations

| Operation       | Description                                           |
| --------------- | ----------------------------------------------------- |
| `!!`            | Execute last command                                  |
| `!!:s/foo/bar`  | Substitute `foo` with `bar` in last command           |
| `!!:gs/foo/bar` | Substitute `foo` with `bar` globally in last command  |
| `!$:t`          | Print last argument of last command                   |
| `!$:h`          | Print last argument of last command without extension |

<br />

> **Note:** `!!` is the same as `!-1`, and `!!` & `!$` can be replaced with any valid expansion.

</div>

<div class="cheat__container-content">

### Slices

| Slice    | Description                             |
| -------- | --------------------------------------- |
| `!!:n`   | Last `n` arguments of last command      |
| `!!:n-m` | Arguments `n` to `m` of last command    |
| `!!:n-$` | Arguments `n` to end of last command    |
| `!!:0-n` | Arguments `0` to `n` of last command    |
| `!^`     | First argument of last command          |
| `!^:n`   | First `n` characters of first argument  |
| `!^:n-m` | Characters `n` to `m` of first argument |
| `!$`     | Last argument of last command           |
| `!$:n`   | Last `n` characters of last argument    |
| `!$:n-m` | Characters `n` to `m` of last argument  |

<br />

> **Note:** `!!:n` is the same as `!-1:n`, and `!!` can be replaced with any valid expansion i.e. `!cat`, `!-2`, `!42`, etc.

</div>

---

## Others

<div class="cheat__container-content">

### Numeric calculations

```bash
#!/bin/bash

# Numeric calculations
echo $(( 1 + 1 ))
echo $(( 1 - 1 ))
echo $(( 1 * 1 ))
echo $(( 1 / 1 ))

# Floating point calculations
echo "scale=2; 1 / 3" | bc

# Random number between 0 and 100
echo $(( RANDOM % 100 ))
```

</div>

<div class="cheat__container-content">

### printf

```bash
#!/bin/bash

# printf
printf "%s\n" "Hello World"

# printf with colors
printf "\033[0;31m%s\033[0m\n" "Hello World"
```

</div>

<div class="cheat__container-content">

### Subshells

```bash
#!/bin/bash

# Subshells
echo $(date)

# Subshells with variables
date=$(date)

# Change directory in subshell
(cd /tmp && echo "Current directory is: $(pwd)")
```

</div>

<div class="cheat__container-content">

### Inspecting commands

```bash
#!/bin/bash

# Inspecting commands
command -v ls

# Inspecting commands with arguments
command -v ls -- --help
```

</div>

<div class="cheat__container-content">

### Redirection

```bash
#!/bin/bash

# Redirection

# Redirect stdout to file
echo "Hello World" > /tmp/hello.txt

# Redirect stdout
node test.js > /tmp/test.txt

# Append stdout
node test.js >> /tmp/test.txt

# Redirect stderr
node test.js 2> /tmp/test.txt

# Append stderr
node test.js 2>> /tmp/test.txt

# Redirect stdout and stderr
node test.js &> /tmp/test.txt

# Append stdout and stderr
node test.js &>> /tmp/test.txt

# Redirect stdout and stderr
node test.js > /tmp/test.txt 2>&1

# Append stdout and stderr
node test.js > /tmp/test.txt 2>&1
```

</div>

<div class="cheat__container-content">

### Pipes

```bash
#!/bin/bash

# Pipes

# Pipe stdout to stdin
echo "Hello World" | cat

# Pipe stdout and stderr to stdin
node test.js | cat

# Pipe stdout to stdin and stderr to stdout
node test.js 2>&1 | cat
```

</div>

<div class="cheat__container-content">

### Process substitution

```bash
#!/bin/bash

# Process substitution

# Redirect stdout to file
echo "Hello World" > >(cat > /tmp/hello.txt)

# Redirect stdout and stderr to file
node test.js > >(cat > /tmp/test.txt) 2>&1
```

</div>

<div class="cheat__container-content">

### Source relative

```bash
#!/bin/bash

# Source relative
source "$(dirname "$0")/test.sh"
```

</div>

<div class="cheat__container-content">

### Directory of script

```bash
#!/bin/bash

# Directory of script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
```

</div>

<div class="cheat__container-content">

### Switch/Case

```bash
#!/bin/bash

# Switch/Case
case "$1" in
  start)
    echo "Starting..."
    ;;
  stop)
    echo "Stopping..."
    ;;
  *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac
```

</div>

<div class="cheat__container-content">

### Trap errors

```bash
#!/bin/bash

# Trap errors
trap 'echo "Error on line $LINENO"' ERR

# trap 'trapecho "$BASH_COMMAND"' ERR
trapecho() {
  echo "ERROR: ${BASH_SOURCE[1]}:${BASH_LINENO[0]}: ${FUNCNAME[1]}: $1"
}

# trace ERR through 'time command' and other functions
set -o errtrace

# trace ERR through 'time command' and other functions
trap 'trapecho "$BASH_COMMAND"' ERR
```

</div>

<div class="cheat__container-content">

### Getting options

```bash
#!/bin/bash

# Getting options
while getopts ":a:b:" opt; do
  case $opt in
    a) echo "-a was triggered, Parameter: $OPTARG" >&2
    ;;
    b) echo "-b was triggered, Parameter: $OPTARG" >&2
    ;;
    \?) echo "Invalid option: -$OPTARG" >&2
    ;;
  esac
done
```

</div>

<div class="cheat__container-content">

### Check for command's result

```bash
#!/bin/bash

# Check for command's result
if command -v ls &> /dev/null; then
  echo "ls exists"
else
  echo "ls does not exist"
fi
```

</div>

<div class="cheat__container-content">

### Grep check

```bash
#!/bin/bash

# Grep check
if grep -q "Hello World" /tmp/hello.txt; then
  echo "Hello World exists"
else
  echo "Hello World does not exist"
fi

# Check for file
if [ -f /tmp/hello.txt ]; then
  echo "/tmp/hello.txt exists"
else
  echo "/tmp/hello.txt does not exist"
fi
```

</div>

<div class="cheat__container-content">

### Special variables

| Variable | Description                    |
| -------- | ------------------------------ |
| `$0`     | Script name                    |
| `$?`     | Exit code                      |
| `$!`     | PID of last background process |
| `$$`     | PID of current process         |

</div>

<div class="cheat__container-content">

### Backslash escapes

| Escape  | Description                                           |
| ------- | ----------------------------------------------------- |
| `\a`    | Alert (bell)                                          |
| `\b`    | Backspace                                             |
| `\e`    | Escape                                                |
| `\f`    | Form feed                                             |
| `\n`    | New line                                              |
| `\r`    | Carriage return                                       |
| `\t`    | Horizontal tab                                        |
| `\v`    | Vertical tab                                          |
| `\\`    | Backslash                                             |
| `\nnn`  | Octal number                                          |
| `\xhh`  | Hexadecimal number                                    |
| `&`     | Background process                                    |
| `&&`    | Run next command if previous command was successful   |
| `\|`    | Pipe                                                  |
| `\| \|` | Run next command if previous command was unsuccessful |

<br />

> **Note:** The backslash escape is not needed for the following characters: `! $ " ' \`, and `\` can be used to escape itself and the following characters.

</div>

<div class="cheat__container-content">

### Heredoc

```bash
#!/bin/bash

# Heredoc
cat << EOF
Hello World
EOF
```

</div>

<div class="cheat__container-content">

### Reading input

```bash
#!/bin/bash

# Reading input
read -p "Enter your name: " name
echo "Hello $name"
```

</div>

<div class="cheat__container-content">

### Optional arguments

```bash
#!/bin/bash

# Optional arguments
if [ -z "$1" ]; then
  echo "No arguments supplied"
else
  echo "Argument supplied: $1"
fi
```

</div>

<div class="cheat__container-content">

### Strict mode

```bash
#!/bin/bash

# Strict mode
set -euo pipefail
IFS=$'\n\t'
```

</div>

---

## Resources

<div class="cheat__container-content">

- [Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
- [Bash Guide for Beginners](https://www.tldp.org/LDP/Bash-Beginners-Guide/html/index.html)
- [Bash Scripting Tutorial](https://ryanstutorials.net/bash-scripting-tutorial/)

</div>
