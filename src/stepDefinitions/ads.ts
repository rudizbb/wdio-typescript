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
    /^I see "(\d+)" saved memo$/,
    (results: number) => {
        expect(browser.elements('//*[@type="checkbox"]').value.length).to.equal(results);
    });
