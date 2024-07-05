# Test on track

To build this project you will require: NodeJS and Yarn or NPM

## Commands

Running local:

 - Before eveything run: `cp .env.local .env`. This will create the .env file with the variables needed to run locally.
 - `yarn be4-install`: First installation of all the dependencies and setup husky
 - `yarn be4-commit`: Run all unit test and linter before commit to ensure will not break husky or CI/CD pipeline
 - `yarn start`: Run in develop mode
 - `yarn build`: Clean the build folder and builds all the static assets for the project within the /build folder
 - `yarn test`: Runs all the unit tests
 - `yarn testcover`: Runs all the unit tests with coverage
 - `yarn lint`: Runs the code linter for JS and SCSS files
 - `yarn lint:ts`: Runs the code linter on all ts files
 - `yarn lint:scss`: Runs the code linter on all scss files

## Important:

I am using node-sass to enable SCSS modules, node-sass require a correctly version of Node to work properly:

NodeJS  | Minimum node-sass version | Node Module
--------|--------------------------|------------
Node 20 | 9.0+                     | 115
Node 19 | 8.0+                     | 111
Node 18 | 8.0+                     | 108
Node 17 | 7.0+,<8.0                | 102
Node 16 | 6.0+                     | 93
Node 15 | 5.0+,<7.0                | 88
Node 14 | 4.14+,<9.0               | 83

As my machine is currently running Node 18, my node-sass is config as 8.0.

## Git Hooks:

The project count with Husky and Lint Staged:
 - `pre-commit`: Run all scripts on lint-staged
    - `lint-staged`: Run all linters and add to commit if something be fix
 - `pre-push`: Run all unit tests.

## Project structure

 - `src`: JavaScript source code of the application
 - `public`: HTML template

## Development URLs

- Home screen: `http://localhost:3000/`