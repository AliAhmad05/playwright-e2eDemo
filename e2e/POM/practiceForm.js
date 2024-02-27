import { Page, expect } from '@playwright/test';
import { Commands } from './commands';
import userData from '../Fixtures/userData2';
import { locatorPracticeForm } from './locators/locator';

export class PracticeForm {
  constructor(page) {
    this.page = page;
  }

  async clickOnSubmitButton() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async fillThePracticeForm() {
    const pw = new Commands(this.page);
    // Fill the registration form, passing the locator and the data to fill as parameter
    await pw.clickAndTypeInField(locatorPracticeForm.firstName, userData.firstName);
    await pw.clickAndTypeInField(locatorPracticeForm.lastName, userData.lastName);
    await pw.clickAndTypeInField(locatorPracticeForm.email, userData.email);
    await pw.selectRadioButton(userData.gender);
    await pw.clickAndTypeInField(locatorPracticeForm.mobile, userData.mobile);
    await pw.clickAndTypeInField(locatorPracticeForm.dateOfBirth, `${userData.dateOfBirth.day} ${userData.dateOfBirth.month} ${userData.dateOfBirth.year}`);
    await this.page.keyboard.press('Enter');
    await pw.clickAndTypeInField(locatorPracticeForm.subject, userData.subject);
    await this.page.keyboard.press('Enter');

    await pw.selectRadioButton(userData.hobbies);
    const fileInput = await this.page.$('#uploadPicture');

    if (fileInput) {
      await fileInput.setInputFiles('e2e/Fixtures/panda.PNG');
    }
    await pw.clickAndTypeInField(locatorPracticeForm.currentAddress, userData.currentAddress);
    await this.page.locator(locatorPracticeForm.state).click();
    await this.page.getByText(userData.stateAndCity.state, { exact: true }).click();
    await this.page.locator(locatorPracticeForm.city).click();
    await this.page.getByText(userData.stateAndCity.city, { exact: true }).click();
  }

  async assertionForPracticeFormField(fieldLocator, data) {
    const studentNameLocator = await this.page.getByRole('cell', { name: fieldLocator });

    // Assert that the 'Student Name' locator is found
    expect(await studentNameLocator.count()).toBeGreaterThan(0);

    const secondSiblingText = await studentNameLocator.evaluate((element) => {
      const secondSibling = element.nextElementSibling;
      return secondSibling ? secondSibling.textContent : null;
    });

    expect(secondSiblingText).toBe(data);
  }

  async assertForm() {
    await this.assertionForPracticeFormField('Student Name', userData.firstName + ' ' + userData.lastName);
    await this.assertionForPracticeFormField('Student Email', userData.email);
    await this.assertionForPracticeFormField('Gender', userData.gender);
    await this.assertionForPracticeFormField('Mobile', userData.mobile);
    await this.assertionForPracticeFormField('Date of Birth', userData.dateOfBirth.day + ' ' + userData.dateOfBirth.month + ',' + userData.dateOfBirth.year);
    await this.assertionForPracticeFormField('Subjects', userData.subject);
    await this.assertionForPracticeFormField('Hobbies', userData.hobbies);
    await this.assertionForPracticeFormField('Picture', userData.picture);
    await this.assertionForPracticeFormField('Address', userData.currentAddress);
    await this.assertionForPracticeFormField('State and City', userData.stateAndCity.state + ' ' + userData.stateAndCity.city);
  }
}
