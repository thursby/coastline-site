# COASTLINE Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/71560f81-64a1-4804-946c-6dd3616e0a92/deploy-status)](https://app.netlify.com/sites/coastline-preview/deploys)

This is the documentation for the COASTLINE site. It's actually CØASTLINE but just in case that extended character gets mangled somehwere I thought it best to exclude it from the header.
Now, where were we?

Oh, yes! The website!

# Requirements
* Node v8.x
* NPX
* NPM
* Eleventy (via NPM)

# Compiling the static site using Eleventy
First, install Node, NPM, and NPX for your platforms, then...
```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm use 8
npm install
npm install npx
npx eleventy
```

Or, for development you can have it `watch` a directory for changes.
```
npx eleventy --pathprefix="coastline-site/dist" --watch
```

This uses [Eleventy](https://www.11ty.io/) to turn the source files in `/src/` into a website.

Then the resulting site is in `/dist/`.