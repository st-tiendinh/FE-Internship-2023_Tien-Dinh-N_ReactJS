import { ProductModel } from '../../app/core/models/product';
import { FETCH_PRODUCT_DATA } from '../constants/productTypes';

export const fetchProductData = (data: ProductModel[], error: string | null) => {
  return {
    type: FETCH_PRODUCT_DATA,
    payload: { data, error },
  };
};

export const fetchProductApi = () => async (dispatch: any) => {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    dispatch(fetchProductData(data, null));
  } catch (error: any) {
    dispatch(fetchProductData([], error.message));
  }
};
