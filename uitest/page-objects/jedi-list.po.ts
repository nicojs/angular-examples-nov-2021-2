import { ElementHandle } from 'playwright';
import { JediListItem } from './jedi-list-item.po';
import { PageObject } from './page-object.po';

export class JediList extends PageObject<HTMLTableElement> {

  public async items(): Promise<JediListItem[]> {
    const tableRows = (await this.host.$$('tbody tr')) as ElementHandle<HTMLTableRowElement>[];
    return tableRows.map(row => new JediListItem(row));
  }

}
