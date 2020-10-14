# TypeScript + NodeJS + Express + Docker – Production Ready Setup Template

This is a project template for NodeJS webservice RESTful API with typescript.

To create a new project based on this template usign degit:

```bash
npx degit JulioFlores/ts-node-express-template my-app-name
```

*Note that you'll need to have Node.js 12.x.x installed, and typescript 4.x.x*

## Get started

Install dependencies:

```bash
cd my-app-name
npm install
```

Rename `.dotenv` file to `.env`.

*Note that .env files are ignored in .gitignore.*

The app will crash if it didn't find an .env file. It has some global app configuration you could use in development or production.

```bash
mv .dotenv .env
```

## Start in dev mode

```bash
npm run dev
```

Navigate to http://localhost:3000.

You should see your app running. 

Edit your project in `src/`, save it. Nodemon will catch file changes and respawn the app. 

You can reload the page browser to see your changes. Or make some sample calls with Postman or Insomnia, etc.


💡 Work in progress

@TODO: More docs.