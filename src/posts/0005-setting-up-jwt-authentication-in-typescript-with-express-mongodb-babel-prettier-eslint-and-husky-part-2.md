---
title: 'Setting up JWT Authentication in Typescript with Express, MongoDB, Babel, Prettier, ESLint, and Husky: Part 2'
slug: setting-up-jwt-authentication-in-typescript-with-express-mongodb-babel-prettier-eslint-and-husky-part-2
tags:
  [
    'NodeJS',
    'Express',
    'MongoDB',
    'Prettier',
    'ESLint',
    'Husky',
    'Babel',
    'TypeScript',
    'Authentication',
  ]
categories: ['Backend']
date: 2022-07-03T00:00:00.000Z
image: /assets/img/blog/0004-setting-up-node-js-express-prettier-eslint-and-husky-application-with-babel-and-typescript/setting-up-node-js-express-prettier-eslint-and-husky-application-with-babel-and-typescript.png
author: MKAbuMattar
description: 'Setting up JWT Authentication in Typescript with Express, MongoDB, Babel, Prettier, ESLint, and Husky: Part 2.'
prev: setting-up-node-js-express-prettier-eslint-and-husky-application-with-babel-and-typescript-part-1
next: how-to-create-a-custom-vpc-using-aws-cli
featured: false
---

## Table of Contents

