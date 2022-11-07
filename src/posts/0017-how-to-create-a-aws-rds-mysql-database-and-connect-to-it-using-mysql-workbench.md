---
title: How to Create a AWS RDS MySQL Database and Connect to it using MySQL Workbench
slug: how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench
tags: ['AWS', 'RDS', 'MySQL', 'Workbench']
categories: ['AWS']
date: 2022-11-07T01:51:00.000Z
image: /assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench.png
author: MKAbuMattar
description: 'RDS is a managed service that makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security, and compatibility they need.'
prev: how-to-run-an-apache-web-server-using-docker-on-an-aws-ec2-instance
next: how-to-install-and-configure-nodejs-on-ec2-instance-amazon-linux-2
featured: true
---

## Introduction

RDS is a managed service that makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security, and compatibility they need.

## Prerequisites

- AWS Account
- MySQL Workbench

## Create a AWS RDS MySQL Database

1. Login to your AWS Console.

![AWS Console](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/aws-console.png)

2. Click on Services and then click on RDS.

![RDS](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/rds.png)

3. Click on Create Database.

![Create Database](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/create-database.png)

4. Select MySQL as the database engine.

![Select MySQL](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/select-mysql.png)

5. Select the MySQL version.

![Select MySQL Version](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/select-mysql-version.png)

6. Select the template.

![Select Template](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/select-template.png)

7. DB instance identifier.

![DB Instance Identifier](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/db-instance-identifier.png)

8. Master username and password.

![Master Username and Password](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/master-username-and-password.png)

9. DB instance class.

![DB Instance Class](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/db-instance-class.png)

10. Storage.

![Storage](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/storage.png)

11. Public access

![Public Access](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/public-access.png)

12. VPC security group.

![VPC Security Group](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/vpc-security-group.png)

13. Additional configuration.

![Additional Configuration](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/additional-configuration.png)

14. Click on Create database.

## Connect to the AWS RDS MySQL Database

1. Get the endpoint of the database.

![Get Endpoint](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/get-endpoint.png)

2. Open MySQL Workbench.

![Open MySQL Workbench](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/open-mysql-workbench.png)

3. Click on the + icon to add a new connection.

![Add New Connection](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/add-new-connection.png)

4. Enter the connection details.
   - Connection Name: Enter a name for the connection.
   - Hostname: Enter the endpoint of the database.
   - Username: Enter the username of the database.
   - Password: Enter the password of the database.

![Enter Connection Details](/assets/img/blog/0017-how-to-create-a-aws-rds-mysql-database-and-connect-to-it-using-mysql-workbench/enter-connection-details.png)

5. Click on Test Connection to test the connection.

6. Click on OK to save the connection.

7. Click on the connection to connect to the database.

You have successfully connected to the AWS RDS MySQL database.

## Exercise 1: Create a Table

Create a 3 tables in the database, the tables are:

- `SAILORS` - Contains the details of the sailors.
  - `SID` - The ID of the sailor.
  - `SName` - The name of the sailor.
  - `SRating` - The rating of the sailor.
  - `SAge` - The age of the sailor.
- `BOATS` - Contains the details of the boats.
  - `BID` - The ID of the boat.
  - `BName` - The name of the boat.
  - `BColor` - The color of the boat.
- `RESERVES` - Contains the details of the reservations.
  - `SID` - The ID of the sailor.
  - `BID` - The ID of the boat.
  - `Day` - The day of the reservation.

<details>

<summary>Click to expand the SQL solution.</summary>

### Create the SAILORS table

```sql
CREATE TABLE `SAI`.`SAILORS` (
    SID int auto_increment primary key,
    SName varchar(30) not null,
    SRating int default 0 check (SRating >= 0 and SRating <= 10),
    SAge real default 18 check (SAge >= 18 and SAge <= 70)
);
```

Explanation:

<details>

<summary>Click to expand the explanation.</summary>

- `SID` - The ID of the sailor.
- `SName` - The name of the sailor.
- `SRating` - The rating of the sailor.
- `SAge` - The age of the sailor.
- `auto_increment` - The ID will be automatically incremented.
- `primary key` - The ID is the primary key of the table.
- `not null` - The name of the sailor cannot be null.
- `default 0` - The rating of the sailor will be 0 by default.
- `check (SRating >= 0 and SRating <= 10)` - The rating of the sailor must be between 0 and 10.
- `default 18` - The age of the sailor will be 18 by default.
- `check (SAge >= 18 and SAge <= 70)` - The age of the sailor must be between 18 and 70.

</details>

### Create the BOATS table

```sql
CREATE TABLE `SAI`.`BOATS` (
    BID int auto_increment primary key,
    BName varchar(30) not null,
    BColor varchar(30) not null
);
```

