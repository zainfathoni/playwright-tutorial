import { test } from "@playwright/test";
import { QontaxPage } from "./pages/qontax.page";

test.use({
  storageState: "auth.local.json",
});

test.skip("create contact by codegen", async ({ page }) => {
  await page.goto("https://qontax.vercel.app/");
  await page.getByRole("link", { name: "Add Contact" }).click();
  await page.getByPlaceholder("John", { exact: true }).click();
  await page.getByPlaceholder("John", { exact: true }).fill("Zain");
  await page.getByPlaceholder("John", { exact: true }).press("Tab");
  await page.getByPlaceholder("Doe", { exact: true }).fill("Fathoni");
  await page.getByPlaceholder("https://images.unsplash.com/profile").click();
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByPlaceholder("https://images.unsplash.com/profile").click();
  await page
    .getByPlaceholder("https://images.unsplash.com/profile")
    .fill(
      "https://github.com/zainfathoni/www.zainfathoni.com/blob/master/static/images/zain.jpg?raw=true",
    );
  await page.getByPlaceholder("Web Developer").click();
  await page.getByPlaceholder("Web Developer").fill("Senior Software Engineer");
  await page.getByPlaceholder("Web Developer").press("Tab");
  await page.getByPlaceholder("johndoe").fill("zainfathoni");
  await page.getByPlaceholder("johndoe").press("Tab");
  await page.getByPlaceholder("Your bio here").fill("Zain Fathoni");
  await page.getByRole("button", { name: "Submit" }).click();
});

test("create contact with a better locators", async ({ page }) => {
  const q = new QontaxPage(page);

  await q.goto();

  // Click on add contact link
  await q.addContactLink.click();

  // Fill in details
  await q.firstnameInput.fill("John");
  await q.lastnameInput.fill("Doe");
  await q.imageUrl.fill(
    "https://github.com/zainfathoni/www.zainfathoni.com/blob/master/static/images/zain.jpg?raw=true",
  );
  await q.occupation.fill("Senior Software Engineer");
  await q.twitter.fill("zainfathoni");
  await q.bio.fill("Family Man");

  // Click Submit
  await q.submitButton.click();

  // FIXME: await expect(page.url).not.toMatch(/new$/);
});

test.skip("edit contact with codegen", async ({ page }) => {
  await page
    .getByRole("link", {
      name: "Photo of Zain Zain Fathoni Senior Software Engineer zainfathoni",
    })
    .click();
  await page.locator("section").getByRole("link").click();
  await page.getByPlaceholder("John", { exact: true }).click();
  await page.getByPlaceholder("John", { exact: true }).fill("Zainal");
  await page.getByRole("button", { name: "Save" }).click();
});
