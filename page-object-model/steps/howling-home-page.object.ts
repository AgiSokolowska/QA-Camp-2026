import { BasePageObject } from '../page-objects/base-page.object';
import { expect } from '@playwright/test';

export class HomePageObject extends BasePageObject {
  async open(): Promise<void> {
    await this.navigateTo();
    await this.checkIfOpen();
    await this.toHaveTitle('party - Howling Testers');
  }



  async refreshPage() {
    await this.page.reload();
  }

  async clickAcceptButton() {
    await this.page.getByRole('button', { name: 'Accept All' }).click();
  }

  async closePage() {
    await this.page.close();
  }

  async fillName(name: string) {
    await this.page.getByRole('textbox', { name: 'Character name:' }).fill(name);
  }

  async chooseRole(role: string) {
    await this.page.locator('#character-creator').getByRole('img', { name: role }).click();
  }

  async fillPowers(powers: string[]) {
    await this.page.getByRole('spinbutton', { name: 'Strength:' }).fill(powers[0]);
    await this.page.getByRole('spinbutton', { name: 'Agility:' }).fill(powers[1]);
    await this.page.getByRole('spinbutton', { name: 'Energy:' }).fill(powers[2]);
    await this.page.getByRole('spinbutton', { name: 'Health:' }).fill(powers[3]);
  }

  async checkPopup(popupName: string, popupMessage: string) {
    await expect(this.page.locator('#popup-title')).toContainText(popupName);
    await expect(this.page.locator('#popup-message')).toContainText(popupMessage);
  }

  async closePopup() {
    await this.page.getByRole('button', { name: 'Close' }).click();
  }

  async addCharacter() {
    await this.page.getByRole('button', { name: 'Add character' }).click();
  }

    async clearLocalStorage() {
  this.page.evaluate(()=> {
  localStorage.clear();
});
  }

  async writeTheContentOfLocalStorage() {
   return await this.page.evaluate(() => {
    return { ...localStorage };
  });
  }

   async test() {
   return await this.page.evaluate(() => {
  return { test: "ok" };
});

   }
}
