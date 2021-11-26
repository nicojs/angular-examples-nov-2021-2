import { ElementHandle, Page } from 'playwright';
import { JediForm } from './jedi-form.po';
import { JediList } from './jedi-list.po';

export class StarwarsPage {
  constructor(private page: Page) {}

  public async navigate() {
    await this.page.goto('http://localhost:4200');
    await this.waitForAngular()
  }

  public async waitForAngular() {
    await this.page.evaluate(async () => {
      // @ts-expect-error
      if (window.getAllAngularTestabilities) {
        // @ts-expect-error
        await Promise.all(window.getAllAngularTestabilities().map(whenStable));

        // @ts-expect-error
        async function whenStable(testability) {
          return new Promise((res) => testability.whenStable(res) );
        }
      }
    });
  }

  public async jediList() {
    return new JediList(
      (await this.page.$('table.jedi-list')) as ElementHandle<HTMLTableElement>
    );
  }

  public async addJediForm() {
    return new JediForm(
      (await this.page.$('#addJediForm')) as ElementHandle<HTMLFormElement>
    );
  }
}
