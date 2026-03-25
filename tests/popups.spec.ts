import { test } from '../page-object-model/fixtures/howling-test.fixture';

  const character1 = {name: 'Bohater1', role: 'Warrior',  powers: ['20', '15', '10', '10'] }
  const character2 = {name: 'Bohater2', role: 'Warrior',  powers: ['15', '15', '10', '15'] }
  const character3 = {name: 'Bohater3', role: 'Warrior',  powers: ['5', '20', '20', '10'] }
  const character4 = {name: 'Bohater4', role: 'Warrior',  powers: ['10', '5', '20', '20'] }
  const character5 = {name: 'Bohater5', role: 'Warrior',  powers: ['8', '12', '15', '20'] }
  const character6 = {name: 'Bohater1', role: 'Warrior',  powers: ['20', '15', '10', '10'] }
  const character7 = {name: 'Bohater1', role: 'Warrior',  powers: ['20', '15', '10', '20'] }
test.describe('Check popups messages', {}, () => {

test('Character limit exceeded', async ({ homePage }) => {

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
  await homePage.fillName(character3.name);
  await homePage.chooseRole(character3.role);
  await homePage.fillPowers(character3.powers);
  await homePage.addCharacter();
  await homePage.fillName(character4.name);
  await homePage.chooseRole(character4.role);
  await homePage.fillPowers(character4.powers);
  await homePage.addCharacter();
  await homePage.fillName(character5.name);
  await homePage.chooseRole(character5.role);
  await homePage.fillPowers(character5.powers);
  await homePage.addCharacter();
  await homePage.checkPopup('Character limit', 'You can have at most 4 characters. Remove one to add a new one.');
  await homePage.closePage();
});

test('Duplicate name', async ({ homePage }) => {

  await homePage.open();
  await homePage.clickAcceptButton();
  await homePage.fillName(character1.name);
  await homePage.chooseRole(character1.role);
  await homePage.fillPowers(character1.powers);
  await homePage.addCharacter();
  await homePage.fillName(character6.name);
  await homePage.chooseRole(character6.role);
  await homePage.fillPowers(character6.powers);
  await homePage.addCharacter();
  await homePage.checkPopup('Duplicate name', 'A character with this name already exists! Choose another name.');
  await homePage.closePage();
});


test('No class selected', async ({ homePage }) => {

  await homePage.open();
  await homePage.clickAcceptButton();
  await homePage.fillName(character1.name);
  await homePage.chooseRole(character1.role);
  await homePage.fillPowers(character1.powers);
  await homePage.addCharacter();
  await homePage.fillName(character6.name);
  await homePage.fillName(character2.name);
  await homePage.fillPowers(character2.powers);
  await homePage.addCharacter();
  await homePage.checkPopup('No class', 'Choose a character class!');
  await homePage.closePage();
});

test('Too many points', async ({ homePage }) => {

  await homePage.open();
  await homePage.clickAcceptButton();
  await homePage.fillName(character7.name);
  await homePage.chooseRole(character7.role);
  await homePage.fillPowers(character7.powers);
  await homePage.addCharacter();
  await homePage.checkPopup('Stats too high', 'You spent too many points on stats. Lower them so points to spend are non-negative (e.g. 0).');
  await homePage.closePage();
});

});

test.describe('Check popups closure', {}, () => {

test('Character limit exceeded', async ({ homePage }) => {

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
  await homePage.fillName(character3.name);
  await homePage.chooseRole(character3.role);
  await homePage.fillPowers(character3.powers);
  await homePage.addCharacter();
  await homePage.fillName(character4.name);
  await homePage.chooseRole(character4.role);
  await homePage.fillPowers(character4.powers);
  await homePage.addCharacter();
  await homePage.fillName(character5.name);
  await homePage.chooseRole(character5.role);
  await homePage.fillPowers(character5.powers);
  await homePage.addCharacter();
  await homePage.closePopup();
  await homePage.closePage();
});

test('Duplicate name', async ({ homePage }) => {

  await homePage.open();
  await homePage.clickAcceptButton();
  await homePage.fillName(character1.name);
  await homePage.chooseRole(character1.role);
  await homePage.fillPowers(character1.powers);
  await homePage.addCharacter();
  await homePage.fillName(character6.name);
  await homePage.chooseRole(character6.role);
  await homePage.fillPowers(character6.powers);
  await homePage.addCharacter();
  await homePage.closePopup();
  await homePage.closePage();
});


test('No class selected', async ({ homePage }) => {

  await homePage.open();
  await homePage.clickAcceptButton();
  await homePage.fillName(character1.name);
  await homePage.chooseRole(character1.role);
  await homePage.fillPowers(character1.powers);
  await homePage.addCharacter();
  await homePage.fillName(character6.name);
  await homePage.fillName(character2.name);
  await homePage.fillPowers(character2.powers);
  await homePage.addCharacter();
  await homePage.closePopup();
  await homePage.closePage();
});
  test('Close buton - too many points', async ({ homePage }) => {

  await homePage.open();
  await homePage.clickAcceptButton();
  await homePage.fillName(character7.name);
  await homePage.chooseRole(character7.role);
  await homePage.fillPowers(character7.powers);
  await homePage.addCharacter();
  await homePage.closePopup();
  await homePage.closePage();
});
})
