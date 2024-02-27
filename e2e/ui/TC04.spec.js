import { test } from '@playwright/test';
import { Commands } from '../POM/commands';
import { ProgressBar } from '../POM/progressBar';

test.describe('TC 04', () => {
  test('Verify the progress bar', async ({ page }) => {
    const pw = new Commands(page);
    const progressbar = new ProgressBar(page);

    await page.goto('');
    await pw.navigateTo('Widget');
    await pw.assertionByUrl('widgets');
    await pw.sidebarNavigation('Progress Bar');

    await progressbar.progressBarStartButton();
    await progressbar.assertProgressBar();
  });
});
