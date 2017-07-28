# Set Up

## There are a few items to start with before working on an angular project

1. NodeJS is required
1. Angular cli is required globally (`npm install -g @angular/cli`)
    * Administrator / sudo privileges are required
    * If an error occured such as an install loop try installing `node-gyp` (`npm install -g node-gyp`)
1. Find a location where you want the project folder to be located
1. Use the command line to create an angular project (`ng new my-app`)
1. Update the polyfills.
    * It's a good idea to support as many browsers as possible
    * In `src/polyfills.ts` uncomment all imports and use the necessary npm installs that are required for the polyfills
        * npm installs listed here:
        * `npm install --save classlist.js`
        * `npm install --save web-animations-js`
        * `npm install --save intl`
1. Update `.angular-cli.json` in the root of the project. We want to update the project use use sass
    * Line 22 update `"styles.css"` to be `"styles.scss"`
    * Line 57 update `"styleExt": "css",` to be `"styleExt": "scss",`
    * At the same time update the file name of `src/app/app.component.css` to be `src/app/app.component.scss`
    * Also change the reference of `./app.component.css` to `./app.component.scss` in `src/app/app.component.ts` on line 6

Congratulations! The base project is all set up.


# AngGit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
