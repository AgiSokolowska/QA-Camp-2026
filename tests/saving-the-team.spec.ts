import { expect } from '@playwright/test';
import { test } from '../page-object-model/fixtures/howling-test.fixture';

test('Character data is stored in `localStorage`', async ({ homePage }) => {
  const character1 = {name: 'Bohater', role: 'Warrior',  powers: ['20', '15', '10', '10'] }
  const character2 = {name: 'Bohater2', role: 'Warrior',  powers: ['15', '15', '10', '15'] }

  await homePage.open();
  await homePage.clearLocalStorage();
  await homePage.clickAcceptButton();
  await homePage.fillName(character1.name);
  await homePage.chooseRole(character1.role);
  await homePage.fillPowers(character1.powers);
  await homePage.addCharacter();
  await homePage.fillName(character2.name);
  await homePage.chooseRole(character2.role);
  await homePage.fillPowers(character2.powers);
  await homePage.addCharacter();
  const localStorage1 = await homePage.writeTheContentOfLocalStorage();
  const parsed = JSON.parse(localStorage1.characters);
  const characters = [
  {
    name: "Bohater",
    race: "Human",
    charClass: "Warrior",
    imgSrc: "https://howlingtesters.pl/wp-content/uploads/2025/10/3.png",
    strength: 20,
    agility: 15,
    energy: 10,
    health: 10,
  },
  {
    name: "Bohater2",
    race: "Human",
    charClass: "Warrior",
    imgSrc: "https://howlingtesters.pl/wp-content/uploads/2025/10/3.png",
    strength: 15,
    agility: 15,
    energy: 10,
    health: 15,
  },

];
  await expect(parsed).toEqual(characters);
  await homePage.refreshPage();
  const localStorage2 = await homePage.writeTheContentOfLocalStorage();
  const parsed2 = JSON.parse(localStorage2.characters);
  await expect(parsed2).toEqual(characters);
  await homePage.closePage();
 
} );