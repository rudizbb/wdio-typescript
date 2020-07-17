class FiltersObject {
  private _searchButton: string = 'input[type="submit"]';
  private _secondLineFilters: string = '//*[@class="filter_second_line_dv"]//*';
  private _firstLineFilters: string = "//tr/td";
  private _filterOption: string = "//option";

  public get searchButton() {
    return browser.element(this._searchButton);
  }
  public get secondLineFilters() {
    return browser.element(this._secondLineFilters);
  }
  public get firstLineFilters() {
    return browser.element(this._firstLineFilters);
  }
  public get filterOption() {
    return browser.element(this._filterOption);
  }

  public selectFilter(position: string, label: string, value: string): void {
    if (position === "upper") {
      browser.waitForVisible(this._firstLineFilters);
      browser.click(this._firstLineFilters + `[contains(text(),"${label}")]`);
    } else {
      browser.waitForVisible(this._secondLineFilters);
      browser.click(this._secondLineFilters + `[contains(text(),"${label}")]`);
    }
    browser.waitForVisible(this._filterOption);
    browser.click(this._filterOption + `[text()="${value}"]`);
  }
}

export const Filters = new FiltersObject();
