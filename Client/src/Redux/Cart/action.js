import { DELETE_CART_SUCCESS, GET_CART_SUCCESS, POST_CART_SUCCESS } from "./actionTypes";
import axios from "axios";

const postCartSuccess = () => {
  return {
    type: POST_CART_SUCCESS,
  };
};

const getCartSuccess = (payload) => {
  
  return {
    type: GET_CART_SUCCESS,
    payload,
  };
};


const deleteCartSuccess=(payload)=>{
  console.log("payload ", payload);
  return {
    type:DELETE_CART_SUCCESS,payload
  }
}


export const addCart = (data) => (dispatch) => {
  axios.post(`https://wadrobe.onrender.com/cart`, data).then((res) => {
    console.log(res.data);
    dispatch(postCartSuccess(res.data));
  });
};

export const getCartData = () => (dispatch) => {
  axios.get(`https://wadrobe.onrender.com/cart`).then((res) => {
    console.log("original cart", res.data);
    dispatch(getCartSuccess(res.data));
  });
};


export const deleteCartData = (id) => (dispatch) => {
 return axios.delete(`https://wadrobe.onrender.com/cart/${id}`).then((res) => {
    console.log("original cart", res.data);
   dispatch(deleteCartSuccess(res.data))
  });
};
