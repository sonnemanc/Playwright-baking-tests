import { test, expect } from "@playwright/test";
import { CasserolePage } from "../../pages/recipes/casserole-page";

test("casserole page header", async ({ page }) => {
  const casserolePage = new CasserolePage(page);

  await casserolePage.goto();
  await expect(casserolePage.header).toContainText(
    "Easy Make-Ahead Breakfast Casserole"
  );
});

test("recipe card loads", async ({ page }) => {
  const casserolePage = new CasserolePage(page);
  await casserolePage.goto()
  await expect(
    page.getByText('Description', {exact: true })
  ).toBeVisible({ timeout: 15000 });
});
