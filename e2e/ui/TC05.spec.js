import { test } from '@playwright/test';
import { Commands } from '../POM/commands';
import { ToolTip } from '../POM/toolTip';

test.describe('TC 05', () => {
  test('Verify the tooltip', async ({ page }) => {
    const pw = new Commands(page);
    const toolTip = new ToolTip(page);

    await page.goto('');
    await pw.navigateTo('Widget');
    await pw.assertionByUrl('widgets');
    await pw.sidebarNavigation('Tool Tips');

    await toolTip.mouseHover();
    await toolTip.assertToolTip();
  });
});