- [Introduction](#introduction)
- [Directory and File Structure](#directory-and-file-structure)
- [Environment Variables](#environment-variables)
- [Setup logger for development](#setup-logger-for-development)
- [Setup MongoDB using Mongoose](#setup-mongodb-using-mongoose)
- [Setup Validation using Joi](#setup-validation-using-joi)
- [Setup JWT Authentication](#setup-jwt-authentication)
- [Summary](#summary)

## Introduction

Why do we even need an authentication mechanism in an application? in my opinion, it doesn't need to be explained. The phrases authentication and authorization have likely crossed your lips, but I must emphasize that they have two distinct meanings.

- Authentication: Any security approach must start with authentication, verifying that users are who they claim to be.
- Authorization: Authorization in the context of system security describes the procedure for authorizing user access to a certain resource or function. The words "access control" and "client privilege" are commonly used interchangeably.

At the same time, the words "authentication" and "authorization" are used in the context of network security. In this context, authentication is the process of verifying that a user is who they claim to be. Authorization is the process of verifying that a user has the necessary rights to access a certain resource or function.

We will learn how to create an authentication system using JWT in this tutorial. We will also learn how to create an authorization system using JWT with Typescript, Express. and the tutorial is a continuation of the previous tutorial.

- [Setting up Node JS, Express, Prettier, ESLint and Husky Application with Babel and Typescript: Part 1](/post/setting-up-node-js-express-prettier-eslint-and-husky-application-with-babel-and-typescript-part-1)

## Directory and File Structure

We'll start by creating a directory structure for our application, and then we'll create a file structure for our application.

```text
├── src
│   ├── bin
│   │   └── www.ts
│   ├── config
│   │   └── db.config.ts
│   ├── constants
│   │   ├── api.constant.ts
│   │   ├── dateformat.constant.ts
│   │   ├── http.code.constant.ts
│   │   ├── http.reason.constant.ts
│   │   ├── message.constant.ts
│   │   ├── model.constant.ts
│   │   ├── number.constant.ts
│   │   ├── path.constant.ts
│   │   └── regex.constant.ts
│   ├── controllers
│   │   ├── auth.controller.ts
│   │   └── user.controller.ts
│   ├── env
│   │   └── variable.env.ts
│   ├── interfaces
│   │   ├── controller.interface.ts
│   │   └── user.interface.ts
│   ├── middlewares
│   │   ├── authenticated.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validation.middleware.ts
│   ├── models
│   │   └── user.model.ts
│   ├── repositories
│   │   └── user.repository.ts
│   ├── schemas
│   │   └── user.schema.ts
│   ├── security
│   │   └── user.security.ts
│   ├── services
│   │   ├── auth.service.ts
│   │   └── user.service.ts
│   ├── types
│   │   └── express
│   │       └── index.d.ts
│   ├── utils
│   │   └── exceptions
│   │   │   └── http.exception.ts
│   │   └── logger.util.ts
│   └── validations
│       ├── token.validation.ts
│       ├── user.validation.ts
│       └── variable.validation.ts
├── .babelrc
├── .env
├── .env.example
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .npmrc
├── .nvmrc
├── .prettierignore
├── .prettierrc
├── commitlint.config.js
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

Don't be overwhelmed; this structure will be helpful after the program is finished and you start expanding the file structure for the business logic. This is just my opinion; perhaps you'll organize the directory and files differently.

We'll be continuing build-up in the last tutorial <a href="https://github.com/MKAbuMattar/template-express-typescript-blueprint/tree/part1" target="__blank">repository</a>.

To better arrange the file structure and identify the key files, certain adjustments will be made to `tsconfig.json`.

`tsconfig.json`

```json
{
  ...,
  "paths": {
    "@/bin/*": [
      "bin/*"
    ],
    "@/config/*": [
      "config/*"
    ],
    "@/constants/*": [
      "constants/*"
    ],
    "@/controllers/*": [
      "controllers/*"
    ],
    "@/env/*": [
      "env/*"
    ],
    "@/interfaces/*": [
      "interfaces/*"
    ],
    "@/middlewares/*": [
      "middlewares/*"
    ],
    "@/models/*": [
      "models/*"
    ],
    "@/repositories/*": [
      "repositories/*"
    ],
    "@/routers/*": [
      "routers/*"
    ],
    "@/schemas/*": [
      "schemas/*"
    ],
    "@/security/*": [
      "security/*"
    ],
    "@/services/*": [
      "services/*"
    ],
    "@/utils/*": [
      "utils/*"
    ],
    "@/validations/*": [
      "validations/*"
    ],
  },
}
```

nevertheless, in order to use the file structure, we must install a package called `module-alias`. To install the package, use the following command after generating the project:

```bash
yarn add module-alias
```

```bash
yarn add -D @types/module-alias
```

and we need to do some change to `package.json` and add `_moduleAliases`:

```json
{
  ...,
    "_moduleAliases": {
    "@/bin": "build/bin",
    "@/config": "build/config",
    "@/constants": "build/constants",
    "@/controllers": "build/controllers",
    "@/env": "build/env",
    "@/interfaces": "build/interfaces",
    "@/middlewares": "build/middlewares",
    "@/models": "build/models",
    "@/repositories": "build/repositories",
    "@/routers": "build/routers",
    "@/schemas": "build/schemas",
    "@/security": "build/security",
    "@/services": "build/services",
    "@/utils": "build/utils",
    "@/validations": "build/validations"
  }
}
```

## Environment Variables

A basic text configuration file called a `.env` file or `dotenv` file is used to manage the environment constants for your applications. The vast bulk of your application will remain the same throughout the Local, Staging, and Production environments. However, there are times when some configurations need to be changed between environments in various applications. Typical setup adjustments across contexts might be, but are not restricted to:

- URL’s and API keys
- Domain names
- Public and private authentication keys
- Service account names

An environment constant is a variable whose value is set outside to the application, generally via operating system capability. Any number of environment variables may be generated and made accessible for use at one time; each environment variable consists of a name/value pair.

After creating the directory structure, we'll create a file called `.env` and `.env.example` in the root directory:

- `.env`: This file will contain the configuration for the application.
- `.env.example`: is the file that contains all of the configurations for constants that `.env` has, but without values; only this one is versioned. `env.example` serves as a template for building a `.env` file that contains the information required to start the program.

```bash
touch .env .env.example
```

Now we add a new variable to `.env`:

`.env`

```bash
NODE_ENV=development
# NODE_ENV=production
PORT=3030
DATABASE_URL=mongodb://127.0.0.1:27017/example

JWT_SECRET=secret
PASS_SECRET=secret
```

`.env.example`

```bash
NODE_ENV=development
# NODE_ENV=production
PORT=3030
DATABASE_URL=mongodb://

JWT_SECRET=secret
PASS_SECRET=secret
```

They will now be loaded and used using the library `dotenv`, and environment variables will be verified by a different library called `envalid`.

```bash
yarn add dotenv envalid
```

`variable.validation.ts`

```typescript
import { cleanEnv, str, port } from 'envalid';

const validate = (): void => {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'production'],
    }),
    PORT: port({ default: 3030 }),
    DATABASE_URL: str(),
    JWT_SECRET: str(),
    PASS_SECRET: str(),
  });
};

export default validate;
```

`variable.env.ts`

```typescript
import 'dotenv/config';

import VariableValidate from '@/validations/variable.validation';

class Variable {
  public static readonly NODE_ENV: string = process.env.NODE_ENV!;

  public static readonly PORT: number = Number(process.env.PORT)!;

  public static readonly DATABASE_URL: string = process.env.DATABASE_URL!;

  public static readonly JWT_SECRET: string = process.env.JWT_SECRET!;

  public static readonly PASS_SECRET: string = process.env.PASS_SECRET!;

  constructor() {
    this.initialise();
  }

  private initialise(): void {
    VariableValidate();
  }
}

export default Variable;
```

## Setup logger for development

I had a problem setting up the logger when constructing a server-side application based on Node and Express router. Conditions for the answer:

- Logging application event
- Ability to specify multiple logs level
- Logging of HTTP requests
- Ability to write logs into a different source (console and file)

I found two possible solutions:

- [Morgan](https://www.npmjs.com/package/morgan): HTTP logging middleware for express. It provides the ability to log incoming requests by specifying the formatting of log instance based on different request related information.
- [Winston](https://www.npmjs.com/package/winston): Multiple types of transports are supported by a lightweight yet effective logging library. Because I want to simultaneously log events into a file and a terminal, this practical feature is crucial for me.

I'll use Winston for the logging, first I'll install the package:

```bash
yarn add winston
```

We'll begin by introducing the constants, which will be applied as follows:

`dateformat.constant.ts`

```typescript
class Dateformat {
  public static readonly YYYY_MM_DD_HH_MM_SS_MS: string =
    'YYYY-MM-DD HH:mm:ss:ms';
}

export default Dateformat;
```

`path.constant.ts`

```typescript
class Path {
  public static readonly LOGS_ALL: string = 'logs/all.log';

  public static readonly LOGS_ERROR: string = 'logs/error.log';
}
export default Path;
```

We'll now create the `winston` as a function to make it simpler to use:

`logger.util.ts`

```typescript
import winston from 'winston';
import Variable from '@/env/variable.env';

import ConstantDateFormat from '@/constants/dateformat.constant';
import ConstantPath from '@/constants/path.constant';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = Variable.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({
    format: ConstantDateFormat.YYYY_MM_DD_HH_MM_SS_MS,
  }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: ConstantPath.LOGS_ERROR,
    level: 'error',
  }),
  new winston.transports.File({ filename: ConstantPath.LOGS_ALL }),
];

const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default logger;
```

## Setup MongoDB using Mongoose

What is MongoDB?

MongoDB is a NoSQL database is used to store structured data. It is a document-oriented database made to operate with documents that resemble JSON.

What is Mongoose?

Mongoose is a MongoDB object modeling library. It is a MongoDB driver for Node.js.

first I'll install the package:

```bash
yarn add mongoose
```

We'll begin setting up the `mongoose` to connect to the database right away:

`db.config.ts`

```typescript
import { connect } from 'mongoose';
import logger from '@/utils/logger.util';

const connectDb = async (URL: string) => {
  try {
    const connection: any = await connect(URL);
    logger.info(`Mongo DB is connected to: ${connection.connection.host}`);
  } catch (err) {
    logger.error(`An error ocurred\n\r\n\r${err}`);
  }
};

export default connectDb;
```

after that, we'll do some changes to `index.ts`, which is the entry point of the application:

`index.ts`

```typescript
import express, { Application, Request, Response, NextFunction } from 'express';

import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';

import ErrorMiddleware from '@/middlewares/error.middleware';
import HttpException from '@/utils/exceptions/http.exception';
import Controller from '@/interfaces/controller.interface';

import connectDb from '@/config/db.config';

// variable
import Variable from '@/env/variable.env';

// api constant
import ConstantAPI from '@/constants/api.constant';

// message constant
import ConstantMessage from '@/constants/message.constant';

// http constant
import ConstantHttpCode from '@/constants/http.code.constant';
import ConstantHttpReason from '@/constants/http.reason.constant';

class App {
  public app: Application;
  private DATABASE_URL: string;

  constructor(controllers: Controller[]) {
    this.app = express();
    this.DATABASE_URL = Variable.DATABASE_URL;

    this.initialiseDatabaseConnection(this.DATABASE_URL);
    this.initialiseConfig();
    this.initialiseRoutes();
    this.initialiseControllers(controllers);
    this.initialiseErrorHandling();
  }

  private initialiseConfig(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(helmet());
  }

  private initialiseRoutes(): void {
    this.app.get(
      ConstantAPI.ROOT,
      (_req: Request, res: Response, next: NextFunction) => {
        try {
          return res.status(ConstantHttpCode.OK).json({
            status: {
              code: ConstantHttpCode.OK,
              msg: ConstantHttpReason.OK,
            },
            msg: ConstantMessage.API_WORKING,
          });
        } catch (err: any) {
          return next(
            new HttpException(
              ConstantHttpCode.INTERNAL_SERVER_ERROR,
              ConstantHttpReason.INTERNAL_SERVER_ERROR,
              err.message,
            ),
          );
        }
      },
    );
  }

  private initialiseControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.app.use(ConstantAPI.API, controller.router);
    });
  }

  private initialiseErrorHandling(): void {
    this.app.use(ErrorMiddleware);
  }

  private initialiseDatabaseConnection(url: string): void {
    connectDb(url);
  }
}

