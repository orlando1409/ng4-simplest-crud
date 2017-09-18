import { Products3Page } from './app.po';

describe('products3 App', () => {
  let page: Products3Page;

  beforeEach(() => {
    page = new Products3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
