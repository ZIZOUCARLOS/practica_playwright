import { test, expect } from '../fixtures/baseFixtures.js';
import { users, messages } from '../utils/testData.js';

test.describe('Autenticación de usuarios @regression', () => {
  test('Debe iniciar sesión exitosamente con usuario estándar', async ({ loginPage, inventoryPage, page }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    await expect(page).toHaveURL(/.*inventory\.html/);
    await expect(inventoryPage.pageTitle).toHaveText('Products');
  });

  test('Debe mostrar error al intentar ingresar con usuario bloqueado', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.locked.username, users.locked.password);

    await expect(loginPage.errorBanner).toBeVisible();
    await expect(loginPage.errorBanner).toContainText(messages.lockedUserError);
  });

  test('Debe mostrar error con credenciales inválidas', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.invalid.username, users.invalid.password);

    await expect(loginPage.errorBanner).toBeVisible();
    await expect(loginPage.errorBanner).toContainText(messages.invalidCredentialsError);
  });
});