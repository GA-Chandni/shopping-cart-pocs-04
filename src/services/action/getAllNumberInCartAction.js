import { GET_ALL_NUMBERS_IN_CART } from "../constant";

export const getAllNumberInCart = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_NUMBERS_IN_CART,
    });
  };
};
