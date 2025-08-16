import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
const username = process.env.MY_USERNAME;
const password = process.env.MY_PASSWORD;

test('Page has expected title', async ({ page }) => {
  await page.goto('https://www.collaboard.app/');

  await expect(page).toHaveTitle(/Online Whiteboard/);
});

test('Click the login button', async ({ page }) => {
  await page.goto('https://www.collaboard.app/');

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
});

test('Click Sign in', async ({ page }) => {
  await page.goto('https://www.collaboard.app/');

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();

  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
});

test('Input email and password and login', async ({ page }) => {
  await page.goto('https://www.collaboard.app/');
  
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();

  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).fill(username!);

  await page.getByRole('textbox', { name: 'Username' }).blur();
  await page.waitForTimeout(200);

  await page.getByRole('button', { name: 'Continue with email' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(password!);
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
});
