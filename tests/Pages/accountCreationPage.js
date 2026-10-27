const registrationData = require('../data/registrationData');

class AccountCreationPage {
  constructor(page) {
    this.page = page;
  }

  get registrationData() {
    return registrationData;
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
      await submitButton.click({ force: true });
    }
  }

  async completeRegistration(data = this.registrationData) {
    const formData = { ...this.registrationData, ...data };

    await this.page.locator('input[ng-model="FirstName"]').fill(formData.firstName);
    await this.page.locator('input[ng-model="LastName"]').fill(formData.lastName);
    await this.page.locator('textarea[ng-model="Adress"]').fill(formData.address);
    await this.page.locator('input[ng-model="EmailAdress"]').fill(formData.email);
    await this.page.locator('input[ng-model="Phone"]').fill(formData.phone);
    await this.page.locator(`input[value="${formData.gender}"]`).check();
    await this.page.locator(`input[type="checkbox"][value="${formData.hobby}"]`).check();
    await this.page.locator('#Skills').selectOption(formData.skill);
    await this.page.locator('#country').selectOption({ label: formData.country });
    await this.page.locator('#yearbox').selectOption(formData.year);
    await this.page.locator('select[ng-model="monthbox"]').selectOption(formData.month);
    await this.page.locator('#daybox').selectOption(formData.day);
    await this.page.locator('#firstpassword').fill(formData.password);
    await this.page.locator('#secondpassword').fill(formData.password);
    await this.page.locator('#submitbtn').click({ force: true });
    await this.page.waitForTimeout(500000);
    
  }
}

module.exports = AccountCreationPage;
