import { expect } from "chai";
import { Given, Then, When } from "cucumber";
import { Filters } from "../pageObjects/filters";
import { AdListing } from "../pageObjects/ad.listings";

Then(
  /^I choose (upper|lower) "([^"]*)" filter with value "([^"]*)"$/,
  (position: string, label: string, value: string) => {
    Filters.selectFilter(position, label, value);
  }
);

Then(/^I select ad number "(\d+)"$/, (index: number) => {
  AdListing.selectAdCheckbox(index);
});

Then(/^I should see "(\d+)" ads in saved memo list$/, (expectedAds: number) => {
  let ads = AdListing.countAds();
  expect(ads).to.equal(expectedAds);
});

Then(/^I click on the picture of the ad number "(\d+)"$/, (index: number) => {
  AdListing.openAd(index);
});
