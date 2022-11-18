---
title: 'Python'
slug: 'python'
category: 'Programming'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'Python is an interpreted, high-level, general-purpose programming language.'
color: '#386f9f'
icon: 'PythonIcon'
draft: false
---

# **Note:** This cheatsheet is still under development

## Table of Contents

<details>

<summary>Click to expand</summary>

- [Introduction](#introduction)
  - [What is Python?](#what-is-python)
  - [Why Python?](#why-python)
  - [Python Versions](#python-versions)
  - [Python Installation](#python-installation)
    - [Windows](#windows)
    - [MacOS](#macos)
    - [Linux](#linux)
- [Getting Started](#getting-started)
  - [Hello World](#hello-world)
  - [Variables](#variables)
  - [Data Types](#data-types)
  - [Slicing String](#slicing-string)
  - [Lists](#lists)
  - [If Statement](#if-statement)
  - [Loop](#loop)
  - [Functions](#functions)
  - [File Handling](#file-handling)
  - [Arithmetic Operators](#arithmetic-operators)
  - [Plus-Equals Operator](#plus-equals-operator)
- [Python Data Types](#python-data-types)
  - [Numbers](#numbers)
  - [Strings](#strings)
  - [Booleans](#booleans)
  - [Lists](#lists-1)
  - [Tuples](#tuples)
  - [Sets](#sets)
  - [Dictionaries](#dictionaries)
  - [Casting](#casting)
- [Python Strings](#python-strings)
  - [Array Like](#array-like)
  - [Looping](#looping)
  - [String Length](#string-length)
  - [Check String](#check-string)
  - [Multiple copies](#multiple-copies)
  - [Concatenates](#concatenates)
  - [Formatting](#formatting)
  - [Input](#input)
  - [Join](#join)
  - [Endswith](#endswith)
  - [Slicing string](#slicing-string-1)
  - [Replace](#replace)
  - [Split](#split)
  - [`f-Strings`](#f-strings)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is Python?

Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.

</div>

<div class="cheat__container-content">

### Why Python?

Python is a great language for beginners. It is easy to learn, easy to read, and easy to write. It is also a great language for professionals. It has high-level built-in data structures and a simple but effective approach to object-oriented programming. Python's elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms.

</div>

<div class="cheat__container-content">

### Python Versions

Python has two major versions, Python 2 and Python 3. Python 2 is the older version and Python 3 is the newer version. Python 2 is not maintained anymore and Python 3 is the current version. Python 3 is not backward compatible with Python 2. Python 3 is the future of Python.

Python 2.7 is the last version of Python 2. It was released in 2010 and will be supported until 2020. Python 3.0 was released in 2008 and is still under active development. Python 3.0 was a major revision of the language that is not completely backward-compatible, and much Python 2 code does not run unmodified on Python 3.

</div>

<div class="cheat__container-content">

### Python Installation

Python can be installed on Windows, MacOS, and Linux.

#### Windows

<details>

- Using winget

```bash
winget install Python.Python
```

- Using Chocolatey

```bash
choco install python
```

- Using Python Installer

Download the latest version of Python from [here](https://www.python.org/downloads/windows/).

</details>

#### MacOS

<details>

- Using Homebrew

```bash
brew install python
```

- Using Python Installer

Download the latest version of Python from [here](https://www.python.org/downloads/mac-osx/).

</details>

#### Linux

<details>

- Arch Linux

```bash
sudo pacman -S python
```

- Debian/Ubuntu

```bash
sudo apt install python3
```

- Fedora

```bash
sudo dnf install python3
```

- OpenSUSE

```bash
sudo zypper install python3
```

</details>

</div>

---

## Getting Started

<div class="cheat__container-content">

### Hello World

```python
print('Hello World')
```

execute the code using `python3` command

```bash
python3 hello.py
```

output

```bash
Hello World
```

</div>

<div class="cheat__container-content">

### Variables

```python
# name is a variable of type string
name = 'MKAbuMattar'

# age is a variable of type integer
age = 27

# print the value of the variable
print(name)
print(age)
```

</div>

<div class="cheat__container-content">

### Data Types

Python has the following data types built-in by default, in these categories:

- Text Type: `str`
- Numeric Types: `int`, `float`, `complex`
- Sequence Types: `list`, `tuple`, `range`
- Mapping Type: `dict`
- Set Types: `set`, `frozenset`
- Boolean Type: `bool`
- Binary Types: `bytes`, `bytearray`, `memoryview`

<br/>

| Type                           | Description  | Example                                |
| ------------------------------ | ------------ | -------------------------------------- |
| `str`                          | String/ Text | `str = 'Hello World'`                  |
| `int, float, complex`          | Numeric      | `int = 1` `float = 1.0` `complex = 1j` |
| `list, tuple, range`           | Sequence     | `list = [1, 2, 3]` `tuple = (1, 2, 3)` |
| `dict`                         | Mapping      | `dict = {'name': 'MKAbuMattar'}`       |
| `set, frozenset`               | Set          | `set = {1, 2, 3}`                      |
| `bool`                         | Boolean      | `bool = True`                          |
| `bytes, bytearray, memoryview` | Binary       | `bytes = b'Hello World'`               |

> **Note:** `type()` function is used to get the data type of a variable.

</div>

<div class="cheat__container-content">

### Slicing String

Python allows negative indexing for its sequences. The index of -1 refers to the last item, -2 to the second last item and so on.

```python
name = 'MKAbuMattar'

# print the first character
print(name[0])

# print the last character
print(name[-1])

# print the first 3 characters
print(name[0:3])

# print the last 3 characters

print(name[-3:])

# print the string without the first 3 characters
print(name[3:])

# print the string without the last 3 characters
print(name[:-3])

# print the string without the first and last 3 characters
print(name[3:-3])
```

</div>

<div class="cheat__container-content">

### Lists

A list is a collection which is ordered and changeable. In Python lists are written with square brackets.

```python
# create a list
list = [1, 2, 3]

# add an item to the list
list.append(4)

# remove an item from the list
list.remove(2)

# print the list
for item in list:
    print(item)
```

</div>

<div class="cheat__container-content">

### If Statement

Python supports the usual logical conditions from mathematics:

```python
num = 5

if num > 0:
    print('Positive')
elif num < 0:
    print('Negative')
else:
    print('Zero')
```

</div>

<div class="cheat__container-content">

### Loop

Python has two primitive loop commands:

```python
for item in range(5):
    if item == 3:
        break
    else:
        print(item)
```

</div>

<div class="cheat__container-content">

### Functions

A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result.

```python
def sayHello(name):
    print('Hello ' + name)

sayHello('MKAbuMattar')
```

</div>

<div class="cheat__container-content">

### File Handling

Python has several functions for creating, reading, updating, and deleting files.

```python
# create a file
file = open('file.txt', 'w')

# write to the file
file.write('Hello World')

# close the file
file.close()

# read the file
file = open('file.txt', 'r')

# print line by line
for line in file:
    print(line)
```

</div>

<div class="cheat__container-content">

### Arithmetic Operators

| Operator | Name           | Example  |
| -------- | -------------- | -------- |
| `+`      | Addition       | `x + y`  |
| `-`      | Subtraction    | `x - y`  |
| `*`      | Multiplication | `x * y`  |
| `/`      | Division       | `x / y`  |
| `%`      | Modulus        | `x % y`  |
| `**`     | Exponentiation | `x ** y` |
| `//`     | Floor Division | `x // y` |

</div>

<div class="cheat__container-content">

### Plus-Equals Operator

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| `+=`     | `x += 3`  | `x = x + 3`  |
| `-=`     | `x -= 3`  | `x = x - 3`  |
| `*=`     | `x *= 3`  | `x = x * 3`  |
| `/=`     | `x /= 3`  | `x = x / 3`  |
| `%=`     | `x %= 3`  | `x = x % 3`  |
| `**=`    | `x **= 3` | `x = x ** 3` |
| `//=`    | `x //= 3` | `x = x // 3` |

</div>

---

## Python Data Types

<div class="cheat__container-content">

### Numbers

Python supports two types of numbers - integers and floating point numbers.

To define an integer, use the following syntax:

```python
# integer
num_int = 1

# float
num_flo = 1.0

# complex
num_comp = 1j

# type
print(type(num))
```

</div>

<div class="cheat__container-content">

### Strings

Strings in Python are identified as a contiguous set of characters represented in the quotation marks. Python allows for either pairs of single or double quotes.

```python
# single quotes
name = 'MKAbuMattar'

# double quotes
name = "MKAbuMattar"

# multi-line string
name = """Mohammad Abu Mattar
is a Python Developer"""
```

> **Note:** Python does not support a character type; these are treated as strings of length one, thus also considered a substring.

</div>

<div class="cheat__container-content">

### Booleans

Boolean represents one of two values: `True` or `False`.

```python
# boolean
is_python = True
is_java = False

bool(0) # False
bool(1) # True

bool('') # False
bool(' ') # True

bool([]) # False
bool([1, 2, 3]) # True
```

> **Note:** In Python, the boolean values `True` and `False` are actually the integers `1` and `0`, respectively. They behave like the integers in almost all contexts, the exception being that when converted to a string, the strings `True` or `False` are returned, rather than the integers `1` or `0`.

</div>

<div class="cheat__container-content">

### Lists

A list is a collection which is ordered and changeable. In Python lists are written with square brackets.

```python
# create a list
list = [1, 2, 3]

# add an item to the list
list.append(4)

# remove an item from the list
list.remove(2)

# mixed list
list1 = [True, False, 1, 2, 3, 'MKAbuMattar']

# nested list
list2 = [1, 2, 3, [4, 5, 6]]

# 2D list
list3 = [[1, 2, 3], [4, 5, 6]]

# list constructor
list4 = list((53, 12, 3, 4, 5, 6, 7, 8, 9, 10))
```

> **Note:** Lists are zero-indexed, meaning the first item in the list is at index `0`.

</div>

<div class="cheat__container-content">

### Tuples

A tuple is a collection which is ordered and unchangeable. In Python tuples are written with round brackets.

```python
# create a tuple
tuple = (1, 2, 3)

# mixed tuple
tuple1 = (True, False, 1, 2, 3, 'MKAbuMattar')

# nested tuple
tuple2 = (1, 2, 3, (4, 5, 6))

# tuple constructor
tuple3 = tuple((53, 12, 3, 4, 5, 6, 7, 8, 9, 10))
```

> **Note:** Tuples are zero-indexed, meaning the first item in the tuple is at index `0`.

</div>

<div class="cheat__container-content">

### Sets

A set is a collection which is unordered and unindexed. In Python sets are written with curly brackets.

```python
# create a set
set = {1, 2, 3}

# add an item to the set
set.add(4)

# remove an item from the set
set.remove(2)

# mixed set
set1 = {True, False, 1, 2, 3, 'MKAbuMattar'}

# set constructor
set2 = set((53, 12, 3, 4, 5, 6, 7, 8, 9, 10))
```

> **Note:** Sets are unordered, meaning you cannot be sure in which order the items will appear.

</div>

<div class="cheat__container-content">

### Dictionaries

A dictionary is a collection which is unordered, changeable and indexed. In Python dictionaries are written with curly brackets, and they have keys and values.

```python
# create a dictionary
dict = {
  'name': 'MKAbuMattar',
  'age': 25,
  'is_python': True
}

# add an item to the dictionary
dict['is_java'] = False

# remove an item from the dictionary
del dict['age']

# mixed dictionary
dict1 = {
  'name': 'MKAbuMattar',
  'age': 25,
  'is_python': True,
  'is_java': False,
  'list': [1, 2, 3],
  'tuple': (1, 2, 3),
  'set': {1, 2, 3}
}

# dictionary constructor
dict2 = dict(name='MKAbuMattar', age=25, is_python=True)
```

> **Note:** Dictionaries are unordered, meaning you cannot be sure in which order the items will appear.

</div>

<div class="cheat__container-content">

### Casting

#### `int()`

Converts a value to an integer.

```python
x = int(5) # output: 5

x = int(5.5) # output: 5

x = int('5') # output: 5
```

#### `float()`

Converts a value to a floating point number.

```python
x = float(5) # output: 5.0

x = float(5.5) # output: 5.5

x = float('5') # output: 5.0

x = float('5.5') # output: 5.5
```

#### `str()`

Converts a value to a string.

```python
x = str(5) # output: '5'

x = str(5.5) # output: '5.5'

x = str('5') # output: '5'
```

> **Note:** You cannot convert complex numbers into another number type.

> **Note:** You can convert from any type to string.

> **Note:** You can convert from any type to integer, but a float will result in a `ValueError`.

</div>

---

## Python Strings

<div class="cheat__container-content">

### Array Like

Strings in Python are arrays of bytes representing unicode characters. However, Python does not have a character data type, a single character is simply a string with a length of 1.

```python
# get the character at position 1
name = 'MKAbuMattar'

print(name[1]) # output: K
```

> **Note:** String indexes start at `0`.

</div>

<div class="cheat__container-content">

### Looping

Since strings are arrays, we can loop through the characters in a string, with a `for` loop.

```python
name = 'MKAbuMattar'

for char in name:
  print(char)
```

> **Note:** Even strings are arrays, they are immutable, which means that elements of a string cannot be changed once it has been assigned.

</div>

<div class="cheat__container-content">

### String Length

To get the length of a string, use the `len()` function.

```python
name = 'MKAbuMattar'

print(len(name)) # output: 10
```

</div>

<div class="cheat__container-content">

### Check String

To check if a certain phrase or character is present in a string, we can use the `in` keyword.

```python
name = 'MKAbuMattar'

print('MK' in name) # output: True

print('MK' not in name) # output: False
```

> **Note:** The `in` keyword is case sensitive.

</div>

<div class="cheat__container-content">

### Multiple copies

To repeat the characters in a string for a given number of times, we can use the `*` operator.

```python
name = 'MKAbuMattar'

print(name * 2) # output: MKAbuMattarMKAbuMattar
```

> **Note:** The `*` operator cannot be used to multiply a string and a number.

</div>

<div class="cheat__container-content">

### Concatenates

To concatenate, or combine, two strings you can use the `+` operator.

```python
name = 'MKAbuMattar'

print(name + ' is a Python Developer') # output: MKAbuMattar is a Python Developer
```

> **Note:** The `+` operator cannot be used to add a string and a number.

</div>

<div class="cheat__container-content">

### Formatting

To format strings, we can use the `format()` method.

```python
name = 'MKAbuMattar'

print('Hello, my name is {}'.format(name)) # output: Hello, my name is MKAbuMattar
```

> **Note:** The `format()` method takes unlimited number of arguments, and are placed into the respective placeholders.

</div>

<div class="cheat__container-content">

### Input

To allow for user input, we can use the `input()` function.

```python
name = input('What is your name? ')

print('Hello, {}'.format(name)) # output: Hello, NAME FROM USER
```

</div>

<div class="cheat__container-content">

### Join

The `join()` method takes all items in an iterable and joins them into one string.

```python
name = 'MKAbuMattar'

print(' '.join(name)) # output: M K A b u M a t t a r

print('-'.join(name)) # output: M-K-A-b-u-M-a-t-t-a-r
```

</div>

<div class="cheat__container-content">

### Endswith

The `endswith()` method returns `True` if the string ends with the specified value, otherwise `False`.

```python
name = 'MKAbuMattar'

print(name.endswith('r')) # output: True

print(name.endswith('Mattar')) # output: True

print(name.endswith('Mattar', 0, 9)) # output: False
```

</div>

<div class="cheat__container-content">

### Slicing string

The `slice()` method returns a slice object that can be used to slice strings.

```python
name = 'MKAbuMattar'

print(name[0:3]) # output: MKA

print(name[3:6]) # output: buM

print(name[6:9]) # output: att

print(name[3:]) # output: buMattar

print(name[:3]) # output: MKA

print(name[-3:-1]) # output: ta

print(name[-3:]) # output: tar

print(name[:-3]) # output: MKAbuMat
```

</div>

<div class="cheat__container-content">

### Replace

The `replace()` method replaces a specified phrase with another specified phrase.

```python
name = 'MKAbuMattar'

print(name.replace('KAbuMattar', ' Abu Mattar')) # output: M Abu Mattar
```

> **Note:** The `replace()` method does not change the original string.

</div>

<div class="cheat__container-content">

### Split

The `split()` method splits the string at the specified separator, and returns a list.

```python
name = 'MKAbuMattar'

print(name.split('A')) # output: ['MK', 'buMattar']

print(name.split('A', 1)) # output: ['MK', 'buMattar']
```

> **Note:** The `split()` method does not change the original string.

</div>

<div class="cheat__container-content">

### `f-Strings`

An f-string is a string literal that is prefixed with `f` or `F`. It allows you to include the value of Python expressions inside a string by prefixing the expression with `f` or `F` and writing it within curly braces `{}`.

> **Note:** `f-strings` are only supported in Python 3.6 and above.

```python
name = 'MKAbuMattar'

print(f'Hello {name}')
```

</div>

---
