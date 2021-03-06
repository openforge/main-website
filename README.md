<p align="center">
  <img src="https://github.com/openforge/main-website/blob/master/src/assets/logo-openforge.png?raw=true"/>
</p>
<p align="center">
  <a href="http://www.openforge.io/">Official Website</a> |
  <a href="http://www.openforge.io/opportunities">Opportunities</a> |
  <a href="https://www.facebook.com/openforgemobile/">Facebook</a>
</p>

<h3 align="center">
  Leading By Example.
</h3>

<p align="center">
  Working with the latest technologies, designing the best products, and sharing our knowledge with the world wide community.
</p>

# OpenForge

The OpenForge Community is composed of team members and public contributors banded together for a common goal of leading by example.  We are experts in applying UI/UX and Software Architecture principles towards enhancing businesses nation (and world!) wide.

In addition to providing services for our clients; it is our belief that we should also focus on benefiting the community that surrounds us. For this reason; all OpenForge initiatives (that are not client related) are Open Sourced; including our design and business consulting resources which can be found on our Website at [www.openforge.io](http://openforge.io). 

If you are a community member who would like to take part of our paid (yes, we said PAID!) Open Source contributions please reach out to us via our [opportunities page](http://www.openforge.io/opportunities).   We also always encourage anyone to contribute to anything we are doing, and we hope to contribute to your projects as well!


# Website Development 

The OpenForge.io website is built using a combination of [Stencil.js](https://stenciljs.com/) by our friends at [Ionic Framework](https://ionicframework.com/) and Bootstrap for styling.

### Setup
```
npm install
```

#### Install the Google WebP utility from the following link:
https://developers.google.com/speed/webp/docs/precompiled

#### Or install from the command line (Mac OS X):
```
brew install webp
```

#### Make Sure .webp Images are available by running the following commands inside the root folder:
```
for file in src/assets/*.jpg; do cwebp -q 75 "$file" -o "${file%.jpg}.webp"; done
```

```
for file in src/assets/*.png; do cwebp -q 75 "$file" -o "${file%.png}.webp"; done
```

```
for file in src/assets/*.jpeg; do cwebp -q 75 "$file" -o "${file%.jpeg}.webp"; done
```

### Blog Setup
By default, the public version of this project does not contain an API key for the [ButterCMS](https://buttercms.com/) blog content management system. You will need to add your own ButterCMS API key in order to make this project work.

The necessary file for inserting the ButterCMS API key will be auto-generated by running
```
node scripts/get-butter.js
```

After that, use your text editor and open the file:
```
src/butter-api/butter-api-key.ts 
```

and enter your Butter API key between the single quotes '':
```
export const BUTTER_API_KEY = '';
```
to
```
export const BUTTER_API_KEY = 'your API token goes here';
```

### Running This Application
```
npm run dev
```

```
npm run dev --es5 // firefox
```

### File Structure
**UI** components should reside in the `src/components` folder.

While **Page** components should reside in the `src/pages` folder. A page component is responsible for the grouping and layout of varios different components into a page. Also responsible for any logic around the communication between the different components, the rest of the application (i.e. routing), and with the external world.

### Tools

#### Linting & Code Formatting:
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This project uses:
- [sass-lint](https://github.com/sasstools/sass-lint) for sass linting (sass-lint.yml contains configuration)
- [prettier](http://prettier.io/) for code formatting.
- [tslint](https://palantir.github.io/tslint/) for linting with rules from:
  - [tslint-react](https://github.com/palantir/tslint-react)
  - [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)
  - [tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier)

`package.json` defines an npm script for linting. To lint the project at any time, simply run the script with
```
$ npm run lint
```

CSS Linting
```
$ node_modules/sass-lint/bin/sass-lint.js sass-lint -c sass-lint.yml '**/*.scss' -v -q
```

#### Versioning & Changelog
We utilize [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) to generate a changelog from git metadata.

The following tools are used to achieve this purpose:
- [commitizen](https://github.com/commitizen/cz-cli)
- [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)
- [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)

With the current configuration, after a developer stages their changes for a commit. They can use the following npm script to walk them through committing their changes.

```
npm run cz
```

Read more about the commit guidelines [here](http://conventionalcommits.org/)

After all changes have been committed, a release and a changelog can be triggered by using the npm [version](https://docs.npmjs.com/cli/version) command. And the current configuration takes care of generating the changelog file based on git metadata.

#### Automation & Hooks
The project uses [husky](https://github.com/typicode/husky) for git hook integations. And uses [lint-staged](https://github.com/okonet/lint-staged) to run automatically run linters on staged files. And [commitlint](https://github.com/marionebl/commitlint) to ensure commits messages follow the conventions.

For every commit, it will ensure files are linted and that the code is formatted to `prettier`'s configuration. It will also confirm that the proposed commit message matches the defined guidelines. If any error occurs in the process, it will **stop and prevent** the commit until the issues are fixed.

If a developer went through providing all the information during a `npm run cz` only to find that there were issues with their commit. They may fix them and instruct commitizen to try the commit again with `npm run cz -- --retry`

## Blog Integration

This project uses [ButterCMS](https://buttercms.com/) as a headless content management system. When a user accesses the deployed site, the blog data will be loaded from the ButterCMS API via AJAX. However, the blog data is also utilized in prerendering the site, to improve SEO. Before any build (dev, prod, prerender), the get-butter.js script is run to retrieve the blog data and stored in pages/blog-post/prerender-blog-data.ts. This file is git-ignored so that the repo is not cluttered with blog content.

The project also utilizes webhooks from [ButterCMS](https://buttercms.com/docs/api/?javascript#webhooks) and [Travis](https://docs.travis-ci.com/user/triggering-builds) to keep the prerendered blog content up to date. Whenever a new blog post is published, Butter's webook invokes the cloud function rebuildMaster, which relays the information to the Travis API, which in turn will trigger a rebuild and redeploy of the master branch. Butter's webhooks are managed in the ButterCMS portal.


The branches develop, qa, staging, and master are all set up for continuous integration and deployment with Travis CI and Firebase. To deploy, create a PR for the appropriate branch, or commit and push directly (avoid this if possible).

If manual deployment is needed, use the following. Only do this on the develop branch, follow the PR request flow for all other branches.

### Featured Post

The featured post is managed in the ButterCMS portal. To make a post featured, it must be given a tag of 'featured'. The actual featured post will be the most recently published post with the featured tag. Currently, this post will also appear in the regular list of posts.

## Cypress Integration

This project uses Cypress for front end testing.

It is neccesary to install Cypress for test writing
```
npm install cypress --save-dev
```
This will install Cypress locally as a dev dependency

### Opening Cypress

To launch Cypress Test Runner, the next command is needed
```
npx cypress open
```
### Github Integration

Cypress provides a Dashboard, it is neccesary for the integration.

1.- Go to organization switcher and choose your organization.

2.- Click on the project you wish to integrate

3.- Go to project settings

4.- Click install Cypress Github app

5.- Select repositary you wish to integrate

6.- Done


## Deployment
```
npm run prepublish
```
Note that this will synchronously retrieve the blog post data from Butter CMS before building, so that it can be included in the prerender.

_Note:  You may have to install firebase-tools via ```npm install -g firebase-tools``` and then authenticate via command line on your local machine to firebase_

```
npm run firebase:deploy:dev // deploy to firebase dev environment
``` 

