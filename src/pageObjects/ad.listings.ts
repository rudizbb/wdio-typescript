class AdListingObject {

  private _adCheckbox: string = "(//input[@type='checkbox'])"
  private _alertMessage: string = '//div[@id="alert_msg"]'
  private _textLink: string = '//a[@class="a9a"]'

  public get adCheckbox() { return browser.element(this._adCheckbox); }
  public get alertMessage() { return browser.element(this._alertMessage); }
  public get alertOk() { return browser.element('#alert_ok'); }
  public get errorMessage() { return browser.element('#error'); }
  public get textLink() { return browser.element(this._textLink); }

  public getConfirmationText(message: string): string {
    if (message === 'confirmation') {
      return this.alertMessage.getText();
    } else if (message === 'error') {
      return this.errorMessage.getText();
    }
  }

  public countAds(): number {
    return browser.elements('//input[@type="checkbox"]').value.length;
  };


  public openLink(title: string): void {
    browser.click(this._textLink + `[text()="${title}"]`);
  }

  public selectAdCheckbox(index: number): void {
    browser.click(this._adCheckbox + `[${index}]`);
  }
}

export const AdListing = new AdListingObject();
