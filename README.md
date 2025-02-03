# GeoPostcodes Frontend Technical Test

This technical test was completed for GeoPostcodes.

The test consists of:

- A landing page with a link to the "Data Explorer" page.
- A Data Explorer page that displays country data fetched from an API. This page allows you to filter the data and includes links to individual country pages.

Detailed instructions for the test are available [here](https://github.com/GeoPostcodes/technical-test/tree/main/front-end).

## Prerequisites

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en) version 20+

## Getting Started

Clone the project

```
git clone https://github.com/HuguesBlanco/geo-postcodes.git
```

Navigate to the app folder.

```
cd geo-postcodes
```

Install dependencies.

```
npm install
```

Run the `dev` script to start the development server.

```
npm run dev
```

The development server will be available at http://localhost:5173.

## Available Scripts

In the project directory, you can run the following scripts:

| Script               | Description                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`        | Starts the development server. Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The development server integrates Hot Module Replacement (HMR), which automatically reloads the application when you make changes to the code. |
| `npm run typescript` | Runs the TypeScript compiler in watch mode. It will continuously check your code for type errors and other issues as you make changes.                                                                                                                        |
| `npm run lint`       | Runs ESLint and displays potential code problems. This helps maintain code quality and consistency.                                                                                                                                                           |
| `npm run test`       | Runs all unit tests using Vitest.                                                                                                                                                                                                                             |
| `npm run build`      | Builds the application for production. This script compiles the TypeScript code and bundles the application with Vite. The output will be in the `dist` folder.                                                                                               |
| `npm run preview`    | Serves the production build locally. This is useful for testing the production build before deploying. **Note**: You must run `npm run build` beforehand.                                                                                                     |
