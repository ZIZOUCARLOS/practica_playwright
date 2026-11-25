import { test, expect } from '../fixtures/baseFixtures.js';
import { users, products, checkoutData, messages } from '../utils/testData.js';

test.describe('Flujo de Checkout @e2e', () => {
  test('Debe completar una compra exitosamente de principio a fin', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
    page,
  }) => {
    // Arrange: Login y agregar producto al carrito
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.addProductToCartByTestId(products.backpack.testIdAdd);
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();

    // Act: Completar datos y confirmar orden
    await expect(page).toHaveURL(/.*checkout-step-one\.html/);
    await checkoutPage.fillCustomerInformation(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      checkoutData.validCustomer.postalCode
    );
    await checkoutPage.clickContinue();

    // Assert paso Overview + Finish
    await expect(page).toHaveURL(/.*checkout-step-two\.html/);
    await expect(checkoutPage.summaryItemName).toHaveText(products.backpack.name);
    await expect(checkoutPage.totalLabel).toHaveText(products.backpack.expectedTotal);

    await checkoutPage.clickFinish();

    // Assert confirmación final
    await expect(page).toHaveURL(/.*checkout-complete\.html/);
    await expect(checkoutPage.completeHeader).toHaveText(messages.orderConfirmationTitle);
  });

  test('Debe mostrar error si se intenta continuar sin Código Postal', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
    page,
  }) => {
    // Arrange
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.addProductToCartByTestId(products.backpack.testIdAdd);
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();

    // Act: Enviar formulario dejando Postal Code vacío
    await checkoutPage.fillCustomerInformation(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      ''
    );
    await checkoutPage.clickContinue();

    // Assert
    await expect(page).toHaveURL(/.*checkout-step-one\.html/);
    await expect(checkoutPage.errorBanner).toBeVisible();
    await expect(checkoutPage.errorBanner).toHaveText(messages.postalCodeRequiredError);
  });
});