export default App;
```

We will now begin to construct the user schema, but before we do, we must include constants for numbers:

`number.constant.ts`

```typescript
class Number {
  // user
  public static readonly USERNAME_MIN_LENGTH: number = 3;
  public static readonly USERNAME_MAX_LENGTH: number = 20;
  public static readonly NAME_MIN_LENGTH: number = 3;
  public static readonly NAME_MAX_LENGTH: number = 80;
  public static readonly EMAIL_MAX_LENGTH: number = 50;
  public static readonly PASSWORD_MIN_LENGTH: number = 8;
  public static readonly PHONE_MIN_LENGTH: number = 10;
  public static readonly PHONE_MAX_LENGTH: number = 20;
  public static readonly ADDRESS_MIN_LENGTH: number = 10;
  public static readonly ADDRESS_MAX_LENGTH: number = 200;
}

export default Number;
```

`user.schema.ts`

```typescript
import mongoose from 'mongoose';
import ConstantNumber from '@/constants/number.constant';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: ConstantNumber.USERNAME_MIN_LENGTH,
      max: ConstantNumber.USERNAME_MAX_LENGTH,
    },
    name: {
      type: String,
      required: true,
      min: ConstantNumber.NAME_MIN_LENGTH,
      max: ConstantNumber.NAME_MAX_LENGTH,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: ConstantNumber.EMAIL_MAX_LENGTH,
    },
    password: {
      type: String,
      required: true,
      min: ConstantNumber.PASSWORD_MIN_LENGTH,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      min: ConstantNumber.PHONE_MIN_LENGTH,
      max: ConstantNumber.PHONE_MAX_LENGTH,
    },
    address: {
      type: String,
      required: true,
      min: ConstantNumber.ADDRESS_MIN_LENGTH,
      max: ConstantNumber.ADDRESS_MAX_LENGTH,
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export default UserSchema;
```

Now, we must create a model in order to interact with this schema:

`model.constant.ts`

```typescript
class Model {
  public static readonly USER_MODEL: string = 'UserModel';
}

export default Model;
```

`user.interface.ts`

```typescript
import { Document } from 'mongoose';

export default interface User extends Document {
  username: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  isAdmin: boolean;
}
```

`user.model.ts`

```typescript
import mongoose from 'mongoose';

import UserSchema from '@/schemas/user.schema';
import UserInterface from '@/interfaces/user.interface';

import ConstantModel from '@/constants/model.constant';

const UserModel = mongoose.model<UserInterface>(
  ConstantModel.USER_MODEL,
  UserSchema,
);

export default UserModel;
```

In my opinion, I build a file to handle all queries in the database through a specific cluster.

`user.repository.ts`

```typescript
import User from '@/models/user.model';
import UserInterface from '@/interfaces/user.interface';

class UserRepository {
  public async findAll(): Promise<UserInterface[]> {
    const users = await User.find({}).select('-password');
    return users;
  }

  public async findById(id: string): Promise<UserInterface | null> {
    const user = await User.findById(id).select('-password');
    return user;
  }

  public async findByUsername(username: string): Promise<UserInterface | null> {
    const user = await User.findOne({ username }).select('-password');
    return user;
  }

  public async findByEmail(email: string): Promise<UserInterface | null> {
    const user = await User.findOne({ email }).select('-password');
    return user;
  }

  public async findByPhone(phone: string): Promise<UserInterface | null> {
    const user = await User.findOne({ phone }).select('-password');
    return user;
  }

  public async findByIdWithPassword(id: string): Promise<UserInterface | null> {
    const user = await User.findById(id);
    return user;
  }

  public async findByUsernameWithPassword(
    username: string,
  ): Promise<UserInterface | null> {
    const user = await User.findOne({ username });
    return user;
  }

  public async findByEmailWithPassword(
    email: string,
  ): Promise<UserInterface | null> {
    const user = await User.findOne({ email });
    return user;
  }

  public async findByPhoneWithPassword(
    phone: string,
  ): Promise<UserInterface | null> {
    const user = await User.findOne({ phone });
    return user;
  }

  public async createUser(user: any): Promise<UserInterface | null> {
    const newUser = new User({
      username: user.username,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      address: user.address,
      isAdmin: user.isAdmin,
    });
    const savedUser = await newUser.save();
    return savedUser;
  }

  public async updateUsername(
    id: string,
    username: string,
  ): Promise<UserInterface | null> {
    const user = await User.findByIdAndUpdate(
      id,
      { username },
      { new: true },
    ).select('-password');
    return user;
  }

  public async updateName(
    id: string,
    name: string,
  ): Promise<UserInterface | null> {
    const user = await User.findByIdAndUpdate(
      id,
      { name },
      { new: true },
    ).select('-password');
    return user;
  }

  public async updateEmail(
    id: string,
    email: string,
  ): Promise<UserInterface | null> {
    const user = await User.findByIdAndUpdate(
      id,
      { email },
      { new: true },
    ).select('-password');
    return user;
  }

  public async updatePassword(
    id: string,
    password: string,
  ): Promise<UserInterface | null> {
    const user = await User.findByIdAndUpdate(
      id,
      { password },
      { new: true },
    ).select('-password');
    return user;
  }

  public async updatePhone(
    id: string,
    phone: string,
  ): Promise<UserInterface | null> {
    const user = await User.findByIdAndUpdate(
      id,
      { phone },
      { new: true },
    ).select('-password');
    return user;
  }

  public async updateAddress(
    id: string,
    address: string,
  ): Promise<UserInterface | null> {
    const user = await User.findByIdAndUpdate(
      id,
      { address },
      { new: true },
    ).select('-password');
    return user;
  }

  public async deleteUser(id: string): Promise<UserInterface | null> {
    const user = await User.findByIdAndDelete(id);
    return user;
  }

  public async getUsersStats(lastYear: Date): Promise<UserInterface[] | null> {
    const users = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    return users;
  }
}

export default UserRepository;
```

## Setup Validation using Joi

What is Joi?

Joi is a library that helps you validate data. It is a great tool to validate data before you save it to the database.

first I'll install the package:

```bash
yarn add joi
```

`regex.constant.ts`

```typescript
class Regex {
  public static readonly USERNAME = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,32}$/;
  public static readonly EMAIL =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static readonly PASSWORD =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  public static readonly NAME = /^[a-zA-Z ]{2,35}$/;
  public static readonly PHONE =
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
  public static readonly ADDRESS = /^[a-zA-Z0-9\s,'-]{10,200}$/;
}

export default Regex;
```

`user.validation.ts`

```typescript
import Joi from 'joi';
import ConstantRegex from '@/constants/regex.constant';

class UserValidation {
  public register = Joi.object({
    username: Joi.string().max(30).required(),
    name: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    phone: Joi.string().min(10).max(15).required(),
    address: Joi.string().max(100).required(),
  });

  public login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
  });

  public updateUsername = Joi.object({
    username: Joi.string().max(30).required(),
    password: Joi.string().min(6).max(30).required(),
  });

  public updateName = Joi.object({
    name: Joi.string().max(30).required(),
    password: Joi.string().min(6).max(30).required(),
  });

  public updateEmail = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
  });

  public updatePassword = Joi.object({
    oldPassword: Joi.string().min(6).max(30).required(),
    newPassword: Joi.string().min(6).max(30).required(),
    confirmPassword: Joi.string().min(6).max(30).required(),
  });

  public updatePhone = Joi.object({
    phone: Joi.string().min(10).max(15).required(),
    password: Joi.string().min(6).max(30).required(),
  });

  public updateAddress = Joi.object({
    address: Joi.string().max(100).required(),
    password: Joi.string().min(6).max(30).required(),
  });

  public deleteUser = Joi.object({
    password: Joi.string().min(6).max(30).required(),
  });

  public validateUsername(username: string): boolean {
    return ConstantRegex.USERNAME.test(username);
  }

  public validateName(name: string): boolean {
    return ConstantRegex.NAME.test(name);
  }

  public validateEmail(email: string): boolean {
    return ConstantRegex.EMAIL.test(email);
  }

  public validatePassword(password: string): boolean {
    return ConstantRegex.PASSWORD.test(password);
  }

  public validatePhone(phone: string): boolean {
    return ConstantRegex.PHONE.test(phone);
  }

  public validateAddress(address: string): boolean {
    return ConstantRegex.ADDRESS.test(address);
  }
}

