import { test } from '../page-object-model/fixtures/howling-test.fixture';
import { ClassCharacter } from '../page-object-model/page-objects/enums/classCharacter.enum';
import { Race } from '../page-object-model/page-objects/enums/race.enum';

test.afterEach(async ({ homePage }) => {
  await homePage.closePage();
});

test('create a nameless hero', async ({ homePage }) => {
  
  const nameless= '';  

    await homePage.open();
    await homePage.clickAcceptButton();

  while (true) {
  await homePage.addHero({
    name: nameless,
    race: Race.Orc,
    classCharacter: ClassCharacter.Warrior,
    powers: ['20', '15', '10', '10']
  });
 
  if (await homePage.checkPopups()) {
    console.log('Duplicate name detected');
    await homePage.closePopup();
    break;
  }
}

await homePage.verifyCharacterCard(0, {
  imgSrc: "https://howlingtesters.pl/wp-content/uploads/2025/10/3.png",
  name: "Unnamed",
  race: "Orc",
  classCharacter: "Warrior",
  stats: {
    strength: "20",
    agility: "15",
    energy: "10",
    health: "10"
  }
});

});

test ('create a hero', async ({ homePage }) => {

    await homePage.open();
    await homePage.clickAcceptButton();
    
    const name = 'Sokolowska';

    while (true) {
  await homePage.addHero({
    name: name,
    race: Race.Elf,
    classCharacter: ClassCharacter.Mage,
    powers: ['10', '20', '15', '10']
  });
 
  if (await homePage.checkPopups()) {
    console.log('Duplicate name detected');
    await homePage.closePopup();
    break;
  }
}

await homePage.verifyCharacterCard(0, {
  imgSrc: "https://howlingtesters.pl/wp-content/uploads/2025/10/1.png",
  name: "Sokolowska",
  race: "Elf",
  classCharacter: "Mage",
  stats: {
    strength: "10",
    agility: "20",
    energy: "15",
    health: "10"
  }
});

});