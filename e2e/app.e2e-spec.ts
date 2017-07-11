import { RateyourdayPage } from './app.po';

describe('rateyourday App', () => {
  let page: RateyourdayPage;

  beforeEach(() => {
    page = new RateyourdayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
