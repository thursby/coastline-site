# COASTLINE Website Documentation
This is the documentation for the COASTLINE site. Yes it's actually CØASTLINE but just in case that extended character gets mangled somehwere I thought it best to exclude it from the header.
Now, where were we?
Oh, yes! The website.

# Requirements
* Node v8.x
* NPX
* NPM
* Eleventy (via NPM)

# Compiling static sute
First, install Node, NPM, and NPX for your platforms, then...
```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm use 8
npm install
npm install npx
npx eleventy
```

Then the resulting website is in `/dist/`.