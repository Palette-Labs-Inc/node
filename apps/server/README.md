SERVER
# Getting started with your app

**IMPORTANT NOTE** if you make any changes to DTOs or the prisma schema, you must generate your prisma client with `npm run prisma:generate` before starting the server.

## Available Scripts

In the `server` subdirectory, you can run:

### `npm start`

Runs the app in development mode.
By default, it is accessible at http://localhost:8080

### `npm test`

Runs tests.

### `npm run build`

Builds the app for production in the `dist` folder.

Your app is ready to be deployed!

## Environment Variables:

| Environment          | Description                              | Value                                                      |
| -------------------- | ---------------------------------------- | ---------------------------------------------------------- |
| DEBUG_MODE           | Debug level                              | 1                                                          |
| DB_URL               | Local database connection URL            | db-provider://admin:admin@localhost:${DB_PORT}/\${DB_NAME} |
| DB_PORT              | Local database port                      |                                                            |
| DB_USER              | Local database username                  | admin                                                      |
| DB_PASSWORD          | Local database password                  | admin                                                      |
| COMPOSE_PROJECT_NAME | Docker Compose project name              | amp\_{applicationId}                                       |
| SERVER_PORT          | The port that the server is listening to | 3009                                                       |
| JWT_SECRET_KEY       | JWT secret                               | Change_ME!!!                                               |
| JWT_EXPIRATION       | JWT expiration in days                   | 2d                                                         |

\*db-provider - the prisma DB provider (for example: for postgres is postgresql)

## Getting Started - Local Development

### Prerequisites

Make sure you have Node.js 16.x, npm, and Docker installed.

### Install dependencies

In the `server` subdirectory, run:

```console
cd server
cp .env.example .env
npm install
```

### Generate Prisma client

```console
npm run prisma:generate
```

### Start database using Docker

```console
npm run docker:db
```

### Initialize the database

```console
npm run db:init
```

### Start the server

```console
npm start
```

## Getting Started - Docker Compose

In the `server` subdirectory, run:

```console
npm run compose:up
```

## To Run Prisma Studio
[Prisma Studio](https://www.prisma.io/blog/prisma-studio-3rtf78dg99fe) is a data manipulation and exploration tool. 

In the `server` subdirectory, you can use prisma studio by running:

```console
cd server
cp .env .env.local
npx prisma studio
```