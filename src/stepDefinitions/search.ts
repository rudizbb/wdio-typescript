import { expect } from "chai";
import { Given, Then, When } from "cucumber";
import { SearchPage } from "../pageObjects/search.page";

Then(
  /^I enter "(.*?)" in the "(.*?)" input box$/,
  (input: string, filterLabel: string) => {
    SearchPage.fillSearchFilter(input, filterLabel);
  }
);

Then(/^I click on Search button$/, () => {
  SearchPage.searchButton.waitForVisible();
  SearchPage.searchButton.click();
});
