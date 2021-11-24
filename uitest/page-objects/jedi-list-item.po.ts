import { PageObject } from './page-object.po';

export class JediListItem extends PageObject<HTMLTableRowElement> {

  async getName(): Promise<string> {
    const nameElement = await this.host.$('[test-id="jediName"]');
    return nameElement!.innerText();
  }
  async getMidichlorian(): Promise<string> {
    const nameElement = await this.host.$('[test-id="jediMidichlorian"]');
    return nameElement!.innerText();
  }
}
