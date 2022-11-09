---
title: 'MarkDown'
slug: 'markdown'
category: 'Markup'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML.'
color: '#000000'
icon: 'MarkDownIcon'
draft: false
---

## Table of Contents

<details open>

<summary>Table of Contents</summary>

- [Introduction](#introduction)
  - [What is Markdown?](#what-is-markdown)
  - [Why use Markdown?](#why-use-markdown)
  - [How to use Markdown?](#how-to-use-markdown)
- [Syntax](#syntax)
  - [Headings](#headings)
  - [Paragraphs](#paragraphs)
  - [Blockquotes](#blockquotes)
  - [Lists](#lists)
    - [Unordered Lists](#unordered-lists)
    - [Ordered Lists](#ordered-lists)
  - [Code](#code)
  - [Horizontal Rules](#horizontal-rules)
  - [Links](#links)
  - [Images](#images)
  - [Tables](#tables)
  - [Emphasis](#emphasis)
  - [Strikethrough](#strikethrough)
  - [Backslash escapes](#backslash-escapes)
- [References](#references)

</details>

## Introduction

<div class="cheat__container-content">

### What is Markdown?

Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML.

</div>

<div class="cheat__container-content">

### Why use Markdown?

Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

</div>

<div class="cheat__container-content">

### How to use Markdown?

You can use Markdown most places:

- GitHub
- Reddit
- Stack Overflow
- Slack

</div>

## Syntax

<div class="cheat__container-content">

### Headings

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

</div>

<div class="cheat__container-content">

### Paragraphs

```markdown
This is a paragraph.

This is another paragraph.
```

</div>

<div class="cheat__container-content">

### Blockquotes

```markdown
> This is a blockquote.
>
> > This is a nested blockquote.
```

</div>

<div class="cheat__container-content">

### Lists

#### Unordered Lists

```markdown
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

OR

```markdown
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

OR

```markdown
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

OR

```markdown
- [ ] Item 1
- [x] Item 2
```

#### Ordered Lists

```markdown
1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b
```

OR

```markdown
A. Item 1
B. Item 2
C. Item 3
A. Item 3a
B. Item 3b
```

</div>

<div class="cheat__container-content">

### Code

Inlined code:

```markdown
`code()` is a function.
```

Code blocks:

````markdown
```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({ div: '#foo' });
  }
}
```

~~~html
<div id="foo">
  <h1>Foo</h1>
</div>
~~~
````

</div>

<div class="cheat__container-content">

### Horizontal Rules

```markdown
Hyphens

---

Asterisks

***

Underscores

___

```

</div>

<div class="cheat__container-content">

### Links

```markdown
[GitHub](https://github.com)

[GitHub](https://github.com "GitHub")

[GitHub]: https://github.com "GitHub"

<https://github.com>

<https://github.com "GitHub">
```

</div>

<div class="cheat__container-content">

### Images

```markdown
![GitHub Logo](/images/logo.png)

![GitHub Logo](/images/logo.png "GitHub Logo")

![GitHub Logo](/images/logo.png)(https://github.com)

![GitHub Logo][logo]

[logo]: /images/logo.png "GitHub Logo"
```

</div>

<div class="cheat__container-content">

### Tables

```markdown
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

| Syntax    | Description |
| :-------- | :---------- |
| Header    | Title       |
| Paragraph | Text        |
```

</div>

<div class="cheat__container-content">

### Emphasis

```markdown
*This text will be italic*

_This will also be italic_

**This text will be bold**

__This will also be bold__

_You **can** combine them_
```

</div>

<div class="cheat__container-content">

### Strikethrough

```markdown
~~This was mistaken text~~
```

</div>

<div class="cheat__container-content">

### Backslash escapes

| Characters | Escape sequences | Description |
| ---------- | ---------------- | ----------- |
| `\` | `\\` | Backslash |
| `*` | `\*` | Asterisk |
| `_` | `\_` | Underscore |
| ` | \\` | Backtick |
| `{` | `\{` | Opening curly brace |
| `}` | `\}` | Closing curly brace |
| `[` | `\[` | Opening bracket |
| `]` | `\]` | Closing bracket |
| `(` | `\(` | Opening parenthesis |
| `)` | `\)` | Closing parenthesis |
| `#` | `\#` | Hash mark |
| `+` | `\+` | Plus sign |
| `-` | `\-` | Hyphen-minus |
| `.` | `\.` | Period |
| `!` | `\!` | Exclamation mark |

</div>
