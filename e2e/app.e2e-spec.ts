import { AngularFormsAppOnePage } from './app.po';

describe('angular-forms-app-one App', () => {
  let page: AngularFormsAppOnePage;

  beforeEach(() => {
    page = new AngularFormsAppOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
