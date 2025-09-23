import { test, expect } from "@playwright/test";
import { BagelPage } from "../../pages/recipes/bagel-page";

test("bagel page header", async ({ page }) => {
  const bagelPage = new BagelPage(page);

  await bagelPage.goto();
  await expect(bagelPage.header).toContainText("Bagels");
});
