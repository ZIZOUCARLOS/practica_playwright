export class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.pageTitle = page.getByTestId('title');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.cartLink = page.getByTestId('shopping-cart-link');
  }

  async addProductToCartByTestId(addButtonTestId) {
    await this.page.getByTestId(addButtonTestId).click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}