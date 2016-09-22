import { ConvofeederPage } from './app.po';

describe('convofeeder App', function() {
  let page: ConvofeederPage;

  beforeEach(() => {
    page = new ConvofeederPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