export default UserValidation;
```

## Setup JWT Authentication

What is JWT?

JWT is a JSON Web Token. It is a standard for representing claims to be transferred between parties in a secure way.

Alternatively explanation as a book's:

An open industry standard called JSON Web Token is used to exchange data between two entities, often a client (like the front end of your app) and a server (like the back end of your app). They include JSON objects that include the necessary information to be communicated. To ensure that the JSON contents, also known as JWT claims, cannot be changed by the client or an unintentional party, each JWT is additionally signed using cryptography (hashing).

we need to install two libraries:

```bash
yarn add jsonwebtoken crypto-js
```

- `jsonwebtoken` is a library that helps you create, sign, and verify JSON Web Tokens.
- `crypto-js` is a library that helps you encrypt and decrypt data.

we need to install the types for the library:

```bash
yarn add @types/jsonwebtoken @types/crypto-js
```

to encrypt, decode, and produce an access token, create a file:

`user.security.ts`

```typescript
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

import Variable from '@/env/variable.env';

class UserSecurity {
  public encrypt(password: string): string {
    return CryptoJS.AES.encrypt(password, Variable.PASS_SECRET).toString();
  }

  public decrypt(password: string): string {
    return CryptoJS.AES.decrypt(password, Variable.PASS_SECRET).toString(
      CryptoJS.enc.Utf8,
    );
  }

  public comparePassword(password: string, decryptedPassword: string): boolean {
    return password === this.decrypt(decryptedPassword);
  }

  public generateAccessToken(id: string, isAdmin: boolean): string {
    const token = jwt.sign({ id, isAdmin }, Variable.JWT_SECRET, {
      expiresIn: '3d',
    });

    return `Bearer ${token}`;
  }
}

export default UserSecurity;
```

`message.constant.ts`

```typescript
class Message {
  ...

  // auth
  public static readonly USERNAME_NOT_VALID: string = 'username is not valid'
  public static readonly NAME_NOT_VALID: string = 'name is not valid'
  public static readonly EMAIL_NOT_VALID: string = 'email is not valid'
  public static readonly PASSWORD_NOT_VALID: string = 'password is not valid'
  public static readonly PHONE_NOT_VALID: string = 'phone is not valid'
  public static readonly ADDRESS_NOT_VALID: string = 'address is not valid'
  public static readonly USERNAME_EXIST: string = 'username is exist'
  public static readonly EMAIL_EXIST: string = 'email is exist'
  public static readonly PHONE_EXIST: string = 'phone is exist'
  public static readonly USER_NOT_CREATE: string =
    'user is not create, please try again'
  public static readonly USER_CREATE_SUCCESS: string =
    'user is create success, please login'
  public static readonly USER_NOT_FOUND: string = 'user is not found'
  public static readonly PASSWORD_NOT_MATCH: string = 'password is not match'
  public static readonly USER_LOGIN_SUCCESS: string = 'user is login success'
}
export default Message
```

using the user validation form joi as input, construct middleware:

`validation.middleware.ts`

```typescript
import { Request, Response, NextFunction, RequestHandler } from 'express';
import Joi from 'joi';

// http constant
import ConstantHttpCode from '@/constants/http.code.constant';
import ConstantHttpReason from '@/constants/http.reason.constant';

const validationMiddleware = (schema: Joi.Schema): RequestHandler => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const validationOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };

    try {
      const value = await schema.validateAsync(req.body, validationOptions);
      req.body = value;
      next();
    } catch (e: any) {
      const errors: string[] = [];
      e.details.forEach((error: Joi.ValidationErrorItem) => {
        errors.push(error.message);
      });

      res.status(ConstantHttpCode.NOT_FOUND).send({
        status: {
          code: ConstantHttpCode.NOT_FOUND,
          msg: ConstantHttpReason.NOT_FOUND,
        },
        msg: errors,
      });
    }
  };
};

export default validationMiddleware;
```

We'll now link the repository, security, and a service for authentication:

`auth.service.ts`

```typescript
import UserRepository from '@/repositories/user.repository';
import UserSecurity from '@/security/user.security';

class AuthService {
  private userRepository: UserRepository;
  private userSecurity: UserSecurity;

  constructor() {
    this.userRepository = new UserRepository();
    this.userSecurity = new UserSecurity();
  }

  public async findByUsername(username: string): Promise<any> {
    const user = await this.userRepository.findByUsername(username);
    return user;
  }

  public async findByEmail(email: string): Promise<any> {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }

  public async findByPhone(phone: string): Promise<any> {
    const user = await this.userRepository.findByPhone(phone);
    return user;
  }

  public async findByEmailWithPassword(email: string): Promise<any> {
    const user = await this.userRepository.findByEmailWithPassword(email);
    return user;
  }

  public comparePassword(password: string, decryptedPassword: string): boolean {
    return this.userSecurity.comparePassword(password, decryptedPassword);
  }

