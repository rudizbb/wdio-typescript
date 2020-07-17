class AdListingObject {
  private _adCheckbox: string = "//input[@type='checkbox']";
  private _adLogo: string = '//img[@class="isfoto foto_list"]';
  private _alertMessage: string = '//div[@id="alert_msg"]';
  private _textLink: string = '//a[@class="a9a"]';

  public get adCheckbox() {
    return browser.element(this._adCheckbox);
  }
  public get adLogo() {
    return browser.element(this._adLogo);
  }
  public get alertMessage() {
    return browser.element(this._alertMessage);
  }
  public get alertOk() {
    return browser.element("#alert_ok");
  }
  public get errorMessage() {
    return browser.element("#error");
  }
  public get textLink() {
    return browser.element(this._textLink);
  }

  public getConfirmationText(message: string): string {
    browser.waitForVisible(this._alertMessage);
    if (message === "confirmation") {
      return this.alertMessage.getText();
    } else if (message === "error") {
      return this.errorMessage.getText();
    }
  }

  public countAds(): number {
    browser.waitForVisible(this._adCheckbox);
    return browser.elements(this._adCheckbox).value.length;
  }

  public openAd(index): void {
    browser.waitForVisible(this._adLogo);
    browser.click("(" + this._adLogo + ")" + `[${index}]`);
  }

  public openLink(title: string): void {
    browser.waitForVisible(this._textLink);
    browser.click(this._textLink + `[text()="${title}"]`);
  }

  public selectAdCheckbox(index: number): void {
    browser.waitForVisible(this._adCheckbox);
    browser.click("(" + this._adCheckbox + ")" + `[${index}]`);
  }
}

export const AdListing = new AdListingObject();
