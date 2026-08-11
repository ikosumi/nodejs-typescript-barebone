# Node.js TypeScript Barebone

A minimal Node.js + TypeScript starter template with modern tooling.

## Tech Stack

- Node.js 22+
- TypeScript 5
- ESLint 9
- Prettier 3
- Vitest 3
- TSX for local development

## Installation

```shell
git clone https://github.com/ikosumi/nodejs-typescript-barebone.git
cd nodejs-typescript-barebone
yarn install
```

## Usage

```shell
# run in watch mode
yarn dev

# build TypeScript
yarn build

# run built output
yarn start
```

## Testing

```shell
# run tests once with coverage
yarn test

# run tests in watch mode
yarn test:watch
```

## Project Structure

```text
nodejs-typescript-barebone/
├── src/
│   ├── app.ts
│   ├── index.ts
│   └── types/
│       └── index.d.ts
├── test/
│   └── app.spec.ts
├── docs/
│   └── explanation.md
├── eslint.config.mjs
├── vitest.config.ts
├── package.json
├── tsconfig.json
└── yarn.lock
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