  public async createUser(user: any): Promise<any> {
    const encryptedPassword = this.userSecurity.encrypt(user.password);
    const newUser = {
      username: user.username,
      name: user.name,
      email: user.email,
      password: encryptedPassword,
      phone: user.phone,
      address: user.address,
      isAdmin: user.isAdmin,
    };
    const savedUser = await this.userRepository.createUser(newUser);
    return savedUser;
  }

  public async generateAccessToken(
    id: string,
    isAdmin: boolean,
  ): Promise<string> {
    const token = this.userSecurity.generateAccessToken(id, isAdmin);
    return token;
  }
}

export default AuthService;
```

`api.constant.ts`

```typescript
class Api {
  ...

  // auth
  public static readonly AUTH_REGISTER: string = '/register'
  public static readonly AUTH_LOGIN: string = '/login'
}
export default Api
```

`auth.controller.ts`

```typescript
import { Router, Request, Response, NextFunction } from 'express';

import AuthService from '@/services/auth.service';
import Controller from '@/interfaces/controller.interface';

import Validate from '@/validations/user.validation';
import validationMiddleware from '@/middlewares/validation.middleware';

import HttpException from '@/utils/exceptions/http.exception';

// api constant
import ConstantAPI from '@/constants/api.constant';

// message constant
import ConstantMessage from '@/constants/message.constant';

// http constant
import ConstantHttpCode from '@/constants/http.code.constant';
import ConstantHttpReason from '@/constants/http.reason.constant';

// logger
import logger from '@/utils/logger.util';

class AuthController implements Controller {
  public path: string;
  public router: Router;
  private authService: AuthService;
  private validate: Validate;

  constructor() {
    this.path = ConstantAPI.AUTH;
    this.router = Router();
    this.authService = new AuthService();
    this.validate = new Validate();

    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.post(
      `${this.path}${ConstantAPI.AUTH_REGISTER}`,
      validationMiddleware(this.validate.register),
      this.register,
    );

    this.router.post(
      `${this.path}${ConstantAPI.AUTH_LOGIN}`,
      validationMiddleware(this.validate.login),
      this.login,
    );
  }

  private register = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { username, name, email, password, phone, address } = req.body;

      const usernameValidated = this.validate.validateUsername(username);
      if (!usernameValidated) {
        return next(
          new HttpException(
            ConstantHttpCode.CONFLICT,
            ConstantHttpReason.CONFLICT,
            ConstantMessage.USERNAME_NOT_VALID,
          ),
        );
      }
      logger.info(`username ${username} is valid`);

      const nameValidated = this.validate.validateName(name);
      if (!nameValidated) {
        return next(
          new HttpException(
            ConstantHttpCode.CONFLICT,
            ConstantHttpReason.CONFLICT,
            ConstantMessage.NAME_NOT_VALID,
          ),
        );
      }
      logger.info(`name ${name} is valid`);

      const emailValidated = this.validate.validateEmail(email);
      if (!emailValidated) {
        return next(
          new HttpException(
            ConstantHttpCode.CONFLICT,
            ConstantHttpReason.CONFLICT,
            ConstantMessage.EMAIL_NOT_VALID,
          ),
        );
      }
      logger.info(`email ${email} is valid`);

      const passwordValidated = this.validate.validatePassword(password);
      if (!passwordValidated) {
        return next(
          new HttpException(
            ConstantHttpCode.CONFLICT,
            ConstantHttpReason.CONFLICT,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        );
      }
      logger.info(`password ${password} is valid`);

      const phoneValidated = this.validate.validatePhone(phone);
      if (!phoneValidated) {
        return next(
          new HttpException(
            ConstantHttpCode.CONFLICT,
            ConstantHttpReason.CONFLICT,
            ConstantMessage.PHONE_NOT_VALID,
          ),
        );
      }
      logger.info(`phone ${phone} is valid`);

      const addressValidated = this.validate.validateAddress(address);
      if (!addressValidated) {
        return next(
          new HttpException(
            ConstantHttpCode.CONFLICT,
            ConstantHttpReason.CONFLICT,
            ConstantMessage.ADDRESS_NOT_VALID,
          ),
        );
      }
      logger.info(`address ${address} is valid`);

      const usernameCheck = await this.authService.findByUsername(username);
      if (usernameCheck) {
        return next(
          new HttpException(
            ConstantHttpCode.CONFLICT,
            ConstantHttpReason.CONFLICT,
            ConstantMessage.USERNAME_EXIST,
          ),
        );
      }

      const emailCheck = await this.authService.findByEmail(email);
      if (emailCheck) {
        return next(
          new HttpException(
            ConstantHttpCode.CONFLICT,
            ConstantHttpReason.CONFLICT,
            ConstantMessage.EMAIL_EXIST,
          ),
        );
      }

      const phoneCheck = await this.authService.findByPhone(phone);
      if (phoneCheck) {
        return next(
          new HttpException(
            ConstantHttpCode.CONFLICT,
            ConstantHttpReason.CONFLICT,
            ConstantMessage.PHONE_EXIST,
          ),
        );
      }

      const newUserData = {
        username,
        name,
        email,
        password,
        phone,
        address,
      };

      const user = await this.authService.createUser(newUserData);
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.CONFLICT,
            ConstantHttpReason.CONFLICT,
            ConstantMessage.USER_NOT_CREATE,
          ),
        );
      }

      const newUser = { ...user }._doc;

      logger.info({ newUserpassword: newUser.password });

      delete newUser.password;

      logger.info({ newUserpassword: newUser.password });

      return res.status(ConstantHttpCode.CREATED).json({
        status: {
          code: ConstantHttpCode.CREATED,
          msg: ConstantHttpReason.CREATED,
        },
        msg: ConstantMessage.USER_CREATE_SUCCESS,
        data: newUser,
      });
    } catch (err: any) {
      return next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err.message,
        ),
      );
    }
  };

  private login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { email, password } = req.body;

      const emailValidated = this.validate.validateEmail(email);
      if (!emailValidated) {
        return next(
          new HttpException(
            ConstantHttpCode.INTERNAL_SERVER_ERROR,
            ConstantHttpReason.INTERNAL_SERVER_ERROR,
            ConstantMessage.EMAIL_NOT_VALID,
          ),
        );
      }
      logger.info(`email ${email} is valid`);

      const passwordValidated = this.validate.validatePassword(password);
      if (!passwordValidated) {
        return next(
          new HttpException(
            ConstantHttpCode.INTERNAL_SERVER_ERROR,
            ConstantHttpReason.INTERNAL_SERVER_ERROR,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        );
      }
      logger.info(`password ${password} is valid`);

      const user = await this.authService.findByEmailWithPassword(email);
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.INTERNAL_SERVER_ERROR,
            ConstantHttpReason.INTERNAL_SERVER_ERROR,
            ConstantMessage.USER_NOT_FOUND,
          ),
        );
      }

      const isMatch = this.authService.comparePassword(password, user.password);
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.INTERNAL_SERVER_ERROR,
            ConstantHttpReason.INTERNAL_SERVER_ERROR,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        );
      }

      const accessToken = await this.authService.generateAccessToken(
        user.id,
        user.isAdmin,
      );
      logger.info(`accessToken: ${accessToken}`);

      const newUser = { ...user }._doc;

      logger.info({ newUserpassword: newUser.password });

      delete newUser.password;

      logger.info({ newUserpassword: newUser.password });

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.USER_LOGIN_SUCCESS,
        data: {
          user: newUser,
          accessToken,
        },
      });
    } catch (err: any) {
      return next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err.message,
        ),
      );
    }
  };
}

