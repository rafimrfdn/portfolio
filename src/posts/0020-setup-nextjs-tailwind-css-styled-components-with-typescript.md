---
title: Setup Nextjs Tailwind CSS Styled Components with TypeScript
slug: setup-nextjs-tailwind-css-styled-components-with-typescript
tags: ['Nextjs', 'Tailwind CSS', 'Styled Components', 'TypeScript']
categories: ['Frontend']
date: 2022-11-08T00:38:00.000Z
image: /assets/img/blog/0020-setup-nextjs-tailwind-css-styled-components-with-typescript/setup-nextjs-tailwind-css-styled-components-with-typescript.png
author: MKAbuMattar
description: 'Setup Nextjs Tailwind CSS Styled Components with TypeScript'
prev: how-to-connect-to-aws-rds-mysql-database-to-ec2-instance-with-php-by-using-pdo
next: undefined
featured: true
draft: false
---

## Introduction

In this post, we will setup Nextjs Tailwind CSS Styled Components with TypeScript, and we will use the following tools:

- Nextjs
- Tailwind CSS
- Styled Components
- TypeScript

## Prerequisites

You need to have the following tools installed on your system:

- Node.js
- Yarn

## Setup Nextjs App

### Step 1: Create a Nextjs app

First, we will create a Nextjs app using the following command:

```bash
# Create a Nextjs app
yarn create next-app nextjs-tailwind-styled-components-typescript
```

Then, you will be asked to choose a TypeScript and ESLint, choose the following options:

```bash
# Choose a TypeScript
✔ Would you like to use TypeScript with this project? … No / Yes # Choose Yes

# Choose a ESLint
✔ Would you like to use ESLint with this project? … No / Yes # Choose Yes
```

### Step 2: Go to the Nextjs app directory

After creating the Nextjs app, we need to go to the Nextjs app directory using the following command:

```bash
# Go to the Nextjs app directory
cd nextjs-tailwind-styled-components-typescript
```

### Step 3: Prepare the Nextjs app

First, we need to install the following dependencies:

```bash
# Install the following dependencies
yarn add -D eslint-config-prettier eslint-plugin-prettier prettier
```

Next, we need to create a `.npmrc` file in the root directory of the Nextjs app, and we will add the following content to the `.npmrc` file:

```bash
# Create a .npmrc file
touch .npmrc
```

```yaml
# Add the following content to the .npmrc file
shamefully-hoist=true
engine-strict=true
save-exact = true
tag-version-prefix=""
strict-peer-dependencies = false
auto-install-peers = true
lockfile = true
```

After, we need to create a `.nvmrc` file in the root directory of the Nextjs app, and we will add the following content to the `.nvmrc` file:

```bash
# Create a .nvmrc file
touch .nvmrc
```

```yaml
# Add the following content to the .nvmrc file
lts/fermium
```

Then, we need to create a `.yarnrc` file in the root directory of the Nextjs app, and we will add the following content to the `.yarnrc` file:

```bash
# Create a .yarnrc file
touch .yarnrc
```

```yaml
# Add the following content to the .yarnrc file
--install.ignore-engines true
```

Then, we need to create a `.prettierrc` file in the root directory of the Nextjs app, and we will add the following content to the `.prettierrc` file:

```bash
# Create a .prettierrc file
touch .prettierrc
```

```json
# Add the following content to the .prettierrc file
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "endOfLine": "lf"
}
```

Then, we need to create a `.prettierignore` file in the root directory of the Nextjs app, and we will add the following content to the `.prettierignore` file:

```bash
# Create a .prettierignore file
touch .prettierignore
```

```yaml
# Add the following content to the .prettierignore file
.yarn
.vscode
.next
dist
node_modules
```

Then, we need to create a `.eslintrc` file in the root directory of the Nextjs app, and we will add the following content to the `.eslintrc` file:

```bash
# Create a .eslintrc file
touch .eslintrc
```

```json
# Add the following content to the .eslintrc file
{
  "extends": ["next", "next/core-web-vitals", "plugin:prettier/recommended"],
  "rules": {
    "prettier/prettier": ["error", {}, { "usePrettierrc": true }]
  }
}
```

Then, we need to create a `.eslintignore` file in the root directory of the Nextjs app, and we will add the following content to the `.eslintignore` file:

```bash
# Create a .eslintignore file
touch .eslintignore
```

```yaml
# Add the following content to the .eslintignore file
.yarn
.vscode
.next
dist
node_modules
```

Add, the engines field to the `package.json` file, and we will add the following content to the `package.json` file:

```json
# Add the following content to the package.json file
{
  "engines": {
    "node": ">=16.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
}
```

### Step 4: Install Tailwind CSS

First, we will install Tailwind CSS using the following command:

```bash
# Install Tailwind CSS
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Then, we will create a Tailwind CSS configuration file using the following command:

```bash
# Create a Tailwind CSS configuration file
npx tailwindcss init -p
```

After, we will change the `tailwind.config.js` file, and we will add the following content to the `tailwind.config.js` file:

```js
// Add the following content to the tailwind.config.js file
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Step 5: Install Styled Components

First, we will install Styled Components using the following command:

