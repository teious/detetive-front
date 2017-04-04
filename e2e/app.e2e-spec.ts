import { DetetiveFrontPage } from './app.po';

describe('detetive-front App', () => {
  let page: DetetiveFrontPage;

  beforeEach(() => {
    page = new DetetiveFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
