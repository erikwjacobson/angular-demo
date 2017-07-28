import { AngGitPage } from './app.po';

describe('ang-git App', () => {
  let page: AngGitPage;

  beforeEach(() => {
    page = new AngGitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
