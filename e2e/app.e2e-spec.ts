import { BestofthebestWebPage } from './app.po';

describe('bestofthebest-web App', () => {
  let page: BestofthebestWebPage;

  beforeEach(() => {
    page = new BestofthebestWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
