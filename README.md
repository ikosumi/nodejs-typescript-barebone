# Node.js TypeScript Barebone

A minimalistic Node.js TypeScript project template designed to serve as a starting point for Node.js applications using TypeScript.

## Description

This project provides a basic structure for Node.js applications with TypeScript support. It includes essential configurations for
TypeScript, ESLint, Jest, and Prettier, making it easy to start developing Node.js applications with strong typing and code quality tools in place.

## Installation

To get started with this project, follow these steps

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies

```shell
git clone https://github.com/ikosumi/nodejs-typescript-barebone.git
cd nodejs-typescript-barebone
yarn install
```

## Usage

After installation, you can use the following commands

```shell
# to start the development server
yarn dev
# build the app
yarn build
# start the app
yarn start
```

## Project Structure

```text
nodejs-typescript-barebone/
├── src/
│   ├── app.ts
│   ├── index.ts
│   └── types/
│       └── index.ts
├── test/
│   └── app.spec.ts
├── docs/
│   └── app-explanation.md
├── .eslintrc.js
├── .gitignore
├── jest.config.ts
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

## Testing

This project uses Jest for testing. To run tests

```shell
yarn test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
