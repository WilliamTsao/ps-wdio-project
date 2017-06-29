# PhotoShelter Web Automation

Objective: To automate Functional Testing of the PhotoShelter Web App using [WebdriverIO](http://webdriver.io)  Tests are written in the  BDD Style using [Mocha](https://mochajs.org/) with [Chai](http://chaijs.com/)

## Getting Started

#### Yarn:
To run tests locally:

```
yarn run test
```

To run tests against browserstack

```
yarn run test-bs
```


### Prerequisites

#### Install Yarn

[Yarn](https://yarnpkg.com/en/) is a package management system similar to NodeJS.  Yarn is highly [performant](https://yarnpkg.com/lang/en/compare/).

```
$ brew install yarn
```

#### Install Selenium Drivers Locally

Selenium makes direct calls to the browser using the browsers native support for automation.  The drivers are provided when using any cloud service. Drivers must be installed locally to run tests/develop locally.

Safaridriver comes with Safari versions 10+

##### Install Chromedriver

Use Brew to install [chromedriver](https://sites.google.com/a/chromium.org/chromedriver/home).
```
$ brew install chromedriver
$ which chromedriver
/usr/local/bin/chromedriver
```
##### Install Geckodriver
Use Brew to install [Geckodriver](https://github.com/mozilla/geckodriver) (Firefox)

```
$ brew install geckodriver
$ which geckodriver
/usr/local/bin/geckodriver
```

## Folder Structure

.
├── README.md
├── package-lock.json
├── package.json
├── specs
├── src
│   ├── pageobjects
│   └── uimap
├── wdio.browserstack.conf.js
├── wdio.conf.js
├── wdio.conf.local.js
└── yarn.lock


## Docker Instructions

Make sure you have docker installed locally.  Please see [docker documentation](https://docs.docker.com/engine/installation/) for installation instructions.

TBD