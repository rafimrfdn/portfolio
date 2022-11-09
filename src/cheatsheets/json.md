---
title: 'JSON'
slug: 'json'
category: 'Markup'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'JSON is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.'
color: '#505050'
icon: 'JSONIcon'
draft: false
---

## Table of Contents

<details>

<summary>Click to expand</summary>

- [Introduction](#introduction)
  - [What is JSON?](#what-is-json)
  - [Why use JSON?](#why-use-json)
  - [JSON Syntax](#json-syntax)
- [Getting started](#getting-started)
  - [Types](#types)
  - [Strings](#strings)
  - [Numbers](#numbers)
  - [Arrays](#arrays)
  - [2D Arrays](#2d-arrays)
  - [Array of objects](#array-of-objects)
  - [Object of objects](#object-of-objects)
  - [Object of arrays](#object-of-arrays)
  - [Nested arrays and objects](#nested-arrays-and-objects)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is JSON?

JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.

</div>

<div class="cheat__container-content">

### Why use JSON?

JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

</div>

<div class="cheat__container-content">

### JSON Syntax

JSON syntax is derived from JavaScript object notation syntax:

- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays

```json
{
  "name": "John",
  "age": 30,
  "cars": [
    { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
    { "name": "BMW", "models": ["320", "X3", "X5"] },
    { "name": "Fiat", "models": ["500", "Panda"] }
  ]
}
```

</div>

---

## Getting started

<div class="cheat__container-content">

### Types

JSON supports the following data types:

| Type      | Description                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------ |
| `string`  | A sequence of zero or more Unicode characters, wrapped in double quotes, using backslash escapes |
| `number`  | Numeric, decimal, integer, or exponential                                                        |
| `boolean` | true or false                                                                                    |
| `value`   | A string, number, boolean, null, object, or array                                                |
| `array`   | An ordered sequence of zero or more values                                                       |
| `object`  | An unordered collection of zero or more name/value pairs                                         |
| `null`    | A special value that indicates the absence of a value                                            |

</div>

<div class="cheat__container-content">

### Strings

Strings are sequences of Unicode characters wrapped in double quotes. A string may contain any Unicode character except for the control characters (U+0000 through U+001F). A string may contain backslash escapes. A string that is not empty must not start with whitespace. The backslash character (\) has a special meaning: it indicates that a sequence should be interpreted in a special way. There are two character sequences that are interpreted as backslash escapes:

- A backslash followed by a quotation mark (\\") represents a quotation mark character (").
- A backslash followed by a reverse solidus (\\\\) represents a reverse solidus character (\).

| Escape Sequence | Description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| `\"`            | Quotation mark                                                               |
| `\\`            | Reverse solidus                                                              |
| `\/`            | Solidus                                                                      |
| `\b`            | Backspace                                                                    |
| `\f`            | Form feed                                                                    |
| `\n`            | Newline                                                                      |
| `\r`            | Carriage return                                                              |
| `\t`            | Horizontal tab                                                               |
| `\uXXXX`        | A Unicode character whose code point is given by the hexadecimal number XXXX |

</div>
```

<div class="cheat__container-content">

### Numbers

Numbers are numeric values. A number may be either an integer or a decimal. Numbers may be positive or negative. Numbers may not contain leading zeros. Numbers must be in base 10. Numbers may not contain a fraction part. Numbers may not contain an exponent part.

| Type       | Description                            |
| ---------- | -------------------------------------- |
| `Integer`  | Digits 1-9, 0 and positive or negative |
| `Fraction` | Fractions like 0.3, 3.9                |
| `Exponent` | Exponents like 1e+3, 1e-3              |

Examples:

```json
{
  "integer": 123,
  "fraction": 0.3,
  "exponent": 1e3
}
```

</div>

<div class="cheat__container-content">

### Arrays

An array is an ordered sequence of zero or more values. An array begins with an opening square bracket ([) and ends with a closing square bracket (]). Values are separated by commas. Arrays may contain any JSON type, including other arrays and objects.

```json
{
  "array": [1, 2, 3, 4, 5]
}
```

</div>

<div class="cheat__container-content">

### 2D Arrays

```json
{
  "array": [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
}
```

</div>

<div class="cheat__container-content">

### Array of objects

```json
{
  "array": [
    {
      "name": "John",
      "age": 30
    },
    {
      "name": "Jane",
      "age": 25
    }
  ]
}
```

</div>

<div class="cheat__container-content">

### Object of objects

```json
{
  "object": {
    "John": {
      "age": 30
    },
    "Jane": {
      "age": 25
    }
  }
}
```

</div>

<div class="cheat__container-content">

### Object of arrays

```json
{
  "object": {
    "John": [30, 25, 50],
    "Jane": [25, 80, 20]
  }
}
```

</div>

<div class="cheat__container-content">

### Nested arrays and objects

```json
{
  "array": [
    {
      "name": "John",
      "age": 30,
      "cars": [
        { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
        { "name": "BMW", "models": ["320", "X3", "X5"] },
        { "name": "Fiat", "models": ["500", "Panda"] }
      ]
    },
    {
      "name": "Jane",
      "age": 25,
      "cars": [
        { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
        { "name": "BMW", "models": ["320", "X3", "X5"] },
        { "name": "Fiat", "models": ["500", "Panda"] }
      ]
    }
  ]
}
```

</div>

---
