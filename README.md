# Vuesax Time Tracking

> Single-Page Application for logging and reporting daily tasks.

Note: I'm planning to migrate this project to a React PWA application with a Hasura backend, and finish the authentication strategy.  I want also to implement the [monorepo](https://medium.com/hy-vee-engineering/creating-a-monorepo-with-lerna-yarn-workspaces-cf163908965d) approach.

## Features

- [Vue.js](https://vuejs.org/)
- [Vue CLI 3](https://cli.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuesax Frontend Vue Components](https://lusaxweb.github.io/vuesax/)
- [JSON Web Tokens](https://jwt.io/) (work in progress)

## Hosting

- [Netlify](https://www.netlify.com/)

## Backend API

- See details of the Backend API in the [api-time-tracking](https://github.com/ccalvarez/api-time-tracking) repo.

## Important

This application uses environment variables as explained in the Vue CLI 3 [official guide](https://cli.vuejs.org/guide/mode-and-env.html).
To run the application, copy the `.env` file as `.env.local` and edit the latter to set appropriate values for the environment variables.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## License
[MIT](https://github.com/ccalvarez/vuesax-time-tracking/blob/master/LICENSE)

