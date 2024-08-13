import { When, Then, Given } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

let loginPage: LoginPage;

Given('User is on Login page', { timeout: 5 * 60000 }, async function () {
  loginPage = new LoginPage(this.page)
  await this.page.goto('/login/login', { timeout: 5 * 60000 });
});

When('User enters the salonId {string} and the salonPassword {string}', { timeout: 10 * 5000 }, async function (salonId: string, salonPassword: string) {
  await loginPage.enterSalonId(salonId)
  await loginPage.enterSalonPassword(salonPassword)
});

When('User signs in with valid salonId {string} and the salonPassword {string} successfuly', { timeout: 60000 }, async function (email: string, password: string) {
  await loginPage.enterSalonId(email)
  await loginPage.enterSalonPassword(password)
  await loginPage.clickButtonLogin()
  await this.page.waitForLoadState();
  await expect(this.page).toHaveURL(/.*#/, { timeout: 30000 });
});

Then('User clicks logIn button', { timeout: 5 * 5000 }, async function () {
  await loginPage.clickButtonLogin()
});

Then('Verify user is on Dashboard page', { timeout: 5 * 5000 }, async function () {
  await this.page.waitForLoadState();
  await expect(this.page).toHaveURL(/.*#/);
});


