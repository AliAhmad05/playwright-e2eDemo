import { Page, expect } from '@playwright/test';
import { locatorToolTip } from './locators/locator';

export class ToolTip {
  constructor(page) {
    this.page = page;
  }

  async mouseHover(){
    await this.page.locator(locatorToolTip.buttonHover).hover()
  }

  async assertToolTip() {
    const toolTipTxt = await this.page.getByText('You hovered over the Button').textContent()
    await expect(toolTipTxt).toBe('You hovered over the Button')
  }
}
