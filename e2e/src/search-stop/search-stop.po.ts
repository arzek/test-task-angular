import { browser, element, by } from 'protractor';

export class SearchStopPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }
  getTitleCard() {
    return element(by.css('.app-card-title')).getText();
  }

  getTextButton() {
    return element(by.css('button')).getText();
  }

  clickSubmitButton() {
    return element(by.css('button')).click();
  }

  setStopId(value: string) {
    return element(by.css('input')).sendKeys(value);
  }
}
