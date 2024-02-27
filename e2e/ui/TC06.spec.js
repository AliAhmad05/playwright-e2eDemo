import { test} from '@playwright/test';
import { Commands } from '../POM/commands';
import { DragAndDrop } from '../POM/dragNDrop';

test.describe('TC 06', () => {
  test('Verify the tooltip', async ({ page }) => {
    const pw = new Commands(page);
    const dragndrop = new DragAndDrop(page);

    await page.goto('');
    await pw.navigateTo('Interactions');
    await pw.assertionByUrl('interaction');
    await pw.sidebarNavigation('Droppable');

    await dragndrop.dragNDropElement();
    await dragndrop.assertDragNDrop();
  });
});
