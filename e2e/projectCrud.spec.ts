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

test.describe.serial('Project CRUD', () => {
    test('Create project with valid data', async ({ page }) => {
    await page.locator('.project-thumbnail', {hasText: 'Create a new project'}).click();
    await page.getByPlaceholder('Name of the project').fill('My test project');
    await page.locator('button', { hasText: "Create project" }).click();
    await expect(page.getByText('My test project')).toBeVisible();
    })

test('Edit existing project', async ({ page }) => {
    await page.locator('#btn-edit-name').click();
    await page.waitForTimeout(200);
    await page.locator('input[value="My test project"]').fill('Edited');
    await page.locator('#btn-edit-name').click();
    await expect(page.locator('.project-thumbnail', { hasText: 'Edited' })).toBeVisible();
    })

test('Delete existing project', async ({ page }) => {
    await expect(page.locator('.project-thumbnail', { hasText: 'Edited' })).toBeVisible();
    await expect(page.locator('#project-delete')).toBeVisible();
    await page.locator('#project-delete').click();
    await expect(page.getByRole('button').filter( { hasText: "Delete"} )).toBeVisible();
    await page.getByRole('button').filter( { hasText: "Delete"} ).click();
    })
})