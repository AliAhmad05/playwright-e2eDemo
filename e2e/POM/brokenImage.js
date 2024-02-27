import { Page, expect } from '@playwright/test';

export class BrokenImage {
  constructor(page) {
    this.page = page;
  }

  async assertBrokenImage() {
    await this.page.waitForLoadState()
    //const brokenImage = await this.page.locator('img').nth(3).evaluate((img) => (img as HTMLImageElement).naturalWidth || 0);
    const brokenImage = await this.page
      .locator('img')
      .nth(3)
      .evaluate((img) => img?.naturalWidth ?? 0)

    expect(brokenImage).toBe(0);
  }
}
