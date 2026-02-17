import { test, expect } from "@playwright/test";
import { IndexPage } from "../../pages/recipes/recipe-index-page";

test("index page header", async ({ page }) => {
  const indexPage = new IndexPage(page);

  await indexPage.goto();
  await expect(indexPage.header).toContainText("Recipe Index");
});
