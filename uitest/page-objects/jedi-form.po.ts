import { PageObject } from './page-object.po';

export class JediForm extends PageObject<HTMLFormElement> {

  public async setName(name: string): Promise<void> {
    const input = await this.host.$('input[name="name"]');
    await input!.fill(name);
  }

  public async setMidichlorian(count: number): Promise<void> {
    const input = await this.host.$('input[name="midichlorian"]');
    await input!.fill(count.toString());
  }

  public async submit() {
    const button = await this.host.$('button[type="submit"]');
    await button!.click();
  }
}
