import { Browser, chromium } from 'playwright';
import { JediForm } from '../page-objects/jedi-form.po';
import { JediList } from '../page-objects/jedi-list.po';
import { StarwarsPage } from '../page-objects/starwars-page.po';

describe('Starwars application', () => {
  let page: StarwarsPage;
  let browser: Browser;

  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100_000;
  });

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = new StarwarsPage(await browser.newPage());
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async() => {
    await page.navigate();
  });

  it('should show a list jedis', async () => {
    const items = await (await page.jediList()).items();
    expect(items.length).toBeGreaterThan(1);
  });

  describe('add jedi', () => {

    let addJediForm: JediForm;
    let jediList: JediList;

    beforeEach(async () => {
      addJediForm = await page.addJediForm();
      jediList = await page.jediList();
    });

    it('should allow to add a jedi', async () => {
      // Arrange
      const countBefore = (await jediList.items()).length;

      // Act
      await addJediForm.setName('Windu');
      await addJediForm.setMidichlorian(15000);
      await addJediForm.submit();

      // Assert
      const items = await jediList.items();
      const newItem = items[items.length-1];
      expect(items).toHaveSize(countBefore + 1);
      expect(await newItem.getName()).toEqual('Meester Windu');
      expect(await newItem.getMidichlorian()).toEqual('15.000 midichlorian');
    });
  });

});
