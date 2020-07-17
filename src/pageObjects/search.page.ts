class SearchPageObject {
  private _searchButton: string = '//input[@value="Search"]';
  private _searchFilterInput: string = "/following-sibling::td/input";

  public get searchButton() {
    return browser.element(this._searchButton);
  }

  public get searchFilterInput() {
    return browser.element(this._searchFilterInput);
  }

  public fillSearchFilter(input: string, filterLabel: string): void {
    browser.waitForVisible(this._searchButton);
    browser.setValue(
      `//*[contains(text(),"${filterLabel}")]` + this._searchFilterInput,
      input
    );
  }
}

export const SearchPage = new SearchPageObject();
