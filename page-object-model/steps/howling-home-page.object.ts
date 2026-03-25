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

   async chooseClassCharacter(classCharacter: string) {
    await this.page.locator('#character-creator').getByRole('img', { name: classCharacter }).click();
  }

  async fillPowers(powers: string[]) {
    await this.page.getByRole('spinbutton', { name: 'Strength:' }).fill(powers[0]);
    await this.page.getByRole('spinbutton', { name: 'Agility:' }).fill(powers[1]);
    await this.page.getByRole('spinbutton', { name: 'Energy:' }).fill(powers[2]);
    await this.page.getByRole('spinbutton', { name: 'Health:' }).fill(powers[3]);
  }

  async checkPopup() {
    await expect(this.page.locator('#popup-title')).toContainText('Duplicate name');
    await expect(this.page.locator('#popup-message')).toContainText(
      'A character with this name already exists! Choose another name.'
    );
  }

  async addCharacter() {
    await this.page.getByRole('button', { name: 'Add character' }).click();
  }

  async selectRace(race: string) {
    await this.page.getByLabel('Race:').selectOption(race);
  }

async addHero({ name, race, classCharacter, powers }: { name: string; race: string; classCharacter: string; powers: string[] }) {
    await this.fillName(name);
    await this.selectRace(race);
    await this.chooseClassCharacter(classCharacter);
    await this.fillPowers(powers);
    await this.addCharacter();
}

async closePopup() {
  await this.page.locator('#popup-close').click();
}

async checkPopups(): Promise<boolean> {
  const title = this.page.locator('#popup-title');
  const message = this.page.locator('#popup-message');

  if (!(await title.isVisible()) || !(await message.isVisible())) {
    return false;
  }

  return (
    (await title.textContent())?.includes('Duplicate name') &&
    (await message.textContent())?.includes('A character with this name already exists! Choose another name.')
  ) ?? false;
}

async verifyCharacterCard(index: number, expected: {
  imgSrc: string;
  name: string;
  race: string;
  classCharacter: string;
  stats: {
      strength: string;
      agility: string;
      energy: string;
      health: string;
  };
}) {
  const card = this.page.locator('.character-card').nth(index);

  // IMAGE
  await expect(card.locator('img')).toHaveAttribute('src', expected.imgSrc);

  // NAME
  await expect(card.locator('.character-name')).toHaveText(expected.name);

  // RACE
  await expect(card.locator('p:has-text("Race")'))
      .toHaveText(`Race: ${expected.race}`);

  // CLASS
  await expect(card.locator('p:has-text("Class")'))
      .toHaveText(`Class: ${expected.classCharacter}`);

  // STATS
  const stats = card.locator('.stats-list li');

  await expect(stats.filter({ hasText: "Strength" }))
      .toHaveText(`Strength: ${expected.stats.strength}`);

  await expect(stats.filter({ hasText: "Agility" }))
      .toHaveText(`Agility: ${expected.stats.agility}`);

  await expect(stats.filter({ hasText: "Energy" }))
      .toHaveText(`Energy: ${expected.stats.energy}`);

  await expect(stats.filter({ hasText: "Health" }))
      .toHaveText(`Health: ${expected.stats.health}`);
}
}