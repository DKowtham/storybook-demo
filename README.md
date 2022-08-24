# ACQ-COMPONENTS

The aim of this project is to provide a common repository from which we can import webcomponents ready to be used on any of our projects. 

## Setup

Install dependencies:

```bash
npm i
```

## Build

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured on `tsconfig.json` to be very strict. 

## How to install the project as a node module

In order to use this package you first need to [authenticate to the `@papernest` registry](https://docs.gitlab.com/ee/user/packages/npm_registry/#authenticate-to-the-package-registry).

# Install the package:
```bash
npm i @papernest/acq-components
```

# How to use 
There are 2 ways to use the package in your project:
* Use `src` files if you want to contribute or use the TypeScript version in your project
* Use `lib` files if you want to import the package inside your project with a build step

## Testing

This repository uses modern-web.dev's
[@web/test-runner](https://www.npmjs.com/package/@web/test-runner) along with
Mocha, Chai, and some related helpers for testing. See the
[modern-web.dev testing documentation](https://modern-web.dev/docs/test-runner/overview) for
more information.

Tests can be run with the `test` script, which will run your tests against Lit's development mode (with more verbose errors) as well as against Lit's production mode:

```bash
npm test
```

For local testing during development, the `test:dev:watch` command will run your tests in Lit's development mode (with verbose errors) on every change to your source files:

```bash
npm test:watch
```

Alternatively the `test:prod` and `test:prod:watch` commands will run your tests in Lit's production mode.

## Dev Server

We use modern-web.dev's [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) for previewing the project without additional build steps. Web Dev Server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers. See [modern-web.dev's Web Dev Server documentation](https://modern-web.dev/docs/dev-server/overview/) for more information.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

## Working locally

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html once the server is running. Note that this command will serve your code using Lit's development mode (with more verbose errors). To serve your code against Lit's production mode, use `npm run serve:prod`.

## Linting

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict and are set on `.eslintrc.json` and `tsconfig.json`.

To lint the project run:

```bash
npm run lint
```

## Bundling and minification

This project doesn't include any build-time optimizations like bundling or minification. We recommend publishing components as unoptimized JavaScript modules, and performing build-time optimizations at the application level. This gives build tools the best chance to deduplicate code, remove dead code, and so on.

For information on building application projects that include LitElement components, see [Build for production](https://lit.dev/docs/tools/production/) on the Lit site.

## Documenting your web components

We use web-component-analyzer do document our components. 
