import { test, expect } from "@playwright/test";
import { only } from "node:test";

test("click-to-signin-navigates-to-login-page", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/register");
  await page.getByRole("link", { name: "Sign in" }).click();
  await expect(page).toHaveURL("https://demo.learnwebdriverio.com/login");
});

test.only("register-new-user", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/register");
  await page.getByRole("textbox", { name: "Username" }).fill("Maryna");
  const randomEmail = `user${Math.floor(Math.random() * 100000)}@example.com`;
  await page.getByRole("textbox", { name: "Email" }).fill(randomEmail);
  await page.getByRole("textbox", { name: "Password" }).fill("Mma12345");

  await page.getByRole("button", { name: "Sign Up" }).click();
  await expect(page).toHaveURL("https://demo.learnwebdriverio.com");
  await expect(
    page.getByText("A place to share your knowledge.")
  ).toBeVisible();
});
