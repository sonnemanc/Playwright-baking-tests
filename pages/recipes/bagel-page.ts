import { Page, Locator } from "@playwright/test";

export class BagelPage {
  readonly page: Page;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator("h1");
  }

  async goto() {
    await this.page.goto("https://sallysbakingaddiction.com/homemade-bagels/", {
      waitUntil: "domcontentloaded",
    });
  }
}
