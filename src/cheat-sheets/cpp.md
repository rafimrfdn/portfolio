---
title: 'C++'
slug: 'cpp'
category: 'Programming'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.'
color: '#9C033A'
icon: 'CPlusPlusIcon'
---

## Table of Contents

<details>

- [Introduction](#introduction)
  - [What is C++?](#what-is-c)
  - [Why C++?](#why-c)
- [Getting started](#getting-started)
  - [Hello World](#hello-world)
  - [Variables](#variables)
  - [Primitive Data Types](#primitive-data-types)
  - [User Input](#user-input)
  - [C++ Comments](#c-comments)
  - [If statement](#if-statement)
  - [Loops](#loops)
  - [Functions](#functions)
  - [References](#references)
- [C++ Arrays](#c-arrays)
  - [C++ Arrays Declaration](#c-arrays-declaration)
  - [Manipulation](#manipulation)
  - [Displaying an array](#displaying-an-array)
  - [Multidimensional](#multidimensional)
- [C++ Strings](#c-strings)
  - [C++ Strings Declaration](#c-strings-declaration)
  - [C++ Strings Length](#c-strings-length)
  - [C++ Strings Concatenation](#c-strings-concatenation)
  - [C++ Strings Substring](#c-strings-substring)
  - [C++ Strings Find](#c-strings-find)
  - [C++ Strings Compare](#c-strings-compare)
  - [C++ Strings Insert](#c-strings-insert)
  - [C++ Strings Erase](#c-strings-erase)
  - [C++ Strings Replace](#c-strings-replace)
- [C++ Conditionals](#c-conditionals)
  - [If Clause](#if-clause)
  - [Else if Statement](#else-if-statement)
  - [Operators](#operators)
    - [Relational Operators](#relational-operators)
    - [Assignment Operators](#assignment-operators)
    - [Logical Operators](#logical-operators)
    - [Bitwise Operators](#bitwise-operators)
  - [Ternary Operator](#ternary-operator)
  - [Switch Statement](#switch-statement)
- [C++ Loops](#c-loops)
  - [While Loop](#while-loop)
  - [Do While Loop](#do-while-loop)
  - [For Loop](#for-loop)
  - [For Each Loop](#for-each-loop)
  - [Infinite Loop](#infinite-loop)
  - [`for_each` (Since C++11)](#for_each-since-c11)
  - [`Range-based` for loop (Since C++11)](#range-based-for-loop-since-c11)
  - [Break Statements](#break-statements)
  - [Continue Statements](#continue-statements)
- [C++ Functions](#c-functions)
  - [Arguments & Returns](#arguments--returns)
  - [Overloading](#overloading)
  - [Built-in Functions](#built-in-functions)
  - [Default Arguments](#default-arguments)
  - [Recursion](#recursion)
  - [Inline Functions](#inline-functions)
- [C++ Pointers](#c-pointers)
  - [C++ Pointers Declaration](#c-pointers-declaration)
  - [Dereferencing](#dereferencing)
  - [Arrays & Pointers](#arrays--pointers)
  - [Pointers & Functions](#pointers--functions)
  - [Dynamic Memory Allocation](#dynamic-memory-allocation)
- [C++ Classes](#c-classes)
  - [C++ Classes Declaration](#c-classes-declaration)
  - [C++ Classes Constructor](#c-classes-constructor)
  - [C++ Classes Destructor](#c-classes-destructor)
  - [C++ Classes Access Modifiers](#c-classes-access-modifiers)
  - [C++ Classes Member Functions](#c-classes-member-functions)
  - [C++ Classes Encapsulation](#c-classes-encapsulation)
  - [C++ Classes Inheritance](#c-classes-inheritance)
  - [C++ Classes Polymorphism](#c-classes-polymorphism)
  - [C++ Classes Abstraction](#c-classes-abstraction)
  - [C++ Classes Static](#c-classes-static)
  - [C++ Classes Friend](#c-classes-friend)
  - [C++ Classes Virtual](#c-classes-virtual)
  - [C++ Classes Operator Overloading](#c-classes-operator-overloading)
  - [C++ Classes Templates](#c-classes-templates)
  - [C++ Classes Templates Specialization](#c-classes-templates-specialization)
  - [C++ Classes Exception Handling](#c-classes-exception-handling)
  - [C++ Classes File Handling](#c-classes-file-handling)
  - [C++ Classes Multithreading](#c-classes-multithreading)
  - [C++ Classes Namespaces](#c-classes-namespaces)
  - [C++ Classes Preprocessor](#c-classes-preprocessor)
  - [C++ Classes STL](#c-classes-stl)
- [Other](#other)
  - [C++ Access Modifiers](#c-access-modifiers)
  - [Escape Sequences](#escape-sequences)
  - [C++ Other Preprocessor Directives](#c-other-preprocessor-directives)
  - [C++ Other Operators](#c-other-operators)
- [Resources](#resources)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is C++?

C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.

</div>

<div class="cheat__container-content">

### Why C++?

C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation. It was designed with a bias toward system programming and embedded, resource-constrained and large systems, with performance, efficiency and flexibility of use as its design highlights.

</div>

---

## Getting started

<div class="cheat__container-content">

### Hello World

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
```

Compiling and running the above code:

```bash
# Compiling
g++ hello.cpp -o hello

# Running
./hello
```

</div>

<div class="cheat__container-content">

### Variables

```cpp
// integer
int a = 10;

// float number
float b = 10.5;

// double (float number)
double c = 10.5;

// character
char d = 'a';

// string
string e = "Hello World!";

// boolean
bool f = true;

// Constants (cannot be changed)
const int g = 10;
const string h = "Hello World!";
```

</div>

<div class="cheat__container-content">

### Primitive Data Types

| Data Type | Size   | Range                           | Description                                                                       |
| --------- | ------ | ------------------------------- | --------------------------------------------------------------------------------- |
| char      | 1 byte | -128 to 127 or 0 to 255         | Character is stored in 1 byte. It is used to store a single character.            |
| int       | 4 byte | -2,147,483,648 to 2,147,483,647 | Integer is stored in 4 bytes. It is used to store a whole number.                 |
| float     | 4 byte | 1.2E-38 to 3.4E+38              | Float is stored in 4 bytes. It is used to store a fractional number.              |
| double    | 8 byte | 2.3E-308 to 1.7E+308            | Double is stored in 8 bytes. It is used to store a fractional number.             |
| bool      | 1 byte | true or false                   | Boolean is stored in 1 byte. It is used to store a true or false value.           |
| void      |        |                                 | Void is used to define a function that does not return a value.                   |
| wchar_t   | 2 byte | 1 wide character                | Wide character is stored in 2 bytes. It is used to store a single wide character. |

</div>

<div class="cheat__container-content">

### User Input

```cpp
#include <iostream>
using namespace std;

int main() {
  int a;
  cout << "Enter a number: ";
  cin >> a;
  cout << "You entered: " << a;
  return 0;
}
```

</div>

<div class="cheat__container-content">

### C++ Comments

```cpp
// This is a single line comment

/*
* This is
* a multi-line
* comment
*/
```

</div>

<div class="cheat__container-content">

### If statement

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  if (a > 5) {
    // code block to be executed if condition is true
  }
  return 0;
}
```

</div>

<div class="cheat__container-content">

### Loops

```cpp
#include <iostream>
using namespace std;

int main() {
  // for loop
  for (int i = 0; i < 5; i++) {
    // code block to be executed
  }

  // while loop
  int i = 0;
  while (i < 5) {
    // code block to be executed
    i++;
  }

  // do while loop
  int i = 0;
  do {
    // code block to be executed
    i++;
  } while (i < 5);
  return 0;
}
```

</div>

<div class="cheat__container-content">

### Functions

```cpp
#include <iostream>
using namespace std;

// function declaration
int sum(int a, int b);

int main() {
  int a = 10;
  int b = 20;
  int c = sum(a, b);
  cout << c;
  return 0;
}

// function definition
int sum(int a, int b) {
  return a + b;
}
```

</div>

<div class="cheat__container-content">

### References

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  int &b = a;
  b = 20;
  cout << a;
  return 0;
}
```

> **Note:** `b` and `a` is refer to the same memory location.

</div>

---

## C++ Arrays

<div class="cheat__container-content">

### C++ Arrays Declaration

```cpp
#include <iostream>
using namespace std;

int main() {
  // Definition of an array
  array<int, 5> arr;
  arr[0] = 10;
  arr[1] = 20;
  arr[2] = 30;
  arr[3] = 40;
  arr[4] = 50;

  // Declaration of an array with initialization
  array<int, 5> arr2 = {10, 20, 30, 40, 50};

  // Declaration of an array with empty member
  array<int, 5> arr3={10, 20, 30};
  cout << arr3[3] << endl;
}
```

</div>

<div class="cheat__container-content">

### Manipulation

```cpp
#include <iostream>
using namespace std;

int main() {
  // Declaration of an array with initialization
  array<int, 5> arr = {10, 20, 30, 40, 50};

  // Accessing array elements
  cout << arr[0] << endl;
  cout << arr[1] << endl;
  cout << arr[2] << endl;
  cout << arr[3] << endl;
  cout << arr[4] << endl;

  // Iterating through an array
  for (int i = 0; i < arr.size(); i++) {
    cout << arr[i] << endl;
  }

  // Iterating through an array using for each loop
  for (int x : arr) {
    cout << x << endl;
  }

  // Checking if an element is present in an array
  if (find(arr.begin(), arr.end(), 30) != arr.end()) {
    cout << "Element found in the array" << endl;
  } else {
    cout << "Element not found in the array" << endl;
  }

  // Sorting an array
  sort(arr.begin(), arr.end());

  // Reversing an array
  reverse(arr.begin(), arr.end());

  // Filling an array with a particular value
  fill(arr.begin(), arr.end(), 0);

  // Swapping two arrays
  array<int, 5> arr2 = {1, 2, 3, 4, 5};
  arr.swap(arr2);
}
```

</div>

<div class="cheat__container-content">

### Displaying an array

```cpp
#include <iostream>
using namespace std;

int main() {
  // Declaration of an array with initialization
  array<int, 5> arr = {10, 20, 30, 40, 50};

  // Displaying an array
  cout << "The array is: ";
  for (int i = 0; i < arr.size(); i++) {
    cout << arr[i] << " ";
  }
  return 0;
}
```

</div>

<div class="cheat__container-content">

### Multidimensional

```cpp
#include <iostream>
using namespace std;

int main() {
  // Declaration of a 2D array
  array<array<int, 3>, 2> arr = {{{1, 2, 3}, {4, 5, 6}}};

  // Accessing array elements
  cout << arr[0][0] << endl;
  cout << arr[0][1] << endl;
  cout << arr[0][2] << endl;
  cout << arr[1][0] << endl;
  cout << arr[1][1] << endl;
  cout << arr[1][2] << endl;

  // Iterating through a 2D array
  for (int i = 0; i < arr.size(); i++) {
    for (int j = 0; j < arr[i].size(); j++) {
      cout << arr[i][j] << endl;
    }
  }

  // Iterating through a 2D array using for each loop
  for (array<int, 3> x : arr) {
    for (int y : x) {
      cout << y << endl;
    }
  }
}
```

</div>

---

## C++ Strings

<div class="cheat__container-content">

### C++ Strings Declaration

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string s = "Hello";
  cout << s << endl;
  return 0;
}
```

Explanation:

`s` is a string that is equal to `"Hello"`. `s` is printed.

</div>

<div class="cheat__container-content">

### C++ Strings Length

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string s = "Hello";
  cout << s.length() << endl;
  return 0;
}
```

Explanation:

`s` is a string that is equal to `"Hello"`. `s`'s length is printed.

</div>

<div class="cheat__container-content">

### C++ Strings Concatenation

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string s1 = "Hello";
  string s2 = "World";
  string s3 = s1 + s2;
  cout << s3 << endl;
  return 0;
}
```

Explanation:

`s1` is a string that is equal to `"Hello"`. `s2` is a string that is equal to `"World"`. `s3` is a string that is equal to `s1` concatenated with `s2`. `s3` is printed.

</div>

<div class="cheat__container-content">

### C++ Strings Substring

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string s = "Hello";
  cout << s.substr(1, 3) << endl;
  return 0;
}
```

Explanation:

`s` is a string that is equal to `"Hello"`. `s`'s substring starting at index 1 and with a length of 3 is printed.

</div>

<div class="cheat__container-content">

### C++ Strings Find

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string s = "Hello";
  cout << s.find("llo") << endl;
  return 0;
}
```

Explanation:

`s` is a string that is equal to `"Hello"`. The index of `"llo"` in `s` is printed.

</div>

<div class="cheat__container-content">

### C++ Strings Compare

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string s1 = "Hello";
  string s2 = "World";
  cout << s1.compare(s2) << endl;
  return 0;
}
```

Explanation:

`s1` is a string that is equal to `"Hello"`. `s2` is a string that is equal to `"World"`. The result of comparing `s1` and `s2` is printed.

</div>

<div class="cheat__container-content">

### C++ Strings Insert

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string s = "Hello";
  s.insert(1, "i");
  cout << s << endl;
  return 0;
}
```

Explanation:

`s` is a string that is equal to `"Hello"`. `"i"` is inserted at index 1 in `s`. `s` is printed.

</div>

<div class="cheat__container-content">

### C++ Strings Erase

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string s = "Hello";
  s.erase(1, 3);
  cout << s << endl;
  return 0;
}
```

Explanation:

`s` is a string that is equal to `"Hello"`. The substring starting at index 1 and with a length of 3 is erased from `s`. `s` is printed.

</div>

<div class="cheat__container-content">

### C++ Strings Replace

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string s = "Hello";
  s.replace(1, 3, "i");
  cout << s << endl;
  return 0;
}
```

Explanation:

`s` is a string that is equal to `"Hello"`. The substring starting at index 1 and with a length of 3 is replaced with `"i"`. `s` is printed.

</div>

---

## C++ Conditionals

<div class="cheat__container-content">

### If Clause

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  if (a > 5) {
    // code block to be executed if condition is true
  }
  return 0;
}
```

Example:

Check if a number is odd or even.

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  if (a % 2 == 0) {
    cout << "Even";
  } else {
    cout << "Odd";
  }
  return 0;
}
```

</div>

<div class="cheat__container-content">

### Else if Statement

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  if (a > 5) {
    // code block to be executed if condition is true
  } else if (a < 5) {
    // code block to be executed if condition is false
  }
  return 0;
}
```

Example:

Check if a number is positive, negative or zero.

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  if (a > 0) {
    cout << "Positive";
  } else if (a < 0) {
    cout << "Negative";
  } else {
    cout << "Zero";
  }
  return 0;
}
```

</div>

<div class="cheat__container-content">

### Operators

#### Relational Operators

| Operator | Description                         |
| -------- | ----------------------------------- |
| `a == b` | `a` is equal to `b`                 |
| `a != b` | `a` is not equal to `b`             |
| `a > b`  | `a` is greater than `b`             |
| `a < b`  | `a` is less than `b`                |
| `a >= b` | `a` is greater than or equal to `b` |
| `a <= b` | `a` is less than or equal to `b`    |

#### Assignment Operators

| Operator | Description |
| -------- | ----------- |
| `a += b` | `a = a + b` |
| `a -= b` | `a = a - b` |
| `a *= b` | `a = a * b` |
| `a /= b` | `a = a / b` |
| `a %= b` | `a = a % b` |

#### Logical Operators

| Operator   | Description               |
| ---------- | ------------------------- |
| `a && b`   | `a` and `b` are both true |
| `a \|\| b` | `a` or `b` is true        |
| `!a`       | `a` is not true           |

#### Bitwise Operators

| Operator | Description              |
| -------- | ------------------------ |
| `a & b`  | `a` and `b`              |
| `a \| b` | `a` or `b`               |
| `a ^ b`  | `a` xor `b`              |
| `~a`     | not `a`                  |
| `a >> b` | `a` right shift `b` bits |
| `a << b` | `a` left shift `b` bits  |

</div>

<div class="cheat__container-content">

### Ternary Operator

```text
           ┌── True ──┐
Result = Condition ? Exp1 : Exp2;
           └───── False ─────┘
```

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  int b = (a > 5) ? 1 : 0;
  return 0;
}
```

</div>

<div class="cheat__container-content">

### Switch Statement

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  switch (a) {
    case 1:
      // code block to be executed if a is 1
      break;
    case 2:
      // code block to be executed if a is 2
      break;
    default:
      // code block to be executed if a is neither 1 nor 2
  }
  return 0;
}
```

</div>

---

## C++ Loops

<div class="cheat__container-content">

### While Loop

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  while (a > 0) {
    // code block to be executed
    a--;
  }
  return 0;
}
```

</div>

<div class="cheat__container-content">

### Do While Loop

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  do {
    // code block to be executed
    a--;
  } while (a > 0);
  return 0;
}
```

</div>

<div class="cheat__container-content">

### For Loop

```cpp
#include <iostream>
using namespace std;

int main() {
  for (int i = 0; i < 10; i++) {
    // code block to be executed
  }
  return 0;
}
```

</div>

<div class="cheat__container-content">

### For Each Loop

```cpp
#include <iostream>
using namespace std;

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  for (int x : arr) {
    // code block to be executed
  }
  return 0;
}
```

</div>

<div class="cheat__container-content">

### Infinite Loop

```cpp
#include <iostream>
using namespace std;

int main() {
  // true or 1
  while (true) {
    // code block to be executed
  }
}
```

```cpp
#include <iostream>
using namespace std;

int main() {
  for (;;) {
    // code block to be executed
  }
  return 0;
}
```

```cpp
#include <iostream>
using namespace std;

int main() {
  for(int i = 1; i > 0; i++) { {
    // code block to be executed
  }
  return 0;
}
```

</div>

<div class="cheat__container-content">

### `for_each` (Since C++11)

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  for_each(arr, arr + 5, [](int x) {
    // code block to be executed
  });
  return 0;
}
```

Explanation:

`for_each` is a function that takes a range and a function as arguments. It applies the function to each element in the range.

Example:

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  for_each(arr, arr + 5, [](int x) {
    cout << x << " ";
  });
  return 0;
}
```

Output:

```text
1 2 3 4 5
```

</div>

<div class="cheat__container-content">

### `Range-based` for loop (Since C++11)

```cpp
#include <iostream>
using namespace std;

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  for (int x : arr) {
    // code block to be executed
  }
  return 0;
}
```

</div>

<div class="cheat__container-content">

### Break Statements

```cpp
#include <iostream>
using namespace std;

int main() {
  for (int i = 0; i < 10; i++) {
    if (i == 4) {
      break;
    }
    // code block to be executed
  }
  return 0;
}
```

</div>

<div class="cheat__container-content">

### Continue Statements

```cpp
#include <iostream>
using namespace std;

int main() {
  for (int i = 0; i < 10; i++) {
    if (i == 4) {
      continue;
    }
    // code block to be executed
  }
  return 0;
}
```

</div>

---

## C++ Functions

<div class="cheat__container-content">

### Arguments & Returns

```cpp
#include <iostream>
using namespace std;

int sum(int a, int b) {
  return a + b;
}

int main() {
  int a = 10;
  int b = 20;
  int c = sum(a, b);
  return 0;
}
```

> **Note:** `sum` is a function that takes two integers as arguments and returns an integer.

</div>

<div class="cheat__container-content">

### Overloading

```cpp
#include <iostream>
using namespace std;

int sum(int a, int b) {
  return a + b;
}

int sum(int a, int b, int c) {
  return a + b + c;
}

int main() {
  int a = 10;
  int b = 20;
  int c = 30;
  int d = sum(a, b);
  int e = sum(a, b, c);
  return 0;
}
```

Explanation:

`sum` is a function that takes two integers as arguments and returns an integer. But we can also overload the function to take three integers as arguments and return an integer.

> **Note:** `sum` is a function that takes two integers as arguments and returns an integer. `sum` is overloaded to take three integers as arguments and returns an integer.

</div>

<div class="cheat__container-content">

### Built-in Functions

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
  int a = 10;
  int b = 20;
  int c = pow(a, b);
  return 0;
}
```

Explanation:

`pow` is a built-in function that takes two integers as arguments and returns an integer.

</div>

<div class="cheat__container-content">

### Default Arguments

```cpp
#include <iostream>
using namespace std;

int sum(int a, int b, int c = 0) {
  return a + b + c;
}

int main() {
  int a = 10;
  int b = 20;
  int c = 30;
  int d = sum(a, b);
  int e = sum(a, b, c);
  return 0;
}
```

Explanation:

`sum` is a function that takes two integers as arguments and returns an integer. But we can also overload the function to take three integers as arguments and return an integer.

</div>

<div class="cheat__container-content">

### Recursion

```cpp
#include <iostream>
using namespace std;

int factorial(int n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

int main() {
  int n = 5;
  int fact = factorial(n);
  return 0;
}
```

Explanation:

`factorial` is a function that takes an integer as an argument and returns an integer. `factorial` is a recursive function.

</div>

<div class="cheat__container-content">

### Inline Functions

```cpp
#include <iostream>
using namespace std;

inline int sum(int a, int b) {
  return a + b;
}

int main() {
  int a = 10;
  int b = 20;
  int c = sum(a, b);
  return 0;
}
```

Explanation:

`sum` is a function that takes two integers as arguments and returns an integer. `sum` is an inline function.

</div>

---

## C++ Pointers

<div class="cheat__container-content">

### C++ Pointers Declaration

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  int *p = &a;
  return 0;
}
```

Explanation:

`p` is a pointer that points to an integer.

</div>

<div class="cheat__container-content">

### Dereferencing

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 10;
  int *p = &a;
  int b = *p;
  return 0;
}
```

Explanation:

`p` is a pointer that points to an integer. `b` is an integer that is equal to the value of the integer that `p` points to.

</div>

<div class="cheat__container-content">

### Arrays & Pointers

```cpp
#include <iostream>
using namespace std;

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int *p = arr;
  return 0;
}
```

Explanation:

`p` is a pointer that points to an integer. `arr` is an array of integers. `p` is equal to the address of the first element of `arr`.

</div>

<div class="cheat__container-content">

### Pointers & Functions

```cpp
#include <iostream>
using namespace std;

void increment(int *p) {
  (*p)++;
}

int main() {
  int a = 10;
  int *p = &a;
  increment(p);
  return 0;
}
```

Explanation:

`p` is a pointer that points to an integer. `increment` is a function that takes a pointer to an integer as an argument and returns nothing. `increment` increments the value of the integer that `p` points to.

</div>

<div class="cheat__container-content">

### Dynamic Memory Allocation

```cpp
#include <iostream>
using namespace std;

int main() {
  int *p = new int;
  *p = 10;
  delete p;
  return 0;
}
```

Explanation:

`p` is a pointer that points to an integer. `p` is dynamically allocated memory. `p` is deleted.

</div>

---

## C++ Classes

<div class="cheat__container-content">

### C++ Classes Declaration

```cpp
#include <iostream>
using namespace std;

class Point {
  public:
    int x;
    int y;
};

int main() {
  Point p;
  p.x = 10;
  p.y = 20;
  return 0;
}
```

Explanation:

`Point` is a class that has two public integer members. `p` is an instance of `Point`.

</div>

<div class="cheat__container-content">

### C++ Classes Constructor

```cpp
#include <iostream>
using namespace std;

class Point {
  public:
    int x;
    int y;
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
};

int main() {
  Point p(10, 20);
  return 0;
}
```

Explanation:

`Point` is a class that has two public integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `p` is an instance of `Point`.

</div>

<div class="cheat__container-content">

### C++ Classes Destructor

```cpp
#include <iostream>
using namespace std;

class Point {
  public:
    int x;
    int y;
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
    ~Point() {
      cout << "Point is destroyed" << endl;
    }
};

int main() {
  Point p(10, 20);
  return 0;
}
```

Explanation:

`Point` is a class that has two public integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has a destructor that takes no arguments and returns nothing. `p` is an instance of `Point`.

</div>

<div class="cheat__container-content">

### C++ Classes Access Modifiers

```cpp
#include <iostream>
using namespace std;

class Point {
  private:
    int x;
    int y;
  public:
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
    int getX() {
      return x;
    }
    int getY() {
      return y;
    }
};

int main() {
  Point p(10, 20);
  int x = p.getX();
  int y = p.getY();
  return 0;
}
```

Explanation:

`Point` is a class that has two private integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has two public functions that take no arguments and return an integer. `p` is an instance of `Point`. `x` is an integer that is equal to the value of `p`'s `x` member. `y` is an integer that is equal to the value of `p`'s `y` member.

</div>

<div class="cheat__container-content">

### C++ Classes Member Functions

```cpp
#include <iostream>
using namespace std;

class Point {
  private:
    int x;
    int y;
  public:
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
    int getX() {
      return x;
    }
    int getY() {
      return y;
    }
    void setX(int x) {
      this->x = x;
    }
    void setY(int y) {
      this->y = y;
    }
};

int main() {
  Point p(10, 20);
  p.setX(30);
  p.setY(40);
  return 0;
}
```

Explanation:

`Point` is a class that has two private integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has four public functions that take an integer as an argument and return nothing. `p` is an instance of `Point`. `p`'s `x` member is set to 30. `p`'s `y` member is set to 40.

</div>

<div class="cheat__container-content">

### C++ Classes Encapsulation

```cpp
#include <iostream>
using namespace std;

class Point {
  private:
    int x;
    int y;
  public:
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
    int getX() {
      return x;
    }
    int getY() {
      return y;
    }
    void setX(int x) {
      this->x = x;
    }
    void setY(int y) {
      this->y = y;
    }
};

int main() {
  Point p(10, 20);
  p.setX(30);
  p.setY(40);
  return 0;
}
```

Explanation:

`Point` is a class that has two private integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has four public functions that take an integer as an argument and return nothing. `p` is an instance of `Point`. `p`'s `x` member is set to 30. `p`'s `y` member is set to 40.

</div>

<div class="cheat__container-content">

### C++ Classes Inheritance

```cpp
#include <iostream>
using namespace std;

class Shape {
  public:
    void draw() {
      cout << "Drawing a shape" << endl;
    }
};

class Circle : public Shape {
  public:
    void draw() {
      cout << "Drawing a circle" << endl;
    }
};

int main() {
  Circle c;
  c.draw();
  return 0;
}
```

Explanation:

`Shape` is a class that has one public function that takes no arguments and returns nothing. `Circle` is a class that inherits from `Shape` and has one public function that takes no arguments and returns nothing. `c` is an instance of `Circle`. `c`'s `draw` function is called.

</div>

<div class="cheat__container-content">

### C++ Classes Polymorphism

```cpp
#include <iostream>
using namespace std;

class Shape {
  public:
    virtual void draw() {
      cout << "Drawing a shape" << endl;
    }
};

class Circle : public Shape {
  public:
    void draw() {
      cout << "Drawing a circle" << endl;
    }
};

int main() {
  Shape *s = new Circle();
  s->draw();
  return 0;
}
```

Explanation:

`Shape` is a class that has one public virtual function that takes no arguments and returns nothing. `Circle` is a class that inherits from `Shape` and has one public function that takes no arguments and returns nothing. `s` is a pointer to a `Shape` that is equal to a new `Circle`. `s`'s `draw` function is called.

</div>

<div class="cheat__container-content">

### C++ Classes Abstraction

```cpp
#include <iostream>
using namespace std;

class Shape {
  public:
    virtual void draw() = 0;
};

class Circle : public Shape {
  public:
    void draw() {
      cout << "Drawing a circle" << endl;
    }
};

int main() {
  Circle c;
  c.draw();
  return 0;
}
```

Explanation:

`Shape` is a class that has one pure virtual function that takes no arguments and returns nothing. `Circle` is a class that inherits from `Shape` and has one public function that takes no arguments and returns nothing. `c` is an instance of `Circle`. `c`'s `draw` function is called.

</div>

<div class="cheat__container-content">

### C++ Classes Static

```cpp
#include <iostream>
using namespace std;

class Point {
  private:
    int x;
    int y;
    static int count;
  public:
    Point(int x, int y) {
      this->x = x;
      this->y = y;
      count++;
    }
    int getX() {
      return x;
    }
    int getY() {
      return y;
    }
    static int getCount() {
      return count;
    }
};

int Point::count = 0;

int main() {
  Point p1(10, 20);
  Point p2(30, 40);
  int count = Point::getCount();
  return 0;
}
```

Explanation:

`Point` is a class that has two private integer members and one private static integer member. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has one public function that takes no arguments and returns an integer. `Point` has one public static function that takes no arguments and returns an integer. `p1` is an instance of `Point`. `p2` is an instance of `Point`. `count` is an integer that is equal to the value of `Point`'s `count` member.

</div>

<div class="cheat__container-content">

### C++ Classes Friend

```cpp
#include <iostream>
using namespace std;

class Point {
  private:
    int x;
    int y;
  public:
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
    int getX() {
      return x;
    }
    int getY() {
      return y;
    }
    friend void printPoint(Point p);
};

void printPoint(Point p) {
  cout << p.x << ", " << p.y << endl;
}

int main() {
  Point p(10, 20);
  printPoint(p);
  return 0;
}
```

Explanation:

`Point` is a class that has two private integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has two public functions that take no arguments and return an integer. `Point` has one friend function that takes a `Point` as an argument and returns nothing. `p` is an instance of `Point`. `printPoint` is called with `p` as an argument.

</div>

<div class="cheat__container-content">

### C++ Classes Virtual

```cpp
#include <iostream>
using namespace std;

class Shape {
  public:
    virtual void draw() {
      cout << "Drawing a shape" << endl;
    }
};

class Circle : public Shape {
  public:
    void draw() {
      cout << "Drawing a circle" << endl;
    }
};

int main() {
  Shape *s = new Circle();
  s->draw();
  return 0;
}
```

Explanation:

`Shape` is a class that has one virtual function that takes no arguments and returns nothing. `Circle` is a class that inherits from `Shape` and has one public function that takes no arguments and returns nothing. `s` is a pointer to a `Shape` that is initialized to a new `Circle`. `s`'s `draw` function is called.

</div>

<div class="cheat__container-content">

### C++ Classes Operator Overloading

```cpp
#include <iostream>
using namespace std;

class Point {
  private:
    int x;
    int y;
  public:
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
    int getX() {
      return x;
    }
    int getY() {
      return y;
    }
    Point operator+(Point p) {
      return Point(x + p.x, y + p.y);
    }
};

int main() {
  Point p1(10, 20);
  Point p2(30, 40);
  Point p3 = p1 + p2;
  return 0;
}
```

Explanation:

`Point` is a class that has two private integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has two public functions that take no arguments and return an integer. `Point` has one public operator function that takes a `Point` as an argument and returns a `Point`. `p1` is an instance of `Point`. `p2` is an instance of `Point`. `p3` is an instance of `Point` that is equal to `p1` plus `p2`.

</div>

<div class="cheat__container-content">

### C++ Classes Templates

```cpp
#include <iostream>
using namespace std;

template <class T>
class Point {
  private:
    T x;
    T y;
  public:
    Point(T x, T y) {
      this->x = x;
      this->y = y;
    }
    T getX() {
      return x;
    }
    T getY() {
      return y;
    }
};

int main() {
  Point<int> p1(10, 20);
  Point<double> p2(10.5, 20.5);
  return 0;
}
```

Explanation:

`Point` is a class template that has two private members of type `T`. `Point` has a constructor that takes two arguments of type `T` and returns nothing. `Point` has two public functions that take no arguments and return a `T`. `p1` is an instance of `Point` with type `int`. `p2` is an instance of `Point` with type `double`.

</div>

<div class="cheat__container-content">

### C++ Classes Templates Specialization

```cpp
#include <iostream>
using namespace std;

template <class T>
class Point {
  private:
    T x;
    T y;
  public:
    Point(T x, T y) {
      this->x = x;
      this->y = y;
    }
    T getX() {
      return x;
    }
    T getY() {
      return y;
    }
};

template <>
class Point<char> {
  private:
    char x;
    char y;
  public:
    Point(char x, char y) {
      this->x = x;
      this->y = y;
    }
    char getX() {
      return x;
    }
    char getY() {
      return y;
    }
};

int main() {
  Point<int> p1(10, 20);
  Point<char> p2('a', 'b');
  return 0;
}
```

Explanation:

`Point` is a class template that has two private members of type `T`. `Point` has a constructor that takes two arguments of type `T` and returns nothing. `Point` has two public functions that take no arguments and return a `T`. `Point` is specialized for type `char`. `p1` is an instance of `Point` with type `int`. `p2` is an instance of `Point` with type `char`.

</div>

<div class="cheat__container-content">

### C++ Classes Exception Handling

```cpp
#include <iostream>
using namespace std;

class Point {
  private:
    int x;
    int y;
  public:
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
    int getX() {
      return x;
    }
    int getY() {
      return y;
    }
    void setX(int x) {
      if (x < 0) {
        throw "X cannot be negative";
      }
      this->x = x;
    }
};

int main() {
  Point p(10, 20);
  try {
    p.setX(-10);
  } catch (const char *msg) {
    cout << msg << endl;
  }
  return 0;
}
```

Explanation:

`Point` is a class that has two private integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has two public functions that take no arguments and return an integer. `Point` has one public function that takes an integer as an argument and returns nothing. `p` is an instance of `Point`. `p`'s `setX` function is called with `-10` as an argument. If an exception is thrown, it is caught and printed.

</div>

<div class="cheat__container-content">

### C++ Classes File Handling

```cpp
#include <iostream>
#include <fstream>
using namespace std;

class Point {
  private:
    int x;
    int y;
  public:
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
    int getX() {
      return x;
    }
    int getY() {
      return y;
    }
};

int main() {
  Point p(10, 20);
  ofstream out("point.txt");
  out << p.getX() << " " << p.getY() << endl;
  out.close();
  return 0;
}
```

Explanation:

`Point` is a class that has two private integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has two public functions that take no arguments and return an integer. `p` is an instance of `Point`. `out` is an instance of `ofstream` that is opened with `"point.txt"` as an argument. `out`'s `<<` operator is called with `p`'s `getX` function as the first argument and `p`'s `getY` function as the second argument. `out` is closed.

</div>

<div class="cheat__container-content">

### C++ Classes Multithreading

```cpp
#include <iostream>
#include <thread>
using namespace std;

class Point {
  private:
    int x;
    int y;
  public:
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
    int getX() {
      return x;
    }
    int getY() {
      return y;
    }
};

void printPoint(Point p) {
  cout << p.getX() << " " << p.getY() << endl;
}

int main() {
  Point p(10, 20);
  thread t1(printPoint, p);
  t1.join();
  return 0;
}
```

Explanation:

`Point` is a class that has two private integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has two public functions that take no arguments and return an integer. `printPoint` is a function that takes a `Point` as an argument and returns nothing. `p` is an instance of `Point`. `t1` is an instance of `thread` that is created with `printPoint` and `p` as arguments. `t1` is joined.

</div>

<div class="cheat__container-content">

### C++ Classes Namespaces

```cpp
#include <iostream>
using namespace std;

namespace myNamespace {
  class Point {
    private:
      int x;
      int y;
    public:
      Point(int x, int y) {
        this->x = x;
        this->y = y;
      }
      int getX() {
        return x;
      }
      int getY() {
        return y;
      }
  };
}

int main() {
  myNamespace::Point p(10, 20);
  return 0;
}
```

Explanation:

`myNamespace` is a namespace that contains a class called `Point`. `Point` has two private integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has two public functions that take no arguments and return an integer. `p` is an instance of `Point` that is created in the `myNamespace` namespace.

</div>

<div class="cheat__container-content">

### C++ Classes Preprocessor

```cpp
#include <iostream>
#define PI 3.14
using namespace std;

class Point {
  private:
    int x;
    int y;
  public:
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
    int getX() {
      return x;
    }
    int getY() {
      return y;
    }
};

int main() {
  int r = 10;
  int p = Point(2 * PI * r, PI * r * r).getX();
  cout << p << endl;
  return 0;
}
```

Explanation:

`PI` is a preprocessor constant that is defined as `3.14`. `Point` is a class that has two private integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has two public functions that take no arguments and return an integer. `r` is an integer that is initialized to `10`. `p` is an integer that is initialized to `Point`'s constructor called with `2 * PI * r` as the first argument and `PI * r * r` as the second argument. `p`'s `getX` function is called and printed.

</div>

<div class="cheat__container-content">

### C++ Classes STL

```cpp
#include <iostream>
#include <vector>
using namespace std;

class Point {
  private:
    int x;
    int y;
  public:
    Point(int x, int y) {
      this->x = x;
      this->y = y;
    }
    int getX() {
      return x;
    }
    int getY() {
      return y;
    }
};

int main() {
  vector<Point> points;
  points.push_back(Point(10, 20));
  points.push_back(Point(30, 40));
  for (int i = 0; i < points.size(); i++) {
    cout << points[i].getX() << " " << points[i].getY() << endl;
  }
  return 0;
}
```

Explanation:

`Point` is a class that has two private integer members. `Point` has a constructor that takes two integers as arguments and returns nothing. `Point` has two public functions that take no arguments and return an integer. `points` is a vector of `Point`s. `points`'s `push_back` function is called with `Point`'s constructor called with `10` and `20` as arguments. `points`'s `push_back` function is called with `Point`'s constructor called with `30` and `40` as arguments. `points`'s `size` function is called and stored in `i`. `i` is less than `points`'s `size` function. `i` is incremented. `points`'s `[]` operator is called with `i` as the argument and `getX` is called. `points`'s `[]` operator is called with `i` as the argument and `getY` is called. `i` is less than `points`'s `size` function. `i` is incremented. `points`'s `[]` operator is called with `i` as the argument and `getX` is called. `points`'s `[]` operator is called with `i` as the argument and `getY` is called. `i` is less than `points`'s `size` function. `i` is incremented. `points`'s `[]` operator is called with `i` as the argument and `getX` is called. `points`'s `[]` operator is called with `i` as the argument and `getY` is called. `i` is less than `points`'s `size` function. `i` is incremented. `points`'s `[]` operator is called with `i` as the argument and `getX` is called. `points`'s `[]` operator is called with `i` as the argument and `getY` is called. `i` is less than `points`'s `size` function. `i` is incremented. `points`'s `[]` operator is called with `i` as the argument and `getX` is called. `points`'s `[]` operator is called with `i` as the argument and `getY` is called. `i` is

</div>

---

## Other

<div class="cheat__container-content">

### C++ Access Modifiers

| Modifier    | Class | Subclass | World | Description                                                     |
| ----------- | ----- | -------- | ----- | --------------------------------------------------------------- |
| `public`    | Yes   | Yes      | Yes   | Members are accessible from anywhere                            |
| `protected` | Yes   | Yes      | No    | Members are accessible from within the class and its subclasses |
| `private`   | Yes   | No       | No    | Members are accessible only from within the class               |

Example:

```cpp
#include <iostream>
using namespace std;

class Shape {
  public:
    void setWidth(int w) {
      width = w;
    }
    void setHeight(int h) {
      height = h;
    }
  protected:
    int width;
    int height;
};

class Rectangle: public Shape {
  public:
    int getArea() {
      return (width * height);
    }
};

int main() {
  Rectangle Rect;
  Rect.setWidth(5);
  Rect.setHeight(7);
  cout << "Total area: " << Rect.getArea() << endl;
  return 0;
}
```

Explanation:

`Shape` is a class that has two public functions that take an integer as an argument and return nothing. `Shape` has two protected members that are integers. `Rectangle` is a class that inherits from `Shape` and has one public function that takes no arguments and returns an integer. `Rect` is an instance of `Rectangle`. `Rect`'s `setWidth` function is called with an argument of `5`. `Rect`'s `setHeight` function is called with an argument of `7`. `Rect`'s `getArea` function is called and the result is printed.

</div>

<div class="cheat__container-content">

### Escape Sequences

| Escape Sequence | Description           |
| --------------- | --------------------- |
| `\a`            | Alert (Beep)          |
| `\b`            | Backspace             |
| `\f`            | Formfeed              |
| `\n`            | Newline               |
| `\r`            | Carriage Return       |
| `\t`            | Horizontal Tab        |
| `\v`            | Vertical Tab          |
| `\\`            | Backslash             |
| `\'`            | Single Quote          |
| `\"`            | Double Quote          |
| `\?`            | Question Mark         |
| `\0`            | Null Character        |
| `\xhh`          | Hexadecimal Character |

</div>

<div class="cheat__container-content">

### C++ Other Preprocessor Directives

| Preprocessor Directive | Description                                                                 |
| ---------------------- | --------------------------------------------------------------------------- |
| `#include`             | Includes a file                                                             |
| `#define`              | Defines a macro                                                             |
| `#undef`               | Undefines a macro                                                           |
| `#ifdef`               | Checks if a macro is defined                                                |
| `#ifndef`              | Checks if a macro is not defined                                            |
| `#if`                  | Checks if a condition is true                                               |
| `#else`                | Else clause for `#if`                                                       |
| `#elif`                | Else if clause for `#if`                                                    |
| `#endif`               | Ends an `#if` block                                                         |
| `#error`               | Prints an error message                                                     |
| `#pragma`              | Used to call compiler specific commands                                     |
| `#line`                | Used to change the current line number and file name in the error messages. |

</div>

<div class="cheat__container-content">

### C++ Other Operators

| Operator           | Description                                                                  |
| ------------------ | ---------------------------------------------------------------------------- |
| `sizeof`           | Returns the size of a variable                                               |
| `&`                | Returns the address of a variable                                            |
| `*`                | Pointer to a variable                                                        |
| `::`               | Scope resolution operator                                                    |
| `?:`               | Conditional operator                                                         |
| `.`                | Member selection operator                                                    |
| `->`               | Pointer to member selection operator                                         |
| `new`              | Dynamically allocates memory                                                 |
| `delete`           | Deallocates memory allocated by `new`                                        |
| `new[]`            | Dynamically allocates an array of objects                                    |
| `delete[]`         | Deallocates an array of objects allocated by `new[]`                         |
| `throw`            | Throws an exception                                                          |
| `try`              | Starts a block of code to be tested for errors                               |
| `catch`            | Catches an exception                                                         |
| `typeid`           | Returns the type of the variable                                             |
| `const_cast`       | Changes the constness of a variable, only allowed on pointers and references |
| `dynamic_cast`     | Casts a pointer or reference to a type, checking the type at runtime         |
| `reinterpret_cast` | Casts a pointer or reference to a type, without checking the type at runtime |
| `static_cast`      | Casts a pointer or reference to a type, without checking the type at runtime |

</div>

---

## Resources

<div class="cheat__container-content">

- [C++ Tutorial](https://www.tutorialspoint.com/cplusplus/index.htm)
- [C++ Reference](https://en.cppreference.com/w/)

</div>
