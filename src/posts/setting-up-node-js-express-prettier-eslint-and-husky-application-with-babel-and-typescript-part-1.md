---
title: 'Setting up Node JS, Express,  Prettier, ESLint and Husky Application with Babel and Typescript: Part 1'
slug: setting-up-node-js-express-prettier-eslint-and-husky-application-with-babel-and-typescript-part-1
tags:
  ['NodeJS', 'Express', 'Prettier', 'ESLint', 'Husky', 'Babel', 'TypeScript']
categories: ['Backend']
date: 2022-07-01T00:00:00.000Z
image: /assets/img/blog/setting-up-node-js-express-prettier-eslint-and-husky-application-with-babel-and-typescript-part-1/setting-up-node-js-express-prettier-eslint-and-husky-application-with-babel-and-typescript-part-1.png
author: MKAbuMattar
description: 'Setting up Node JS, Express,  Prettier, ESLint and Husky Application with Babel and Typescript: Part 1.'
prev: setting-up-node-js-express-mongodb-prettier-eslint-and-husky-application-with-babel-and-authentication-as-an-example
next: setting-up-jwt-authentication-in-typescript-with-express-mongodb-babel-prettier-eslint-and-husky-part-2
featured: false
---

## Table of Contents

- [Introduction](#introduction)
- [What is TypeScript?](#what-is-typescript)
- [What is Babel?](#what-is-babel)
- [Project Setup](#project-setup)
  - [Engine Locking](#engine-locking)
  - [Installing and Configuring TypeScript](#installing-and-configuring-typescript)
  - [Installing and Configuring Babel](#installing-and-configuring-babel)
  - [Code Formatting and Quality Tools](#code-formatting-and-quality-tools)
    - [Installing and Configuring Prettier](#installing-and-configuring-prettier)
    - [Installing and Configuring ESLint](#installing-and-configuring-eslint)
  - [Git Hooks](#git-hooks)
    - [Installing and Configuring Husky](#installing-and-configuring-husky)
    - [Installing and Configuring Commitlint](#installing-and-configuring-commitlint)
- [Create somple setup express, typescript and babel application](#create-somple-setup-express-typescript-and-babel-application)
- [Summary](#summary)

---

## Introduction

All code from this tutorial as a complete package is available in this <a href="https://github.com/MKAbuMattar/template-express-typescript-blueprint/tree/part1" target="__blank">repository</a>. If you find this tutorial helpful, please share it with your friends and colleagues, and make sure to star the repository.

So, in this little tutorial, I’ll explain how to set up babel for a basic NodeJS Express, and typescript application so that we may utilize the most recent ES6 syntax in it.

## What is TypeScript?

<a href="http://www.typescriptlang.org/" target="__blank">TypeScript</a> is a superset of JavaScript that mainly offers classes, interfaces, and optional static typing. The ability to enable IDEs to give a richer environment for seeing typical mistakes as you enter the code is one of the major advantages.

- JavaScript and More: TypeScript adds additional syntax to JavaScript to support a **tighter integration with your editor**. Catch errors early in your editor.
- A Result You Can Trust: TypeScript code converts to JavaScript, which **runs anywhere JavaScript runs**: In a browser, on Node.js or Deno and in your apps.
- Safety at Scale: TypeScript understands JavaScript and uses **type inference to give you great tooling** without additional code.

## What is Babel?

<a href="https://babeljs.io/" target="__blank">Babel</a> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

- Transform syntax
- Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
- Source code transformations (codemods)

## Project Setup

We’ll begin by creating a new directory called `template-express-typescript-blueprint` and then we’ll create a new package.json file. We’re going to be using yarn for this example, but you could just as easily use NPM if you choose, but yarn is a lot more convenient.

```bash
mkdir template-express-typescript-blueprint
cd template-express-typescript-blueprint
yarn init -y
```

Now we'll connect to our new project with git.

```bash
git init
```

A new Git repository is created with the git init command. It may be used to start a fresh, empty repository or convert an existing, unversioned project to a Git repository. This is often the first command you'll perform in a new project because the majority of additional Git commands are not accessible outside of an initialized repository.

Now we'll connect to our new project with github, creating a new empty repository, after we've created a new directory called `template-express-typescript-blueprint`.

```bash
echo "# Setting up Node JS, Express,  Prettier, ESLint and Husky Application with Babel and Typescript: Part 1" >> README.md
git init
git add README.md
git commit -m "ci: initial commit"
git branch -M main
git remote add origin git@github.com:<YOUR_USERNAME>/template-express-typescript-blueprint.git
git push -u origin main
```

### Engine Locking

The same Node engine and package management that we use should be available to all developers working on this project. We create two new files in order to achieve that:

- `.nvmrc`: Will disclose to other project users the Node version that is being utilized.
- `.npmrc`: reveals to other project users the package manager being used.

`.nvmrc` is a file that is used to specify the Node version that is being used.

```bash
touch .nvmrc
```

`.nvmrc`

```yaml
lts/fermium
```

`.npmrc` is a file that is used to specify the package manager that is being used.

```bash
touch .npmrc
```

`.npmrc`

```yaml
engine-strict=true
save-exact = true
tag-version-prefix=""
strict-peer-dependencies = false
auto-install-peers = true
lockfile = true
```

Now we'll add few things to our `package.json` file.

`package.json`

```json
{
  "name": "template-express-typescript-blueprint",
  "version": "0.0.0",
  "description": "",
  "keywords": [],
  "main": "index.js",
  "license": "MIT",
  "author": {
    "name": "Mohammad Abu Mattar",
    "email": "mohammad.khaled@outlook.com",
    "url": "https://mkabumattar.github.io/"
  },
  "homepage": "https://github.com/MKAbuMattar/template-express-typescript-blueprint#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/MKAbuMattar/template-express-typescript-blueprint.git"
  },
  "bugs": {
    "url": "https://github.com/MKAbuMattar/template-express-typescript-blueprint/issues"
  }
}
```

Notably, the usage of `engine-strict` said nothing about yarn in particular; we handle that in `packages.json`:

open `packages.json` add the engines:

```json
{
  ...,
   "engines": {
    "node": ">=14.0.0",
    "yarn": ">=1.20.0",
    "npm": "please-use-yarn"
  }
}
```

### Installing and Configuring TypeScript

TypeScript is available as a package in the yarn registry. We can install it with the following command to install it as a dev dependency:

```bash
yarn add -D typescript @types/node
```

Now that TypeScript is installed in your project, we can initialize the configuration file with the following command:

```bash
yarn tsc --init
```

Now we can start config the typescript configuration file.

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "moduleResolution": "node",
    "baseUrl": "./src",
    "declaration": true,
    "emitDeclarationOnly": true,
    "outDir": "./build",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### Installing and Configuring Babel

In order to set up babel in the project, we must first install three main packages.

- `babel-core`: The primary package for running any babel setup or configuration is babel-core.
- `babel-node`: Any version of ES may be converted to ordinary JavaScript using the babel-node library.
- `babel-preset-env`: This package gives us access to forthcoming functionalities that `node.js` does not yet comprehend. New features are constantly being developed, thus it will probably take some time for NodeJS to incorporate them.

```bash
yarn add -D @babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/preset-env @babel/preset-typescript @babel/runtime babel-core babel-plugin-module-resolver babel-plugin-source-map-support
```

After that, we need to create a file called `.babelrc` in the project’s root directory, and we paste the following block of code there.

```bash
touch .babelrc
```

`.babelrc`

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-typescript"],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
    "source-map-support"
  ],
  "sourceMaps": "inline"
}
```

Add the following line to the `package.json` file to compile, and build the code with babel:

```json
{
  "scripts": {
    "build:compile": "npx babel src --extensions .ts --out-dir build --source-maps",
    "build:types": "tsc"
  }
}
```

Now we need to add `.gitignore` file to the project, and add the following line to it:

The `.gitignore` file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo.

```bash
touch .gitignore
```

`.gitignore`

```yaml
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# vuepress build output
.vuepress/dist

# vuepress v2.x temp and cache directory
.temp
.cache

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*
```

### Code Formatting and Quality Tools

We will be using two tools in order to establish a standard that will be utilized by all project participants to maintain consistency in the coding style and the use of fundamental best practices:

- <a href="https://prettier.io/" target="__blank">Prettier</a>: A tool that will help us to format our code consistently.
- <a href="https://eslint.org/" target="__blank">ESLint</a>: A tool that will help us to enforce a consistent coding style.

#### Installing and Configuring Prettier

Prettier will handle the automated file formatting for us. Add it to the project right now.

```bash
yarn add -D prettier
```

Additionally, I advise getting the <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="__blank">Prettier VS Code extension</a> so that you may avoid using the command line tool and have VS Code take care of the file formatting for you. It’s still required to include it here even when it’s installed and set up in your project since VSCode will utilize your project’s settings.

We’ll create two files in the root:

- `.prettierrc`: This file will contain the configuration for prettier.
- `.prettierignore`: This file will contain the list of files that should be ignored by prettier.

`.prettierrc`

```json
{
  "trailingComma": "all",
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true
}
```

`.prettierignore`

```yaml
node_modules
build
```

I’ve listed the folders in that file that I don’t want Prettier to waste any time working on. If you’d want to disregard specific file types in groups, you may also use patterns like \*.html.

Now we add a new script to `package.json` so we can run Prettier:

`package.json`

```json
"scripts: {
  ...,
  "prettier": "prettier --write \"src/**/*.ts\"",
  "prettier:check": "prettier --check \"src/**/*.ts\"",
}
```

You can now run `yarn prettier` to format all files in the project, or `yarn prettier:check` to check if all files are formatted correctly.

```bash
yarn prettier:check
yarn prettier
```

to automatically format, repair, and save all files in your project that you haven’t ignored. My formatter updated around 7 files by default. The source control tab on the left of VS Code has a list of altered files where you may find them.

#### Installing and Configuring ESLint

We’ll begin with ESLint, which is a tool that will help us to enforce a consistent coding style, at first need to install the dependencies.

```bash
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise
```

We’ll create two files in the root:

- `.eslintrc`: This file will contain the configuration for ESLint.
- `.eslintignore`: This file will contain the list of files that should be ignored by ESLint.

`.eslintrc`

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"]
  },
  "env": {
    "browser": true,
    "es2021": true
  }
}
```

`.eslintignore`

```yaml
node_modules
build
```

Now we add a new script to `package.json` so we can run ESLint:

`package.json`

```json
"scripts: {
  ...,
  "lint": "eslint --ignore-path .eslintignore \"src/**/*.ts\" --fix",
  "lint:check": "eslint --ignore-path .eslintignore \"src/**/*.ts\"",
}
```

You can test out your config by running:

You can now run `yarn lint` to format all files in the project, or `yarn lint:check` to check if all files are formatted correctly.

```bash
yarn lint:check
yarn lint
```

### Git Hooks

Before moving on to component development, there is one more section on configuration. If you want to expand on this project in the future, especially with a team of other developers, keep in mind that you’ll want it to be as stable as possible. To get it right from the beginning is time well spent.

We’re going to use a program called <a href="https://husky.run/" target="__blank">Husky</a>.

#### Installing and Configuring Husky

Husky is a tool for executing scripts at various git stages, such as add, commit, push, etc. We would like to be able to specify requirements and, provided our project is of acceptable quality, only enable actions like commit and push to proceed if our code satisfies those requirements.

To install Husky run

```bash
yarn add husky

yarn husky install
```

A `.husky` directory will be created in your project by the second command. Your hooks will be located here. As it is meant for other developers as well as yourself, make sure this directory is included in your code repository.

Add the following script to your `package.json` file:

`package.json`

```json
"scripts: {
  ...,
  "prepare": "husky install"
}
```

This will ensure Husky gets installed automatically when other developers run the project.

To create a hook run:

```bash
npx husky add .husky/pre-commit "yarn lint"
```

The aforementioned states that the `yarn lint` script must run and be successful before our commit may be successful. Success here refers to the absence of mistakes. You will be able to get warnings (remember in the ESLint config a setting of 1 is a warning and 2 is an error in case you want to adjust settings).

We’re going to add another one:

```bash
npx husky add .husky/pre-push "yarn build"
```

This makes sure that we can’t push to the remote repository until our code has built correctly. That sounds like a very acceptable requirement, don’t you think? By making this adjustment and attempting to push, feel free to test it.

#### Installing and Configuring Commitlint

Finally, we’ll add one more tool. Let’s make sure that everyone on the team is adhering to them as well (including ourselves! ), since we have been using a uniform format for all of our commit messages so far. For our commit messages, we may add a linter.

```bash
yarn add -D @commitlint/config-conventional @commitlint/cli
```

We will configure it using a set of common defaults, but since I occasionally forget what prefixes are available, I like to explicitly provide that list in a `commitlint.config.js` file:

```bash
touch commitlint.config.js
```

`commitlint.config.js`

```js
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
      ],
    ],
  },
};
```

Afterward, use Husky to enable commitlint by using:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

now push your changes to the remote repository and you’ll be able to commit with a valid commit message.

```bash
git add .
```

```bash
git commit -m "ci: eslint | prettier | husky"
```

```bash
╭─mkabumattar@mkabumattar in repo: template-express-typescript-blueprint on  main [+] is  v0.0.0 via  v18.4.0 took 41ms
╰─λ git commit -m "ci: eslint | prettier | husky"
yarn run v1.22.18
$ eslint --ignore-path .eslintignore "src/**/*.ts" --fix
Done in 1.31s.
[main 7fbc14f] ci: eslint | prettier | husky
17 files changed, 4484 insertions(+)
create mode 100644 .babelrc
create mode 100644 .eslintignore
create mode 100644 .eslintrc
create mode 100644 .gitattributes
create mode 100644 .gitignore
create mode 100755 .husky/commit-msg
create mode 100755 .husky/pre-commit
create mode 100755 .husky/pre-push
create mode 100644 .npmrc
create mode 100644 .nvmrc
create mode 100644 .prettierignore
create mode 100644 .prettierrc
create mode 100644 commitlint.config.js
create mode 100644 package.json
create mode 100644 src/index.ts
create mode 100644 tsconfig.json
create mode 100644 yarn.lock
```

```bash
git push -u origin main
```

```bash
╭─mkabumattar@mkabumattar in repo: template-express-typescript-blueprint on  main [⇡1] is v0.0.0 via  v18.4.0 took 2s
╰─λ git push -u origin main
yarn run v1.22.18
error Command "build" not found.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
husky - pre-push hook exited with code 1 (error)
error: failed to push some refs to 'github.com:MKAbuMattar/template-express-typescript-blueprint.git'
```

now we need to make sure that we can push to the remote repository, we forgot to add the `build` command to the `.husky/pre-push` file.

```json
"scripts": {
    "build": "yarn build:compile && yarn build:types",
    ...,
}
```

```bash
╭─mkabumattar@mkabumattar in repo: template-express-typescript-blueprint on  main [⇡1] is v0.0.0 via  v18.4.0 took 2s
[🔴] × git push -u origin main
yarn run v1.22.18
$ yarn build:compile && yarn build:types
$ npx babel src --extensions .ts --out-dir build --source-maps
Successfully compiled 1 file with Babel (360ms).
$ tsc
Done in 2.63s.
Enumerating objects: 21, done.
Counting objects: 100% (21/21), done.
Delta compression using up to 4 threads
Compressing objects: 100% (16/16), done.
Writing objects: 100% (20/20), 79.42 KiB | 9.93 MiB/s, done.
Total 20 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To github.com:MKAbuMattar/template-express-typescript-blueprint.git
1583ab9..7fbc14f  main -> main
branch 'main' set up to track 'origin/main'.
```

## Create somple setup express, typescript and babel application

Create a file structure like this:

```text
├── src
│   ├── index.ts
│   └── bin
│       └── www.ts 
├────── constants
│       └── api.constant.ts
│       └── http.code.constant.ts
│       └── http.reason.constant.ts
│       └── message.constant.ts
├────── interfaces
│       └── controller.interface.ts
├────── middlewares
│       └── error.middleware.ts
├────── utils
│       └── logger.util.ts
│       └── exceptions
│           └── http.exception.ts
├── .babelrc
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
├── yarn.lock
```

start to add express and typescript dependencies:

```bash
yarn add express
```

```bash
yarn add -D @types/express
```

New we’ll add a new package:

- `compression`: Your `Node.js` app’s main file contains middleware for `compression`. GZIP, which supports a variety of `compression` techniques, will then be enabled. Your JSON response and any static file replies will be smaller as a result.

```bash
yarn add compression
```

- `cookie-parser`: Your `Node.js` app’s main file contains middleware for `cookie-parser`. This middleware will parse the cookies in the request and set them as properties of the request object.

```bash
yarn add cookie-parser
```

- `core-js`: Your `Node.js` app’s main file contains middleware for `core-js`. This middleware will add the necessary polyfills to your application.

```bash
yarn add core-js
```

- `cors`: Your `Node.js` app’s main file contains middleware for `cors`. This middleware will add the necessary headers to your application.

```bash
yarn add cors
```

- `helmet`: Your `Node.js` app’s main file contains middleware for `helmet`. This middleware will add security headers to your application.

```bash
yarn add helmet
```

- `regenerator-runtime`: Your `Node.js` app’s main file contains middleware for `regenerator-runtime`. This middleware will add the necessary polyfills to your application.

```bash
yarn add regenerator-runtime
```

after that we need to add the type for the dependencies:

```bash
yarn add -D @types/compression @types/cookie-parser @types/core-js @types/cors @types/regenerator-runtime
```

now we'll start with create constants and we'll add new things after that:

`api.constant.ts`

```ts
class Api {
  public static readonly ROOT: string = '/';

  public static readonly API: string = '/api';
}
export default Api;
```

`http.code.constant.ts`

```ts
class HttpCode {
  public static readonly CONTINUE: number = 100;

  public static readonly SWITCHING_PROTOCOLS: number = 101;

  public static readonly PROCESSING: number = 102;

  public static readonly OK: number = 200;

  public static readonly CREATED: number = 201;

  public static readonly ACCEPTED: number = 202;

  public static readonly NON_AUTHORITATIVE_INFORMATION: number = 203;

  public static readonly NO_CONTENT: number = 204;

  public static readonly RESET_CONTENT: number = 205;

  public static readonly PARTIAL_CONTENT: number = 206;

  public static readonly MULTI_STATUS: number = 207;

  public static readonly ALREADY_REPORTED: number = 208;

  public static readonly IM_USED: number = 226;

  public static readonly MULTIPLE_CHOICES: number = 300;

  public static readonly MOVED_PERMANENTLY: number = 301;

  public static readonly MOVED_TEMPORARILY: number = 302;

  public static readonly SEE_OTHER: number = 303;

  public static readonly NOT_MODIFIED: number = 304;

  public static readonly USE_PROXY: number = 305;

  public static readonly SWITCH_PROXY: number = 306;

  public static readonly TEMPORARY_REDIRECT: number = 307;

  public static readonly BAD_REQUEST: number = 400;

  public static readonly UNAUTHORIZED: number = 401;

  public static readonly PAYMENT_REQUIRED: number = 402;

  public static readonly FORBIDDEN: number = 403;

  public static readonly NOT_FOUND: number = 404;

  public static readonly METHOD_NOT_ALLOWED: number = 405;

  public static readonly NOT_ACCEPTABLE: number = 406;

  public static readonly PROXY_AUTHENTICATION_REQUIRED: number = 407;

  public static readonly REQUEST_TIMEOUT: number = 408;

  public static readonly CONFLICT: number = 409;

  public static readonly GONE: number = 410;

  public static readonly LENGTH_REQUIRED: number = 411;

  public static readonly PRECONDITION_FAILED: number = 412;

  public static readonly PAYLOAD_TOO_LARGE: number = 413;

  public static readonly REQUEST_URI_TOO_LONG: number = 414;

  public static readonly UNSUPPORTED_MEDIA_TYPE: number = 415;

  public static readonly REQUESTED_RANGE_NOT_SATISFIABLE: number = 416;

  public static readonly EXPECTATION_FAILED: number = 417;

  public static readonly IM_A_TEAPOT: number = 418;

  public static readonly METHOD_FAILURE: number = 420;

  public static readonly MISDIRECTED_REQUEST: number = 421;

  public static readonly UNPROCESSABLE_ENTITY: number = 422;

  public static readonly LOCKED: number = 423;

  public static readonly FAILED_DEPENDENCY: number = 424;

  public static readonly UPGRADE_REQUIRED: number = 426;

  public static readonly PRECONDITION_REQUIRED: number = 428;

  public static readonly TOO_MANY_REQUESTS: number = 429;

  public static readonly REQUEST_HEADER_FIELDS_TOO_LARGE: number = 431;

  public static readonly UNAVAILABLE_FOR_LEGAL_REASONS: number = 451;

  public static readonly INTERNAL_SERVER_ERROR: number = 500;

  public static readonly NOT_IMPLEMENTED: number = 501;

  public static readonly BAD_GATEWAY: number = 502;

  public static readonly SERVICE_UNAVAILABLE: number = 503;

  public static readonly GATEWAY_TIMEOUT: number = 504;

  public static readonly HTTP_VERSION_NOT_SUPPORTED: number = 505;

  public static readonly VARIANT_ALSO_NEGOTIATES: number = 506;

  public static readonly INSUFFICIENT_STORAGE: number = 507;

  public static readonly LOOP_DETECTED: number = 508;

  public static readonly NOT_EXTENDED: number = 510;

  public static readonly NETWORK_AUTHENTICATION_REQUIRED: number = 511;

  public static readonly NETWORK_CONNECT_TIMEOUT_ERROR: number = 599;
}

export default HttpCode;
```

`http.reason.constant.ts`

```ts
class HttpReason {
  public static readonly CONTINUE: string = 'Continue';

  public static readonly SWITCHING_PROTOCOLS: string = 'Switching Protocols';

  public static readonly PROCESSING: string = 'Processing';

  public static readonly OK: string = 'OK';

  public static readonly CREATED: string = 'Created';

  public static readonly ACCEPTED: string = 'Accepted';

  public static readonly NON_AUTHORITATIVE_INFORMATION: string =
    'Non-Authoritative Information';

  public static readonly NO_CONTENT: string = 'No Content';

  public static readonly RESET_CONTENT: string = 'Reset Content';

  public static readonly PARTIAL_CONTENT: string = 'Partial Content';

  public static readonly MULTI_STATUS: string = 'Multi-Status';

  public static readonly ALREADY_REPORTED: string = 'Already Reported';

  public static readonly IM_USED: string = 'IM Used';

  public static readonly MULTIPLE_CHOICES: string = 'Multiple Choices';

  public static readonly MOVED_PERMANENTLY: string = 'Moved Permanently';

  public static readonly MOVED_TEMPORARILY: string = 'Moved Temporarily';

  public static readonly SEE_OTHER: string = 'See Other';

  public static readonly NOT_MODIFIED: string = 'Not Modified';

  public static readonly USE_PROXY: string = 'Use Proxy';

  public static readonly SWITCH_PROXY: string = 'Switch Proxy';

  public static readonly TEMPORARY_REDIRECT: string = 'Temporary Redirect';

  public static readonly BAD_REQUEST: string = 'Bad Request';

  public static readonly UNAUTHORIZED: string = 'Unauthorized';

  public static readonly PAYMENT_REQUIRED: string = 'Payment Required';

  public static readonly FORBIDDEN: string = 'Forbidden';

  public static readonly NOT_FOUND: string = 'Not Found';

  public static readonly METHOD_NOT_ALLOWED: string = 'Method Not Allowed';

  public static readonly NOT_ACCEPTABLE: string = 'Not Acceptable';

  public static readonly PROXY_AUTHENTICATION_REQUIRED: string =
    'Proxy Authentication Required';

  public static readonly REQUEST_TIMEOUT: string = 'Request Timeout';

  public static readonly CONFLICT: string = 'Conflict';

  public static readonly GONE: string = 'Gone';

  public static readonly LENGTH_REQUIRED: string = 'Length Required';

  public static readonly PRECONDITION_FAILED: string = 'Precondition Failed';

  public static readonly PAYLOAD_TOO_LARGE: string = 'Payload Too Large';

  public static readonly REQUEST_URI_TOO_LONG: string = 'Request URI Too Long';

  public static readonly UNSUPPORTED_MEDIA_TYPE: string =
    'Unsupported Media Type';

  public static readonly REQUESTED_RANGE_NOT_SATISFIABLE: string =
    'Requested Range Not Satisfiable';

  public static readonly EXPECTATION_FAILED: string = 'Expectation Failed';

  public static readonly IM_A_TEAPOT: string = "I'm a teapot";

  public static readonly METHOD_FAILURE: string = 'Method Failure';

  public static readonly MISDIRECTED_REQUEST: string = 'Misdirected Request';

  public static readonly UNPROCESSABLE_ENTITY: string = 'Unprocessable Entity';

  public static readonly LOCKED: string = 'Locked';

  public static readonly FAILED_DEPENDENCY: string = 'Failed Dependency';

  public static readonly UPGRADE_REQUIRED: string = 'Upgrade Required';

  public static readonly PRECONDITION_REQUIRED: string =
    'Precondition Required';

  public static readonly TOO_MANY_REQUESTS: string = 'Too Many Requests';

  public static readonly REQUEST_HEADER_FIELDS_TOO_LARGE: string =
    'Request Header Fields Too Large';

  public static readonly UNAVAILABLE_FOR_LEGAL_REASONS: string =
    'Unavailable For Legal Reasons';

  public static readonly INTERNAL_SERVER_ERROR: string =
    'Internal Server Error';

  public static readonly NOT_IMPLEMENTED: string = 'Not Implemented';

  public static readonly BAD_GATEWAY: string = 'Bad Gateway';

  public static readonly SERVICE_UNAVAILABLE: string = 'Service Unavailable';

  public static readonly GATEWAY_TIMEOUT: string = 'Gateway Timeout';

  public static readonly HTTP_VERSION_NOT_SUPPORTED: string =
    'HTTP Version Not Supported';

  public static readonly VARIANT_ALSO_NEGOTIATES: string =
    'Variant Also Negotiates';

  public static readonly INSUFFICIENT_STORAGE: string = 'Insufficient Storage';

  public static readonly LOOP_DETECTED: string = 'Loop Detected';

  public static readonly NOT_EXTENDED: string = 'Not Extended';

  public static readonly NETWORK_AUTHENTICATION_REQUIRED: string =
    'Network Authentication Required';

  public static readonly NETWORK_CONNECT_TIMEOUT_ERROR: string =
    'Network Connect Timeout Error';
}

export default HttpReason;
```

`message.constant.ts`

```ts
class Message {
  public static readonly API_WORKING: string = 'API is working';

  public static readonly SOMETHING_WENT_WRONG: string = 'Something went wrong';
}
export default Message;
```

`utils/exception/http.exception.ts`

```ts
class HttpException extends Error {
  public statusCode: number;

  public statusMsg: string;

  public msg: string;

  constructor(statusCode: number, statusMsg: string, msg: any) {
    super(msg);
    this.statusCode = statusCode;
    this.statusMsg = statusMsg;
    this.msg = msg;
  }
}

export default HttpException;
```

`error.middleware.ts`

```ts
import { Request, Response, NextFunction } from 'express';
import HttpException from '@/utils/exceptions/http.exception';

// http constant
import ConstantHttpCode from '@/constants/http.code.constant';
import ConstantHttpReason from '@/constants/http.reason.constant';

// message constant
import ConstantMessage from '@/constants/message.constant';

const errorMiddleware = (
  error: HttpException,
  _req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  try {
    const statusCode =
      error.statusCode || ConstantHttpCode.INTERNAL_SERVER_ERROR;
    const statusMsg =
      error.statusMsg || ConstantHttpReason.INTERNAL_SERVER_ERROR;
    const msg = error.msg || ConstantMessage.SOMETHING_WENT_WRONG;

    return res.status(statusCode).send({
      status: {
        code: statusCode,
        msg: statusMsg,
      },
      msg: msg,
    });
  } catch (err) {
    return next(err);
  }
};

export default errorMiddleware;
```

`controller.interface.ts`

```ts
import { Router } from 'express';

interface Controller {
  path: string;
  router: Router;
}

export default Controller;
```

`index.ts`

```ts
import express, { Application, Request, Response, NextFunction } from 'express';

import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';

import ErrorMiddleware from './middlewares/error.middleware';
import HttpException from './utils/exceptions/http.exception';
import Controller from './interfaces/controller.interface';

// api constant
import ConstantAPI from './constants/api.constant';

// message constant
import ConstantMessage from './constants/message.constant';

// http constant
import ConstantHttpCode from './constants/http.code.constant';
import ConstantHttpReason from './constants/http.reason.constant';

class App {
  public app: Application;

  constructor(controllers: Controller[]) {
    this.app = express();

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
}

export default App;
```

`www.ts`

```ts
#!/usr/bin/env ts-node

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import http from 'http';
import App from '..';

// controllers

const { app } = new App([]);

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

const port = normalizePort('3030');
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
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
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
  console.info(`Listening on ${bind}`);
};

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
```

To run the app, and start tarcking the server, with the changes, we need to add new dependency.

Concurrently: is a tool to run multiple tasks at the same time.

```bash
yarn add -D concurrently
```

Then, we'll add the following command to scripts section of package.json:

```json
"scripts": {
  "start": "node build/bin/www.js",
  "clean": "rm -rf build",
  "build": "yarn clean && concurrently yarn:build:*",
  "build:compile": "npx babel src --extensions .ts --out-dir build --source-maps",
  "build:types": "tsc",
  "dev": "concurrently yarn:dev:* --kill-others \"nodemon --exec node build/bin/www.js\"",
  "dev:compile": "npx babel src --extensions .ts --out-dir build --source-maps --watch",
  "dev:types": "tsc --watch",
  ...,
}
```

New you can run the application with yarn start or yarn dev, and you can also run the application with yarn build to create a production version.

```bash
yarn dev

yarn start

yarn build
```

## Summary

Finally, after compilation, we can now need to deploy the compiled version in the NodeJS production server.

All code from this tutorial as a complete package is available in this <a href="https://github.com/MKAbuMattar/template-express-typescript-blueprint/tree/part1" target="__blank">repository</a>.
