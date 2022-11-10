---
title: How To Create a DynamoDB Table Using AWS CLI
slug: how-to-create-a-dynamodb-table-using-aws-cli
tags: ['AWS', 'AWS CLI', 'DynamoDB']
categories: ['AWS']
date: 2022-11-10T20:18:00.000Z
image: /assets/img/blog/0022-how-to-create-a-dynamodb-table-using-aws-cli/how-to-create-a-dynamodb-table-using-aws-cli.png
author: MKAbuMattar
description: 'In this article, we will learn how to create a DynamoDB table using AWS CLI. We will also learn how to add items to the table and how to query the table.'
prev: what-is-a-ci-cd
next: undefined
featured: true
draft: true
---

## Introduction

In this article, we will learn how to create a DynamoDB table using AWS CLI. We will also learn how to add items to the table and how to query the table.

## Prerequisites

To follow this article, you need to have the following:

- AWS CLI
- AWS Account
- AWS IAM User with the following permissions:
  - AmazonDynamoDBFullAccess
- AWS CLI configured with the IAM User

## Create a DynamoDB Table

### Step 1: Create a DynamoDB Table

To create a DynamoDB table, run the following command:

```bash
aws dynamodb create-table \
    --table-name MyTable \
    --attribute-definitions \
        AttributeName=Id,AttributeType=S \
    --key-schema \
        AttributeName=Id,KeyType=HASH \
    --provisioned-throughput \
        ReadCapacityUnits=1,WriteCapacityUnits=1
```

Explanation:

- `--table-name`: The name of the table to create.
- `--attribute-definitions`: An array of attributes that describe the key schema for the table and indexes.
- `--key-schema`: Specifies the attributes that make up the primary key for a table or an index.
- `--provisioned-throughput`: The provisioned throughput settings for the table or index.

### Step 2: List the Tables

To list the tables, run the following command:

```bash
aws dynamodb list-tables
```

### Step 3: Insert Items to the Table

#### Step 3.1: Insert an Item Using AWS CLI

To insert items to the table, run the following command:

```bash
aws dynamodb put-item \
    --table-name MyTable \
    --item \
        '{"Id": {"S": "1"}, "Name": {"S": "John Doe"}}'
```

Explanation:

- `--item`: A map of attribute name to attribute values, representing the primary key of the item to be retrieved.

#### Step 3.2: Insert Multiple Items Using AWS CLI

To insert multiple items to the table, run the following command:

```bash
aws dynamodb batch-write-item \
    --request-items \
        '{"MyTable": [{"PutRequest": {"Item": {"Id": {"S": "2"}, "Name": {"S": "Jane Doe"}}}}]}'
```

Explanation:

- `--request-items`: A map of one or more table names and, for each table, a list of operations to be performed (`DeleteRequest` or `PutRequest`).

#### Step 3.3: Insert Items From a JSON File Using AWS CLI

Create a JSON file with the following content:

```bash
# create a JSON file
touch items.json

# open the file
vim items.json
```

```json
{
  "MyTable": [
    {
      "PutRequest": {
        "Item": {
          "Id": {
            "S": "3"
          },
          "Name": {
            "S": "John Doe"
          }
        }
      }
    },
    {
      "PutRequest": {
        "Item": {
          "Id": {
            "S": "4"
          },
          "Name": {
            "S": "Jane Doe"
          }
        }
      }
    }
  ]
}
```

To insert items from a JSON file to the table, run the following command:

```bash
aws dynamodb batch-write-item \
    --request-items file://items.json
```

Explanation:

- `--request-items`: A map of one or more table names and, for each table, a list of operations to be performed (`DeleteRequest` or `PutRequest`).
- `file://items.json`: The path to the JSON file.

### Step 4: Query the Table

#### Step 4.1: Query the Table Using AWS CLI

To query the table, run the following command:

```bash
aws dynamodb query \
    --table-name MyTable \
    --key-condition-expression "Id = :id" \
    --expression-attribute-values  '{":id":{"S":"1"}}'
```

Explanation:

- `--key-condition-expression`: A condition that evaluates the query results and returns only the desired values.
- `--expression-attribute-values`: One or more values that can be substituted in an expression.

#### Step 4.2: Query the Table Using AWS CLI and Output to a JSON File

To query the table and output the result to a JSON file, run the following command:

