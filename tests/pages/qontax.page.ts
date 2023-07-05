import { type Locator, type Page } from "@playwright/test";

export class QontaxPage {
  readonly page: Page;
  readonly addContactLink: Locator;

  readonly firstnameInput: Locator;
  readonly lastnameInput: Locator;
  readonly imageUrl: Locator;
  readonly occupation: Locator;
  readonly twitter: Locator;
  readonly bio: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addContactLink = page.getByRole("link", { name: "Add Contact" });

    this.firstnameInput = page.getByLabel("Firstname");
    this.lastnameInput = page.getByLabel("Lastname");
    this.imageUrl = page.getByLabel(/image url/i);
    this.occupation = page.getByLabel(/occupation/i);
    this.twitter = page.getByLabel(/twitter/i);
    this.bio = page.getByLabel(/bio/i);

    this.submitButton = page.getByRole("button", { name: "Submit" });
  }

  async goto() {
    await this.page.goto("https://qontax.vercel.app/");
  }
}
