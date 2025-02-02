Added "homepage" field in package.json.

Build commands are the `scripts` field inside package.json
`"predeploy": "npm run build"` and `"deploy": "gh-pages -d build"`

Run `npm run deploy` after making any updates.

Using git hub page branch for deployments (to install gh-pages, run `npm install gh-pages --save-dev`)

To map the path to the correct github page url, the base path must to be updated from "/" to "/spice-it" to match the format, `..otoaneba.github.io/spice-it`. 

If an update to the url is needed, update navbar.js, footer.js, and app.js and change the base path from /spice-it to match the website url.

`npm run deploy` will build and deploy. no need to build and then deploy if you're only trying to deploy.

