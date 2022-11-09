---
title: 'MySQL'
slug: 'mysql'
category: 'Database'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'MySQL is an open-source relational database management system (RDBMS).'
color: '#4479A1'
icon: 'MySQLIcon'
draft: false
---

## Table of Contents

<details>

<summary>Expand Table of Contents</summary>

- [Introduction](#introduction)
  - [What is MySQL?](#what-is-mysql)
  - [Why use MySQL?](#why-use-mysql)
  - [MySQL Features](#mysql-features)
- [Getting started](#getting-started)
  - [Connect MySQL](#connect-mysql)
  - [MySQL Commands](#mysql-commands)
    - [Database Commands](#database-commands)
    - [Table Commands](#table-commands)
    - [Data Commands](#data-commands)
    - [Proccess Commands](#proccess-commands)
    - [User Commands](#user-commands)
    - [Other Commands](#other-commands)
  - [MySQL Data Types](#mysql-data-types)
  - [MySQL Operators](#mysql-operators)
    - [Relational Operators](#relational-operators)
    - [Logical Operators](#logical-operators)
    - [Bitwise Operators](#bitwise-operators)
    - [Assignment Operators](#assignment-operators)
  - [MySQL Functions](#mysql-functions)
  - [MySQL Backups](#mysql-backups)
- [MySQL Examples](#mysql-examples)
  - [MySQL Managing tables](#mysql-managing-tables)
  - [MySQL Constraints](#mysql-constraints)
  - [MySQL Joins](#mysql-joins)
  - [MySQL Indexes](#mysql-indexes)
  - [MySQL Views](#mysql-views)
  - [MySQL Stored Procedures](#mysql-stored-procedures)
  - [MySQL Triggers](#mysql-triggers)
  - [MySQL Events](#mysql-events)
  - [MySQL Partitions](#mysql-partitions)
  - [MySQL Transactions](#mysql-transactions)

</details>

## Introduction

<div class="cheat__container-content">

### What is MySQL?

MySQL is an open-source relational database management system (RDBMS). It is a database server that stores data in tables. It is a client-server application with a multi-threaded server that can handle thousands of concurrent connections.

</div>

<div class="cheat__container-content">

### Why use MySQL?

MySQL is a popular choice of database for use in web applications, and is a central component of the widely used LAMP open source web application software stack.

</div>

<div class="cheat__container-content">

### MySQL Features

- MySQL is a relational database management system (RDBMS) based on Structured Query Language (SQL).
- MySQL is a client-server database engine.
- MySQL is a multi-threaded database engine.
- MySQL is a database server that stores data in tables.
- MySQL is a client-server application with a multi-threaded server that can handle thousands of concurrent connections.

</div>

## Getting started

<div class="cheat__container-content">

### Connect MySQL

```bash
mysql -u root -p

mysql [database_name]

mysql -h [LOCALHOST] -P [PORT] -u [USERNAME] -p [PASSWORD]

mysql -h [LOCALHOST] -P [PORT] -u [USERNAME] -p [PASSWORD] [DATABASE_NAME]
```

Explanation:

- `-u` is the username.
- `-p` is the password.
- `-h` is the host.
- `-P` is the port.

> **Note:** If you are using MySQL 8.0, you will need to use the `mysql_native_password` plugin. You can do this by running the following command:

```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

</div>

<div class="cheat__container-content">

### MySQL Commands

#### Database Commands

| Command                          | Description            |
| -------------------------------- | ---------------------- |
| `CREATE DATABASE database_name;` | Create a database.     |
| `SHOW DATABASES;`                | Show all databases.    |
| `USE database_name;`             | Use a database.        |
| `CONNECT database_name;`         | Connect to a database. |
| `DROP DATABASE database_name;`   | Delete a database.     |

#### Table Commands

| Command                                            | Description                      |
| -------------------------------------------------- | -------------------------------- |
| `CREATE TABLE table_name (column_name data_type);` | Create a table.                  |
| `SHOW TABLES;`                                     | Show all tables.                 |
| `SHOW FIELDS FROM table_name;`                     | Show all fields from a table.    |
| `DESC table_name;`                                 | Show all fields from a table.    |
| `SHOW CREATE TABLE table_name;`                    | Show the create table statement. |
| `TRUNCATE TABLE table_name;`                       | Delete all records from a table. |
| `DROP TABLE table_name;`                           | Delete a table.                  |

#### Data Commands

| Command                                                                               | Description                                |
| ------------------------------------------------------------------------------------- | ------------------------------------------ |
| `INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3);` | Insert data into a table.                  |
| `SELECT * FROM table_name;`                                                           | Select all data from a table.              |
| `SELECT column1, column2 FROM table_name;`                                            | Select specific columns from a table.      |
| `SELECT * FROM table_name WHERE column = value;`                                      | Select data from a table with a condition. |
| `SELECT * FROM table_name ORDER BY column ASC;`                                       | Select data from a table and sort it.      |
| `UPDATE table_name SET column = value WHERE column = value;`                          | Update data in a table.                    |
| `PATCH table_name SET column = value WHERE column = value;`                           | Update data in a table.                    |
| `DELETE FROM table_name WHERE column = value;`                                        | Delete data from a table.                  |

#### Proccess Commands

| Command             | Description         |
| ------------------- | ------------------- |
| `SHOW PROCESSLIST;` | Show all processes. |
| `KILL process_id;`  | Kill a process.     |

#### User Commands

| Command                                                        | Description                     |
| -------------------------------------------------------------- | ------------------------------- |
| `CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';` | Create a user.                  |
| `GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';`       | Grant all privileges to a user. |
| `FLUSH PRIVILEGES;`                                            | Reload the grant tables.        |
| `SHOW GRANTS FOR 'username'@'localhost';`                      | Show all privileges for a user. |
| `DROP USER 'username'@'localhost';`                            | Delete a user.                  |

#### Other Commands

| Command                             | Description                      |
| ----------------------------------- | -------------------------------- |
| `SELECT VERSION();`                 | Show the MySQL version.          |
| `SELECT DATABASE();`                | Show the current database.       |
| `SELECT USER();`                    | Show the current user.           |
| `SELECT @@hostname;`                | Show the hostname.               |
| `SELECT @@port;`                    | Show the port.                   |
| `SELECT @@version_compile_os;`      | Show the operating system.       |
| `SELECT @@version_compile_machine;` | Show the machine.                |
| `SELECT @@version_comment;`         | Show the version comment.        |
| `SELECT @@datadir;`                 | Show the data directory.         |
| `SELECT @@tmpdir;`                  | Show the temporary directory.    |
| `SELECT @@basedir;`                 | Show the base directory.         |
| `SELECT @@character_set_database;`  | Show the character set.          |
| `SELECT @@collation_database;`      | Show the collation.              |
| `SELECT @@max_allowed_packet;`      | Show the maximum allowed packet. |
| `SELECT @@max_connections;`         | Show the maximum connections.    |

</div>

<div class="cheat__container-content">

### MySQL Data Types

#### Numeric Data Types

| Data Type   | Length in Bytes | Minimum Value (Signed)   | Maximum Value (Signed)  | Minimum Value (Unsigned) | Maximum Value (Unsigned) | Description |
| ----------- | --------------- | ------------------------ | ----------------------- | ------------------------ | ------------------------ | ----------- |
| `TINYINT`   | 1               | -128                     | 127                     | 0                        | 255                      |             |
| `SMALLINT`  | 2               | -32768                   | 32767                   | 0                        | 65535                    |             |
| `MEDIUMINT` | 3               | -8388608                 | 8388607                 | 0                        | 16777215                 |             |
| `INT`       | 4               | -2147483648              | 2147483647              | 0                        | 4294967295               |             |
| `BIGINT`    | 8               | -9223372036854775808     | 9223372036854775807     | 0                        | 18446744073709551615     |             |
| `FLOAT`     | 4               | -3.402823466E+38         | 3.402823466E+38         | 0                        | 1.175494351E-38          |             |
| `DOUBLE`    | 8               | -1.7976931348623157E+308 | 1.7976931348623157E+308 | 0                        | 2.2250738585072014E-308  |             |

#### String Data Types

| Data Type | Display Format | Range in characters | Description                                                                                                                                                 |
| --------- | -------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CHAR`    | Fixed          | 0-255               | Contains non-binary strings. Length is fixed as you declare while creating a table. When stored, they are right-padded with spaces to the specified length. |
| `VARCHAR` | Variable       | 0-65535             | Contains non-binary strings. Length is variable. When stored, they are right-padded with spaces to the specified length.                                    |

#### Date and Time Data Types

| Data Type   | Display Format      | Range                                      | Description                    |
| ----------- | ------------------- | ------------------------------------------ | ------------------------------ |
| `DATE`      | YYYY-MM-DD          | 1000-01-01 to 9999-12-31                   | Contains date values.          |
| `TIME`      | HH:MM:SS            | -838:59:59 to 838:59:59                    | Contains time values.          |
| `DATETIME`  | YYYY-MM-DD HH:MM:SS | 1000-01-01 00:00:00 to 9999-12-31 23:59:59 | Contains date and time values. |
| `TIMESTAMP` | YYYYMMDDHHMMSS      | 1970-01-01 00:00:01 to 2038-01-19 03:14:07 | Contains date and time values. |

#### Text Data Types

| Data Type    | Display Format | Range in characters | Description                                      |
| ------------ | -------------- | ------------------- | ------------------------------------------------ |
| `TINYTEXT`   | Variable       | 0-255               | Contains non-binary strings. Length is variable. |
| `TEXT`       | Variable       | 0-65535             | Contains non-binary strings. Length is variable. |
| `MEDIUMTEXT` | Variable       | 0-16777215          | Contains non-binary strings. Length is variable. |
| `LONGTEXT`   | Variable       | 0-4294967295        | Contains non-binary strings. Length is variable. |

#### Blob Data Types

| Data Type    | Display Format | Range in characters | Description                                  |
| ------------ | -------------- | ------------------- | -------------------------------------------- |
| `TINYBLOB`   | Variable       | 0-255               | Contains binary strings. Length is variable. |
| `BLOB`       | Variable       | 0-65535             | Contains binary strings. Length is variable. |
| `MEDIUMBLOB` | Variable       | 0-16777215          | Contains binary strings. Length is variable. |
| `LONGBLOB`   | Variable       | 0-4294967295        | Contains binary strings. Length is variable. |

#### Enum Data Type

| Data Type | Display Format | Range in characters | Description                                                                           |
| --------- | -------------- | ------------------- | ------------------------------------------------------------------------------------- |
| `ENUM`    | Variable       | 0-65535             | Contains a list of values. You can specify a maximum of 65535 values in an ENUM list. |

#### Set Data Type

| Data Type | Display Format | Range in characters | Description                                                                      |
| --------- | -------------- | ------------------- | -------------------------------------------------------------------------------- |
| `SET`     | Variable       | 0-64                | Contains a list of values. You can specify a maximum of 64 values in a SET list. |

</div>

<div class="cheat__container-content">

### MySQL Operators

#### Relational Operators

| Operator | Description               |
| -------- | ------------------------- |
| `=`      | Equal to.                 |
| `<>`     | Not equal.                |
| `>`      | Greater than.             |
| `<`      | Less than.                |
| `>=`     | Greater than or equal to. |
| `<=`     | Less than or equal to.    |

#### Logical Operators

| Operator | Description  |
| -------- | ------------ |
| `AND`    | Logical AND. |
| `OR`     | Logical OR.  |
| `NOT`    | Logical NOT. |

#### Arithmetic Operators

| Operator | Description     |
| -------- | --------------- |
| `+`      | Addition.       |
| `-`      | Subtraction.    |
| `*`      | Multiplication. |
| `/`      | Division.       |
| `%`      | Modulus.        |

#### Bitwise Operators

| Operator | Description          |
| -------- | -------------------- |
| `&`      | Bitwise AND.         |
| `\|`     | Bitwise OR.          |
| `^`      | Bitwise XOR.         |
| `~`      | Bitwise NOT.         |
| `<<`     | Bitwise left shift.  |
| `>>`     | Bitwise right shift. |

#### Assignment Operators

| Operator | Description          |
| -------- | -------------------- |
| `=`      | Assignment.          |
| `+=`     | Addition.            |
| `-=`     | Subtraction.         |
| `*=`     | Multiplication.      |
| `/=`     | Division.            |
| `%=`     | Modulus.             |
| `&=`     | Bitwise AND.         |
| `\|=`    | Bitwise OR.          |
| `^=`     | Bitwise XOR.         |
| `<<=`    | Bitwise left shift.  |
| `>>=`    | Bitwise right shift. |

Example for each operator:

<details>

```sql
SELECT * FROM table_name WHERE column_name = 1;
SELECT * FROM table_name WHERE column_name <> 1;
SELECT * FROM table_name WHERE column_name > 1;
SELECT * FROM table_name WHERE column_name < 1;
SELECT * FROM table_name WHERE column_name >= 1;
SELECT * FROM table_name WHERE column_name <= 1;

SELECT * FROM table_name WHERE column_name1 AND column_name2;
SELECT * FROM table_name WHERE column_name1 OR column_name2;
SELECT * FROM table_name WHERE NOT column_name;

SELECT * FROM table_name WHERE column_name1 + column_name2;
SELECT * FROM table_name WHERE column_name1 - column_name2;
SELECT * FROM table_name WHERE column_name1 * column_name2;
SELECT * FROM table_name WHERE column_name1 / column_name2;
SELECT * FROM table_name WHERE column_name1 % column_name2;

SELECT * FROM table_name WHERE column_name1 & column_name2;
SELECT * FROM table_name WHERE column_name1 | column_name2;
SELECT * FROM table_name WHERE column_name1 ^ column_name2;
SELECT * FROM table_name WHERE ~column_name;
SELECT * FROM table_name WHERE column_name1 << column_name2;
SELECT * FROM table_name WHERE column_name1 >> column_name2;

SELECT * FROM table_name WHERE column_name = 1;
SELECT * FROM table_name WHERE column_name += 1;
SELECT * FROM table_name WHERE column_name -= 1;
SELECT * FROM table_name WHERE column_name *= 1;
SELECT * FROM table_name WHERE column_name /= 1;
SELECT * FROM table_name WHERE column_name %= 1;
SELECT * FROM table_name WHERE column_name &= 1;
SELECT * FROM table_name WHERE column_name |= 1;
SELECT * FROM table_name WHERE column_name ^= 1;
SELECT * FROM table_name WHERE column_name <<= 1;
SELECT * FROM table_name WHERE column_name >>= 1;
```

</details>

</div>

<div class="cheat__container-content">

### MySQL Functions

#### Aggregate Functions

| Function  | Description                                                   |
| --------- | ------------------------------------------------------------- |
| `AVG()`   | Returns the average value of a numeric column.                |
| `COUNT()` | Returns the number of rows that matches a specified criteria. |
| `MAX()`   | Returns the largest value of the selected column.             |
| `MIN()`   | Returns the smallest value of the selected column.            |
| `SUM()`   | Returns the total sum of a numeric column.                    |

#### Date and Time Functions

| Function       | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `CURDATE()`    | Returns the current date.                                  |
| `CURTIME()`    | Returns the current time.                                  |
| `DATE()`       | Extracts the date part of a date or datetime expression.   |
| `DATEDIFF()`   | Returns the number of days between two dates.              |
| `DATE_ADD()`   | Adds a time interval to a date.                            |
| `DATE_SUB()`   | Subtracts a time interval from a date.                     |
| `DAY()`        | Extracts the day part of a date or datetime expression.    |
| `DAYNAME()`    | Returns the name of the weekday for a date.                |
| `DAYOFMONTH()` | Returns the day of the month for a date.                   |
| `DAYOFWEEK()`  | Returns the weekday index for a date.                      |
| `DAYOFYEAR()`  | Returns the day of the year for a date.                    |
| `EXTRACT()`    | Extracts a part of a date or datetime expression.          |
| `HOUR()`       | Extracts the hour part of a time or datetime expression.   |
| `LAST_DAY()`   | Returns the last day of the month for a date.              |
| `MINUTE()`     | Extracts the minute part of a time or datetime expression. |
| `MONTH()`      | Extracts the month part of a date or datetime expression.  |
| `MONTHNAME()`  | Returns the name of the month for a date.                  |
| `NOW()`        | Returns the current date and time.                         |

#### String Functions

| Function      | Description                                                              |
| ------------- | ------------------------------------------------------------------------ |
| `ASCII()`     | Returns the ASCII value of the leftmost character of the string.         |
| `CHAR()`      | Returns a character string corresponding to the specified ASCII value.   |
| `CONCAT()`    | Concatenates two or more strings.                                        |
| `CONCAT_WS()` | Concatenates two or more strings with a separator.                       |
| `INSERT()`    | Inserts a substring into a string.                                       |
| `LCASE()`     | Converts a string to lowercase.                                          |
| `LEFT()`      | Returns the leftmost characters from a string.                           |
| `LENGTH()`    | Returns the length of a string.                                          |
| `LOCATE()`    | Returns the position of the first occurrence of a substring in a string. |
| `LOWER()`     | Converts a string to lowercase.                                          |
| `LTRIM()`     | Removes the leftmost spaces from a string.                               |
| `REPEAT()`    | Repeats a string a specified number of times.                            |
| `REPLACE()`   | Replaces occurrences of a substring within a string.                     |

#### Numeric Functions

| Function    | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| `ABS()`     | Returns the absolute value of a number.                          |
| `CEIL()`    | Returns the smallest integer value not less than the argument.   |
| `CEILING()` | Returns the smallest integer value not less than the argument.   |
| `FLOOR()`   | Returns the largest integer value not greater than the argument. |
| `MOD()`     | Returns the remainder of the division of two numbers.            |
| `POWER()`   | Returns the result of an expression raised to a specified power. |
| `RAND()`    | Returns a random floating-point value between 0 and 1.           |
| `ROUND()`   | Rounds a number to a specified number of decimal places.         |
| `SIGN()`    | Returns the sign of the argument.                                |

#### Type Conversion Functions

| Function    | Description                                      |
| ----------- | ------------------------------------------------ |
| `CAST()`    | Converts an expression to a specified data type. |
| `CONVERT()` | Converts an expression to a specified data type. |

#### Other Functions

| Function   | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| `IF()`     | Returns one value if a condition is true, and another value if it is false. |
| `IFNULL()` | Returns a specified value if an expression is NULL.                         |

Example of using MySQL functions:

<details>

```sql
SELECT AVG(column_name) FROM table_name WHERE column_name = 1;
SELECT COUNT(column_name) FROM table_name WHERE column_name = 1;
SELECT MAX(column_name) FROM table_name WHERE column_name = 1;
SELECT MIN(column_name) FROM table_name WHERE column_name = 1;
SELECT SUM(column_name) FROM table_name WHERE column_name = 1;

SELECT CURDATE() FROM table_name WHERE column_name = 1;
SELECT CURTIME() FROM table_name WHERE column_name = 1;
SELECT DATE(column_name) FROM table_name WHERE column_name = 1;
SELECT DATEDIFF(column_name1, column_name2) FROM table_name WHERE column_name = 1;
SELECT DATE_ADD(column_name, INTERVAL 1 DAY) FROM table_name WHERE column_name = 1;
SELECT DATE_SUB(column_name, INTERVAL 1 DAY) FROM table_name WHERE column_name = 1;
SELECT DAY(column_name) FROM table_name WHERE column_name = 1;
SELECT DAYNAME(column_name) FROM table_name WHERE column_name = 1;
SELECT DAYOFMONTH(column_name) FROM table_name WHERE column_name = 1;
SELECT DAYOFWEEK(column_name) FROM table_name WHERE column_name = 1;
SELECT DAYOFYEAR(column_name) FROM table_name WHERE column_name = 1;
SELECT EXTRACT(DAY FROM column_name) FROM table_name WHERE column_name = 1;
SELECT HOUR(column_name) FROM table_name WHERE column_name = 1;
SELECT LAST_DAY(column_name) FROM table_name WHERE column_name = 1;
SELECT MINUTE(column_name) FROM table_name WHERE column_name = 1;
SELECT MONTH(column_name) FROM table_name WHERE column_name = 1;
SELECT MONTHNAME(column_name) FROM table_name WHERE column_name = 1;
SELECT NOW() FROM table_name WHERE column_name = 1;

SELECT ASCII(column_name) FROM table_name WHERE column_name = 1;
SELECT CHAR(65) FROM table_name WHERE column_name = 1;
SELECT CONCAT(column_name1, column_name2) FROM table_name WHERE column_name = 1;
SELECT CONCAT_WS(' ', column_name1, column_name2) FROM table_name WHERE column_name = 1;
SELECT INSERT(column_name, 1, 1, 'a') FROM table_name WHERE column_name = 1;
SELECT LCASE(column_name) FROM table_name WHERE column_name = 1;
SELECT LEFT(column_name, 1) FROM table_name WHERE column_name = 1;
SELECT LENGTH(column_name) FROM table_name WHERE column_name = 1;
SELECT LOCATE('a', column_name) FROM table_name WHERE column_name = 1;
SELECT LOWER(column_name) FROM table_name WHERE column_name = 1;
SELECT LTRIM(column_name) FROM table_name WHERE column_name = 1;
SELECT REPEAT(column_name, 2) FROM table_name WHERE column_name = 1;
SELECT REPLACE(column_name, 'a', 'b') FROM table_name WHERE column_name = 1;

SELECT ABS(-1) FROM table_name WHERE column_name = 1;
SELECT CEIL(1.1) FROM table_name WHERE column_name = 1;
SELECT CEILING(1.1) FROM table_name WHERE column_name = 1;
SELECT FLOOR(1.1) FROM table_name WHERE column_name = 1;
SELECT MOD(1, 2) FROM table_name WHERE column_name = 1;
SELECT POWER(2, 2) FROM table_name WHERE column_name = 1;
SELECT RAND() FROM table_name WHERE column_name = 1;
SELECT ROUND(1.1) FROM table_name WHERE column_name = 1;
SELECT SIGN(-1) FROM table_name WHERE column_name = 1;

SELECT CAST(1 AS CHAR) FROM table_name WHERE column_name = 1;
SELECT CONVERT(1, CHAR) FROM table_name WHERE column_name = 1;

SELECT IF(1 = 1, 'a', 'b') FROM table_name WHERE column_name = 1;
SELECT IFNULL(NULL, 'a') FROM table_name WHERE column_name = 1;
```

</details>

</div>

<div class="cheat__container-content">

### MySQL Backups

#### MySQL Backup

```bash
mysqldump -u root -p database_name > database_name.sql
```

#### MySQL Restore

```bash
mysql -u root -p database_name < database_name.sql
```

#### MySQL Backup with Compression

```bash
mysqldump -u root -p database_name | gzip > database_name.sql.gz
```

</div>

## MySQL Examples

<div class="cheat__container-content">

### MySQL Managing tables

#### Create a new table with three columns

```sql
CREATE TABLE table_name (
  column_name1 INT,
  column_name2 VARCHAR(255),
  column_name3 VARCHAR(255)
);
```

#### Add a new column to the table

```sql
ALTER TABLE table_name ADD column_name VARCHAR(255);
```

#### Change the data type of a column

```sql
ALTER TABLE table_name MODIFY column_name VARCHAR(255);
```

#### Change the name of a column

```sql
ALTER TABLE table_name CHANGE column_name1 column_name2 VARCHAR(255);
```

#### Delete a column from the table

```sql
ALTER TABLE table_name DROP column_name;
```

#### Delete a table

```sql
DROP TABLE table_name;
```

#### Rename a table

```sql
RENAME TABLE table_name1 TO table_name2;
```

#### Truncate a table

```sql
TRUNCATE TABLE table_name;
```

</div>

<div class="cheat__container-content">

### MySQL Constraints

#### Add a primary key to a table

```sql
ALTER TABLE table_name ADD PRIMARY KEY (column_name);
```

#### Add a unique key to a table

```sql
ALTER TABLE table_name ADD UNIQUE (column_name);
```

#### Add a foreign key to a table

```sql
ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES table_name(column_name);
```

#### Add a check constraint to a table

```sql
ALTER TABLE table_name ADD CHECK (column_name > 0);
```

#### Add a default value to a table

```sql
ALTER TABLE table_name ALTER column_name SET DEFAULT 'a';
```

#### Remove a default value from a table

```sql
ALTER TABLE table_name ALTER column_name DROP DEFAULT;
```

</div>

<div class="cheat__container-content">

### MySQL Joins

#### Inner join

```sql
SELECT column_name1, column_name2
FROM table_name1
INNER JOIN table_name2
ON table_name1.column_name = table_name2.column_name;
```

Explanation:

The INNER JOIN keyword selects records that have matching values in both tables.

#### Left join

```sql
SELECT column_name1, column_name2
FROM table_name1
LEFT JOIN table_name2
ON table_name1.column_name = table_name2.column_name;
```

Explanation:

The LEFT JOIN keyword returns all records from the left table (table_name1), and the matched records from the right table (table_name2). The result is NULL from the right side, if there is no match.

#### Right join

```sql
SELECT column_name1, column_name2
FROM table_name1
RIGHT JOIN table_name2
ON table_name1.column_name = table_name2.column_name;
```

Explanation:

The RIGHT JOIN keyword returns all records from the right table (table_name2), and the matched records from the left table (table_name1). The result is NULL from the left side, when there is no match.

#### Full join

```sql
SELECT column_name1, column_name2
FROM table_name1
FULL JOIN table_name2
ON table_name1.column_name = table_name2.column_name;
```

Explanation:

The FULL JOIN keyword returns all records when there is a match in either left (table_name1) or right (table_name2) table records.

#### Self join

```sql
SELECT column_name1, column_name2
FROM table_name1 T1, table_name1 T2
WHERE T1.column_name = T2.column_name;
```

Explanation:

A self join is a regular join, but the table is joined with itself.

#### Cross join

```sql
SELECT column_name1, column_name2
FROM table_name1
CROSS JOIN table_name2;
```

Explanation:

The CROSS JOIN keyword returns the Cartesian product of the sets of records from the two tables.

</div>

<div class="cheat__container-content">

### MySQL Indexes

#### Create an index

```sql
CREATE INDEX index_name ON table_name (column_name);
```

#### Create a unique index

```sql
CREATE UNIQUE INDEX index_name ON table_name (column_name);
```

#### Create a primary key

```sql
ALTER TABLE table_name ADD PRIMARY KEY (column_name);
```

#### Create a unique key

```sql
ALTER TABLE table_name ADD UNIQUE (column_name);
```

#### Create a foreign key

```sql
ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES table_name(column_name);
```

#### Drop an index

```sql
DROP INDEX index_name ON table_name;
```

#### Drop a primary key

```sql
ALTER TABLE table_name DROP PRIMARY KEY;
```

#### Drop a unique key

```sql
ALTER TABLE table_name DROP INDEX column_name;
```

#### Drop a foreign key

```sql
ALTER TABLE table_name DROP FOREIGN KEY column_name;
```

</div>

<div class="cheat__container-content">

### MySQL Views

#### Create a view

```sql
CREATE VIEW view_name AS
SELECT column_name1, column_name2
FROM table_name
WHERE condition;
```

Explanation:

A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.

#### Update a view

```sql
CREATE OR REPLACE VIEW view_name AS
SELECT column_name1, column_name2
FROM table_name
WHERE condition;
```

Explanation:

The CREATE OR REPLACE VIEW statement is used to modify an existing view.

#### Delete a view

```sql
DROP VIEW view_name;
```

</div>

<div class="cheat__container-content">

### MySQL Stored Procedures

#### Create a stored procedure

```sql
DELIMITER $$
CREATE PROCEDURE procedure_name()
BEGIN
SELECT column_name1, column_name2
FROM table_name
WHERE condition;
END$$
DELIMITER ;
```

Explanation:

A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.

#### Update a stored procedure

```sql
DELIMITER $$
CREATE OR REPLACE PROCEDURE procedure_name()
BEGIN
SELECT column_name1, column_name2
FROM table_name
WHERE condition;
END$$
DELIMITER ;
```

Explanation:

The CREATE OR REPLACE PROCEDURE statement is used to modify an existing stored procedure.

#### Delete a stored procedure

```sql
DROP PROCEDURE procedure_name;
```

</div>

<div class="cheat__container-content">

### MySQL Triggers

#### Create a trigger

```sql
DELIMITER $$
CREATE TRIGGER trigger_name
BEFORE INSERT ON table_name
FOR EACH ROW
BEGIN
SET NEW.column_name = 'a';
END$$
DELIMITER ;
```

Explanation:

A trigger is a special type of stored procedure that is automatically executed when an event occurs in a database.

#### Update a trigger

```sql
DELIMITER $$
CREATE OR REPLACE TRIGGER trigger_name
BEFORE INSERT ON table_name
FOR EACH ROW
BEGIN
SET NEW.column_name = 'a';
END$$
DELIMITER ;
```

Explanation:

The CREATE OR REPLACE TRIGGER statement is used to modify an existing trigger.

#### Delete a trigger

```sql
DROP TRIGGER trigger_name;
```

</div>

<div class="cheat__container-content">

### MySQL Partitions

#### Create a partition

```sql
CREATE TABLE table_name (
  column_name1 datatype,
  column_name2 datatype,
  column_name3 datatype,
  ...
)
PARTITION BY RANGE (column_name) (
  PARTITION partition_name1 VALUES LESS THAN (value1),
  PARTITION partition_name2 VALUES LESS THAN (value2),
  PARTITION partition_name3 VALUES LESS THAN (value3),
  ...
);
```

Explanation:

A partition is a logical division of a table. Each partition is physically stored as a separate table.

#### Update a partition

```sql
ALTER TABLE table_name REORGANIZE PARTITION partition_name INTO (
  PARTITION partition_name1 VALUES LESS THAN (value1),
  PARTITION partition_name2 VALUES LESS THAN (value2),
  PARTITION partition_name3 VALUES LESS THAN (value3),
  ...
);
```

Explanation:

The REORGANIZE PARTITION statement is used to modify an existing partition.

#### Delete a partition

```sql
ALTER TABLE table_name DROP PARTITION partition_name;
```

</div>

<div class="cheat__container-content">

### MySQL Events

#### Create an event

```sql
CREATE EVENT event_name
ON SCHEDULE EVERY 1 DAY
STARTS '2018-01-01 00:00:00'
DO
UPDATE table_name
SET column_name = 'a';
```

Explanation:

An event is a scheduled task that is executed automatically at a specified date and time.

#### Update an event

```sql
ALTER EVENT event_name
ON SCHEDULE EVERY 1 DAY
STARTS '2018-01-01 00:00:00'
DO
UPDATE table_name
SET column_name = 'a';
```

Explanation:

The ALTER EVENT statement is used to modify an existing event.

#### Delete an event

```sql
DROP EVENT event_name;
```

</div>

<div class="cheat__container-content">

### MySQL Transactions

#### Start a transaction

```sql
START TRANSACTION;
```

Explanation:

A transaction is a set of SQL statements that are executed as a single unit.

#### Commit a transaction

```sql
COMMIT;
```

Explanation:

The COMMIT statement is used to permanently save all changes made by the transaction.

#### Rollback a transaction

```sql
ROLLBACK;
```

Explanation:

The ROLLBACK statement is used to cancel all changes made by the transaction.

</div>
