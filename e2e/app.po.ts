import { browser, by, element } from 'protractor';

export class AngularFormsAppOnePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTitleElement()
  {
    return element(by.id('title'));
  }
}
