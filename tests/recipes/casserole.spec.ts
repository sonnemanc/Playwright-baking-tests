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

test("suggestions load", async ({ page }) => {
  const casserolePage = new CasserolePage(page);
  await expect(
    page.getByRole("heading", { name: "What to Serve With Breakfast" })
  ).toBeVisible({ timeout: 15000 });
  //  await page.getByRole("link", { name: "Cinnamon Rolls", exact: true }).click();
});

//test("recipe card loads", async ({ page }) => {
//  const casserolePage = new CasserolePage(page);
//  await expect(page.locator("#tasty-recipes-71415")).toBeVisible({
//    timeout: 15000,
//  });
//});

//test("recipe card print page link works", async ({ page }) => {
//  const casserolePage = new CasserolePage(page);
//  await expect(page.locator("#tasty-recipes-71415")).toBeVisible({
//    timeout: 15000,
//  });
//  await expect(page.getByRole("link", { name: "Print Recipe" })).toBeVisible();
//  const page1Promise = page.waitForEvent("popup");
//  await page.getByRole("link", { name: "Print Recipe" }).click();
//  const page1 = await page1Promise;
//});
