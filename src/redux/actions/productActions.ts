import { ProductProps } from '../../app/core/models/product';
import { SET_PRODUCT_DATA } from '../constants/productTypes';

export const setProductData = (data: ProductProps[], error: string | null) => {
  return {
    type: SET_PRODUCT_DATA,
    payload: { data, error },
  };
};

export const fetchProductDataFromApi = () => async (dispatch: any) => {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    dispatch(setProductData(data, null));
  } catch (error: any) {
    dispatch(setProductData([], error.message));
  }
};
