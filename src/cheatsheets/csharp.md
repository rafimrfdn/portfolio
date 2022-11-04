---
title: 'C#'
slug: 'cs'
category: 'Programming'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.'
color: '#68217A'
icon: 'CSharpIcon'
---

## Table of Contents

<details>

<summary>Expand Table of Contents</summary>

- [Introduction](#introduction)
  - [What is C#?](#what-is-c)
  - [Why C#?](#why-c)
- [Getting started](#getting-started)
  - [Hello, world!](#hello-world)
  - [Variables](#variables)
  - [Primitive Data Types](#primitive-data-types)
  - [C# Comments](#c-comments)
  - [Strings](#strings)
  - [User Input](#user-input)
  - [Conditionals](#conditionals)
  - [Arrays](#arrays)
  - [Loops](#loops)
  - [Methods](#methods)
  - [Classes](#classes)
- [C# Strings](#c-strings)
  - [String Methods](#string-methods)
  - [String Declaration](#string-declaration)
  - [String Concatenation](#string-concatenation)
  - [String Interpolation](#string-interpolation)
  - [String Builder](#string-builder)
  - [String Equality](#string-equality)
  - [String Length](#string-length)
  - [String Comparison](#string-comparison)
  - [String Trim](#string-trim)
  - [String Replace](#string-replace)
  - [String Substring](#string-substring)
  - [String Split](#string-split)
  - [String Join](#string-join)
  - [String IndexOf](#string-indexof)
  - [String Contains](#string-contains)
  - [String IsNullOrEmpty](#string-isnullorempty)
  - [String IsNullOrWhiteSpace](#string-isnullorwhitespace)
  - [String Format](#string-format)
- [C# Arrays](#c-arrays)
  - [Array Declaration](#array-declaration)
  - [Array Manipulation](#array-manipulation)
  - [Array Multidimensional](#array-multidimensional)
- [C# Loop](#c-loop)
  - [While Loop](#while-loop)
  - [Do While Loop](#do-while-loop)
  - [For Loop](#for-loop)
  - [Foreach Loop](#foreach-loop)
  - [Break Statement](#break-statement)
  - [Continue Statement](#continue-statement)
- [C# Conditionals](#c-conditionals)
  - [If Clause](#if-clause)
  - [If-Else Clause](#if-else-clause)
  - [If-Else-If Clause](#if-else-if-clause)
  - [Nested If Clause](#nested-if-clause)
  - [Operators](#operators)
    - [Relational Operators](#relational-operators)
    - [Assignment Operators](#assignment-operators)
    - [Logical Operators](#logical-operators)
    - [Bitwise Operators](#bitwise-operators)
  - [Switch Clause](#switch-clause)
  - [Ternary Operator](#ternary-operator)
  - [Null Coalescing Operator](#null-coalescing-operator)
- [C# Methods](#c-methods)
  - [Method Declaration](#method-declaration)
  - [Method Parameters](#method-parameters)
  - [Method Overloading](#method-overloading)
  - [Method Overriding](#method-overriding)
  - [Method Return Generic](#method-return-generic)
- [C# Classes](#c-classes)
  - [Class Declaration](#class-declaration)
  - [Class Constructor](#class-constructor)
  - [Class Properties](#class-properties)
  - [Class Encapsulation](#class-encapsulation)
  - [Class Inheritance](#class-inheritance)
  - [Class Polymorphism](#class-polymorphism)
  - [Class Abstraction](#class-abstraction)
  - [Class Interfaces](#class-interfaces)
- [Other](#other)
  - [Access Modifiers](#access-modifiers)

</details>

## Introduction

<div class="cheat__container-content">

### What is C#?

C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed around 2000 by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2018). C# is one of the programming languages designed for the Common Language Infrastructure.

</div>

<div class="cheat__container-content">

### Why C#?

C# is a simple, modern, general-purpose, object-oriented programming language developed by Microsoft within its .NET initiative led by Anders Hejlsberg. C# is a simple, modern, general-purpose, object-oriented programming language developed by Microsoft within its .NET initiative led by Anders Hejlsberg.

</div>

---

## Getting started

<div class="cheat__container-content">

### Hello, world

```csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Variables

```csharp
using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            string myText = "Hello";     // String
            char myLetter = 'D';         // Character
            int myNum = 5;               // Integer (whole number)
            double myDoubleNum = 5.99D;  // Floating point number
            float myFloatNum = 5.99F;    // Floating point number
            bool myBool = true;          // Boolean
            decimal myDecimal = 5.99M;   // Decimal number
            byte myByte = 255;           // Byte number
            long myLong = 10000000000;   // Long number
            short myShort = 32767;       // Short number
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Primitive Data Types

| Data Type | Size                  | Range                              | Default Value | Description                                                                                                  |
| :-------- | :-------------------- | :--------------------------------- | :------------ | :----------------------------------------------------------------------------------------------------------- |
| `bool`    | 1 bit                 | `true` or `false`                  | `false`       | Boolean value, it's used to represent a logical entity and can have two possible values: `true` and `false`. |
| `byte`    | 1 byte                | `0` to `255`                       | `0`           | It's an unsigned integral type and is used to represent a group of bits as a single unit.                    |
| `char`    | 2 bytes               | `U+0000` to `U+ffff`               | `'\0'`        | It's a single 16-bit Unicode character.                                                                      |
| `decimal` | 16 bytes              | `±1.0 x 10-28` to `±7.9228 x 1028` | `0.0M`        | It's a 128-bit data type that is an exact representation of a decimal value.                                 |
| `double`  | 8 bytes               | `±5.0 x 10-324` to `±1.7 x 10308`  | `0.0D`        | It's a double-precision 64-bit floating point type.                                                          |
| `float`   | 4 bytes               | `±1.5 x 10-45` to `±3.4 x 1038`    | `0.0F`        | It's a single-precision 32-bit floating point type.                                                          |
| `int`     | 4 bytes               | `±2.1 x 109` to `±2.1 x 109`       | `0`           | It's a 32-bit signed integer type.                                                                           |
| `long`    | 8 bytes               | `±9.2 x 1018` to `±9.2 x 1018`     | `0L`          | It's a 64-bit signed integer type.                                                                           |
| `short`   | 2 bytes               | `-32,768` to `32,767`              | `0`           | It's a 16-bit signed integer type.                                                                           |
| `string`  | 2 bytes per character | `U+0000` to `U+ffff`               | `null`        | It's a sequence of Unicode characters.                                                                       |

</div>

<div class="cheat__container-content">

### C# Comments

```csharp
using System;

namespace Comments
{
    class Program
    {
        static void Main(string[] args)
        {
            // This is a single line comment

            /*
            * This is a
            * multi-line comment
            */

            // TODO: Adds comment to a task list

            /// <summary>
            /// This is a documentation comment
            /// </summary>

            /**
            ** <summary>
            ** This is a multi-line
            ** documentation comment
            ** </summary>
            **/
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Strings

```csharp
using System;

namespace Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            string myText = "Hello, World!";
            Console.WriteLine(myText);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### User Input

```csharp
using System;

namespace UserInput
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter your name: ");
            string name = Console.ReadLine();
            Console.WriteLine("Hello " + name);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Conditionals

```csharp
using System;

namespace Conditionals
{
    class Program
    {
        static void Main(string[] args)
        {
            int time = 20;
            if (time < 18)
            {
                Console.WriteLine("Good day.");
            }
            else
            {
                Console.WriteLine("Good evening.");
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Arrays

```csharp
using System;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
            Console.WriteLine(cars[0]);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Loops

```csharp
using System;

namespace Loops
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 0;
            while (i < 5)
            {
                Console.WriteLine(i);
                i++;
            }

            for (int j = 0; j < 5; j++)
            {
                Console.WriteLine(j);
            }

            string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
            foreach (string i in cars)
            {
                Console.WriteLine(i);
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Methods

```csharp
using System;

namespace Methods
{
    class Program
    {
        static void Main(string[] args)
        {
            MyMethod();
        }

        static void MyMethod()
        {
            Console.WriteLine("I just got executed!");
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Classes

```csharp
using System;

namespace Classes
{
    class Program
    {
        static void Main(string[] args)
        {
            Car myObj = new Car();
            myObj.Model = "Mustang";
            Console.WriteLine(myObj.Model);
        }
    }

    class Car
    {
        public string Model;
    }
}
```

</div>

---

## C# Strings

<div class="cheat__container-content">

### String Methods

| Method                            | Description                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `string.ToUpper()`                | Converts a string to uppercase letters.                                                                                |
| `string.ToLower()`                | Converts a string to lowercase letters.                                                                                |
| `string.Trim()`                   | Removes whitespace from both ends of a string.                                                                         |
| `string.Length`                   | Returns the length of a string.                                                                                        |
| `string.Replace("old", "new")`    | Replaces a specified value with another value in a string.                                                             |
| `string.IndexOf("value")`         | Returns the index position of the first occurrence of a specified value in a string.                                   |
| `string.Substring(2)`             | Extracts the characters from a string, starting at a specified position and through the specified number of character. |
| `string.Substring(2, 4)`          | Extracts the characters from a string, starting at a specified position and through the specified number of character. |
| `string.Split(" ")`               | Splits a string into substrings that are based on the characters in an array.                                          |
| `string.Concat("Hello", "World")` | Concatenates two or more strings.                                                                                      |
| `string.Join(" ", array)`         | Concatenates all the elements of a string array, using the specified separator between each element.                   |
| `string.Contains("Hello")`        | Determines whether a specified string is a substring of another specified string.                                      |
| `string.Equals("Hello")`          | Determines whether two specified String objects have the same value.                                                   |
| `string.StartsWith("Hello")`      | Determines whether the beginning of this string instance matches a specified string.                                   |

</div>

<div class="cheat__container-content">

### String Declaration

```csharp
using System;

namespace StringDeclaration
{
    class Program
    {
        static void Main(string[] args)
        {
            string myString = "Hello, World!";
            Console.WriteLine(myString);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Concatenation

```csharp
using System;

namespace StringConcatenation
{
    class Program
    {
        static void Main(string[] args)
        {
            string firstName = "John";
            string lastName = "Doe";
            string fullName = firstName + " " + lastName;
            Console.WriteLine(fullName);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Interpolation

```csharp
using System;

namespace StringInterpolation
{
    class Program
    {
        static void Main(string[] args)
        {
            string firstName = "John";
            string lastName = "Doe";
            string fullName = $"{firstName} {lastName}";
            Console.WriteLine(fullName);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Builder

```csharp
using System;

namespace StringBuilder
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Text.StringBuilder sb = new System.Text.StringBuilder();
            sb.Append("Hello, ");
            sb.Append("World!");
            Console.WriteLine(sb);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Equality

```csharp
using System;

namespace StringEquality
{
    class Program
    {
        static void Main(string[] args)
        {
            string a = "Hello";
            string b = "Hello";
            Console.WriteLine(a == b);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Length

```csharp
using System;

namespace StringLength
{
    class Program
    {
        static void Main(string[] args)
        {
            string myString = "Hello, World!";
            Console.WriteLine(myString.Length);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Comparison

```csharp
using System;

namespace StringComparison
{
    class Program
    {
        static void Main(string[] args)
        {
            string a = "Hello";
            string b = "Hello";
            Console.WriteLine(a.Equals(b));
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Trim

```csharp
using System;

namespace StringTrim
{
    class Program
    {
        static void Main(string[] args)
        {
            string myString = " Hello, World! ";
            Console.WriteLine(myString.Trim());
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Replace

```csharp
using System;

namespace StringReplace
{
    class Program
    {
        static void Main(string[] args)
        {
            string myString = "Hello, World!";
            Console.WriteLine(myString.Replace("Hello", "Greetings"));
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Substring

```csharp
using System;

namespace StringSubstring
{
    class Program
    {
        static void Main(string[] args)
        {
            string myString = "Hello, World!";
            Console.WriteLine(myString.Substring(2));
            Console.WriteLine(myString.Substring(2, 4));
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Split

```csharp
using System;

namespace StringSplit
{
    class Program
    {
        static void Main(string[] args)
        {
            string myString = "Hello, World!";
            string[] words = myString.Split(" ");
            foreach (string word in words)
            {
                Console.WriteLine(word);
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Join

```csharp
using System;

namespace StringJoin
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] words = { "Hello", "World" };
            string myString = string.Join(" ", words);
            Console.WriteLine(myString);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String IndexOf

```csharp
using System;

namespace StringIndexOf
{
    class Program
    {
        static void Main(string[] args)
        {
            string myString = "Hello, World!";
            Console.WriteLine(myString.IndexOf("World"));
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Contains

```csharp
using System;

namespace StringContains
{
    class Program
    {
        static void Main(string[] args)
        {
            string myString = "Hello, World!";
            Console.WriteLine(myString.Contains("Hello"));
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String IsNullOrEmpty

```csharp
using System;

namespace StringIsNullOrEmpty
{
    class Program
    {
        static void Main(string[] args)
        {
            string myString = "";
            Console.WriteLine(string.IsNullOrEmpty(myString));
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String IsNullOrWhiteSpace

```csharp
using System;

namespace StringIsNullOrWhiteSpace
{
    class Program
    {
        static void Main(string[] args)
        {
            string myString = " ";
            Console.WriteLine(string.IsNullOrWhiteSpace(myString));
        }
    }
}
```

</div>

<div class="cheat__container-content">

### String Format

```csharp
using System;

namespace StringFormat
{
    class Program
    {
        static void Main(string[] args)
        {
            string myString = string.Format("{0} {1}", "Hello", "World");
            Console.WriteLine(myString);
        }
    }
}
```

</div>

---

## C# Arrays

<div class="cheat__container-content">

### Array Declaration

```csharp
using System;

namespace ArrayDeclaration
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] myArray = new int[5];
            myArray[0] = 1;
            myArray[1] = 2;
            myArray[2] = 3;
            myArray[3] = 4;
            myArray[4] = 5;
            Console.WriteLine(myArray[0]);
            Console.WriteLine(myArray[1]);
            Console.WriteLine(myArray[2]);
            Console.WriteLine(myArray[3]);
            Console.WriteLine(myArray[4]);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Array Manipulation

```csharp
using System;

namespace ArrayManipulation
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] myArray = { 1, 2, 3, 4, 5 };
            Console.WriteLine(myArray[0]);
            Console.WriteLine(myArray[1]);
            Console.WriteLine(myArray[2]);
            Console.WriteLine(myArray[3]);
            Console.WriteLine(myArray[4]);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Array Multidimensional

```csharp
using System;

namespace ArrayMultidimensional
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] myArray = new int[2, 3];
            myArray[0, 0] = 1;
            myArray[0, 1] = 2;
            myArray[0, 2] = 3;
            myArray[1, 0] = 4;
            myArray[1, 1] = 5;
            myArray[1, 2] = 6;
            Console.WriteLine(myArray[0, 0]);
            Console.WriteLine(myArray[0, 1]);
            Console.WriteLine(myArray[0, 2]);
            Console.WriteLine(myArray[1, 0]);
            Console.WriteLine(myArray[1, 1]);
            Console.WriteLine(myArray[1, 2]);
        }
    }
}
```

</div>

---

## C# Loop

<div class="cheat__container-content">

### While Loop

```csharp
using System;

namespace WhileLoop
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 0;
            while (i < 5)
            {
                Console.WriteLine(i);
                i++;
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Do While Loop

```csharp
using System;

namespace DoWhileLoop
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 0;
            do
            {
                Console.WriteLine(i);
                i++;
            } while (i < 5);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### For Loop

```csharp
using System;

namespace ForLoop
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine(i);
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Foreach Loop

```csharp
using System;

namespace ForEachLoop
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
            foreach (string car in cars)
            {
                Console.WriteLine(car);
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Break Statement

```csharp
using System;

namespace BreakStatement
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 10; i++)
            {
                if (i == 4)
                {
                    break;
                }
                Console.WriteLine(i);
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Continue Statement

```csharp
using System;

namespace ContinueStatement
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 10; i++)
            {
                if (i == 4)
                {
                    continue;
                }
                Console.WriteLine(i);
            }
        }
    }
}
```

</div>

---

## C# Conditionals

<div class="cheat__container-content">

### If Clause

```csharp
using System;

namespace IfClause
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 10;
            if (x < 20)
            {
                Console.WriteLine("This is if statement");
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### If-Else Clause

```csharp
using System;

namespace IfElseClause
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 30;
            if (x < 20)
            {
                Console.WriteLine("This is if statement");
            }
            else
            {
                Console.WriteLine("This is else statement");
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### If-Else-If Clause

```csharp
using System;

namespace IfElseIfClause
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 30;
            if (x == 10)
            {
                Console.WriteLine("Value of X is 10");
            }
            else if (x == 20)
            {
                Console.WriteLine("Value of X is 20");
            }
            else if (x == 30)
            {
                Console.WriteLine("Value of X is 30");
            }
            else
            {
                Console.WriteLine("This is else statement");
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Nested If Clause

```csharp
using System;

namespace NestedIfClause
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 30;
            int y = 10;
            if (x == 30)
            {
                if (y == 10)
                {
                    Console.WriteLine("X = 30 and Y = 10");
                }
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Operators

#### Relational Operators

| Operator | Description              | Example  |
| -------- | ------------------------ | -------- |
| `==`     | Equal to                 | `x == y` |
| `!=`     | Not equal                | `x != y` |
| `>`      | Greater than             | `x > y`  |
| `<`      | Less than                | `x < y`  |
| `>=`     | Greater than or equal to | `x >= y` |
| `<=`     | Less than or equal to    | `x <= y` |

#### Assignment Operators

| Operator | Description                                                  | Example                                       |
| -------- | ------------------------------------------------------------ | --------------------------------------------- |
| `=`      | Assigns values from right side operands to left side operand | `c = a + b` assigns value of `a + b` into `c` |
| `+=`     | Add AND assignment operator                                  | `c += a` is equivalent to `c = c + a`         |
| `-=`     | Subtract AND assignment operator                             | `c -= a` is equivalent to `c = c - a`         |
| `*=`     | Multiply AND assignment operator                             | `c *= a` is equivalent to `c = c * a`         |
| `/=`     | Divide AND assignment operator                               | `c /= a` is equivalent to `c = c / a`         |
| `%=`     | Modulus AND assignment operator                              | `c %= a` is equivalent to `c = c % a`         |

#### Logical Operators

| Operator | Description | Example           |
| -------- | ----------- | ----------------- |
| `&&`     | Logical AND | `Exp1 && Exp2`    |
| `\|\|`   | Logical OR  | `Exp1 \|\| Exp2`  |
| `!`      | Logical NOT | `!(Exp1 && Exp2)` |

#### Bitwise Operators

| Operator | Description         | Example    |
| -------- | ------------------- | ---------- |
| `&`      | Bitwise AND         | `(A & B)`  |
| `\|`     | Bitwise OR          | `(A \| B)` |
| `^`      | Bitwise XOR         | `(A ^ B)`  |
| `~`      | Bitwise NOT         | `(~A)`     |
| `<<`     | Bitwise left shift  | `(A << 2)` |
| `>>`     | Bitwise right shift | `(A >> 2)` |

</div>

<div class="cheat__container-content">

### Switch Clause

```csharp
using System;

namespace SwitchClause
{
    class Program
    {
        static void Main(string[] args)
        {
            int day = 4;
            switch (day)
            {
                case 1:
                    Console.WriteLine("Monday");
                    break;
                case 2:
                    Console.WriteLine("Tuesday");
                    break;
                case 3:
                    Console.WriteLine("Wednesday");
                    break;
                case 4:
                    Console.WriteLine("Thursday");
                    break;
                case 5:
                    Console.WriteLine("Friday");
                    break;
                case 6:
                    Console.WriteLine("Saturday");
                    break;
                case 7:
                    Console.WriteLine("Sunday");
                    break;
            }
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Ternary Operator

```csharp
using System;

namespace TernaryOperator
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 10;
            int y = 20;
            int result = (x < y) ? x : y;
            Console.WriteLine(result);
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Null Coalescing Operator

```csharp
using System;

namespace NullCoalescingOperator
{
    class Program
    {
        static void Main(string[] args)
        {
            int? num1 = null;
            int? num2 = 45;
            double? num3 = new double?();
            double? num4 = 3.14157;
            bool? boolval = new bool?();
            // display the values
            Console.WriteLine("Null coalescing operator: {0}", num1 ?? 100);
            Console.WriteLine("Null coalescing operator: {0}", num2 ?? 100);
            Console.WriteLine("Null coalescing operator: {0}", num3 ?? 100);
            Console.WriteLine("Null coalescing operator: {0}", num4 ?? 100);
            Console.WriteLine("Null coalescing operator: {0}", boolval ?? true);
        }
    }
}
```

</div>

---

## C# Methods

<div class="cheat__container-content">

### Method Declaration

```csharp
using System;

namespace MethodDeclaration
{
    class Program
    {

        static void Main(string[] args)
        {
            PrintHello();
        }

        static void PrintHello()
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Method Parameters

```csharp
using System;

namespace MethodParameters
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 5;
            int y = 6;
            int result = Add(x, y);
            Console.WriteLine(result);
        }

        static int Add(int x, int y)
        {
            return x + y;
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Method Overloading

```csharp
using System;

namespace MethodOverloading
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 5;
            int y = 6;
            int result = Add(x, y);
            Console.WriteLine(result);
            double a = 4.3;
            double b = 6.26;
            double result2 = Add(a, b);
            Console.WriteLine(result2);
        }

        static int Add(int x, int y)
        {
            return x + y;
        }

        static double Add(double x, double y)
        {
            return x + y;
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Method Overriding

```csharp
using System;

namespace MethodOverriding
{
    class Program
    {
        static void Main(string[] args)
        {
            BaseClass baseClass = new BaseClass();
            baseClass.Print();
            DerivedClass derivedClass = new DerivedClass();
            derivedClass.Print();
        }
    }

    class BaseClass
    {
        public virtual void Print()
        {
            Console.WriteLine("Base class");
        }
    }

    class DerivedClass : BaseClass
    {
        public override void Print()
        {
            Console.WriteLine("Derived class");
        }
    }
}
```

</div>

<div class="cheat__container-content">

### Method Return Generic

```csharp
using System;

namespace MethodReturnGeneric
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 5;
            int y = 6;
            int result = Add<int>(x, y);
            Console.WriteLine(result);
            double a = 4.3;
            double b = 6.26;
            double result2 = Add<double>(a, b);
            Console.WriteLine(result2);
        }

        static T Add<T>(T x, T y)
        {
            dynamic a = x;
            dynamic b = y;
            return a + b;
        }
    }
}
```

</div>

---

## C# Classes

<div class="cheat__container-content">

### Class Declaration

```csharp
using System;

namespace ClassDeclaration
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.FirstName = "John";
            person.LastName = "Doe";
            person.Introduce();
        }
    }

    class Person
    {
        public string FirstName;
        public string LastName;

        public void Introduce()
        {
            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }
}
```

Explanation:

</div>

<div class="cheat__container-content">

### Class Constructor

```csharp
using System;

namespace ClassConstructor
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person("John", "Doe");
            person.Introduce();
        }
    }

    class Person
    {
        public string FirstName;
        public string LastName;

        public Person(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }

        public void Introduce()
        {
            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }
}
```

Explanation:

</div>

<div class="cheat__container-content">

### Class Properties

```csharp
using System;

namespace ClassProperties
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.FirstName = "John";
            person.LastName = "Doe";
            person.Introduce();
        }
    }

    class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public void Introduce()
        {
            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }
}
```

Explanation:

</div>

<div class="cheat__container-content">

### Class Access Modifiers

```csharp
using System;

namespace ClassAccessModifiers
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.SetFirstName("John");
            person.SetLastName("Doe");
            person.Introduce();
        }
    }

    class Person
    {
        private string FirstName { get; set; }
        private string LastName { get; set; }

        public void SetFirstName(string firstName)
        {
            FirstName = firstName;
        }

        public void SetLastName(string lastName)
        {
            LastName = lastName;
        }

        public void Introduce()
        {
            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }
}
```

Explanation:

</div>

<div class="cheat__container-content">

### Class Encapsulation

```csharp
using System;

namespace ClassEncapsulation
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.SetFirstName("John");
            person.SetLastName("Doe");
            person.Introduce();
        }
    }

    class Person
    {
        private string FirstName { get; set; }
        private string LastName { get; set; }

        public void SetFirstName(string firstName)
        {
            if (string.IsNullOrEmpty(firstName))
            {
                throw new ArgumentNullException("firstName");
            }
            FirstName = firstName;
        }

        public void SetLastName(string lastName)
        {
            if (string.IsNullOrEmpty(lastName))
            {
                throw new ArgumentNullException("lastName");
            }
            LastName = lastName;
        }

        public void Introduce()
        {
            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }
}
```

Explanation:

</div>

<div class="cheat__container-content">

### Class Inheritance

```csharp
using System;

namespace ClassInheritance
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.SetFirstName("John");
            person.SetLastName("Doe");
            person.Introduce();
            Customer customer = new Customer();
            customer.SetFirstName("Jane");
            customer.SetLastName("Doe");
            customer.Introduce();
        }
    }

    class Person
    {
        private string FirstName { get; set; }
        private string LastName { get; set; }

        public void SetFirstName(string firstName)
        {
            if (string.IsNullOrEmpty(firstName))
            {
                throw new ArgumentNullException("firstName");
            }
            FirstName = firstName;
        }

        public void SetLastName(string lastName)
        {
            if (string.IsNullOrEmpty(lastName))
            {
                throw new ArgumentNullException("lastName");
            }
            LastName = lastName;
        }

        public void Introduce()
        {
            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }

    class Customer : Person
    {
        public void Promote()
        {
            Console.WriteLine("Promoted!");
        }
    }
}
```

Explanation:

</div>

<div class="cheat__container-content">

### Class Polymorphism

```csharp
using System;

namespace ClassPolymorphism
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.SetFirstName("John");
            person.SetLastName("Doe");
            person.Introduce();
            Customer customer = new Customer();
            customer.SetFirstName("Jane");
            customer.SetLastName("Doe");
            customer.Introduce();
            customer.Promote();
        }
    }

    class Person
    {
        private string FirstName { get; set; }
        private string LastName { get; set; }

        public void SetFirstName(string firstName)
        {
            if (string.IsNullOrEmpty(firstName))
            {
                throw new ArgumentNullException("firstName");
            }
            FirstName = firstName;
        }

        public void SetLastName(string lastName)
        {
            if (string.IsNullOrEmpty(lastName))
            {
                throw new ArgumentNullException("lastName");
            }
            LastName = lastName;
        }

        public void Introduce()
        {
            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }

    class Customer : Person
    {
        public void Promote()
        {
            Console.WriteLine("Promoted!");
        }
    }
}
```

Explanation:

</div>

<div class="cheat__container-content">

### Class Abstraction

```csharp
using System;

namespace ClassAbstraction
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.SetFirstName("John");
            person.SetLastName("Doe");
            person.Introduce();
            Customer customer = new Customer();
            customer.SetFirstName("Jane");
            customer.SetLastName("Doe");
            customer.Introduce();
            customer.Promote();
        }
    }

    abstract class Person
    {
        private string FirstName { get; set; }
        private string LastName { get; set; }

        public void SetFirstName(string firstName)
        {
            if (string.IsNullOrEmpty(firstName))
            {
                throw new ArgumentNullException("firstName");
            }
            FirstName = firstName;
        }

        public void SetLastName(string lastName)
        {
            if (string.IsNullOrEmpty(lastName))
            {
                throw new ArgumentNullException("lastName");
            }
            LastName = lastName;
        }

        public void Introduce()
        {
            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }

    class Customer : Person
    {
        public void Promote()
        {
            Console.WriteLine("Promoted!");
        }
    }
}
```

Explanation:

</div>

<div class="cheat__container-content">

### Class Interfaces

```csharp
using System;

namespace ClassInterfaces
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person();
            person.SetFirstName("John");
            person.SetLastName("Doe");
            person.Introduce();
            Customer customer = new Customer();
            customer.SetFirstName("Jane");
            customer.SetLastName("Doe");
            customer.Introduce();
            customer.Promote();
        }
    }

    interface IPerson
    {
        void SetFirstName(string firstName);
        void SetLastName(string lastName);
        void Introduce();
    }

    class Person : IPerson
    {
        private string FirstName { get; set; }
        private string LastName { get; set; }

        public void SetFirstName(string firstName)
        {
            if (string.IsNullOrEmpty(firstName))
            {
                throw new ArgumentNullException("firstName");
            }
            FirstName = firstName;
        }

        public void SetLastName(string lastName)
        {
            if (string.IsNullOrEmpty(lastName))
            {
                throw new ArgumentNullException("lastName");
            }
            LastName = lastName;
        }

        public void Introduce()
        {
            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }

    class Customer : IPerson
    {
        private string FirstName { get; set; }
        private string LastName { get; set; }

        public void SetFirstName(string firstName)
        {
            if (string.IsNullOrEmpty(firstName))
            {
                throw new ArgumentNullException("firstName");
            }
            FirstName = firstName;
        }

        public void SetLastName(string lastName)
        {
            if (string.IsNullOrEmpty(lastName))
            {
                throw new ArgumentNullException("lastName");
            }
            LastName = lastName;
        }

        public void Introduce()
        {
            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }

        public void Promote()
        {
            Console.WriteLine("Promoted!");
        }
    }
}
```

Explanation:

</div>

## Other

<div class="cheat__container-content">

### Access Modifiers

| Modifier    | Class | Package | Subclass | World |
| ----------- | ----- | ------- | -------- | ----- |
| public      | Y     | Y       | Y        | Y     |
| protected   | Y     | Y       | Y        | N     |
| no modifier | Y     | Y       | N        | N     |
| private     | Y     | N       | N        | N     |

</div>
