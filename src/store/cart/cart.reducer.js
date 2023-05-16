import { CART_ACTIONS_TYPE } from "./cart.type";

const  CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
}

export function cartReducer(state=CART_INITIAL_STATE, actions={}) {
  const {type, payload} = actions;

  switch (type) {
    case CART_ACTIONS_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems:payload
      }
    case CART_ACTIONS_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default:
      return state;
  }
}
