import { test } from '../page-object-model/fixtures/howling-test.fixture';

test('Protecting the uniqueness of the name', async ({ homePage }) => {
  const character1 = {name: 'Bohater', role: 'Warrior',  powers: ['20', '15', '10', '10'] }
  const character2 = {name: 'bohater', role: 'Warrior',  powers: ['15', '15', '10', '15'] }
  // const name1 = 'Bohater';
  // const name2 = 'bohater';
  // const role = 'Warrior';
  // const powers1 = ['20', '15', '10', '10'];
  // const powers2 = ['15', '15', '10', '15']

  await homePage.open();
  await homePage.clickAcceptButton();
  await homePage.fillName(character1.name);
  await homePage.chooseRole(character1.role);
  await homePage.fillPowers(character1.powers);
  await homePage.addCharacter();
  await homePage.fillName(character2.name);
  await homePage.chooseRole(character2.role);
  await homePage.fillPowers(character2.powers);
  await homePage.addCharacter();
  await homePage.chceckPopup();
  await homePage.closePage();
});