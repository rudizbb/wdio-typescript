import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { AdListing } from '../pageObjects/ad.listings';

Then(
    /^I get a (confirmation|error) pop-up and close it$/,
    (message: string) => {
        const successMessage: string = 'Sludinājumi ir pievienoti Memo.';
        const errorMessage: string = 'Your username is invalid!';
        expect(AdListing.alertMessage.isVisible());
        if (message === 'confirmation') {
            expect(AdListing.getConfirmationText(message)).to.contain(successMessage);
        } else if (message === 'error') {
            expect(AdListing.getConfirmationText(message)).to.contain(errorMessage);
        }
        AdListing.alertOk.click();
    });
