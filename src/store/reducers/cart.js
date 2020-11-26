import { ADD_TO_CART_ITEM, REMOVE_ITEM_FROM_CART } from "../actions/cartActions";

export function cartReducer(cartItems = [], action) {
  switch (action.type) {
    case ADD_TO_CART_ITEM: {
      let isExist = false;
      cartItems.forEach(cartItem => {
        if (cartItem.id === action.payload.id) {
          cartItem.quantity += 1;
          isExist = true;
        }
      });
      if (isExist) {
        return cartItems;
      }

      return cartItems.concat({ ...action.payload, quantity: 1 });
    }

    case REMOVE_ITEM_FROM_CART:
      return cartItems.filter(cartItem => cartItem.id !== action.payload);
    default:
      return cartItems;
  }
}
