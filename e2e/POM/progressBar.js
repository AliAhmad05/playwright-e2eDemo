import { Page, expect } from '@playwright/test';
import { Commands } from './commands';
import { locatorWidget } from './locators/locator';

export class ProgressBar {
  constructor(page) {
    this.page = page;
  }

  async progressBarStartButton() {
    const pw = new Commands(this.page);
    await pw.clickOnButton(locatorWidget.startStopButton);

    let progressBarWidth = await this.page.locator(locatorWidget.progressBar).evaluate((element) => {
      return element.style.width;
    });
    while (progressBarWidth != '100%') {
      progressBarWidth = await this.page.locator(locatorWidget.progressBar).evaluate((element) => {

        return element.style.width;
      });
    }
  }

  async assertProgressBar() {
    const progressBarWidth = await this.page.locator(locatorWidget.progressBar).evaluate((element) => {
      return element.style.width;
    });
    expect(progressBarWidth).toBe('100%');
  }
}
