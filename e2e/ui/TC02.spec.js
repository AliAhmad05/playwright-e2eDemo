import { test} from '@playwright/test';
import { Commands } from '../POM/commands';
import { BrokenImage } from '../POM/brokenImage';

test.describe('TC 02', () => {
  test('Verify broken image', async ({ page }) => {
    const pw = new Commands(page);
    const brokenImage = new BrokenImage(page);

    await page.goto('');
    await pw.navigateTo('Elements');
    await pw.assertionByUrl('elements');
    await pw.sidebarNavigation('Broken Links - Images');

    await brokenImage.assertBrokenImage();
  });
});
