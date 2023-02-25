// import { POST_CART_SUCCESS, GET_CART_SUCCESS } from "./actionType";

import { DELETE_CART_SUCCESS, GET_CART_SUCCESS, POST_CART_SUCCESS } from "./actionTypes";

const initialState = {
  cart: [],
  isError: false,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("paylooaddd", payload);

  switch (type) {
    case POST_CART_SUCCESS: {
      return {
        ...state,
      };
    }

    case GET_CART_SUCCESS: {
      return {
        ...state,
        cart: payload,
      };
    }

    case DELETE_CART_SUCCESS:{
      let updateData=state.cart.filter((el)=>el.id!==payload.id)
      return {
              ...state,cart:updateData
      }
    }

    default:
      return state;
  }
};

export { reducer };
