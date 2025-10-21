import { test, expect } from "@playwright/test";

test("Name of the test", async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole("textbox", { name: "Name" }).click();
  await page.getByRole("textbox", { name: "Name" }).fill("name");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("we@gh.com");
  await page.getByRole("checkbox", { name: "Promotion checkbox" }).check();
  await page.getByRole("button", { name: "Submit" }).click();
});

test("test-name-should-be-here", { tag: "@regression" }, async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
  await page.locator('[data-test="Espresso"]').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText(
    "Total: $10.00"
  );
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator("h1")).toContainText("Payment details");
  await page.getByRole("button", { name: "Submit" }).click();
});
