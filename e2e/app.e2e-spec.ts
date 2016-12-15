import { TranslateAng2Page } from './app.po';

describe('translate-ang2 App', function() {
  let page: TranslateAng2Page;

  beforeEach(() => {
    page = new TranslateAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
