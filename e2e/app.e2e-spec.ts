import { ElixirAppPage } from './app.po';

describe('elixir-app App', function() {
  let page: ElixirAppPage;

  beforeEach(() => {
    page = new ElixirAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
