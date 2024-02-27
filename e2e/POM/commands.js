import { Page, expect } from '@playwright/test';

export class Commands {
  constructor(page) {
    this.page = page;
  }

  async assertionByUrl(path) {
    await expect(this.page).toHaveURL('' + path);
  }

  async navigateTo(categoryName) {
    await this.page.getByRole('heading', { name: `${categoryName}` }).click();
  }

  async sidebarNavigation(elementName) {
    await this.page
      .locator('li')
      .filter({ hasText: `${elementName}` })
      .click();
  }

  async clickAndTypeInField(fieldName, data) {
    await this.page.locator(fieldName).fill(data);
  }

  async selectRadioButton(button) {
    await this.page.getByText(`${button}`, { exact: true }).click();
  }

  async clickOnButton(button){
    await this.page.locator(button).click()
  }
}