export default AuthController;
```

We will now develop a validation for each JWT that we receive:

`token.validation.ts`

```typescript
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import HttpException from '@/utils/exceptions/http.exception';

// variable
import Variable from '@/env/variable.env';

// message constant
import ConstantMessage from '@/constants/message.constant';

// http constant
import ConstantHttpCode from '@/constants/http.code.constant';
import ConstantHttpReason from '@/constants/http.reason.constant';

// logger
import logger from '@/utils/logger.util';

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const bearer = req.headers.authorization;
  logger.info(`bearer: ${bearer}`);

  if (!bearer) {
    return next(
      new HttpException(
        ConstantHttpCode.UNAUTHORIZED,
        ConstantHttpReason.UNAUTHORIZED,
        ConstantMessage.TOKEN_NOT_VALID,
      ),
    );
  }

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return next(
      new HttpException(
        ConstantHttpCode.UNAUTHORIZED,
        ConstantHttpReason.UNAUTHORIZED,
        ConstantMessage.UNAUTHORIZED,
      ),
    );
  }

  const accessToken = bearer.split('Bearer ')[1].trim();

  return jwt.verify(accessToken, Variable.JWT_SECRET, (err, user: any) => {
    if (err) {
      res.status(ConstantHttpCode.FORBIDDEN).json({
        status: {
          code: ConstantHttpCode.FORBIDDEN,
          msg: ConstantHttpReason.FORBIDDEN,
        },
        msg: ConstantMessage.TOKEN_NOT_VALID,
      });
    }
    req.user = user;
    return next();
  });
};

export default { verifyToken };
```

Before moving on, we must make a few adjustments to the configuration file and type in the typescript request:

`index.d.ts`

```typescript
import User from '@/interfaces/user.interface';

declare global {
  namespace Express {
    export interface Request {
      user: User;
    }
  }
}
```

`tsconfig.json`

```json
{
  ...,
  "typeRoots": [
    "./src/types",
    "./node_modules/@types"
  ],
  ...
}
```

`message.constant.ts`

```typescript
class Message {
  ...

  // token
  public static readonly TOKEN_NOT_VALID: string = 'Token not valid'
  public static readonly NOT_AUTHENTICATED: string = 'Not authenticated'
  public static readonly UNAUTHORIZED: string = 'Unauthorized'
  public static readonly NOT_ALLOWED: string = 'Not allowed'
}
export default Message
```

After that, we can develop middleware to check if the request has authorization for the same end point:

`authenticated.middleware.ts`

```typescript
import { Request, Response, NextFunction } from 'express';
import HttpException from '@/utils/exceptions/http.exception';

import { verifyToken } from '@/validations/token.validation';

// message constant
import ConstantMessage from '@/constants/message.constant';

// http constant
import ConstantHttpCode from '@/constants/http.code.constant';
import ConstantHttpReason from '@/constants/http.reason.constant';

class AuthenticatedMiddleware {
  public async verifyTokenAndAuthorization(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    verifyToken(req, res, () => {
      if (req?.user?.id === req?.params?.id || req?.user?.isAdmin) {
        return next();
      }

      return next(
        new HttpException(
          ConstantHttpCode.FORBIDDEN,
          ConstantHttpReason.FORBIDDEN,
          ConstantMessage.NOT_ALLOWED,
        ),
      );
    });
  }

  public async verifyTokenAndAdmin(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    verifyToken(req, res, () => {
      if (req?.user?.isAdmin) {
        return next();
      }

      return next(
        new HttpException(
          ConstantHttpCode.FORBIDDEN,
          ConstantHttpReason.FORBIDDEN,
          ConstantMessage.NOT_ALLOWED,
        ),
      );
    });
  }
}

export default AuthenticatedMiddleware;
```

We’ll now link the repository, security, and service for user:

`user.service.ts`

```typescript
import UserRepository from '@/repositories/user.repository';
import UserSecurity from '@/security/user.security';

class UserService {
  private userRepository: UserRepository;
  private userSecurity: UserSecurity;

  constructor() {
    this.userRepository = new UserRepository();
    this.userSecurity = new UserSecurity();
  }

  public comparePassword(password: string, encryptedPassword: string): boolean {
    return this.userSecurity.comparePassword(password, encryptedPassword);
  }

  public async findAll(): Promise<any> {
    const users = await this.userRepository.findAll();
    return users;
  }

  public async findById(id: string): Promise<any> {
    const user = await this.userRepository.findById(id);
    return user;
  }

  public async findByUsername(username: string): Promise<any> {
    const user = await this.userRepository.findByUsername(username);
    return user;
  }

  public async findByEmail(email: string): Promise<any> {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }

  public async findByPhone(phone: string): Promise<any> {
    const user = await this.userRepository.findByPhone(phone);
    return user;
  }

  public async findByIdWithPassword(id: string): Promise<any> {
    const user = await this.userRepository.findByIdWithPassword(id);
    return user;
  }

  public async updateUsername(id: string, username: string): Promise<any> {
    const user = await this.userRepository.updateUsername(id, username);
    return user;
  }

  public async updateName(id: string, name: string): Promise<any> {
    const user = await this.userRepository.updateName(id, name);
    return user;
  }

  public async updateEmail(id: string, email: string): Promise<any> {
    const user = await this.userRepository.updateEmail(id, email);
    return user;
  }

  public async updatePassword(id: string, password: string): Promise<any> {
    const encryptedPassword = this.userSecurity.encrypt(password);
    const user = await this.userRepository.updatePassword(
      id,
      encryptedPassword,
    );
    return user;
  }

  public async updatePhone(id: string, phone: string): Promise<any> {
    const user = await this.userRepository.updatePhone(id, phone);
    return user;
  }

  public async updateAddress(id: string, address: string): Promise<any> {
    const user = await this.userRepository.updateAddress(id, address);
    return user;
  }

  public async deleteUser(id: string): Promise<any> {
    const user = await this.userRepository.deleteUser(id);
    return user;
  }

