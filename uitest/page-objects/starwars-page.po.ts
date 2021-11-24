import { ElementHandle, Page } from 'playwright';
import { JediForm } from './jedi-form.po';
import { JediList } from './jedi-list.po';

export class StarwarsPage {
  constructor(private page: Page) {}

  public async navigate() {
    return this.page.goto('http://localhost:4200');
  }

  public async jediList() {
    return new JediList((await this.page.$('table.jedi-list') as ElementHandle<HTMLTableElement>));
  }

  public async addJediForm() {
    return new JediForm((await this.page.$('#addJediForm')) as ElementHandle<HTMLFormElement>)
  }
}
