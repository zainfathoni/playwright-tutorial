import { expect, test } from "@playwright/test";

test("single todo", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/");

  await page.getByPlaceholder("What needs to be done?").click();
  await page
    .getByPlaceholder("What needs to be done?")
    .fill("learn playwright");
  await page.getByPlaceholder("What needs to be done?").press("Enter");

  await page.getByRole("checkbox", { name: "Toggle Todo" }).check();

  await expect(
    page.getByRole("checkbox", { name: "Toggle Todo" }),
  ).toBeChecked();
});

test("double todos", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/");

  await page.getByPlaceholder("What needs to be done?").click();
  await page.getByPlaceholder("What needs to be done?").fill("satu");
  await page.getByPlaceholder("What needs to be done?").press("Enter");

  await page.getByPlaceholder("What needs to be done?").fill("dua");
  await page.getByPlaceholder("What needs to be done?").press("Enter");
  await page
    .getByRole("listitem")
    .filter({ hasText: "satu" })
    .getByRole("checkbox", { name: "Toggle Todo" })
    .check();

  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "satu" })
      .getByRole("checkbox", { name: "Toggle Todo" }),
  ).toBeChecked();
  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "dua" })
      .getByRole("checkbox", { name: "Toggle Todo" }),
  ).not.toBeChecked();
});
