export const ADD_TO_CART = 'ADD_TO_CART';
export const MINUS_FROM_CART = 'MINUS_FROM_CART';
export const CLEAR_FROM_CART = 'CLEAR_FROM_CART';
export const CHANGE_CHECKOUT_INFO = 'CHANGE_CHECKOUT_INFO';
export const UPDATE_CART_PRODUCTS = 'UPDATE_CART_PRODUCTS';
export const COMPLETE_CHECKOUT = 'COMPLETE_CHECKOUT';

export const addToCart = (product, sizeName) => ({
  type: ADD_TO_CART,
  payload: { product, sizeName },
});

export const minusFromCart = (product, sizeName) => ({
  type: MINUS_FROM_CART,
  payload: { product, sizeName },
});

export const clearFromCart = (product, sizeName) => ({
  type: CLEAR_FROM_CART,
  payload: { product, sizeName },
});

export const changeCheckoutInfo = (key, value) => ({
  type: CHANGE_CHECKOUT_INFO,
  payload: { key, value },
});

export const updateCartProducts = (products) => ({
  type: UPDATE_CART_PRODUCTS,
  payload: products,
});

export const completeCheckout = () => ({
  type: COMPLETE_CHECKOUT,
});
