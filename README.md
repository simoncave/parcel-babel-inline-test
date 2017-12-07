# Parcel/Babel/inlining problem

See https://github.com/parcel-bundler/parcel/issues/106 for more information about the problem this project demonstrates.

## Instructions

1. `yarn` or `npm install`
2. `yarn start` or `npm start`
3. Open `http://localhost:1234`

### Expected

> Hello, World! Inlining via fs.readFileSync is working!

### Observed

> Oh no, inlining via fs.readFileSync is not working: TypeError: \_fs2.default.readFileSync is not a function. (In '\_fs2.default.readFileSync(\_\_dirname + '/name.txt', 'utf8')', '\_fs2.default.readFileSync' is undefined)

### To demonstrate expected behavior

#### Option 1: Disable Babel

1. Stop Parcel (<kbd>^C</kbd>)
2. Disable Babel (`rm .babelrc`)
3. Clear the parcel cache (`rm -rf .cache`)
4. `yarn start` or `npm start`
5. Open `http://localhost:1234`

#### Option 2: Disable module transpilation

1. Stop Parcel (<kbd>^C</kbd>)
2. Update `.babelrc`:

    ```json
    {
      "presets": [
        ["env", {
          "modules": false
        }]
      ]
    }
    ```
3. Clear the parcel cache (`rm -rf .cache`)
4. `yarn start` or `npm start`
5. Open `http://localhost:1234`
