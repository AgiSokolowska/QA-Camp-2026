import { test } from '../page-object-model/fixtures/howling-test.fixture';

test('Unikalność imienia', async ({ homePage }) => {
  
  const name1 = 'Bohater';
  const name2 = 'bohater';
  const role = 'Wojownik';
  const powers1 = ['20', '15', '10', '10'];
  const powers2 = ['15', '15', '10', '15']

  await homePage.open();
  await homePage.clickAcceptButton();
  await homePage.fillName(name1);
  await homePage.chooseRole(role);
  await homePage.fillPowers(powers1);
  await homePage.addCharacter();
  await homePage.fillName(name2);
  await homePage.chooseRole(role);
  await homePage.fillPowers(powers2);
  await homePage.addCharacter();
  await homePage.chceckPopup();
  await homePage.closePage();
});