```bash
# Install Styled Components
yarn add styled-components

# Install Styled Components TypeScript
yarn add -D @types/styled-components

# Install Styled Components Babel Plugin
yarn add -D babel-plugin-styled-components
```

Then, we will create a `.babelrc` file in the root directory of the Nextjs app using the following command:

```bash
# Create a .babelrc file
touch .babelrc
```

Then, we will add the following code to the `.babelrc` file:

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```

### Step 6: Install and Setup `twin.macro`

First, we will install `twin.macro` using the following command:

```bash
# Install twin.macro
yarn add twin.macro

# Install twin.macro Babel Plugin
yarn add -D babel-plugin-twin
```

Then, we will add the following code to the `.babelrc` file:

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ],
    [
      "babel-plugin-twin",
      {
        "debug": false,
        "styled": "styled-components"
      }
    ],
    "babel-plugin-macros"
  ]
}
```

Add, the `babelMacros` field to the `package.json` file, and we will add the following content to the `package.json` file:

```json
# Add the following content to the package.json file
{
  "babelMacros": {
    "twin": {
      "styled": {
        "import": "default",
        "from": "styled-components"
      }
    }
  }
}
```

### Step 7: Setup `_document.tsx`

First, we will create a `pages/_document.tsx` file using the following command:

```bash
# Create a pages/_document.tsx file
touch pages/_document.tsx
```

Then, we will add the following code to the `pages/_document.tsx` file:

```tsx
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

### Step 8: Setup `_app.tsx`

We will add the following code to the `pages/_app.tsx` file:

```tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';

const _App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default _App;
```

### Step 9: Start styling

We will create a `styles` directory in the root directory of the Nextjs app using the following command:

```bash
# Create a styles directory
mkdir styles
```

Then, we will create a `main.ts` file in the `styles` directory using the following command:

```bash
# Create a styles/main.ts file
touch styles/main.ts
```

Then, we will add the following code to the `styles/main.ts` file:

```ts
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = tw.div`
  flex
  min-h-screen
  flex-col
  items-center
  justify-center
  py-2
`;

export const Main = tw.main`
  flex
  w-full
  flex-1
  flex-col
  items-center
  justify-center
  px-20
  text-center
`;

export const Title = tw.h1`
  text-6xl
  font-bold
`;

export const TitleLink = tw.a`
  text-blue-600
`;

export const Description = tw.p`
  mt-3
  text-2xl
`;

export const DescriptionCodeHighlight = tw.code`
  rounded-md
  bg-gray-100
  p-3
  font-mono 
  text-lg
`;

export const Cards = tw.div`
  mt-6 flex
  max-w-4xl
  flex-wrap
  items-center
  justify-around
  sm:w-full
`;

export const Card = tw.a`
  mt-6
  w-96
  rounded-xl
  border
  p-6
  text-left
  hover:text-blue-600
  focus:text-blue-600
`;

export const CardTitle = tw.h3`
  text-2xl
  font-bold
`;

export const CardDescription = tw.p`
  mt-4
  text-xl
`;

export const Footer = tw.footer`
  flex
  h-24
  w-full
  items-center
  justify-center
  border-t
`;

export const FooterCopyRight = tw.a`
  flex
  items-center
  justify-center
  gap-2
`;
```

Then, we will redisign the `pages/index.tsx` file using the following code:

```tsx
import type { NextPage } from 'next';
import Image from 'next/image';

import {
  Container,
  Main,
  Title,
  TitleLink,
  Description,
  DescriptionCodeHighlight,
  Cards,
  Card,
  CardTitle,
  Footer,
  FooterCopyRight,
} from '../styles/Home.styles';

const HomePage: NextPage = () => {
  return (
    <Container>
      <Main>
        <Title>
          Welcome to <TitleLink href="https://nextjs.org">Next.js!</TitleLink>
        </Title>

        <Description>
          Get started by editing{' '}
          <DescriptionCodeHighlight>pages/index.tsx</DescriptionCodeHighlight>
        </Description>

        <Cards>
          <Card href="https://nextjs.org/docs">
            <CardTitle>Documentation &rarr;</CardTitle>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>

          <Card href="https://nextjs.org/learn">
            <CardTitle>Learn &rarr;</CardTitle>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/canary/examples">
            <CardTitle>Examples &rarr;</CardTitle>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Card>
        </Cards>
      </Main>

      <Footer>
        <FooterCopyRight
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </FooterCopyRight>
      </Footer>
    </Container>
  );
};

export default HomePage;
```

## Source Code

The source code for this tutorial is available on [GitHub](https://github.com/MKAbuMattar/nextjs-tailwind-styled-components-typescript)

## Live Demo

The live demo for this tutorial is available on [Vercel](https://nextjs-tailwind-styled-components-typescript.vercel.app/)

## Conclusion

In this tutorial, we have learned how to use Tailwind CSS with Nextjs and Styled Components. We have also learned how to use TypeScript with Nextjs and Styled Components.

## References

- [Nextjs](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [styled-components](https://styled-components.com/)
- [twin.macro](https://github.com/ben-rogerson/twin.macro/)
- [Nextjs with Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)
- [Nextjs with styled-components](https://styled-components.com/docs/advanced#nextjs)
