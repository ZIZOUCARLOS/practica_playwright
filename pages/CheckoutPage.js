export class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Paso 1: Información del comprador
    this.pageTitle = page.getByTestId('title');
    this.firstNameInput = page.getByTestId('firstName');
    this.lastNameInput = page.getByTestId('lastName');
    this.postalCodeInput = page.getByTestId('postalCode');
    this.continueButton = page.getByTestId('continue');
    this.errorBanner = page.getByTestId('error');

    // Paso 2: Resumen (Overview)
    this.summaryItemName = page.getByTestId('inventory-item-name');
    this.totalLabel = page.getByTestId('total-label');
    this.finishButton = page.getByTestId('finish');

    // Paso 3: Confirmación
    this.completeHeader = page.getByTestId('complete-header');
  }

  async fillCustomerInformation(firstName, lastName, postalCode) {
    if (firstName) await this.firstNameInput.fill(firstName);
    if (lastName) await this.lastNameInput.fill(lastName);
    if (postalCode) await this.postalCodeInput.fill(postalCode);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async clickFinish() {
    await this.finishButton.click();
  }
}