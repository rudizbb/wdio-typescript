## WebdriverIO + TypeScript POC

Main goal was to create a POC test automation setup for the "Memo" functionality on SS.com/en site.

### Tech Stack

- [WebdriverIO v4](http://webdriver.io/)
- [Typescript(Javascript) v3](https://www.typescriptlang.org/)
- [Cucumber v6](https://cucumber.io/)
- [Chai](https://www.chaijs.com/)

## Getting Started

### Pre-requisites

1. [Docker Desktop](https://www.docker.com/products/docker-desktop) must be installed on your local machine.
2. [Node.js 10.x or later](https://nodejs.org/en/download/releases/)

## Installation

### Setup Scripts

1. `git clone https://github.com/rudizbb/wdio-typescript.git` - clone this repository onto your local drive
2. `docker-compose run --rm webdriverio npm install` - install all dependencies into a container

Optional - build docker image locally with `docker build Dockerfile/. -t wdiodocker` or `npm run dockerbuild`

_Note_: Don't forget to update your `docker-compose.yml` to use the local docker image

### Compiling tests

3. `docker-compose run --rm webdriverio npm run build` - connect to the container and compile the TypeScript src files

## Running Tests

The following command will trigger Selenium in a locally hosted Docker container:

`docker-compose run --rm webdriverio npm run test-local`

## Configuration

`tsconfig.json` defines the `outDir` where Typescript will transpile to. This directory is deleted by the `npm run clean` or `npm run clean-build` commands.

`conf/local.conf.js` define the configuration of webdriverio.

## Writing Tests

Cucumber framework has been integrated with this project, WebdriverIO's `wdio-cucumber-framework` adapter helps write BDD style tests with Features & Step Definitions.

```
import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { LoginPage } from '../pageObjects/login.page';

Given(
    /^I attempt to log in with valid details/,
    () => {
        LoginPage.openLogin();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
    });

Then(
    /^I am presented with the (success|error) message$/,
    (message: string) => {
        const successMessage: string = 'You logged into a secure area!';
        const errorMessage: string = 'Your username is invalid!';
        if (message === 'success') {
            expect(LoginPage.getConfirmationText(message)).to.contain(successMessage);
        } else if (message === 'error') {
            expect(LoginPage.getConfirmationText(message)).to.contain(errorMessage);
        }
    });

```

## Page Objects

This framework is strictly written using page-object design pattern.

```
class LoginPageObject {

  private _url: string = '/login';
  private _username: string = '#username';
  private _password: string = '#password';
  private _submit: string = 'button[type="submit"]';

  public get loginButton() { return browser.element(this._submit); }
  public get username() { return browser.element(this._username); }
  public get password() { return browser.element(this._password); }

  public openLogin(): void {
    browser.url(this._url);
  }

  public login(username: string, password: string): void {
    this.username.setValue(username);
    this.password.setValue(password);
    this.loginButton.click();
  }

export const LoginPage = new LoginPageObject();
```

## Troubleshooting

Screenshots of failed tests are saved in `src/errorShots` after each run
