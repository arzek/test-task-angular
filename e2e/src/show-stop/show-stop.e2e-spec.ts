import { ShowStopPage } from './show-stop.po';
import { browser, logging } from 'protractor';

describe('Show stop', () => {
  let page: ShowStopPage;

  beforeEach(() => {
    page = new ShowStopPage();
  });

  it('navigate to true stopId', () => {
    page.navigateToTrueStopId();
    expect(page.getPageTitle()).toEqual('Stop - St Clair and Vaughan');
  });

  it('navigate to false stopId', () => {
    try {
      page.navigateToFalseStopId();
    } catch (e) {
      expect(page.getPageTitle()).toEqual('Sorry, an error occurred, please try again');
    }
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