```bash
aws dynamodb query \
    --table-name MyTable \
    --key-condition-expression "Id = :id" \
    --expression-attribute-values  '{":id":{"S":"1"}}' \
    --output json > result.json
```

Explanation:

- `--output`: The output format of the query result.
- `> result.json`: The path to the JSON file.

### Step 5: Create a Global Secondary Index

Global Secondary is a secondary index with a partition key and a sort key that can be different from those on the table. You can query the index using the partition key and sort key, or you can query the index using only the partition key.

#### Step 5.1: Create a Global Secondary Index Using AWS CLI

To create a global secondary index, run the following command:

```bash
aws dynamodb update-table \
    --table-name MyTable \
    --attribute-definitions \
        AttributeName=Name,AttributeType=S \
    --global-secondary-index-updates \
        '[{"Create": {"IndexName": "NameIndex", "KeySchema": [{"AttributeName": "Name", "KeyType": "HASH"}], "Projection": {"ProjectionType": "ALL"}, "ProvisionedThroughput": {"ReadCapacityUnits": 1, "WriteCapacityUnits": 1}}}]'
```

Explanation:

- `--attribute-definitions`: An array of attributes that describe the key schema for the table and indexes.
- `--global-secondary-index-updates`: An array of one or more global secondary indexes to be updated on the table.

### Step 6: Remove the Global Secondary Index

#### Step 6.1: Remove the Global Secondary Index Using AWS CLI

To remove the global secondary index, run the following command:

```bash
aws dynamodb update-table \
    --table-name MyTable \
    --global-secondary-index-updates \
        '[{"Delete": {"IndexName": "NameIndex"}}]'
```

Explanation:

- `--global-secondary-index-updates`: An array of one or more global secondary indexes to be updated on the table.

### Step 7: Create Two DynamoDB Tables With Relationships

#### Step 7.1: Create the First Table

To create the first table, run the following command:

```bash
aws dynamodb create-table \
    --table-name User \
    --attribute-definitions \
        AttributeName=Id,AttributeType=S \
    --key-schema \
        AttributeName=Id,KeyType=HASH \
    --provisioned-throughput \
        ReadCapacityUnits=1,WriteCapacityUnits=1
```

Explanation:

- `--table-name`: The name of the table to be created.
- `--attribute-definitions`: An array of attributes that describe the key schema for the table and indexes.
- `--key-schema`: Specifies the attributes that make up the primary key for a table or an index.
- `--provisioned-throughput`: The provisioned throughput settings for the table or index.

#### Step 7.2: Create the Second Table

To create the second table, run the following command:

```bash
aws dynamodb create-table \
    --table-name Post \
    --attribute-definitions \
        AttributeName=Id,AttributeType=S \
        AttributeName=UserId,AttributeType=S \
    --key-schema \
        AttributeName=Id,KeyType=HASH \
    --global-secondary-indexes \
        '[{"IndexName": "UserIdIndex", "KeySchema": [{"AttributeName": "UserId", "KeyType": "HASH"}], "Projection": {"ProjectionType": "ALL"}, "ProvisionedThroughput": {"ReadCapacityUnits": 1, "WriteCapacityUnits": 1}}]' \
    --provisioned-throughput \
        ReadCapacityUnits=1,WriteCapacityUnits=1
```

Explanation:

- `--table-name`: The name of the table to be created.
- `--attribute-definitions`: An array of attributes that describe the key schema for the table and indexes.
- `--key-schema`: Specifies the attributes that make up the primary key for a table or an index.
- `--global-secondary-indexes`: One or more global secondary indexes (the maximum is 20) to be created on the table.
- `--provisioned-throughput`: The provisioned throughput settings for the table or index.

#### Step 7.3: Add Items to the First Table

To add items to the first table, run the following command:

```bash
aws dynamodb batch-write-item \
    --request-items \
        '{"User": [{"PutRequest": {"Item": {"Id": {"S": "1"}, "Name": {"S": "John Doe"}}}}]}'
```

Explanation:

- `--request-items`: A map of one or more table names and, for each table, a list of operations to be performed (`DeleteRequest` or `PutRequest`).

#### Step 7.4: Add Items to the Second Table

To add items to the second table, run the following command:

```bash
aws dynamodb batch-write-item \
    --request-items \
        '{"Post": [{"PutRequest": {"Item": {"Id": {"S": "1"}, "UserId": {"S": "1"}, "Title": {"S": "Hello World"}}}}]}'
```

