import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.busnetwork.net/auth/signin');
  await expect(page.getByRole('button', { name: 'flag' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Help ' })).toBeVisible();
  await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Enter your email address' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter your email address' }).click();
  await page.getByRole('textbox', { name: 'Enter your email address' }).fill('share_food@yopmail');
  await page.getByRole('textbox', { name: 'Enter your email address' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Enter your email address' }).fill('share_food@yopmail.com');
  await expect(page.getByRole('textbox', { name: 'Enter your email address' })).toHaveValue('share_food@yopmail.com');
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill('Pass@1234');
  await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('PaSS@1234');
  await expect(page.getByRole('button', { name: 'Sign in ' })).toBeVisible();
  await page.getByRole('button', { name: 'Sign in ' }).click();
});