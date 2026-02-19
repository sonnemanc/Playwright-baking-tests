import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";

test("home page header", async ({ page }) => {
  const homePage = new HomePage(page);
  const desktopMenu = page.locator('#desktop-menu');
  const menuRight = page.locator('.menu-right')

  await homePage.goto();
  await expect(page.getByRole("link", { name: "Sally's Baking Home", exact: true })).toBeVisible();

// There ended up being three legit 'All Recipes' links
// await expect(
//   page.getByRole('navigation')
//       .getByRole('link', { name: 'All Recipes', exact: true })
// ).toBeVisible();

await expect(
  desktopMenu.getByRole('link', { name: 'All Recipes', exact: true })
).toBeVisible();

  await expect(
    desktopMenu.getByRole("link", { name: "Baking Tips" })
  ).toBeVisible();
  await expect(
    desktopMenu.getByRole("link", { name: "Ingredient" })
  ).toBeVisible();
  await expect(
    menuRight.getByRole("button", { name: "search-toggle" })
  ).toBeVisible();
  await expect(
    menuRight.getByRole("button", { name: "menu" })
  ).toBeVisible();
  await expect(page.getByText("About the Author")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Sally McKenney" })
  ).toBeVisible();
});

test("home page links load", async ({ page }) => {
  const homePage = new HomePage(page);
  const desktopMenu = page.locator('#desktop-menu');

  await homePage.goto();
  //await page.goto('https://sallysbakingaddiction.com/');
await expect(
  desktopMenu.getByRole("link", { name: "All Recipes" })
).toBeVisible();
  await expect(
    desktopMenu.getByRole("link", { name: "Baking Tips" })
).toBeVisible();
  await expect(
    desktopMenu.getByRole("link", { name: "Ingredient" })
  ).toBeVisible();
});

test("search filters load", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await expect(
    page.getByRole("button", { name: "search-toggle" })
  ).toBeVisible();
  await expect(
    page.locator("#site-header").getByRole("button", { name: "menu" })
  ).toBeVisible();
  await expect(page.getByText("About the Author")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Sally McKenney" })
  ).toBeVisible();
});

test("about section loads", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await expect(page.getByText("About the Author")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Sally McKenney" })
  ).toBeVisible();
});
