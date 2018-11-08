# Stack

React / Redux stack.  

## Installation



Project dependencies:
  - [`nvm`](https://github.com/creationix/nvm)

After `nvm` installment go into `client` and run

```
nvm use
```

Install rest of the dependencies via

```
npm install
```

or

```
yarn
```


## Environment tasks

| Environment | Command           | Description |
| ----------- |:-----------------:| ----------- |
| Local       | **npm run local** | Run local Node / React with hot reloading enabled.
| Development | **npm run dev**   | Run non-minified DEV build.
| QA          | **npm run qa**    | Run minified QA build.
| Production  | **npm run prod**  | Run production build (same as QA).


#### Other tasks

| Task    | Command             | Description |
| ------- |:-------------------:| ----------- |
| Clean   | **npm run clean**   | Clean `dist` project directory.
| ESLint  | **npm run lint**    | Run ES6 error linter.
