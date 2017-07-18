# PhotoShelter Web Automation

Objective: To automate Functional Testing of the PhotoShelter Web App using [WebdriverIO](http://webdriver.io).  Tests are written in the BDD Style using [Mocha](https://mochajs.org/) with [Chai](http://chaijs.com/)

## Getting Started

#### Yarn:
To run tests locally:

```
$ yarn run test
```

To run tests against browserstack

```
$ yarn run test-bs
```

If you want to run a single suite you simply pass the suite name as an argument:
```
$ wdio wdio.conf.local.js --suite login
```

It is possible to run multiple specific suites at one:
```
$ wdio wdio.conf.local.js --suite login,libris
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
```
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
```

## Docker Instructions

Make sure you have docker installed locally.  Please see [docker documentation](https://docs.docker.com/engine/installation/) for installation instructions.

TBD

## Built With
* [WebdriverIO](http://webdriver.io) - The webdriver bindings for Node.js
* [Mocha](https://mochajs.org/) - Test runner
* [Chai](http://chaijs.com/) - For the BDD Assertion Library
* [yarn](https://yarnpkg.com/en/) - Dependency Management
* [Docker](https://www.docker.com/) - Package Management

## Browser/Platform Under Test
As part of a Definition of Done, it is expected that any new tests are run against browserstack.  Two outcomes are expected on test failure:
1) Developer Error: The test is fixed and passes before a PR & Merge.
2) Bug: The test fails due to a bug, a jira bug ticket is then created.