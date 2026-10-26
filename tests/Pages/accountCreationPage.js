class AccountCreationPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://demo.automationtesting.in/Register.html', { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('load');
  }

  async fillSampleData() {
    const emailInput = this.page.locator('input[ng-model="EmailAdress"]');
    const submitButton = this.page.locator('#submitbtn');

    if (await emailInput.count()) {
      await emailInput.fill('test.user@example.com');
    }

    if (await submitButton.count()) {
      await submitButton.click();
    }
  }
}

module.exports = AccountCreationPage;
