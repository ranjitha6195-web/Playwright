class HomePage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://demo.automationtesting.in/Index.html', { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('load');
  }

  async isLoaded() {
    return this.page.url().includes('Index') || this.page.title().includes('Index');
  }

//   async openLoginPage() {
//     await this.page.goto('https://www.amazon.com.au/ap/signin', { waitUntil: 'domcontentloaded' });
//   }

//   async openRegistrationPage() {
//     await this.page.goto('https://www.amazon.com.au/ap/register?showRememberMe=true', { waitUntil: 'domcontentloaded' });
//   }
}

module.exports = HomePage;
