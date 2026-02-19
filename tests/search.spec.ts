import { test, expect } from "@playwright/test";
import { SearchPage } from "../pages/search-page";

test("search page renders", async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.goto();
  await expect(searchPage.searchInput).toBeVisible();
});
