import { test, expect } from "@playwright/test";

test("h1 contains Bagels", async ({ page }) => {
  await page.goto("https://sallysbakingaddiction.com/homemade-bagels/", {
    waitUntil: "domcontentloaded",
  });
  await expect(page.locator("h1")).toContainText("Bagels");
});

test("page title mentions Bagels", async ({ page }) => {
  await page.goto("https://sallysbakingaddiction.com/homemade-bagels/", {
    waitUntil: "domcontentloaded",
  });
  await expect(page).toHaveTitle(/Bagels/);
});