Explanation:

- `--request-items`: A map of one or more table names and, for each table, a list of operations to be performed (`DeleteRequest` or `PutRequest`).

#### Step 7.5: Query the Second Table Using AWS CLI

To query the second table, run the following command:

```bash
aws dynamodb query \
    --table-name Post \
    --index-name UserIdIndex \
    --key-condition-expression "UserId = :userId" \
    --expression-attribute-values  '{":userId":{"S":"1"}}'
```

Explanation:

- `--table-name`: The name of the table containing the requested items.
- `--index-name`: The name of a global secondary index to be queried.
- `--key-condition-expression`: A condition that evaluates the query results and returns only the desired values.
- `--expression-attribute-values`: One or more values that can be substituted in an expression.

### Step 8: Create a DynamoDB Table With a Local Secondary Index

#### Step 8.1: Create the Table

To create the table, run the following command:

```bash
aws dynamodb create-table \
    --table-name MyTable \
    --attribute-definitions \
        AttributeName=Id,AttributeType=S \
        AttributeName=Name,AttributeType=S \
    --key-schema \
        AttributeName=Id,KeyType=HASH \
        AttributeName=Name,KeyType=RANGE \
    --local-secondary-indexes \
        '[{"IndexName": "NameIndex", "KeySchema": [{"AttributeName": "Id", "KeyType": "HASH"}, {"AttributeName": "Name", "KeyType": "RANGE"}], "Projection": {"ProjectionType": "ALL"}}]' \
    --provisioned-throughput \
        ReadCapacityUnits=1,WriteCapacityUnits=1
```

Explanation:

- `--table-name`: The name of the table to be created.
- `--attribute-definitions`: An array of attributes that describe the key schema for the table and indexes.
- `--key-schema`: Specifies the attributes that make up the primary key for a table or an index.
- `--local-secondary-indexes`: One or more local secondary indexes (the maximum is 5) to be created on the table.
- `--provisioned-throughput`: The provisioned throughput settings for the table or index.

#### Step 8.2: Add Items to the Table

To add items to the table, run the following command:

```bash
aws dynamodb batch-write-item \
    --request-items \
        '{"MyTable": [{"PutRequest": {"Item": {"Id": {"S": "1"}, "Name": {"S": "John Doe"}}}}]}'
```

Explanation:

- `--request-items`: A map of one or more table names and, for each table, a list of operations to be performed (`DeleteRequest` or `PutRequest`).

#### Step 8.3: Query the Table Using AWS CLI

To query the table, run the following command:

```bash
aws dynamodb query \
    --table-name MyTable \
    --index-name NameIndex \
    --key-condition-expression "Id = :id" \
    --expression-attribute-values  '{":id":{"S":"1"}}'
```

Explanation:

- `--table-name`: The name of the table containing the requested items.
- `--index-name`: The name of a local secondary index to be queried.
- `--key-condition-expression`: A condition that evaluates the query results and returns only the desired values.
- `--expression-attribute-values`: One or more values that can be substituted in an expression.

### Step 9: Describe a DynamoDB Table Using AWS CLI

Describe is used to get information about a table, such as the table status, creation date, and primary key schema.

To describe a table, run the following command:

```bash
aws dynamodb describe-table \
    --table-name MyTable
```

### Step 10: Delete a DynamoDB Table Using AWS CLI

Delete is used to remove a table and all of its items.

To delete a table, run the following command:

```bash
aws dynamodb delete-table \
    --table-name MyTable
```

## Conclusion

In this tutorial, you learned how to use the AWS CLI to create, query, and delete DynamoDB tables. You also learned how to use the AWS CLI to create, query, and delete DynamoDB tables with global and local secondary indexes.

## References

- [AWS - AWS CLI](https://aws.amazon.com/cli/)
- [AWS - DynamoDB](https://aws.amazon.com/dynamodb/)
- [AWS - DynamoDB Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [AWS - DynamoDB API Reference](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/Welcome.html)
- [AWS - DynamoDB Global Secondary Indexes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html)
- [AWS - DynamoDB Local Secondary Indexes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LSI.html)
- [AWS - DynamoDB Query](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html)
- [AWS - DynamoDB BatchWriteItem](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html)
- [AWS - DynamoDB CreateTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html)
- [AWS - DynamoDB DeleteTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html)
- [AWS - DynamoDB DescribeTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html)