Explanation:

<details>

<summary>Click to expand the explanation.</summary>

- `BID` - The ID of the boat.
- `BName` - The name of the boat.
- `BColor` - The color of the boat.
- `auto_increment` - The ID will be automatically incremented.
- `primary key` - The ID is the primary key of the table.
- `not null` - The name of the boat cannot be null.

</details>

### Create the RESERVES table

```sql
CREATE TABLE `SAI`.`RESERVES` (
    SID int not null,
    BID int not null,
    Day date not null,
    primary key (SID, BID, Day),
);

alter table `SAI`.`RESERVES` add constraint `RESERVES_SAILORS_FK` foreign key (SID) references `SAI`.`SAILORS` (SID);
alter table `SAI`.`RESERVES` add constraint `RESERVES_BOATS_FK` foreign key (BID) references `SAI`.`BOATS` (BID);
```

Explanation:

<details>

<summary>Click to expand the explanation.</summary>

- `SID` - The ID of the sailor.
- `BID` - The ID of the boat.
- `Day` - The day of the reservation.
- `primary key (SID, BID, Day)` - The combination of the ID of the sailor, the ID of the boat and the day is the primary key of the table.
- `not null` - The ID of the sailor, the ID of the boat and the day cannot be null.
- `alter table` - Add a foreign key to the table.
- `RESERVES_SAILORS_FK` - The name of the foreign key.
- `foreign key (SID)` - The ID of the sailor is the foreign key.
- `references` - References the `SAILORS` table.
- `RESERVES_BOATS_FK` - The name of the foreign key.
- `foreign key (BID)` - The ID of the boat is the foreign key.
- `references` - References the `BOATS` table.

</details>

</details>

### Insert data into the tables

<details>

<summary>Click to expand the SQL solution.</summary>

```sql
insert into `SAI`.`SAILORS` (SID, SName, SRating, SAge) values (22, 'Dustin', 7, 45);
insert into `SAI`.`SAILORS` (SID, SName, SRating, SAge) values (29, 'Brutus', 1, 33);
insert into `SAI`.`SAILORS` (SID, SName, SRating, SAge) values (31, 'Lubber', 8, 55.5);
insert into `SAI`.`SAILORS` (SID, SName, SRating, SAge) values (32, 'Andy', 8, 25);
insert into `SAI`.`SAILORS` (SID, SName, SRating, SAge) values (58, 'Rusty', 10, 35);
insert into `SAI`.`SAILORS` (SID, SName, SRating, SAge) values (64, 'Horatio', 7, 35);
insert into `SAI`.`SAILORS` (SID, SName, SRating, SAge) values (71, 'Zorba', 10, 18);
insert into `SAI`.`SAILORS` (SID, SName, SRating, SAge) values (74, 'Horatio', 9, 40);
insert into `SAI`.`SAILORS` (SID, SName, SRating, SAge) values (85, 'Art', 3, 25.5);
insert into `SAI`.`SAILORS` (SID, SName, SRating, SAge) values (88, 'Bob', 3, 63.5);

insert into `SAI`.`BOATS` (BID, BName, BColor) values (101, 'Interlake', 'blue');
insert into `SAI`.`BOATS` (BID, BName, BColor) values (102, 'Interlake', 'red');
insert into `SAI`.`BOATS` (BID, BName, BColor) values (103, 'Clipper', 'green');
insert into `SAI`.`BOATS` (BID, BName, BColor) values (104, 'Marine', 'red');

insert into `SAI`.`RESERVES` (SID, BID, Day) values (22, 101, '1998-10-10');
insert into `SAI`.`RESERVES` (SID, BID, Day) values (22, 102, '1998-10-10');
insert into `SAI`.`RESERVES` (SID, BID, Day) values (22, 103, '1998-10-8');
insert into `SAI`.`RESERVES` (SID, BID, Day) values (22, 104, '1998-10-7');
insert into `SAI`.`RESERVES` (SID, BID, Day) values (31, 102, '1998-11-10');
insert into `SAI`.`RESERVES` (SID, BID, Day) values (31, 103, '1998-11-6');
insert into `SAI`.`RESERVES` (SID, BID, Day) values (31, 104, '1998-11-12');
insert into `SAI`.`RESERVES` (SID, BID, Day) values (64, 101, '1998-9-5');
insert into `SAI`.`RESERVES` (SID, BID, Day) values (64, 102, '1998-9-8');
insert into `SAI`.`RESERVES` (SID, BID, Day) values (64, 103, '1998-9-8');
```

</details>

### Exercise 2: Write a Querys

