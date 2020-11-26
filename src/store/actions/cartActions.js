export const ADD_TO_CART_ITEM = 'ADD_TO_CART_ITEM';

export function addItemToCart(payload) {
  return {
    type: ADD_TO_CART_ITEM,
    payload
  };
};

export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

export function removeItemFromCart(id) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: id
  };
};
