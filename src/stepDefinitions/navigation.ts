import { expect } from "chai";
import { Given, Then, When } from "cucumber";
import { HomePage } from "../pageObjects/home.page";
import { AdListing } from "../pageObjects/ad.listings";
import { Filters } from "../pageObjects/filters";

Given(/^I enter the URL of the homepage$/, () => {
  HomePage.openHome();
});

Then(
  /^I click on "([^"]*)" ad (category|sub-category)$/,
  (category: string, type: string) => {
    if (type === "category") {
      HomePage.openCategory(category);
    } else {
      HomePage.openSubCategory(category);
    }
  }
);

Then(/^I go to "([^"]*)" page from the header menu$/, (page: string) => {
  HomePage.openHeaderPage(page);
});

Then(/^I click on "([^"]*)" link$/, (link: string) => {
  AdListing.openLink(link);
});
