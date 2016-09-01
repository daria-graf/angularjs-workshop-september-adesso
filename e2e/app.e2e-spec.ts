import { Angular2AdessoWorkshopPage } from './app.po';

describe('angular2-adesso-workshop App', function() {
  let page: Angular2AdessoWorkshopPage;

  beforeEach(() => {
    page = new Angular2AdessoWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
