import { SearchStopPage } from './search-stop.po';
import { browser, logging } from 'protractor';

describe('Search stop', () => {
  let page: SearchStopPage;

  beforeEach(() => {
    page = new SearchStopPage();
  });

  it('title card', () => {
    page.navigateTo();
    expect(page.getTitleCard()).toEqual('Seach stop');
  });

  it('text button', () => {
    page.navigateTo();
    expect(page.getTextButton()).toEqual('Seach');
  });

  it('click to submit button', async () => {
    page.navigateTo();
    page.clickSubmitButton();
    const url = await browser.getCurrentUrl();
    expect(url).toEqual('http://localhost:5000/');
  });

  it('set stopId and click to submit button', async () => {
    const stopId = 'st_clair_and_vaughan';
    page.navigateTo();
    page.setStopId(stopId);
    page.clickSubmitButton();
    const url = await browser.getCurrentUrl();
    expect(url).toEqual(`http://localhost:5000/stop/${stopId}`);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
