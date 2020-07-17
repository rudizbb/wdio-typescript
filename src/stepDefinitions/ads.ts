import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { FilterMenu } from '../pageObjects/filter.menu';
import { AdListing } from '../pageObjects/ad.listings';

Then(
    /^I choose (upper|lower) "([^"]*)" filter with value "([^"]*)"$/,
    (position: string, label: string, value: string) => {
        FilterMenu.selectFilter(position, label, value);
    });

Then(
    /^I select ad number "(\d+)"$/,
    (index: number) => {
        AdListing.selectAdCheckbox(index);
    });

Then(
    /^I should see "(\d+)" ads in saved memo list$/,
    (expectedAds: number) => {
        let ads = AdListing.countAds();
        expect(ads).to.equal(expectedAds);
    });
