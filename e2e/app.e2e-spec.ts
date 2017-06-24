import { AngularFormMediumPage } from './app.po';

describe('angular-form-medium App', () => {
  let page: AngularFormMediumPage;

  beforeEach(() => {
    page = new AngularFormMediumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