  public async getUsersStats(): Promise<any> {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    const usersStats = await this.userRepository.getUsersStats(lastYear);
    return usersStats;
  }
}

export default UserService;
```

`api.constant.ts`

```typescript
class Api {
  ...

  // users
  public static readonly USER_UPDATE_USERNAME: string = '/update-username/:id'
  public static readonly USER_UPDATE_NAME: string = '/update-name/:id'
  public static readonly USER_UPDATE_EMAIL: string = '/update-email/:id'
  public static readonly USER_UPDATE_PASSWORD: string = '/update-password/:id'
  public static readonly USER_UPDATE_PHONE: string = '/update-phone/:id'
  public static readonly USER_UPDATE_ADDRESS: string = '/update-address/:id'
  public static readonly USER_DELETE: string = '/delete/:id'
  public static readonly USER_GET: string = '/find/:id'
  public static readonly USER_GET_ALL: string = '/'
  public static readonly USER_GET_ALL_STATS: string = '/stats'
}
export default Api
```

`message.constant.ts`

```typescript
class Message {
  ...

  // user
  public static readonly USERNAME_NOT_CHANGE: string = 'username is not change'
  public static readonly USERNAME_CHANGE_SUCCESS: string =
    'username is change success'
  public static readonly NAME_NOT_CHANGE: string = 'name is not change'
  public static readonly NAME_CHANGE_SUCCESS: string = 'name is change success'
  public static readonly EMAIL_NOT_CHANGE: string = 'email is not change'
  public static readonly EMAIL_CHANGE_SUCCESS: string =
    'email is change success'
  public static readonly PASSWORD_NOT_CHANGE: string = 'password is not change'
  public static readonly PASSWORD_CHANGE_SUCCESS: string =
    'password is change success'
  public static readonly PHONE_NOT_CHANGE: string = 'phone is not change'
  public static readonly PHONE_CHANGE_SUCCESS: string =
    'phone is change success'
  public static readonly ADDRESS_NOT_CHANGE: string = 'address is not change'
  public static readonly ADDRESS_CHANGE_SUCCESS: string =
    'address is change success'
  public static readonly USER_NOT_DELETE: string =
    'user is not delete, please try again'
  public static readonly USER_DELETE_SUCCESS: string = 'user is delete success'
  public static readonly USER_FOUND: string = 'user is found'
}
export default Message
```

To access the service for what we need to build the methods, we'll make a new contact with the middleware for each authorized user and input validation:

`user.controller.ts`

```typescript
import { Router, Request, Response, NextFunction } from 'express';

import Controller from '@/interfaces/controller.interface';

import UserService from '@/services/user.service';
import Validate from '@/validations/user.validation';

import Authenticated from '@/middlewares/authenticated.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';

import HttpException from '@/utils/exceptions/http.exception';

// api constant
import ConstantAPI from '@/constants/api.constant';

// message constant
import ConstantMessage from '@/constants/message.constant';

// http constant
import ConstantHttpCode from '@/constants/http.code.constant';
import ConstantHttpReason from '@/constants/http.reason.constant';

// logger
import logger from '@/utils/logger.util';

class UserController implements Controller {
  public path: string;
  public router: Router;
  private userService: UserService;
  private authenticated: Authenticated;
  private validate: Validate;

  constructor() {
    this.path = ConstantAPI.USERS;
    this.router = Router();
    this.userService = new UserService();
    this.authenticated = new Authenticated();
    this.validate = new Validate();

    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.post(
      `${this.path}${ConstantAPI.USER_UPDATE_USERNAME}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.updateUsername),
      this.updateUsername,
    );

    this.router.post(
      `${this.path}${ConstantAPI.USER_UPDATE_NAME}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.updateName),
      this.updateName,
    );

