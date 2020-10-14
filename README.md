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

![nodemon running](https://i.imgur.com/31kfLKk.png)

Navigate to http://localhost:3000.

You should see your app running and a simple response in the browser with your service name defined in .env.

Edit your project in `src/`, save it. Nodemon will catch file changes and respawn the app. 

You can reload the page browser to see your changes. Or make some sample calls with Postman or Insomnia, etc.

Fire Postman and make requests:

```
GET http://localhost:3000/hello
```

![postman hello](https://i.imgur.com/QkP6NmK.png)


## Docker

This template project has a Dockerfile and `docker-compose.yml` almost ready for production.

*Note that you'll need to have at least `Docker` version 19.03.8 and `docker-compose` version 1.25.5*

To build and start yor service in a container do:

```
docker-compose up --build -d
```

To watch logs:

```
docker-compose logs -f
```

Or you could take advantage of VSCode npm scripts feature and run with a single click from your editor:

![npm scripts](https://i.imgur.com/ExQCIGa.png)

💡 Work in progress

@TODO: More docs.