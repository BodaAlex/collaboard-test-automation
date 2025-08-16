import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
const username = process.env.MY_USERNAME;
const password = process.env.MY_PASSWORD;

test.beforeEach( async({ page }) => {
    // login
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
})

test('Update First and Last names', async ({ page }) => {
    await page.getByRole('link').filter({ hasText: "Profile" }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill("Alex");
    await page.getByRole('textbox', { name: "Last Name" }).fill("Boda");
    await page.getByText("Save").nth(0).click();
    await expect(page.getByText("Profile information successfully saved")).toBeVisible();
})