import { AngularTmdbPage } from './app.po';

describe('angular-tmdb App', () => {
  let page: AngularTmdbPage;

  beforeEach(() => {
    page = new AngularTmdbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
