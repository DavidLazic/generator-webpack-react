# generator-webpack-react [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> React app generator

## Installation

First, install [Yeoman](http://yeoman.io) and generator-webpack-react using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g @davidlazic/generator-webpack-react
```

Then generate your new project:

```bash
yo webpack-react
```

## Environment tasks

| Environment | Command           | Description |
| ----------- |:-----------------:| ----------- |
| Local       | **npm run local** | Run local Node / React with hot reloading enabled.
| Development | **npm run dev**   | Run non-minified DEV build.
| QA          | **npm run qa**    | Run minified QA build (same as PROD build for testing).
| Production  | **npm run prod**  | Run production build.


#### Other tasks

| Task    | Command             | Description |
| ------- |:-------------------:| ----------- |
| Clean   | **npm run clean**   | Clean `dist` project directory.
| ESLint  | **npm run lint**    | Run ES6 error linter.


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [David Lazic]()


[npm-image]: https://badge.fury.io/js/generator-webpack-react.svg
[npm-url]: https://npmjs.org/package/generator-webpack-react
[travis-image]: https://travis-ci.org/DavidLazic/generator-webpack-react.svg?branch=master
[travis-url]: https://travis-ci.org/DavidLazic/generator-webpack-react
[daviddm-image]: https://david-dm.org/DavidLazic/generator-webpack-react.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/DavidLazic/generator-webpack-react
[coveralls-image]: https://coveralls.io/repos/DavidLazic/generator-webpack-react/badge.svg
[coveralls-url]: https://coveralls.io/r/DavidLazic/generator-webpack-react
