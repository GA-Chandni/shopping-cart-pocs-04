//Constant Action
import { ADD_TO_CART } from "../constant";

//action is a simple function those return object
//we cant use async
export const addToCartAction = (productName) => {
  return (dispatch) => {
    //consoling data
    dispatch({
      type: ADD_TO_CART,
      payload:productName
    });
  };
};
