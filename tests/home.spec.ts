import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";

test("home page header", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  //await page.goto('https://sallysbakingaddiction.com/');
  await expect(
    page.getByRole("link", { name: "Sally's Baking Home" })
  ).toBeVisible();
  await expect(
    page.locator("#menu-item-115126").getByRole("link", { name: "All Recipes" })
  ).toBeVisible();
  await expect(
    page.locator("#menu-item-115127").getByRole("link", { name: "Bread" })
  ).toBeVisible();
  await expect(
    page.locator("#menu-item-115128").getByRole("link", { name: "Breakfast" })
  ).toBeVisible();
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

test("home page links load", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  //await page.goto('https://sallysbakingaddiction.com/');
  await expect(
    page.locator("#menu-item-115126").getByRole("link", { name: "All Recipes" })
  ).toBeVisible();
  await expect(
    page.locator("#menu-item-115127").getByRole("link", { name: "Bread" })
  ).toBeVisible();
  await expect(
    page.locator("#menu-item-115128").getByRole("link", { name: "Breakfast" })
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
