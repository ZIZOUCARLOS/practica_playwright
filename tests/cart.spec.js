import { test, expect } from '../fixtures/baseFixtures.js';
import { users, products } from '../utils/testData.js';

test.describe('Gestión del Carrito de Compras @e2e', () => {
  test('Debe agregar un producto al carrito y visualizarlo correctamente', async ({ loginPage, inventoryPage, cartPage, page }) => {
    // Arrange
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    // Act
    await inventoryPage.addProductToCartByTestId(products.backpack.testIdAdd);
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await inventoryPage.goToCart();

    // Assert
    await expect(page).toHaveURL(/.*cart\.html/);
    await expect(cartPage.pageTitle).toHaveText('Your Cart');
    await expect(cartPage.cartItemName).toHaveText(products.backpack.name);
  });
});