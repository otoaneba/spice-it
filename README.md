Added "homepage" field in package.json.

Build commands are the `scripts` field inside package.json
`"predeploy": "npm run build"` and `"deploy": "gh-pages -d build"`

Run `npm run deploy` after making any updates.

Using git hub page branch for deployments (to install gh-pages, run `npm install gh-pages --save-dev`)

run `gh-pages -d build --cname custom-domain.com` to set a custom domain. The custom domain should match whatever you put under "Custom domain" in your GitHub Pages settings. 

You should also update the "homepage" field in package.json to match the custom domain.

If an update to the url is needed, update navbar.js, footer.js, and app.js and change the base path from "/" to a desired value.

`npm run deploy` (which is running `gh-pages -d build` in the background) will build and deploy. no need to build and then deploy if you're only trying to deploy.

Use `npx` to run deployment commands if you're having issues.