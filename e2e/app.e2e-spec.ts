import { Angular001Page } from './app.po';

describe('angular001 App', () => {
  let page: Angular001Page;

  beforeEach(() => {
    page = new Angular001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
