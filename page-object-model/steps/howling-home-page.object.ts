import { BasePageObject } from '../page-objects/base-page.object';
import { expect } from '@playwright/test';

export class HomePageObject extends BasePageObject {
  async open(): Promise<void> {
    await this.navigateTo();
    await this.checkIfOpen();
    await this.toHaveTitle('party - Howling Testers');
  }

  async clickAcceptButton() {
    await this.page.getByRole('button', { name: 'Accept All' }).click();
  }

  async closePage() {
    await this.page.close();
  }

  async fillName(name: string) {
    await this.page.getByRole('textbox', { name: 'Imię postaci:' }).fill(name);
  }

  async chooseRole(role: string) {
    await this.page.locator('#character-creator').getByRole('img', { name: role }).click();
  }

  async fillPowers(powers: string[]) {
    await this.page.getByRole('spinbutton', { name: 'Siła:' }).fill(powers[0]);
    await this.page.getByRole('spinbutton', { name: 'Spryt:' }).fill(powers[1]);
    await this.page.getByRole('spinbutton', { name: 'Energia:' }).fill(powers[2]);
    await this.page.getByRole('spinbutton', { name: 'Zdrowie:' }).fill(powers[3]);
  }

  async chceckPopup() {
    await expect(this.page.locator('#popup-title')).toContainText('Duplikat imienia');
    await expect(this.page.locator('#popup-message')).toContainText(
      'Postać o tym imieniu już istnieje! Wybierz inne imię.'
    );
  }

  async addCharacter() {
    await this.page.getByRole('button', { name: 'Dodaj postać' }).click();
  }
}
