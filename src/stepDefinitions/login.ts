import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { LoginPage } from '../pageObjects/login.page';

Given(
    /^I attempt to log in with valid details/,
    () => {
        LoginPage.openLogin();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
    });

Given(
    /^I attempt to log in with invalid details/,
    () => {
        LoginPage.openLogin();
        LoginPage.login('foo', 'bar');
    });

Then(
    /^the logout button is visible/,
    () => {
        expect(LoginPage.logoutButton.isVisible());
    });

Then(
    /^the login button is visible/,
    () => {
        expect(LoginPage.loginButton.isVisible());
    });
