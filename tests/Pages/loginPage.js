class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://www.automationexercise.com/login', { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('load');
  }

async login(email = 'rose1234@gmail.com', password = 'rose@1234') {
  const emailInput = this.page.locator('[data-qa="login-email"]');
  const passwordInput = this.page.locator('[data-qa="login-password"]');
  const signInButton = this.page.locator('[data-qa="login-button"]');

  if (await emailInput.count()) {
    await emailInput.fill(email);
  }

  if (await passwordInput.count()) {
    await passwordInput.fill(password);
  }

  if (await signInButton.count()) {
    await signInButton.click();
  }
}  
}

module.exports = LoginPage;