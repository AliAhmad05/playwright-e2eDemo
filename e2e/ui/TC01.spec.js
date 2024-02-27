import { test} from '@playwright/test';
import { Commands } from '../POM/commands';
import { Elements } from '../POM/elements';

test.describe('TC 01', () => {
  test('Verify user can enter new data into the table', async ({ page }) => {
    const pw = new Commands(page);
    const elements = new Elements(page);

    await page.goto('');
    await pw.navigateTo('Elements');
    await pw.assertionByUrl('elements');
    await pw.sidebarNavigation('Web tables');
    await elements.clickOnAddButton();

    await elements.fillTheForm();
    await elements.clickOnSubmitButton();
    await elements.assertForm();
  });

  test('Verify user can edit the row in a table', async ({ page }) => {
    const pw = new Commands(page);
    const elements = new Elements(page);

    await page.goto('');
    await pw.navigateTo('Elements');
    await pw.assertionByUrl('elements');
    await pw.sidebarNavigation('Web tables');
    await elements.clickOnUserEditButton();

    await elements.editTheForm();
    await elements.clickOnSubmitButton();
    await elements.assertEditedForm();
  });
});
