import {
  ADD_ADDRESS_SUCCESS,
  DELETE_ADDRESS_SUCCESS,
  GET_ADDRESS_SUCCESS,
} from "./actionTypes";
import axios from "axios";

const addAddressSuccess = (payload) => {
  return {
    type: ADD_ADDRESS_SUCCESS,
    payload,
  };
};

const getaddressSuccess = (payload) => {
  return {
    type: GET_ADDRESS_SUCCESS,
    payload,
  };
};

const deleteAddressSuccess = (payload) => {
  return {
    type: DELETE_ADDRESS_SUCCESS,
    payload,
  };
};

export const getAddres = () => (dispatch) => {
  axios.get(`https://wadrobe.onrender.com/address`).then((res) => {
    console.log(res.data);
    dispatch(getaddressSuccess(res.data));
  });
};

export const addAddress =
  (name, mobile, pinCode, address, locality, city, state) => (dispatch) => {
    const payload = {
      name,
      mobile,
      pinCode,
      address,
      locality,
      city,
      state,
      default: "Home",
    };
    return axios
      .post(`https://wadrobe.onrender.com/address`, payload)
      .then((res) => {
        console.log(res);
        dispatch(addAddressSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const deleteAddress = (id) => (dispatch) => {
  return axios
    .delete(`https://wadrobe.onrender.com/address/${id}`)
    .then((res) => {
      console.log(res);
      dispatch(deleteAddressSuccess(res.data));
    });
};
