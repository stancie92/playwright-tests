import { test, expect } from '@playwright/test';

test('Exercise 3', async ({ page }) => {

  await page.goto('/module-2/exercise-3');

  const firstNameInput = page.getByRole('textbox', { name: 'First Name' });
  const lastNameInput = page.getByRole('textbox', { name: 'Last Name' });

  await firstNameInput.fill('Stan');
  await lastNameInput.fill('Cies');

  const firstName = await firstNameInput.inputValue();

  await page.getByLabel('Country').selectOption('pl');

  await page
    .getByRole('checkbox', { name: 'Subscribe to newsletter' })
    .check();

  await page
    .getByRole('checkbox', { name: 'I agree to the Terms and' })
    .check();

  await page.getByRole('button', { name: 'Register' }).click();

  const successMessage = page.getByText('Registration SuccessfulThank');

  await expect(successMessage).toBeVisible();
  await expect(successMessage).toContainText('Thank you for registering');
  await expect(successMessage).toContainText(firstName);

});