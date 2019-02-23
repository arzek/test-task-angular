import { browser, element, by } from 'protractor';

export class ShowStopPage {
  navigateToTrueStopId() {
    return browser.get('/stop/st_clair_and_vaughan') as Promise<any>;
  }

  navigateToFalseStopId() {
    return browser.get('/stop/xxxxxx') as Promise<any>;
  }

  getPageTitle() {
    return element(by.css('.app-card-title')).getText();
  }
}
