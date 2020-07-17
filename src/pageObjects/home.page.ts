class HomePageObject {
  private _url: string = "/en";
  private _headerMenu: string = '//a[@class="a_menu"]';
  private _categoryTitles: string = "//h2/a";
  private _subCategoryTitles: string = "//h4/a";

  public get headerMenu() {
    return browser.element(this._headerMenu);
  }
  public get categoryTitles() {
    return browser.element(this._categoryTitles);
  }
  public get subCategoryTitles() {
    return browser.element(this._subCategoryTitles);
  }

  public openHome(): void {
    browser.deleteCookie();
    browser.url(this._url);
    browser.waitForVisible(this._headerMenu);
  }

  public openHeaderPage(pageTitle: string): void {
    browser.waitForVisible(this._headerMenu);
    browser.click(this._headerMenu + `[text()="${pageTitle}"]`);
  }

  public openCategory(category: string): void {
    browser.waitForVisible(this._categoryTitles);
    browser.click(this._categoryTitles + `[contains(text(),"${category}")]`);
  }

  public openSubCategory(subCategory: string): void {
    browser.waitForVisible(this._subCategoryTitles);
    browser.click(
      this._subCategoryTitles + `[contains(text(),"${subCategory}")]`
    );
  }
}

export const HomePage = new HomePageObject();
