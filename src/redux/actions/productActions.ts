import { FETCH_PRODUCT_DATA } from '../constants/productTypes';

export const fetchProductData = (data: any, error: any) => {
  return {
    type: FETCH_PRODUCT_DATA,
    payload: { data, error },
  };
};

export const fetchProducts = () => async (dispatch: any) => {
  try {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    dispatch(fetchProductData(data, null));
  } catch (error: any) {
    dispatch(fetchProductData([], error.message));
  }
};
