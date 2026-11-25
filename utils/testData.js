export const users = {
  standard: {
    username: process.env.TEST_USER || 'standard_user',
    password: process.env.TEST_PASSWORD || 'secret_sauce',
  },
  locked: {
    username: 'locked_out_user',
    password: process.env.TEST_PASSWORD || 'secret_sauce',
  },
  invalid: {
    username: 'usuario_inexistente',
    password: 'password_incorrecto',
  },
};

export const products = {
  backpack: {
    name: 'Sauce Labs Backpack',
    testIdAdd: 'add-to-cart-sauce-labs-backpack',
    expectedTotal: 'Total: $32.39',
  },
};

export const checkoutData = {
  validCustomer: {
    firstName: 'Carlos',
    lastName: 'Echagarreta',
    postalCode: '1425',
  },
};

export const messages = {
  lockedUserError: 'Epic sadface: Sorry, this user has been locked out.',
  invalidCredentialsError: 'Epic sadface: Username and password do not match any user in this service',
  postalCodeRequiredError: 'Error: Postal Code is required',
  orderConfirmationTitle: 'Thank you for your order!',
};