    this.router.post(
      `${this.path}${ConstantAPI.USER_UPDATE_EMAIL}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.updateEmail),
      this.updateEmail,
    );

    this.router.post(
      `${this.path}${ConstantAPI.USER_UPDATE_PASSWORD}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.updatePassword),
      this.updatePassword,
    );

    this.router.post(
      `${this.path}${ConstantAPI.USER_UPDATE_PHONE}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.updatePhone),
      this.updatePhone,
    );

    this.router.post(
      `${this.path}${ConstantAPI.USER_UPDATE_ADDRESS}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.updateAddress),
      this.updateAddress,
    );

    this.router.post(
      `${this.path}${ConstantAPI.USER_DELETE}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.deleteUser),
      this.deleteUser,
    );

    this.router.get(
      `${this.path}${ConstantAPI.USER_GET}`,
      this.authenticated.verifyTokenAndAuthorization,
      this.getUser,
    );

    this.router.get(
      `${this.path}${ConstantAPI.USER_GET_ALL}`,
      this.authenticated.verifyTokenAndAdmin,
      this.getAllUsers,
    );

    this.router.get(
      `${this.path}${ConstantAPI.USER_GET_ALL_STATS}`,
      this.authenticated.verifyTokenAndAdmin,
      this.getUsersStats,
    );
  }

  private updateUsername = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { username, password } = req.body;
      const { id } = req.params;

      const user = await this.userService.findByIdWithPassword(id);
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        );
      }
      logger.info(`user ${user.username} found`);

      const isUsernameValid = this.validate.validateUsername(username);
      if (!isUsernameValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.USERNAME_NOT_VALID,
          ),
        );
      }
      logger.info(`username ${username} is valid`);

      const isPasswordValid = this.validate.validatePassword(password);
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        );
      }
      logger.info(`password ${password} is valid`);

      const isMatch = this.userService.comparePassword(password, user.password);
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        );
      }
      logger.info(`password ${password} match`);

      const usernameCheck = await this.userService.findByUsername(username);
      if (usernameCheck) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.USERNAME_EXIST,
          ),
        );
      }

      if (user.username === username) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.USERNAME_NOT_CHANGE,
          ),
        );
      }

      const updatedUser = await this.userService.updateUsername(id, username);
      if (!updatedUser) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.USERNAME_NOT_CHANGE,
          ),
        );
      }
      logger.info(`user ${user.username} updated`);

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.USERNAME_CHANGE_SUCCESS,
        data: {
          user: updatedUser,
        },
      });
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      );
    }
  };

  private updateName = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { name, password } = req.body;
      const { id } = req.params;

      const user = await this.userService.findByIdWithPassword(id);
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        );
      }
      logger.info(`user ${user.username} found`);

      const isNameValid = this.validate.validateName(name);
      if (!isNameValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.NAME_NOT_VALID,
          ),
        );
      }
      logger.info(`name ${name} is valid`);

      const isPasswordValid = this.validate.validatePassword(password);
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        );
      }
      logger.info(`password ${password} is valid`);

      const isMatch = this.userService.comparePassword(password, user.password);
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        );
      }
      logger.info(`password ${password} match`);

      if (user.name === name) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.NAME_NOT_CHANGE,
          ),
        );
      }

      const updatedUser = await this.userService.updateName(id, name);
      if (!updatedUser) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.NAME_NOT_CHANGE,
          ),
        );
      }
      logger.info(`user ${user.username} updated`);

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.NAME_CHANGE_SUCCESS,
        data: {
          user: updatedUser,
        },
      });
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      );
    }
  };

  private updateEmail = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { email, password } = req.body;
      const { id } = req.params;

      const user = await this.userService.findByIdWithPassword(id);
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        );
      }

      const isEmailValid = this.validate.validateEmail(email);
      if (!isEmailValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.EMAIL_NOT_VALID,
          ),
        );
      }

      const isPasswordValid = this.validate.validatePassword(password);
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        );
      }

      if (user.email === email) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.EMAIL_NOT_CHANGE,
          ),
        );
      }

      const emailCheck = await this.userService.findByEmail(email);
      if (emailCheck) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.EMAIL_EXIST,
          ),
        );
      }

      const isMatch = this.userService.comparePassword(password, user.password);
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        );
      }

      const updatedUser = await this.userService.updateEmail(id, email);
      if (!updatedUser) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.EMAIL_NOT_CHANGE,
          ),
        );
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.EMAIL_CHANGE_SUCCESS,
        data: {
          user: updatedUser,
        },
      });
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      );
    }
  };

  private updatePassword = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { oldPassword, newPassword, confirmPassword } = req.body;
      const { id } = req.params;

      if (newPassword !== confirmPassword) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        );
      }

      const user = await this.userService.findByIdWithPassword(id);
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        );
      }

      const isOldPasswordValid = this.validate.validatePassword(oldPassword);
      if (!isOldPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        );
      }

      const isNewPasswordValid = this.validate.validatePassword(newPassword);
      if (!isNewPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        );
      }

      const isConfirmPasswordValid =
        this.validate.validatePassword(confirmPassword);
      if (!isConfirmPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        );
      }

      const isMatch = this.userService.comparePassword(
        oldPassword,
        user.password,
      );
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        );
      }

      if (oldPassword === newPassword) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_CHANGE,
          ),
        );
      }

      const updatedUser = await this.userService.updatePassword(
        id,
        newPassword,
      );
      if (!updatedUser) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_CHANGE,
          ),
        );
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.PASSWORD_CHANGE_SUCCESS,
        data: {
          user: updatedUser,
        },
      });
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      );
    }
  };

  private updatePhone = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { phone, password } = req.body;
      const { id } = req.params;

      const user = await this.userService.findByIdWithPassword(id);
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        );
      }

      const isPhoneValid = this.validate.validatePhone(phone);
      logger.info({ isPhoneValid });
      if (!isPhoneValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PHONE_NOT_VALID,
          ),
        );
      }

      const isPasswordValid = this.validate.validatePassword(password);
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        );
      }

      const phoneCheck = await this.userService.findByPhone(phone);
      if (phoneCheck) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.PHONE_EXIST,
          ),
        );
      }

      const isMatch = this.userService.comparePassword(password, user.password);
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        );
      }

      if (user.phone === phone) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PHONE_NOT_CHANGE,
          ),
        );
      }

      const updatedUser = await this.userService.updatePhone(id, phone);
      if (!updatedUser) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PHONE_NOT_CHANGE,
          ),
        );
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.PHONE_CHANGE_SUCCESS,
        data: {
          user: updatedUser,
        },
      });
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      );
    }
  };

  private updateAddress = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { address, password } = req.body;
      const { id } = req.params;

      const user = await this.userService.findByIdWithPassword(id);
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        );
      }

      const isAddressValid = this.validate.validateAddress(address);
      if (!isAddressValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.ADDRESS_NOT_VALID,
          ),
        );
      }

      const isPasswordValid = this.validate.validatePassword(password);
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        );
      }

      const isMatch = this.userService.comparePassword(password, user.password);
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        );
      }

      if (user.address === address) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.ADDRESS_NOT_CHANGE,
          ),
        );
      }

      const updatedUser = await this.userService.updateAddress(id, address);
      if (!updatedUser) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.ADDRESS_NOT_CHANGE,
          ),
        );
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.ADDRESS_CHANGE_SUCCESS,
        data: {
          user: updatedUser,
        },
      });
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      );
    }
  };

  private deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { password } = req.body;
      const { id } = req.params;

      const user = await this.userService.findByIdWithPassword(id);
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        );
      }

      const isPasswordValid = this.validate.validatePassword(password);
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        );
      }

      const isMatch = this.userService.comparePassword(password, user.password);
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        );
      }

      const deletedUser = await this.userService.deleteUser(id);
      if (!deletedUser) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.USER_NOT_DELETE,
          ),
        );
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.USER_DELETE_SUCCESS,
      });
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      );
    }
  };

  private getUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { id } = req.params;

      const user = await this.userService.findById(id);
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        );
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.USER_FOUND,
        data: {
          user,
        },
      });
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      );
    }
  };

  private getAllUsers = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const users = await this.userService.findAll();
      if (!users) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        );
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.USER_FOUND,
        data: {
          users,
        },
      });
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      );
    }
  };

  private getUsersStats = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const usersStats = await this.userService.getUsersStats();
      if (!usersStats) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        );
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.USER_FOUND,
        data: {
          users: usersStats,
        },
      });
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      );
    }
  };
}

export default UserController;
```

`api.constant.ts`

```typescript
class Api {
  ...

  public static readonly AUTH: string = `/auth`
  public static readonly USERS: string = '/users'
}
export default Api
```

after that, we'll do some changes to the `www.ts` file:

`www.ts`

```typescript
#!/usr/bin/env ts-node

import 'module-alias/register';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import http from 'http';
import App from '..';

import Variable from '@/env/variable.env';
import logger from '@/utils/logger.util';

// controllers
import AuthController from '@/controllers/auth.controller';
import UserController from '@/controllers/user.controller';

const { app } = new App([new AuthController(), new UserController()]);

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val: any) => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const port = normalizePort(Variable.PORT || '3030');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
  logger.info(`Listening on ${bind}`);
};

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
```

## Summary

All in all, you learnt about JWTs and how to develop a router-level middleware for JWT authentication in Node.js and Express.js using TypeScript. If we wanted to authenticate all incoming requests to our API, we could also utilize it as an application-level middleware.

All code from this tutorial as a complete package is available in this <a href="https://github.com/MKAbuMattar/template-express-typescript-blueprint/tree/part2" target="__blank">repository</a>. If you find this tutorial helpful, please share it with your friends and colleagues, and make sure to star the <a href="https://github.com/MKAbuMattar/template-express-typescript-blueprint/tree/part2" target="__blank">repository</a>.
