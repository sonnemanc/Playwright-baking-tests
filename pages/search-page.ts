import { Page, Locator } from "@playwright/test";

export class SearchPage {
  readonly page: Page;

  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator("#searchInput");
  }

  async goto() {
    await this.page.goto("https://sallysbakingaddiction.com/#search", {
      waitUntil: "domcontentloaded",
    });
  }
}
