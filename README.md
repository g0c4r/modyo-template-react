
<img src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png" width="60"> <img src="https://cloud.modyocdn.com/uploads/3e33d46c-1555-4f58-a218-6f2b5d80b4cd/original/modyo.svg" width=""> 

# React + Modyo Widget

This template provides a minimal setup to get React working in Vite with Modyo and some ESLint rules.

## Usage

If this is your first time using Modyo CLI, open your terminal as administrator and run the following command:

```bash
  npm i -g @modyo/cli #via npm
  yarn global add @modyo/cli #via yarn
```

1. Clone this repository.

2. Install dependencies.
**Use yarn to install dependencies**

   ```bash
   yarn install
   ```

3. Create .env file and copy the content of .env.example

4. Run the development server.

   ```bash
   yarn dev
   ```

5. Before pushing your widget to Modyo, you must change the following files:

   ***package.json***
   `"name": "your-widget-name",`

   ***src/main.tsx***
   `const widgetName = 'your-widget-name';`

   ***index.html***
   `<div id="your-widget-name"></div>`

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.
Open <http://127.0.0.1:5173> to view it in the browser.

Note: you can use ```--host``` flag to expose the server to other devices in your network.

### `yarn build`

Builds the app for production to the `dist` folder.

### `yarn modyo-push`

Builds the app for production and pushes the app to Modyo.
Note: You must have the ```modyo-cli``` dependency installed globally.

## Stack

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Modyo](https://docs.modyo.com/es/)
- [Yarn](https://yarnpkg.com/)
- [Tailwindcss](https://tailwindcss.com/)
