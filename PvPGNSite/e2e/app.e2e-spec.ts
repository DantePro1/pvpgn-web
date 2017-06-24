import { PvPGNSitePage } from './app.po';

describe('pv-pgnsite App', () => {
  let page: PvPGNSitePage;

  beforeEach(() => {
    page = new PvPGNSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
