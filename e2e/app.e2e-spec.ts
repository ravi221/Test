import { GprPocPage } from './app.po';

describe('gpr-poc App', () => {
  let page: GprPocPage;

  beforeEach(() => {
    page = new GprPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
