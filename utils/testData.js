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
  },
};

export const messages = {
  lockedUserError: 'Epic sadface: Sorry, this user has been locked out.',
  invalidCredentialsError: 'Epic sadface: Username and password do not match any user in this service',
};