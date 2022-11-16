---
title: 'PostgreSQL'
slug: 'postgresql'
category: 'Database'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'PostgreSQL is a powerful, open source object-relational database system.'
color: '#336791'
icon: 'PostgreSQLIcon'
draft: false
---

## Table of Contents

<details>

<summary>Expand Table of Contents</summary>

- [Introduction](#introduction)
  - [What is PostgreSQL?](#what-is-postgresql)
- [Getting started](#getting-started)
  - [Connect to PostgreSQL](#connect-to-postgresql)
  - [psql Commands](#psql-commands)
- [PostgreSQL Commands](#postgresql-commands)
  - [Connections](#connections)
  - [Informational](#informational)
  - [Query buffer](#query-buffer)
  - [Query execution](#query-execution)
  - [Formatting](#formatting)
  - [Variables](#variables)
  - [Large Objects](#large-objects)
  - [Input/Output](#inputoutput)
  - [Other](#other)
- [PostgreSQL Examples](#postgresql-examples)
  - [PostgreSQL Managing tables](#postgresql-managing-tables)
  - [PostgreSQL Managing Constraints](#postgresql-managing-constraints)
  - [PostgreSQL Joins](#postgresql-joins)
  - [PostgreSQL Managing Indexes](#postgresql-managing-indexes)
  - [PostgreSQL Managing Views](#postgresql-managing-views)
  - [PostgreSQL Managing Functions](#postgresql-managing-functions)
  - [PostgreSQL Stored Procedures](#postgresql-stored-procedures)
  - [PostgreSQL Managing Triggers](#postgresql-managing-triggers)
  - [PostgreSQL Managing Sequences](#postgresql-managing-sequences)
  - [PostgreSQL Managing Users](#postgresql-managing-users)
  - [PostgreSQL Managing Databases](#postgresql-managing-databases)
  - [PostgreSQL Managing Roles](#postgresql-managing-roles)
  - [PostgreSQL Managing Schemas](#postgresql-managing-schemas)
  - [PostgreSQL Managing Tablespace](#postgresql-managing-tablespace)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is PostgreSQL?

PostgreSQL is a open source object-relational database system. It is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

</div>

---

## Getting started

<div class="cheat__container-content">

### Connect to PostgreSQL

```bash
# Switch & Connect to PostgreSQL
sudo -u postgres psql

# Connect to PostgreSQL with a specific user
psql -U username -d database_name

# Connect to PostgreSQL with a specific user and password
psql -U username -d database_name -h localhost -p 5432 -W

# Connect to PostgreSQL with a online database
psql -h hostname -p port -U username -d database_name -W
```

Explanation:

- `-u` or `-U` : The user name to connect as.
- `-d` : The database name to connect to.
- `-h` : The host name of the machine on which the server is running.
- `-p` : The TCP port on which the server is listening for connections.
- `-W` : Prompt for password.

> **Note:** If you are using a local database, you can use `localhost` as the host name and `5432` as the port number.

> **Note:** If you are using a online database, you can use the host name and port number provided by the database provider.

</div>

<div class="cheat__container-content">

### psql Commands

| Operation          | Example                                                    | Description                                                     |
| :----------------- | :--------------------------------------------------------- | :-------------------------------------------------------------- |
| `-d` database_name | `psql -d database_name`                                    | Connect to a database.                                          |
| `-U` username      | `psql -U username`                                         | Connect to a database with a specific user.                     |
| `-h` hostname      | `psql -h hostname`                                         | Connect to a database with a host name.                         |
| `-p` port          | `psql -p port`                                             | Connect to a database with a port number.                       |
| `-W`               | `psql -W`                                                  | Prompt for password.                                            |
| `-U -h -p -d -W`   | `psql -U username -h hostname -p port -d database_name -W` | Connect to a remote database with a specific user and password. |
| `-c "command"`     | `psql -c 'SELECT version();'`                              | Execute a command.                                              |
| `\l`               | `\l`                                                       | List all databases.                                             |
| `-H`               | `psql -c 'SELECT version();' -H > version.html`            | Export the result to a HTML file.                               |
| `-f`               | `psql -f file.sql`                                         | Execute a SQL file.                                             |
| `-o`               | `psql -f file.sql -o output.txt`                           | Export the result to a text file.                               |
| `-v`               | `psql -f file.sql -v ON_ERROR_STOP=1`                      | Stop the execution if an error occurs.                          |
| `\q`               | `\q`                                                       | Quit psql.                                                      |
| `\h`               | `\h`                                                       | Help.                                                           |
| `\h command`       | `\h SELECT`                                                | Help for a specific command.                                    |
| `\?`               | `\?`                                                       | List all psql commands.                                         |

</div>

---

## PostgreSQL Commands

<div class="cheat__container-content">

### Connections

| Operation                   | Example              | Description                                    |
| :-------------------------- | :------------------- | :--------------------------------------------- |
| `\c database_name`          | `\c database_name`   | Connect to a database.                         |
| `\encoding [encoding_name]` | `\encoding UTF8`     | Show or set the client encoding.               |
| `\password [username]`      | `\password username` | Change the password for a user.                |
| `\conninfo`                 | `\conninfo`          | Show information about the current connection. |

</div>

<div class="cheat__container-content">

### Informational

| Operation  | Example | Description                             |
| :--------- | :------ | :-------------------------------------- |
| `\l [D]`   | `\l`    | List all databases.                     |
| `\d [D]`   | `\d`    | List tables, views, and sequences.      |
| `\da [S]`  | `\da`   | List data types.                        |
| `\dA [S]`  | `\dA`   | List aggregate functions.               |
| `\db [D]`  | `\db`   | List tablespaces.                       |
| `\dB [D]`  | `\dB`   | List large objects.                     |
| `\dc [SD]` | `\dc`   | List conversions.                       |
| `\dC [D]`  | `\dC`   | List casts.                             |
| `\dd [S]`  | `\dd`   | List domains.                           |
| `\dD [SD]` | `\dD`   | List foreign tables.                    |
| `\de [D]`  | `\de`   | List foreign servers.                   |
| `\dE [D]`  | `\dE`   | List foreign-data wrappers.             |
| `\df [SD]` | `\df`   | List functions.                         |
| `\dF [D]`  | `\dF`   | List text search configurations.        |
| `\dg [D]`  | `\dg`   | List roles.                             |
| `\dG [D]`  | `\dG`   | List event triggers.                    |
| `\di [SD]` | `\di`   | List indexes.                           |
| `\dI [D]`  | `\dI`   | List installed extensions.              |
| `\dl [SD]` | `\dl`   | List procedural languages.              |
| `\dL [D]`  | `\dL`   | List large objects.                     |
| `\dm [D]`  | `\dm`   | List materialized views.                |
| `\dM [D]`  | `\dM`   | List materialized views.                |
| `\dn [SD]` | `\dn`   | List schemas.                           |
| `\do [S]`  | `\do`   | List operators.                         |
| `\dO [SD]` | `\dO`   | List collations.                        |
| `\dp [D]`  | `\dp`   | List table privileges.                  |
| `\dP [D]`  | `\dP`   | List table privileges.                  |
| `\dr [D]`  | `\dr`   | List rules.                             |
| `\dR [D]`  | `\dR`   | List replication slots.                 |
| `\ds [SD]` | `\ds`   | List sequences.                         |
| `\dt [SD]` | `\dt`   | List tables.                            |
| `\dT [D]`  | `\dT`   | List data types.                        |
| `\du [D]`  | `\du`   | List roles.                             |
| `\dU [D]`  | `\dU`   | List user mappings.                     |
| `\dv [SD]` | `\dv`   | List views.                             |
| `\dV [D]`  | `\dV`   | List views.                             |
| `\dx [D]`  | `\dx`   | List extensions.                        |
| `\dy [D]`  | `\dy`   | List event triggers.                    |
| `\dZ [D]`  | `\dZ`   | List access methods.                    |
| `\ddp`     | `\ddp`  | List user-defined operators.            |
| `\deu [D]` | `\deu`  | List user-defined types.                |
| `\des [D]` | `\des`  | List user-defined operators.            |
| `\dew [D]` | `\dew`  | List foreign-data wrappers and servers. |
| `\dFd [D]` | `\dFd`  | List text search dictionaries.          |
| `\dFp [D]` | `\dFp`  | List text search parsers.               |
| `\dFs [D]` | `\dFs`  | List text search templates.             |
| `\drds`    | `\drds` | List user-defined roles.                |

> **Note:** **`[D]`** means additonal details, **`[S]`** means show system objects.

</div>

<div class="cheat__container-content">

### Query buffer

| Operation        | Example | Description                                          |
| :--------------- | :------ | :--------------------------------------------------- |
| `\e [FILE]`      | `\e`    | Edit the query buffer.                               |
| `\ef [FUNCNAME]` | `\ef`   | Edit a function definition.                          |
| `\ev [VIEWNAME]` | `\ev`   | Edit a view definition.                              |
| `\p`             | `\p`    | Show the contents of the query buffer.               |
| `\r`             | `\r`    | Send the contents of the query buffer to the server. |
| `\s [FILE]`      | `\s`    | Send the contents of a file to the server.           |
| `\w [FILE]`      | `\w`    | Write the contents of the query buffer to a file.    |
| `\x`             | `\x`    | Toggle expanded output mode.                         |

</div>

<div class="cheat__container-content">

### Query execution

| Operation | Example   | Description                                            |
| :-------- | :-------- | :----------------------------------------------------- |
| `\g`      | `\g`      | Execute the query.                                     |
| `\gset`   | `\gset`   | Execute the query and store the results in a variable. |
| `\gexec`  | `\gexec`  | Execute the query and store the results in a variable. |
| `\gdesc`  | `\gdesc`  | Execute the query and show the results in a table.     |
| `\gdesc+` | `\gdesc+` | Execute the query and show the results in a table.     |

</div>

<div class="cheat__container-content">

### Formatting

| Operation        | Example | Description                                       |
| :--------------- | :------ | :------------------------------------------------ |
| `\a`             | `\a`    | Toggle between unaligned and aligned output mode. |
| `\C [STRING]`    | `\C`    | Set table title.                                  |
| `\f [STRING]`    | `\f`    | Set field separator.                              |
| `\H`             | `\H`    | Toggle HTML output mode.                          |
| `\t [on \| off]` | `\t`    | Toggle expanded table output mode.                |
| `\T [STRING]`    | `\T`    | Set HTML table tag.                               |
| `\x [on \| off]` | `\x`    | Toggle expanded output mode.                      |

</div>

<div class="cheat__container-content">

### Variables

| Operation                | Example     | Description            |
| :----------------------- | :---------- | :--------------------- |
| `\set [NAME [VALUE]]`    | `\set`      | Set or list variables. |
| `\unset [NAME]`          | `\unset`    | Unset a variable.      |
| `\echo [STRING]`         | `\echo`     | Print a string.        |
| `\pset [NAME [VALUE]]`   | `\pset`     | Set or list variables. |
| `\punset [NAME]`         | `\punset`   | Unset a variable.      |
| `\prompt [NAME [VALUE]]` | `\prompt`   | Set or list variables. |
| `\unprompt [NAME]`       | `\unprompt` | Unset a variable.      |

</div>

<div class="cheat__container-content">

### Large Objects

| Operation                      | Example      | Description            |
| :----------------------------- | :----------- | :--------------------- |
| `\lo_export LOBOID [FILENAME]` | `\lo_export` | Export a large object. |
| `\lo_import [FILENAME]`        | `\lo_import` | Import a large object. |
| `\lo_list`                     | `\lo_list`   | List large objects.    |
| `\lo_unlink LOBOID`            | `\lo_unlink` | Unlink a large object. |

</div>

<div class="cheat__container-content">

### Input/Output

| Operation         | Example  | Description                       |
| :---------------- | :------- | :-------------------------------- |
| `\copy`           | `\copy`  | Copy data to or from a file.      |
| `\i FILENAME`     | `\i`     | Execute commands from a file.     |
| `\ir FILENAME`    | `\ir`    | Execute commands from a file.     |
| `\o [FILENAME]`   | `\o`     | Send all query results to a file. |
| `\qecho [STRING]` | `\qecho` | Print a string.                   |

</div>

<div class="cheat__container-content">

### Other

| Operation           | Example   | Description                   |
| :------------------ | :-------- | :---------------------------- |
| `\cd`               | `\cd`     | Change the current directory. |
| `\timing [on\|off]` | `\timing` | Toggle timing of commands.    |
| `\! [COMMAND]`      | `\!`      | Execute a shell command.      |

</div>

---

## PostgreSQL Examples

<div class="cheat__container-content">

### PostgreSQL Managing tables

#### Create a new table with three columns

```sql
CREATE TABLE table_name (
    column1 INTEGER,
    column2 VARCHAR(50),
    column3 DATE
);
```

Explanation:

- `CREATE TABLE` - create a new table
- `table_name` - name of the table
- `column1` - name of the first column
- `INTEGER` - data type of the first column
- `column2` - name of the second column
- `VARCHAR(50)` - data type of the second column
- `column3` - name of the third column
- `DATE` - data type of the third column

#### Add a new column to an existing table

```sql
ALTER TABLE table_name ADD COLUMN column4 DATE;
```

Explanation:

- `ALTER TABLE` - alter an existing table
- `table_name` - name of the table
- `ADD COLUMN` - add a new column
- `column4` - name of the new column
- `DATE` - data type of the new column

#### Change the data type of a column

```sql
ALTER TABLE table_name ALTER COLUMN column1 TYPE VARCHAR(50);
```

Explanation:

- `ALTER TABLE` - alter an existing table
- `table_name` - name of the table
- `ALTER COLUMN` - alter an existing column
- `column1` - name of the column
- `TYPE` - change the data type of the column
- `VARCHAR(50)` - new data type of the column

#### Change the name of a column

```sql
ALTER TABLE table_name RENAME COLUMN column1 TO column1_new;
```

Explanation:

- `ALTER TABLE` - alter an existing table
- `table_name` - name of the table
- `RENAME COLUMN` - rename an existing column
- `column1` - name of the column to be renamed
- `TO` - change the name of the column
- `column1_new` - new name of the column

#### Delete a column from the table

```sql
ALTER TABLE table_name DROP COLUMN column1;
```

Explanation:

- `ALTER TABLE` - alter an existing table
- `table_name` - name of the table
- `DROP COLUMN` - delete an existing column
- `column1` - name of the column to be deleted

#### Delete a table

```sql
DROP TABLE table_name;
```

Explanation:

- `DROP TABLE` - delete an existing table
- `table_name` - name of the table to be deleted

#### Rename a table

```sql
ALTER TABLE table_name RENAME TO table_name_new;
```

Explanation:

- `ALTER TABLE` - alter an existing table
- `table_name` - name of the table to be renamed
- `RENAME TO` - change the name of the table
- `table_name_new` - new name of the table

#### Truncate a table

```sql
TRUNCATE TABLE table_name;
```

Explanation:

- `TRUNCATE TABLE` - delete all rows from a table
- `table_name` - name of the table to be truncated

</div>

<div class="cheat__container-content">

### PostgreSQL Managing Constraints

#### Add a primary key constraint

```sql
ALTER TABLE table_name ADD CONSTRAINT pk_table_name PRIMARY KEY (column1);
```

Explanation:

- `ALTER TABLE` - alter an existing table
- `table_name` - name of the table
- `ADD CONSTRAINT` - add a new constraint
- `pk_table_name` - name of the constraint (primary key)
- `PRIMARY KEY` - add a primary key constraint

#### Add a unique constraint

```sql
ALTER TABLE table_name ADD CONSTRAINT un_table_name UNIQUE (column1);
```

Explanation:

- `ALTER TABLE` - alter an existing table
- `table_name` - name of the table
- `ADD CONSTRAINT` - add a new constraint
- `un_table_name` - name of the constraint (unique)
- `UNIQUE` - add a unique constraint

#### Add a foreign key constraint

```sql
ALTER TABLE table_name ADD CONSTRAINT fk_table_name FOREIGN KEY (column1) REFERENCES table_name2(column1);
```

Explanation:

- `ALTER TABLE` - alter an existing table
- `table_name` - name of the table
- `ADD CONSTRAINT` - add a new constraint
- `fk_table_name` - name of the constraint (foreign key)
- `FOREIGN KEY` - add a foreign key constraint

#### Add a check constraint

```sql
ALTER TABLE table_name ADD CONSTRAINT ck_table_name CHECK (column1 > 0);
```

Explanation:

- `ALTER TABLE` - alter an existing table
- `table_name` - name of the table
- `ADD CONSTRAINT` - add a new constraint
- `ck_table_name` - name of the constraint (check)
- `CHECK` - add a check constraint

#### Delete a constraint

```sql
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

Explanation:

- `ALTER TABLE` - alter an existing table
- `table_name` - name of the table
- `DROP CONSTRAINT` - delete an existing constraint
- `constraint_name` - name of the constraint to be deleted

</div>

<div class="cheat__container-content">

### PostgreSQL Joins

#### Inner join

```sql
SELECT *
FROM table_name1
INNER JOIN table_name2
ON table_name1.column1 = table_name2.column1;
```

Explanation:

- `SELECT` - select data from a table
- `*` - select all columns
- `FROM` - specify the table to select data from
- `table_name1` - name of the first table
- `INNER JOIN` - join two tables using an inner join
- `table_name2` - name of the second table
- `ON` - specify the join condition
- `table_name1.column1` - first column to join on
- `table_name2.column1` - second column to join on

#### Left join

```sql
SELECT *
FROM table_name1
LEFT JOIN table_name2
ON table_name1.column1 = table_name2.column1;
```

Explanation:

- `SELECT` - select data from a table
- `*` - select all columns
- `FROM` - specify the table to select data from
- `table_name1` - name of the first table
- `LEFT JOIN` - join two tables using a left join
- `table_name2` - name of the second table
- `ON` - specify the join condition
- `table_name1.column1` - first column to join on
- `table_name2.column1` - second column to join on

#### Right join

```sql
SELECT *
FROM table_name1
RIGHT JOIN table_name2
ON table_name1.column1 = table_name2.column1;
```

Explanation:

- `SELECT` - select data from a table
- `*` - select all columns
- `FROM` - specify the table to select data from
- `table_name1` - name of the first table
- `RIGHT JOIN` - join two tables using a right join
- `table_name2` - name of the second table
- `ON` - specify the join condition
- `table_name1.column1` - first column to join on
- `table_name2.column1` - second column to join on

#### Full join

```sql
SELECT *
FROM table_name1
FULL JOIN table_name2
ON table_name1.column1 = table_name2.column1;
```

Explanation:

- `SELECT` - select data from a table
- `*` - select all columns
- `FROM` - specify the table to select data from
- `table_name1` - name of the first table
- `FULL JOIN` - join two tables using a full join
- `table_name2` - name of the second table
- `ON` - specify the join condition
- `table_name1.column1` - first column to join on
- `table_name2.column1` - second column to join on

#### Self join

```sql
SELECT *
FROM table_name1 AS t1
INNER JOIN table_name1 AS t2
ON t1.column1 = t2.column1;
```

Explanation:

- `SELECT` - select data from a table
- `*` - select all columns
- `FROM` - specify the table to select data from
- `table_name1` - name of the first table
- `AS t1` - alias for the first table
- `INNER JOIN` - join two tables using an inner join
- `table_name1` - name of the second table
- `AS t2` - alias for the second table
- `ON` - specify the join condition
- `t1.column1` - first column to join on
- `t2.column1` - second column to join on

#### Cross join

```sql
SELECT *
FROM table_name1
CROSS JOIN table_name2;
```

Explanation:

- `SELECT` - select data from a table
- `*` - select all columns
- `FROM` - specify the table to select data from
- `table_name1` - name of the first table
- `CROSS JOIN` - join two tables using a cross join
- `table_name2` - name of the second table

</div>

<div class="cheat__container-content">

### PostgreSQL Managing Indexes

#### Create an index

```sql
CREATE INDEX index_name ON table_name (column1);
```

Explanation:

- `CREATE INDEX` - create a new index
- `index_name` - name of the index
- `ON` - specify the table to create the index on
- `table_name` - name of the table
- `column1` - column to create the index on

#### Create a unique index

```sql
CREATE UNIQUE INDEX index_name ON table_name (column1);
```

Explanation:

- `CREATE UNIQUE INDEX` - create a new unique index
- `index_name` - name of the index
- `ON` - specify the table to create the index on
- `table_name` - name of the table

#### Create a partial index

```sql
CREATE INDEX index_name ON table_name (column1) WHERE column1 > 0;
```

Explanation:

- `CREATE INDEX` - create a new index
- `index_name` - name of the index
- `ON` - specify the table to create the index on
- `table_name` - name of the table
- `column1` - column to create the index on
- `WHERE` - specify the condition for the index
- `column1 > 0` - condition for the index

#### Create a functional index

```sql
CREATE INDEX index_name ON table_name (lower(column1));
```

Explanation:

- `CREATE INDEX` - create a new index
- `index_name` - name of the index
- `ON` - specify the table to create the index on
- `table_name` - name of the table
- `lower(column1)` - function to create the index on

#### Create an index with a specific index method

```sql
CREATE INDEX index_name ON table_name (column1) USING btree;
```

Explanation:

- `CREATE INDEX` - create a new index
- `index_name` - name of the index
- `ON` - specify the table to create the index on
- `table_name` - name of the table
- `column1` - column to create the index on
- `USING` - specify the index method
- `btree` - index method to use

#### Create an index with a specific index operator class

```sql
CREATE INDEX index_name ON table_name (column1) USING btree WITH (fillfactor=100);
```

Explanation:

- `CREATE INDEX` - create a new index
- `index_name` - name of the index
- `ON` - specify the table to create the index on
- `table_name` - name of the table
- `column1` - column to create the index on
- `USING` - specify the index method
- `btree` - index method to use with the index
- `WITH` - specify the index operator class options
- `fillfactor=100` - index operator class option to use with the index

#### Drop an index

```sql
DROP INDEX index_name;
```

Explanation:

- `DROP INDEX` - drop an index
- `index_name` - name of the index

#### Rename an index

```sql
ALTER INDEX index_name RENAME TO new_index_name;
```

Explanation:

- `ALTER INDEX` - alter an index
- `index_name` - name of the index
- `RENAME TO` - rename the index
- `new_index_name` - new name of the index

#### Rebuild an index

```sql
REINDEX INDEX index_name;
```

Explanation:

- `REINDEX INDEX` - rebuild an index
- `index_name` - name of the index

#### Rebuild all indexes

```sql
REINDEX DATABASE database_name;
```

Explanation:

- `REINDEX DATABASE` - rebuild all indexes in a database
- `database_name` - name of the database

#### Reorganize an index

```sql
CLUSTER index_name ON table_name;
```

Explanation:

- `CLUSTER` - reorganize an index
- `index_name` - name of the index
- `ON` - specify the table to reorganize the index on
- `table_name` - name of the table

#### Disable an index

```sql
ALTER INDEX index_name DISABLE;
```

Explanation:

- `ALTER INDEX` - alter an index
- `index_name` - name of the index
- `DISABLE` - disable the index

#### Enable an index

```sql
ALTER INDEX index_name ENABLE;
```

Explanation:

- `ALTER INDEX` - alter an index
- `index_name` - name of the index
- `ENABLE` - enable the index

#### Show all indexes

```sql
SELECT * FROM pg_indexes;
```

Explanation:

- `SELECT` - select data from a table
- `*` - select all columns
- `FROM` - specify the table to select data from
- `pg_indexes` - system table that contains all indexes

#### Show all indexes in a database

```sql
SELECT * FROM pg_indexes WHERE schemaname = 'public';
```

Explanation:

- `SELECT` - select data from a table
- `*` - select all columns
- `FROM` - specify the table to select data from
- `pg_indexes` - system table that contains all indexes
- `WHERE` - specify the condition for the selection
- `schemaname = 'public'` - condition for the selection to show all indexes in the `public` schema

</div>

<div class="cheat__container-content">

### PostgreSQL Managing Views

#### Create a view

```sql
CREATE VIEW view_name AS SELECT * FROM table_name;
```

Explanation:

- `CREATE VIEW` - create a new view
- `view_name` - name of the view
- `AS` - specify the query for the view
- `SELECT * FROM table_name` - query for the view to select all data from a table

#### Create a view with a specific schema

```sql
CREATE VIEW schema_name.view_name AS SELECT * FROM table_name;
```

Explanation:

- `CREATE VIEW` - create a new view
- `schema_name.view_name` - name of the view with a specific schema
- `AS` - specify the query for the view
- `SELECT * FROM table_name` - query for the view to select all data from a table

#### Create a view with a specific owner

```sql
CREATE VIEW view_name AS SELECT * FROM table_name WITH (security_barrier = true, check_option = local);
```

Explanation:

- `CREATE VIEW` - create a new view
- `view_name` - name of the view
- `AS` - specify the query for the view
- `SELECT * FROM table_name` - query for the view to select all data from a table
- `WITH` - specify the view options
- `security_barrier = true` - view option to specify that the view is a security barrier
- `check_option = local` - view option to specify that the view has a local check option

#### Create a view with a specific check option

```sql
CREATE VIEW view_name AS SELECT * FROM table_name WITH (check_option = local);
```

Explanation:

- `CREATE VIEW` - create a new view
- `view_name` - name of the view
- `AS` - specify the query for the view
- `SELECT * FROM table_name` - query for the view to select all data from a table
- `WITH` - specify the view options
- `check_option = local` - view option to specify that the view has a local check option

#### Create a view with a specific security barrier

```sql
CREATE VIEW view_name AS SELECT * FROM table_name WITH (security_barrier = true);
```

Explanation:

- `CREATE VIEW` - create a new view
- `view_name` - name of the view
- `AS` - specify the query for the view
- `SELECT * FROM table_name` - query for the view to select all data from a table
- `WITH` - specify the view options
- `security_barrier = true` - view option to specify that the view is a security barrier

#### Create a view with a specific read only

```sql
CREATE VIEW view_name AS SELECT * FROM table_name WITH (read_only = true);
```

Explanation:

- `CREATE VIEW` - create a new view
- `view_name` - name of the view
- `AS` - specify the query for the view
- `SELECT * FROM table_name` - query for the view to select all data from a table
- `WITH` - specify the view options
- `read_only = true` - view option to specify that the view is read only

#### Update a view

```sql
CREATE OR REPLACE VIEW view_name AS SELECT * FROM table_name;
```

Explanation:

- `CREATE OR REPLACE VIEW` - update a view
- `view_name` - name of the view
- `AS` - specify the query for the view
- `SELECT * FROM table_name` - query for the view to select all data from a table

#### Drop a view

```sql
DROP VIEW view_name;
```

Explanation:

- `DROP VIEW` - drop a view
- `view_name` - name of the view

</div>

<div class="cheat__container-content">

### PostgreSQL Managing Functions

#### Create a function

```sql
CREATE FUNCTION function_name() RETURNS integer AS $$ SELECT 1; $$ LANGUAGE SQL;
```

Explanation:

- `CREATE FUNCTION` - create a new function
- `function_name` - name of the function
- `()` - specify the parameters for the function
- `RETURNS integer` - specify the return type for the function
- `AS` - specify the query for the function
- `$$ SELECT 1; $$` - query for the function to select the number 1
- `LANGUAGE SQL` - specify the language for the function

#### Create a function with a specific schema

```sql
CREATE FUNCTION schema_name.function_name() RETURNS integer AS $$ SELECT 1; $$ LANGUAGE SQL;
```

Explanation:

- `CREATE FUNCTION` - create a new function
- `schema_name.function_name` - name of the function with a specific schema
- `()` - specify the parameters for the function
- `RETURNS integer` - specify the return type for the function
- `AS` - specify the query for the function
- `$$ SELECT 1; $$` - query for the function to select the number 1
- `LANGUAGE SQL` - specify the language for the function

#### Create a function with a specific owner

```sql
CREATE FUNCTION function_name() RETURNS integer AS $$ SELECT 1; $$ LANGUAGE SQL SECURITY DEFINER;
```

Explanation:

- `CREATE FUNCTION` - create a new function
- `function_name` - name of the function
- `()` - specify the parameters for the function
- `RETURNS integer` - specify the return type for the function
- `AS` - specify the query for the function
- `$$ SELECT 1; $$` - query for the function to select the number 1
- `LANGUAGE SQL` - specify the language for the function
- `SECURITY DEFINER` - specify the security for the function

#### Create a function with parameters

```sql
CREATE FUNCTION function_name(parameter1 integer, parameter2 integer) RETURNS integer AS $$ SELECT parameter1 + parameter2; $$ LANGUAGE SQL;
```

Explanation:

- `CREATE FUNCTION` - create a new function
- `function_name` - name of the function
- `(parameter1 integer, parameter2 integer)` - specify the parameters for the function
- `RETURNS integer` - specify the return type for the function
- `AS` - specify the query for the function
- `$$ SELECT parameter1 + parameter2; $$` - query for the function to select the sum of the parameters
- `LANGUAGE SQL` - specify the language for the function

#### Create a function with a specific return type

```sql
CREATE FUNCTION function_name() RETURNS integer AS $$ SELECT 1; $$ LANGUAGE SQL;
```

Explanation:

- `CREATE FUNCTION` - create a new function
- `function_name` - name of the function
- `()` - specify the parameters for the function
- `RETURNS integer` - specify the return type for the function
- `AS` - specify the query for the function
- `$$ SELECT 1; $$` - query for the function to select the number 1
- `LANGUAGE SQL` - specify the language for the function

#### Rename a function

```sql
ALTER FUNCTION function_name RENAME TO new_function_name;
```

Explanation:

- `ALTER FUNCTION` - rename a function
- `function_name` - name of the function
- `RENAME TO` - rename the function
- `new_function_name` - new name of the function

#### Update a function

```sql
CREATE OR REPLACE FUNCTION function_name() RETURNS integer AS $$ SELECT 1; $$ LANGUAGE SQL;
```

Explanation:

- `CREATE OR REPLACE FUNCTION` - update a function
- `function_name` - name of the function
- `()` - specify the parameters for the function
- `RETURNS integer` - specify the return type for the function
- `AS` - specify the query for the function
- `$$ SELECT 1; $$` - query for the function to select the number 1
- `LANGUAGE SQL` - specify the language for the function

#### Drop a function

```sql
DROP FUNCTION function_name;
```

Explanation:

- `DROP FUNCTION` - drop a function
- `function_name` - name of the function

</div>

<div class="cheat__container-content">

### PostgreSQL Stored Procedures

#### Create a stored procedure

```sql
CREATE PROCEDURE procedure_name() LANGUAGE SQL AS $$ SELECT 1; $$;
```

Explanation:

- `CREATE PROCEDURE` - create a new stored procedure
- `procedure_name` - name of the stored procedure
- `LANGUAGE SQL` - specify the language for the stored procedure
- `AS` - specify the query for the stored procedure
- `$$ SELECT 1; $$` - query for the stored procedure to select the number 1

#### Create a stored procedure with a specific schema

```sql
CREATE PROCEDURE schema_name.procedure_name() LANGUAGE SQL AS $$ SELECT 1; $$;
```

Explanation:

- `CREATE PROCEDURE` - create a new stored procedure
- `schema_name.procedure_name` - name of the stored procedure with a specific schema
- `LANGUAGE SQL` - specify the language for the stored procedure
- `AS` - specify the query for the stored procedure
- `$$ SELECT 1; $$` - query for the stored procedure to select the number 1

#### Create a stored procedure with a specific owner

```sql
CREATE PROCEDURE procedure_name() LANGUAGE SQL AS $$ SELECT 1; $$ SECURITY DEFINER;
```

Explanation:

- `CREATE PROCEDURE` - create a new stored procedure
- `procedure_name` - name of the stored procedure
- `LANGUAGE SQL` - specify the language for the stored procedure
- `AS` - specify the query for the stored procedure
- `$$ SELECT 1; $$` - query for the stored procedure to select the number 1
- `SECURITY DEFINER` - specify the security for the stored procedure

#### Create a stored procedure with parameters

```sql
CREATE PROCEDURE procedure_name(parameter1 integer, parameter2 integer) LANGUAGE SQL AS $$ SELECT parameter1 + parameter2; $$;
```

Explanation:

- `CREATE PROCEDURE` - create a new stored procedure
- `procedure_name` - name of the stored procedure
- `(parameter1 integer, parameter2 integer)` - specify the parameters for the stored procedure
- `LANGUAGE SQL` - specify the language for the stored procedure
- `AS` - specify the query for the stored procedure
- `$$ SELECT parameter1 + parameter2; $$` - query for the stored procedure to select the sum of the parameters

#### Rename a stored procedure

```sql
ALTER PROCEDURE procedure_name RENAME TO new_procedure_name;
```

Explanation:

- `ALTER PROCEDURE` - rename a stored procedure
- `procedure_name` - name of the stored procedure
- `RENAME TO` - rename the stored procedure
- `new_procedure_name` - new name of the stored procedure

#### Update a stored procedure

```sql
CREATE OR REPLACE PROCEDURE procedure_name() LANGUAGE SQL AS $$ SELECT 1; $$;
```

Explanation:

- `CREATE OR REPLACE PROCEDURE` - update a stored procedure
- `procedure_name` - name of the stored procedure
- `LANGUAGE SQL` - specify the language for the stored procedure
- `AS` - specify the query for the stored procedure
- `$$ SELECT 1; $$` - query for the stored procedure to select the number 1

#### Drop a stored procedure

```sql
DROP PROCEDURE procedure_name;
```

Explanation:

- `DROP PROCEDURE` - drop a stored procedure
- `procedure_name` - name of the stored procedure

</div>

<div class="cheat__container-content">

### PostgreSQL Managing Triggers

#### Create a trigger

```sql
CREATE TRIGGER trigger_name BEFORE INSERT ON table_name FOR EACH ROW EXECUTE PROCEDURE function_name();
```

Explanation:

- `CREATE TRIGGER` - create a new trigger
- `trigger_name` - name of the trigger
- `BEFORE INSERT` - specify the event for the trigger
- `ON table_name` - specify the table for the trigger
- `FOR EACH ROW` - specify the row for the trigger
- `EXECUTE PROCEDURE function_name()` - specify the function for the trigger

#### Create a trigger with a specific schema

```sql
CREATE TRIGGER schema_name.trigger_name BEFORE INSERT ON table_name FOR EACH ROW EXECUTE PROCEDURE function_name();
```

Explanation:

- `CREATE TRIGGER` - create a new trigger
- `schema_name.trigger_name` - name of the trigger with a specific schema
- `BEFORE INSERT` - specify the event for the trigger
- `ON table_name` - specify the table for the trigger
- `FOR EACH ROW` - specify the row for the trigger
- `EXECUTE PROCEDURE function_name()` - specify the function for the trigger

#### Create a trigger with a specific owner

```sql
CREATE TRIGGER trigger_name BEFORE INSERT ON table_name FOR EACH ROW EXECUTE PROCEDURE function_name() SECURITY DEFINER;
```

Explanation:

- `CREATE TRIGGER` - create a new trigger
- `trigger_name` - name of the trigger
- `BEFORE INSERT` - specify the event for the trigger
- `ON table_name` - specify the table for the trigger
- `FOR EACH ROW` - specify the row for the trigger
- `EXECUTE PROCEDURE function_name()` - specify the function for the trigger
- `SECURITY DEFINER` - specify the security for the trigger

#### Create a trigger with parameters

```sql
CREATE TRIGGER trigger_name BEFORE INSERT ON table_name FOR EACH ROW EXECUTE PROCEDURE function_name(parameter1 integer, parameter2 integer);
```

Explanation:

- `CREATE TRIGGER` - create a new trigger
- `trigger_name` - name of the trigger
- `BEFORE INSERT` - specify the event for the trigger
- `ON table_name` - specify the table for the trigger
- `FOR EACH ROW` - specify the row for the trigger
- `EXECUTE PROCEDURE function_name(parameter1 integer, parameter2 integer)` - specify the function for the trigger with parameters

#### Rename a trigger

```sql
ALTER TRIGGER trigger_name RENAME TO new_trigger_name;
```

Explanation:

- `ALTER TRIGGER` - rename a trigger
- `trigger_name` - name of the trigger
- `RENAME TO` - rename the trigger
- `new_trigger_name` - new name of the trigger

#### Update a trigger

```sql
CREATE OR REPLACE TRIGGER trigger_name BEFORE INSERT ON table_name FOR EACH ROW EXECUTE PROCEDURE function_name();
```

Explanation:

- `CREATE OR REPLACE TRIGGER` - update a trigger
- `trigger_name` - name of the trigger
- `BEFORE INSERT` - specify the event for the trigger
- `ON table_name` - specify the table for the trigger
- `FOR EACH ROW` - specify the row for the trigger
- `EXECUTE PROCEDURE function_name()` - specify the function for the trigger

#### Drop a trigger

```sql
DROP TRIGGER trigger_name ON table_name;
```

Explanation:

- `DROP TRIGGER` - drop a trigger
- `trigger_name` - name of the trigger
- `ON table_name` - specify the table for the trigger

</div>

<div class="cheat__container-content">

### PostgreSQL Managing Sequences

#### Create a sequence

```sql
CREATE SEQUENCE sequence_name;
```

Explanation:

- `CREATE SEQUENCE` - create a new sequence
- `sequence_name` - name of the sequence

#### Create a sequence with a specific schema

```sql
CREATE SEQUENCE schema_name.sequence_name;
```

Explanation:

- `CREATE SEQUENCE` - create a new sequence
- `schema_name.sequence_name` - name of the sequence with a specific schema

#### Create a sequence with a specific owner

```sql
CREATE SEQUENCE sequence_name OWNED BY table_name.column_name;
```

Explanation:

- `CREATE SEQUENCE` - create a new sequence
- `sequence_name` - name of the sequence
- `OWNED BY` - specify the owner for the sequence
- `table_name.column_name` - specify the column for the sequence

#### Create a sequence with a specific start value

```sql
CREATE SEQUENCE sequence_name START WITH 1;
```

Explanation:

- `CREATE SEQUENCE` - create a new sequence
- `sequence_name` - name of the sequence
- `START WITH` - specify the start value for the sequence
- `1` - start value for the sequence

#### Create a sequence with a specific increment value

```sql
CREATE SEQUENCE sequence_name INCREMENT BY 1;
```

Explanation:

- `CREATE SEQUENCE` - create a new sequence
- `sequence_name` - name of the sequence
- `INCREMENT BY` - specify the increment value for the sequence
- `1` - increment value for the sequence

#### Create a sequence with a specific minimum value

```sql
CREATE SEQUENCE sequence_name MINVALUE 1;
```

Explanation:

- `CREATE SEQUENCE` - create a new sequence
- `sequence_name` - name of the sequence
- `MINVALUE` - specify the minimum value for the sequence
- `1` - minimum value for the sequence

#### Create a sequence with a specific maximum value

```sql
CREATE SEQUENCE sequence_name MAXVALUE 100;
```

Explanation:

- `CREATE SEQUENCE` - create a new sequence
- `sequence_name` - name of the sequence
- `MAXVALUE` - specify the maximum value for the sequence
- `100` - maximum value for the sequence

#### Create a sequence with a specific cache value

```sql
CREATE SEQUENCE sequence_name CACHE 1;
```

Explanation:

- `CREATE SEQUENCE` - create a new sequence
- `sequence_name` - name of the sequence
- `CACHE` - specify the cache value for the sequence
- `1` - cache value for the sequence

#### Create a sequence with a specific cycle value

```sql
CREATE SEQUENCE sequence_name CYCLE;
```

Explanation:

- `CREATE SEQUENCE` - create a new sequence
- `sequence_name` - name of the sequence
- `CYCLE` - specify the cycle value for the sequence

#### Create a sequence with a specific order value

```sql
CREATE SEQUENCE sequence_name ORDER NO;
```

Explanation:

- `CREATE SEQUENCE` - create a new sequence
- `sequence_name` - name of the sequence
- `ORDER` - specify the order value for the sequence
- `NO` - order value for the sequence

#### Rename a sequence

```sql
ALTER SEQUENCE sequence_name RENAME TO new_sequence_name;
```

Explanation:

- `ALTER SEQUENCE` - rename a sequence
- `sequence_name` - name of the sequence
- `RENAME TO` - rename the sequence
- `new_sequence_name` - new name of the sequence

#### Update a sequence

```sql
CREATE OR REPLACE SEQUENCE sequence_name;
```

Explanation:

- `CREATE OR REPLACE SEQUENCE` - update a sequence
- `sequence_name` - name of the sequence

#### Drop a sequence

```sql
DROP SEQUENCE sequence_name;
```

Explanation:

- `DROP SEQUENCE` - drop a sequence
- `sequence_name` - name of the sequence

</div>

<div class="cheat__container-content">

### PostgreSQL Managing Users

#### Create a user

```sql
CREATE USER user_name WITH PASSWORD 'password';
```

Explanation:

- `CREATE USER` - create a new user
- `user_name` - name of the user
- `WITH PASSWORD` - specify the password for the user
- `'password'` - password for the user

#### Create a user with a specific role

```sql
CREATE USER user_name WITH PASSWORD 'password' IN ROLE role_name;
```

Explanation:

- `CREATE USER` - create a new user
- `user_name` - name of the user
- `WITH PASSWORD` - specify the password for the user
- `'password'` - password for the user
- `IN ROLE` - specify the role for the user
- `role_name` - role for the user

#### Create a user with a specific schema

```sql
CREATE USER user_name WITH PASSWORD 'password' IN SCHEMA schema_name;
```

Explanation:

- `CREATE USER` - create a new user
- `user_name` - name of the user
- `WITH PASSWORD` - specify the password for the user
- `'password'` - password for the user
- `IN SCHEMA` - specify the schema for the user
- `schema_name` - schema for the user

#### Create a user with a specific tablespace

```sql
CREATE USER user_name WITH PASSWORD 'password' IN TABLESPACE tablespace_name;
```

Explanation:

- `CREATE USER` - create a new user
- `user_name` - name of the user
- `WITH PASSWORD` - specify the password for the user
- `'password'` - password for the user
- `IN TABLESPACE` - specify the tablespace for the user
- `tablespace_name` - tablespace for the user

#### Create a user with a specific connection limit

```sql
CREATE USER user_name WITH PASSWORD 'password' CONNECTION LIMIT 1;
```

Explanation:

- `CREATE USER` - create a new user
- `user_name` - name of the user
- `WITH PASSWORD` - specify the password for the user
- `'password'` - password for the user
- `CONNECTION LIMIT` - specify the connection limit for the user
- `1` - connection limit for the user

#### Create a user with a specific password expiration

```sql
CREATE USER user_name WITH PASSWORD 'password' VALID UNTIL '2020-01-01';
```

Explanation:

- `CREATE USER` - create a new user
- `user_name` - name of the user
- `WITH PASSWORD` - specify the password for the user
- `'password'` - password for the user
- `VALID UNTIL` - specify the password expiration for the user
- `'2020-01-01'` - password expiration for the user

#### Add role to a user

```sql
ALTER USER user_name IN ROLE role_name;
```

Explanation:

- `ALTER USER` - add role to a user
- `user_name` - name of the user
- `IN ROLE` - specify the role for the user
- `role_name` - role for the user

#### Add schema to a user

```sql
ALTER USER user_name IN SCHEMA schema_name;
```

Explanation:

- `ALTER USER` - add schema to a user
- `user_name` - name of the user
- `IN SCHEMA` - specify the schema for the user
- `schema_name` - schema for the user

#### Add tablespace to a user

```sql
ALTER USER user_name IN TABLESPACE tablespace_name;
```

Explanation:

- `ALTER USER` - add tablespace to a user
- `user_name` - name of the user
- `IN TABLESPACE` - specify the tablespace for the user
- `tablespace_name` - tablespace for the user

#### Add connection limit to a user

```sql
ALTER USER user_name CONNECTION LIMIT 1;
```

Explanation:

- `ALTER USER` - add connection limit to a user
- `user_name` - name of the user
- `CONNECTION LIMIT` - specify the connection limit for the user
- `1` - connection limit for the user

#### Rename a user

```sql
ALTER USER user_name RENAME TO new_user_name;
```

Explanation:

- `ALTER USER` - rename a user
- `user_name` - name of the user
- `RENAME TO` - rename the user
- `new_user_name` - new name of the user

#### Update a user

```sql
CREATE OR REPLACE USER user_name;
```

Explanation:

- `CREATE OR REPLACE USER` - update a user
- `user_name` - name of the user

#### Remove role from a user

```sql
ALTER USER user_name NOIN ROLE role_name;
```

Explanation:

- `ALTER USER` - remove role from a user
- `user_name` - name of the user
- `NOIN ROLE` - remove the role from the user
- `role_name` - role for the user

#### Remove schema from a user

```sql
ALTER USER user_name NOIN SCHEMA schema_name;
```

Explanation:

- `ALTER USER` - remove schema from a user
- `user_name` - name of the user
- `NOIN SCHEMA` - remove the schema from the user
- `schema_name` - schema for the user

#### Remove tablespace from a user

```sql
ALTER USER user_name NOIN TABLESPACE tablespace_name;
```

Explanation:

- `ALTER USER` - remove tablespace from a user
- `user_name` - name of the user
- `NOIN TABLESPACE` - remove the tablespace from the user
- `tablespace_name` - tablespace for the user

#### Drop a user

```sql
DROP USER user_name;
```

Explanation:

- `DROP USER` - drop a user
- `user_name` - name of the user

#### Drop a user if exists

```sql
DROP USER IF EXISTS user_name;
```

Explanation:

- `DROP USER` - drop a user
- `IF EXISTS` - drop the user if it exists
- `user_name` - name of the user

#### Drop a user cascade

```sql
DROP USER user_name CASCADE;
```

Explanation:

- `DROP USER` - drop a user
- `user_name` - name of the user
- `CASCADE` - drop the user and all objects owned by the user

#### Drop a user restrict

```sql
DROP USER user_name RESTRICT;
```

Explanation:

- `DROP USER` - drop a user
- `user_name` - name of the user
- `RESTRICT` - drop the user only if no objects are owned by the user

</div>

<div class="cheat__container-content"

### PostgreSQL Managing Databases

#### Create a database

```sql
CREATE DATABASE database_name;
```

Explanation:

- `CREATE DATABASE` - create a new database
- `database_name` - name of the database

#### Create a database with a specific owner

```sql
CREATE DATABASE database_name OWNER user_name;
```

Explanation:

- `CREATE DATABASE` - create a new database
- `database_name` - name of the database
- `OWNER` - specify the owner for the database
- `user_name` - owner for the database

#### Create a database with a specific encoding

```sql
CREATE DATABASE database_name ENCODING 'UTF8';
```

Explanation:

- `CREATE DATABASE` - create a new database
- `database_name` - name of the database
- `ENCODING` - specify the encoding for the database
- `'UTF8'` - encoding for the database

#### Create a database with a specific template

```sql
CREATE DATABASE database_name TEMPLATE template_name;
```

Explanation:

- `CREATE DATABASE` - create a new database
- `database_name` - name of the database
- `TEMPLATE` - specify the template for the database
- `template_name` - template for the database

#### Create a database with a specific tablespace

```sql
CREATE DATABASE database_name TABLESPACE tablespace_name;
```

Explanation:

- `CREATE DATABASE` - create a new database
- `database_name` - name of the database
- `TABLESPACE` - specify the tablespace for the database
- `tablespace_name` - tablespace for the database

#### Rename a database

```sql
ALTER DATABASE database_name RENAME TO new_database_name;
```

Explanation:

- `ALTER DATABASE` - rename a database
- `database_name` - name of the database
- `RENAME TO` - rename the database
- `new_database_name` - new name of the database

#### Update a database

```sql
CREATE OR REPLACE DATABASE database_name;
```

Explanation:

- `CREATE OR REPLACE DATABASE` - update a database
- `database_name` - name of the database

#### Drop a database

```sql
DROP DATABASE database_name;
```

Explanation:

- `DROP DATABASE` - drop a database
- `database_name` - name of the database

#### Drop a database if exists

```sql
DROP DATABASE IF EXISTS database_name;
```

Explanation:

- `DROP DATABASE` - drop a database
- `IF EXISTS` - drop the database if it exists
- `database_name` - name of the database

#### Drop a database cascade

```sql
DROP DATABASE database_name CASCADE;
```

Explanation:

- `DROP DATABASE` - drop a database
- `database_name` - name of the database
- `CASCADE` - drop the database and all objects owned by the database

#### Drop a database restrict

```sql
DROP DATABASE database_name RESTRICT;
```

Explanation:

- `DROP DATABASE` - drop a database
- `database_name` - name of the database
- `RESTRICT` - drop the database only if no objects are owned by the database

</div>

<div class="cheat__container-content">

### PostgreSQL Managing Roles

#### Create a role

```sql
CREATE ROLE role_name;
```

Explanation:

- `CREATE ROLE` - create a new role
- `role_name` - name of the role

#### Create a role with a specific password

```sql
CREATE ROLE role_name WITH PASSWORD 'password';
```

Explanation:

- `CREATE ROLE` - create a new role
- `role_name` - name of the role

#### Add a privilege to a role

```sql
GRANT privilege ON object TO role_name;
```

Explanation:

- `GRANT` - add a privilege to a role
- `privilege` - privilege to add to the role
- `ON` - specify the object to add the privilege to
- `object` - object to add the privilege to
- `TO` - specify the role to add the privilege to
- `role_name` - role to add the privilege to

#### Add a privilege to a role with grant option

```sql
GRANT privilege ON object TO role_name WITH GRANT OPTION;
```

Explanation:

- `GRANT` - add a privilege to a role
- `privilege` - privilege to add to the role
- `ON` - specify the object to add the privilege to
- `object` - object to add the privilege to
- `TO` - specify the role to add the privilege to
- `role_name` - role to add the privilege to
- `WITH GRANT OPTION` - add the privilege with grant option to the role

#### Add a privilege to a role with admin option

```sql
GRANT privilege ON object TO role_name WITH ADMIN OPTION;
```

Explanation:

- `GRANT` - add a privilege to a role
- `privilege` - privilege to add to the role
- `ON` - specify the object to add the privilege to
- `object` - object to add the privilege to
- `TO` - specify the role to add the privilege to
- `role_name` - role to add the privilege to
- `WITH ADMIN OPTION` - add the privilege with admin option to the role

#### Rename a role

```sql
ALTER ROLE role_name RENAME TO new_role_name;
```

Explanation:

- `ALTER ROLE` - rename a role
- `role_name` - name of the role
- `RENAME TO` - rename the role
- `new_role_name` - new name of the role

#### Update a role

```sql
CREATE OR REPLACE ROLE role_name;
```

Explanation:

- `CREATE OR REPLACE ROLE` - update a role
- `role_name` - name of the role

#### Drop a role

```sql
DROP ROLE role_name;
```

Explanation:

- `DROP ROLE` - drop a role
- `role_name` - name of the role

#### Drop a role if exists

```sql
DROP ROLE IF EXISTS role_name;
```

Explanation:

- `DROP ROLE` - drop a role
- `IF EXISTS` - drop the role if it exists
- `role_name` - name of the role

</div>

<div class="cheat__container-content">

### PostgreSQL Managing Schemas

#### Create a schema

```sql
CREATE SCHEMA schema_name;
```

Explanation:

- `CREATE SCHEMA` - create a new schema
- `schema_name` - name of the schema

#### Create a schema with a specific owner

```sql
CREATE SCHEMA schema_name AUTHORIZATION role_name;
```

Explanation:

- `CREATE SCHEMA` - create a new schema
- `schema_name` - name of the schema
- `AUTHORIZATION` - specify the owner of the schema
- `role_name` - owner of the schema

#### Rename a schema

```sql
ALTER SCHEMA schema_name RENAME TO new_schema_name;
```

Explanation:

- `ALTER SCHEMA` - rename a schema
- `schema_name` - name of the schema
- `RENAME TO` - rename the schema
- `new_schema_name` - new name of the schema

#### Update a schema

```sql
CREATE OR REPLACE SCHEMA schema_name;
```

Explanation:

- `CREATE OR REPLACE SCHEMA` - update a schema
- `schema_name` - name of the schema

#### Drop a schema

```sql
DROP SCHEMA schema_name;
```

Explanation:

- `DROP SCHEMA` - drop a schema
- `schema_name` - name of the schema

#### Drop a schema if exists

```sql
DROP SCHEMA IF EXISTS schema_name;
```

Explanation:

- `DROP SCHEMA` - drop a schema
- `IF EXISTS` - drop the schema if it exists
- `schema_name` - name of the schema

</div>

<div class="cheat__container-content">

### PostgreSQL Managing Tablespace

#### Create a tablespace

```sql
CREATE TABLESPACE tablespace_name LOCATION 'path';
```

Explanation:

- `CREATE TABLESPACE` - create a new tablespace
- `tablespace_name` - name of the tablespace
- `LOCATION` - specify the location of the tablespace
- `path` - path of the tablespace

#### Rename a tablespace

```sql
ALTER TABLESPACE tablespace_name RENAME TO new_tablespace_name;
```

Explanation:

- `ALTER TABLESPACE` - rename a tablespace
- `tablespace_name` - name of the tablespace
- `RENAME TO` - rename the tablespace
- `new_tablespace_name` - new name of the tablespace

#### Update a tablespace

```sql
CREATE OR REPLACE TABLESPACE tablespace_name;
```

Explanation:

- `CREATE OR REPLACE TABLESPACE` - update a tablespace
- `tablespace_name` - name of the tablespace

#### Drop a tablespace

```sql
DROP TABLESPACE tablespace_name;
```

Explanation:

- `DROP TABLESPACE` - drop a tablespace
- `tablespace_name` - name of the tablespace

#### Drop a tablespace if exists

```sql
DROP TABLESPACE IF EXISTS tablespace_name;
```

Explanation:

- `DROP TABLESPACE` - drop a tablespace
- `IF EXISTS` - drop the tablespace if it exists
- `tablespace_name` - name of the tablespace

</div>
