import { Page, expect } from '@playwright/test';

export class DragAndDrop {
  constructor(page) {
    this.page = page;
  }

  async dragNDropElement() {
    await this.page.getByText('Drag me', { exact: true }).dragTo(this.page.getByLabel('Simple').locator('#droppable'));
  }

  async assertDragNDrop() {
    const status = await this.page.getByLabel('Simple').locator('#droppable').textContent();
    await expect(status).toBe('Dropped!');
  }
}
