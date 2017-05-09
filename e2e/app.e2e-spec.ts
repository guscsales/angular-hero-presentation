import { MarvinDashboardPage } from './app.po';

describe('marvin-dashboard App', function() {
  let page: MarvinDashboardPage;

  beforeEach(() => {
    page = new MarvinDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
