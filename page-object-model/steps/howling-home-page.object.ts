import { BasePageObject } from '../page-objects/base-page.object';
import { expect } from '@playwright/test';

export class HomePageObject extends BasePageObject {
  async open(): Promise<void> {
    await this.navigateTo();
    await this.checkIfOpen();
    await this.toHaveTitle('party - Howling Testers');
  }

  async clearLocalStorage() {
  this.page.evaluate(()=> {
  localStorage.clear();
});
  }


  async writeTheContentOfLocalStorage() {
   const storage = await this.page.evaluate(() => {
  return { ...localStorage };
  });
console.log("LOCAL STORAGE:", storage); 
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

  async chceckPopup() {
    await expect(this.page.locator('#popup-title')).toContainText('Duplicate name');
    await expect(this.page.locator('#popup-message')).toContainText(
      'A character with this name already exists! Choose another name.'
    );
  }

  async addCharacter() {
    await this.page.getByRole('button', { name: 'Add character' }).click();
  }
}
