import { expect } from "chai";
import { Given, Then, When } from "cucumber";
import { AdListing } from "../pageObjects/ad.listings";

Then(
  /^I get a (confirmation|error) pop-up with "([^"]*)" and close it$/,
  (messageType: string, messageText: string) => {
    if (messageType === "confirmation") {
      expect(AdListing.getConfirmationText(messageType)).to.contain(
        messageText
      );
    } else if (messageType === "error") {
      expect(AdListing.getConfirmationText(messageType)).to.contain(
        messageText
      );
    }
    AdListing.alertOk.click();
  }
);
