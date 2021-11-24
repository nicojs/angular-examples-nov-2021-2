import { ElementHandle } from 'playwright';

export abstract class PageObject<TElement extends Node> {
  protected host: ElementHandle<TElement>;
  constructor(host: ElementHandle<TElement> | null) {
    if(!host) {
      throw new Error('Element not found!');
    }
    this.host = host;
  }
}
