# React + TypeScript + Vite + NestJs + Prisma db + RTK query + Feature Slice Design

Тренировочный проект по технологиям React + TypeScript + Vite + NestJs + Prisma db + RTK query + Feature Slice Design

Реализован TODO LIST с локальным сервером и базой данных

Что бы начать выполните команды из корневой папки:

- npm i
- cd ./frontend
- npm i
- cd ../backend
- npm i

После всех установок, выйти в корневую папку и выполнить:

- npm start

Версия node js - v20.12.2

frontend localhost - http://localhost:5173/
backend localhost - http://localhost:5000/
db prisma ui - http://localhost:5555


**************************************************************************************************
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