- Find all information of sailors who have reserved boat number 101.
- Find the names of sailors who have reserved a red boat, and list in the order of age.
- Find the names of sailors who have reserved at least one boat.
- Find the ids and names of sailors who have reserved two different boats on the same day.
- Find the ids of sailors who have reserved a red boat or a green boat

<details>

<summary>Click to expand the SQL solution.</summary>

```sql
select * from `SAI`.`SAILORS`
where SID in (
    select SID from `SAI`.`RESERVES`
    where BID = 101
);
```

Explanation:

<details>

<summary>Click to expand the explanation.</summary>

- `select *` - Select all columns.
- `from` - From the `SAILORS` table.
- `where` - Where the ID of the sailor is in the list of IDs of sailors who have reserved boat number 101.
- `SID in` - The ID of the sailor is in the list.
- `select SID` - Select the ID of the sailor.
- `from` - From the `RESERVES` table.
- `where` - Where the ID of the boat is 101.

</details>

```sql
select SName from `SAI`.`SAILORS`
WHERE SID in (
    select SID from `SAI`.`RESERVES`
    WHERE BID in (
        select BID from `SAI`.`BOATS`
        WHERE BColor = 'red'
    )
)
order by SAge;
```

Explanation:

<details>

<summary>Click to expand the explanation.</summary>

- `select SName` - Select the name of the sailor.
- `from` - From the `SAILORS` table.
- `where` - Where the ID of the sailor is in the list of IDs of sailors who have reserved a red boat.
- `SID in` - The ID of the sailor is in the list.
- `select SID` - Select the ID of the sailor.
- `from` - From the `RESERVES` table.
- `where` - Where the ID of the boat is in the list of IDs of red boats.
- `BID in` - The ID of the boat is in the list.
- `select BID` - Select the ID of the boat.
- `from` - From the `BOATS` table.
- `where` - Where the color of the boat is red.
- `order by` - Order by the age of the sailor.

</details>

```sql
select SName from `SAI`.`SAILORS`
where SID in (
    select SID from `SAI`.`RESERVES`
);
```

Explanation:

<details>

<summary>Click to expand the explanation.</summary>

- `select SName` - Select the name of the sailor.
- `from` - From the `SAILORS` table.
- `where` - Where the ID of the sailor is in the list of IDs of sailors who have reserved a boat.
- `SID in` - The ID of the sailor is in the list.
- `select SID` - Select the ID of the sailor.
- `from` - From the `RESERVES` table.

</details>

```sql
select SID from `SAI`.`SAILORS`
where SID in (
    select SID from `SAI`.`RESERVES`
    group by SID, Day
    having count(*) = 2
);
```

Explanation:

<details>

<summary>Click to expand the explanation.</summary>

- `select SID` - Select the ID of the sailor.
- `from` - From the `SAILORS` table.
- `where` - Where the ID of the sailor is in the list of IDs of sailors who have reserved two boats on the same day.
- `SID in` - The ID of the sailor is in the list.
- `select SID` - Select the ID of the sailor.
- `from` - From the `RESERVES` table.
- `group by` - Group by the ID of the sailor and the day.
- `having` - Having the count of the number of boats reserved is 2.

</details>

```sql
select SID from `SAI`.`SAILORS`
where SID in (
    select SID from `SAI`.`RESERVES`
    where BID in (
        select BID from `SAI`.`BOATS`
        where BColor = 'red'
    )
)
or SID in (
    select SID from `SAI`.`RESERVES`
    where BID in (
        select BID from `SAI`.`BOATS`
        where BColor = 'green'
    )
);
```

Explanation:

<details>

<summary>Click to expand the explanation.</summary>

- `select SID` - Select the ID of the sailor.
- `from` - From the `SAILORS` table.
- `where` - Where the ID of the sailor is in the list of IDs of sailors who have reserved a red boat or a green boat.
- `SID in` - The ID of the sailor is in the list.
- `select SID` - Select the ID of the sailor.
- `from` - From the `RESERVES` table.
- `where` - Where the ID of the boat is in the list of IDs of red boats or green boats.
- `BID in` - The ID of the boat is in the list.
- `select BID` - Select the ID of the boat.
- `from` - From the `BOATS` table.
- `where` - Where the color of the boat is red or green.

</details>

</details>

## Conclusion

In this tutorial, you learned how to create a RDS instance, how to connect to it, and how to create a database and tables. You also learned how to insert data into the tables and how to write queries to retrieve data from the tables. You can use these skills to create a database for your own projects.

## References

- [Amazon RDS](https://aws.amazon.com/rds/)
- [MySQL](https://www.mysql.com/)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [MySQL Tutorial](https://www.w3schools.com/sql/default.asp)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [MySQL Cheat Sheet](/cheatsheets/mysql)
