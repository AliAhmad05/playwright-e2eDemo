import { Page, expect } from '@playwright/test';
import { Commands } from './commands';
import { locatorWebTables } from './locators/locator';
import userData from '../Fixtures/userData'

export class Elements {
  constructor(page) {
    this.page = page;
  }

  async clickOnAddButton() {
    await this.page.getByRole('button', { name: 'Add' }).click();
  }

  async clickOnSubmitButton() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async fillTheForm() {
    const pw = new Commands(this.page);
    // Fill the registration form, passing the locator and the data to fill as parameter
    await pw.clickAndTypeInField(locatorWebTables.firstName, userData.firstName);
    await pw.clickAndTypeInField(locatorWebTables.lastName, userData.lastName);
    await pw.clickAndTypeInField(locatorWebTables.email, userData.email);
    await pw.clickAndTypeInField(locatorWebTables.age, userData.age);
    await pw.clickAndTypeInField(locatorWebTables.salary, userData.salary);
    await pw.clickAndTypeInField(locatorWebTables.department, userData.department);
  }

  async assertionForUser(data, row) {
    const body = await this.page.locator('[class="rt-tr-group"]').nth(row);
    await expect(body).toContainText(data);
  }

  async assertForm() {
    // Assertion, check if form is added or not, sending the value to verify and the row index
    await this.assertionForUser(userData.firstName, 3);
    await this.assertionForUser(userData.lastName, 3);
    await this.assertionForUser(userData.email, 3);
    await this.assertionForUser(userData.age, 3);
    await this.assertionForUser(userData.salary, 3);
    await this.assertionForUser(userData.department, 3);
  }

  async clickOnUserEditButton() {
    await this.page.locator('[title="Edit"]').nth(1).click();
  }

  async editTheForm() {
    const pw = new Commands(this.page);
    await pw.clickAndTypeInField(locatorWebTables.firstName, 'Gerimedica');
    await pw.clickAndTypeInField(locatorWebTables.lastName, 'BV');
  }

  async assertEditedForm() {
    await this.assertionForUser('Gerimedica', 1);
    await this.assertionForUser('BV', 1);
  }
}
