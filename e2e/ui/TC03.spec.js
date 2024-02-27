import { test } from '@playwright/test';
import { Commands } from '../POM/commands';
import { PracticeForm } from '../POM/practiceForm';


test.describe('TC 03', () => {

  test.use({
    viewport: {width: 1600, height:1200},
  })
  test('Verify user can submit the form', async ({ page }) => {
    
    const pw = new Commands(page);
    const practiceForm = new PracticeForm(page)

    await page.goto('');
    await pw.navigateTo('Forms');
    await pw.assertionByUrl('forms');
    await pw.sidebarNavigation('Practice Form');

    await practiceForm.fillThePracticeForm()
    await practiceForm.clickOnSubmitButton()
   
    await practiceForm.assertForm()
  });
});
