import { test, expect } from "@playwright/test";
import { CasserolePage } from "../../pages/recipes/casserole-page";

test("casserole page header", async ({ page }) => {
  const casserolePage = new CasserolePage(page);

  await casserolePage.goto();
  await expect(casserolePage.header).toContainText(
    "Easy Make-Ahead Breakfast Casserole"
  );
});

//test("picture guide loads", async ({ page }) => {
//  const casserolePage = new CasserolePage(page);
//  await expect(
//    page.getByRole("heading", { name: "In Pictures: How to Make" })
//  ).toBeVisible({ timeout: 15000 });
//  await expect(
//    page.getByRole("img", { name: "chunks of bread and potatoes" })
//  ).toBeVisible({ timeout: 15000 });
//});

test("recipe card loads", async ({ page }) => {
  const casserolePage = new CasserolePage(page);
  await expect(
    page.locator('.tasty-recipes-entry-header')
  ).toBeVisible({ timeout: 15000 });
  //  await page.getByRole("link", { name: "Cinnamon Rolls", exact: true }).click();
});
