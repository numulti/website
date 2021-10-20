# MULTI Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/a28e6d08-5803-4a68-907d-ff83d01cde90/deploy-status)](https://app.netlify.com/sites/numulti/deploys)

This is the website repository for MULTI, Northeastern University's student organization for diversity and inclusion in technology.

_Written in React and built with Gatsbty.js, a React-based static site generator. Hosted on [Netlify](https://netlify.com/)._

## Getting Started

### Ramping Up

If you're new to Gatsby, check out the [official documentation](https://www.gatsbyjs.com/docs/) to learn more about it. To get the hang of it, try building a basic Gatsby site from scratch! 

- [Gatsby - Full Tutorial for Beginners](https://www.youtube.com/watch?v=mHFAM0CXviE)
- [Learn how Gatsby works](https://www.gatsbyjs.org/tutorial/)
- [Gatsby Project Structure](https://www.gatsbyjs.com/docs/reference/gatsby-project-structure)

### Set up

1.  If you haven't already, install [Node.js](https://nodejs.org/en/download/) on your machine
2.  Install [Yarn](https://yarnpkg.com/)
    ```
    npm i yarn
    ```
3.  Install [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
    ```
    npm i gatsby-cli
    ```
4.  Clone and `cd` into this repository
5.  Install project dependencies
    ```
    yarn install
    ```

## Scripts

- Installs project dependencies
  ```
  yarn install
  ```
- Spins up a local development server on http://localhost:8000/
  ```
  yarn start
  ```
- Creates a local production build and serves it on http://localhost:9000/ (helpful for previews and running [performance and accessibility tests](https://developers.google.com/web/tools/lighthouse))
  ```
  yarn build && yarn serve
  ```
- Formats the code
  ```
  yarn format
  ```
- Wipes out the cache folder (helpful for debugging)
  ```
  yarn clean
  ```

## Frameworks and Tools

- **[Yarn](https://yarnpkg.com/):** Package manager for handling project dependencies.
- **[Prettier](https://prettier.io/):** Code formatter.
- **[ESLint](https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/):** Code linter; automaitcally flags syntactical and stylistic problems. Gatsby ships with a built-in ESLint setup.
- **[React](https://reactjs.org/):** JavaScript library for building user interfaces and UI components.
- **[Gatsby](https://www.gatsbyjs.com/):** React-based framework for building static websites.
- **[GraphQL](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/):** A query language for fetching data. Natively integrated with Gatsby.
- **[Gatsby Image API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-image/):** Official Gatsby plugin and React component to optimize image loading.
- **[Typefaces](https://github.com/KyleAMathews/typefaces):** Used to self-host open-source fonts and manage them as project dependencies.
- **[Material-UI](https://material-ui.com/):** A React component library. In this project, we only use grid system components ([Container](https://material-ui.com/components/container/) and [Grid](https://material-ui.com/components/grid/)).
- **[FontAwesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react):** A library of icons that we can import and render.

## Folder Structure

Under the `src` directory:

- **[/assets](src/assets):** Contains media assets, such as SVG graphics, self-hosted icons, audio and video files, and more. Note that image files are stored in a different folder.
- **[/components](src/components):** Contains reusable UI components along with their corresponding stylesheets.
- **[/data](src/data):** Contains any data files used to render elements.
- **[/images](src/images):** Contains all image files (.jpg, .png, etc). Due to GraphQL configurations, images must live directly under this directory (no subfolders). You can read more about this [below](#when-to-use-graphql-for-data).
- **[/layouts](src/layouts):** Contains Gatsby [layout](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/) components, which are for website sections that are shared across multiple pages (such as the header and footer). There's currently one layout component that automatically wraps around all pages (configured in [gatsby-config.js](gatsby-config.js)).
- **[/pages](src/pages):** Contains all page components as per [Gatsby's folder strucutre](https://www.gatsbyjs.com/docs/creating-and-modifying-pages/).
- **[/styles](src/styles):** Contains global stylesheets (imported in [layout.jsx](src/layouts/layout.jsx)), as well as stylesheets for individual pages.
- **[/typefaces](src/typefaces):** Includes imports for font packages (installed via Typefaces).
- **[/utils](src/utils):** Contains utility functions and [custom React Hooks](https://reactjs.org/docs/hooks-custom.html).

## When to Use GraphQL for Data

For the sake of simplicity, we rarely ever use GraphQL to query data.

In `src/data`, most files are in `.js` format, where the data is stored in a constant that is imported into components in a straightforward manner.

### ... So When Do We Actually Use It?

The only time we use GraphQL to query data is when **the data includes images that we have to render** (eg. [team.json](src/data/team.json)), which then allows us to use the Gatsby Image API for image optimization. These data files are in `.json` format instead of `.js`.

The [gatsby-node.js](gatsby-node.js) file has been **already configured** so that, if a `.json` file has been found in `sr/data` with an `image { src { <filename.jpg> }}` property, it will automatically find the corresponding image in `src/images`. In React components, these images can then be queried (along with the rest of the data) via GraphQL and rendered using the Gatsby Image API. **Note that it will only look for images directly under `src/images`, so images should not be placed in subfolders.**

If this is still confusing, take a look at [team.json](src/data/team.json) and [team-cards.jsx](src/components/team-cards/team-cards.jsx). If you need to implement the above, replicating the code structure of those files should be enough to get you the desired result.

If you want to learn more about GraphQL and Gatsby, check out the [documentation](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/).

## Style Guide

### Code Format

Prettier is configured for code formatting. You can format your code by running `yarn format`. This command will also run automatically before every commit.

Prettier configurations can be found in the [.prettierrc](.prettierrc) file.

### Naming Conventions

All files follow a `dash-separated-lowercase` naming convention.

For images inside of `src/images`, add a prefix to categorize a group of images (eg. `team-dania.jpg`, `team-vincent.jpg`, `footer-khoury-logo.png`) to avoid using subfolders.

## Branch Structure

- `main`: Where the production code lives. Whenever a new commit is made, Netlify will automatically kick off a new deploy. In general, **no commits should be made directly to this branch** (read [below](#steps-for-deployment) for deployment steps).
- `develop`: Base branch for integrating features. Branch off of here if you are starting a new feature, and merge back when it's ready for production.

### Feature Branches

Feature branches should be prefixed with the name of the contributer along with the feature that is being worked on (eg. `dania-newsletter-form`).

## Deployment

Netlify is configured to **automatically deploy any changes that are pushed to the `main` branch**. Be careful not to push anything directly to this branch!

### Steps for Deployment

1. Create a pull request from your feature branch to merge into the `develop` branch.
2. Merge pull request(s) into `develop`.
3. Run the `develop` branch locally—after pulling the merged changes—by running either a development or production environment. Make sure everything looks good!
4. Create a pull request from `develop` to merge into `main`.
5. Merge the pull request into `main`. This should automatically kick off a new deploy.
6. Check the deploy logs on Netlify to make sure everything's going smoothly, and your updates should now be live!
