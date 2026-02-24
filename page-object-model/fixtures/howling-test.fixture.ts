import { test as base } from '@playwright/test';
import { config2 } from '../../config/howlingGlobalConfig';
import { HomePageObject } from '../steps/howling-home-page.object';

type Fixtures = {
  homePage: HomePageObject;
};

const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePageObject(page, config2.baseURL);
    await use(homePage);
  },
});

export { test };
