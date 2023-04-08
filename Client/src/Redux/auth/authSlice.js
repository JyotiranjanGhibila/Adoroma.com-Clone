import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cart: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
      state.cart = action.payload.cart;
    },
    logoutUser: (state) => {
      state.user = null;
      state.cart = null;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, setCart } = authSlice.actions;

export default authSlice.reducer;
