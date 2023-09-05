import { ProductProps } from '../../app/core/models/product';
import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from '../types/product';

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (data: ProductProps[]) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: { data },
  };
};

export const fetchProductFailure = (error: string | null) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: { error },
  };
};

export const fetchProductDataFromApi = () => async (dispatch: any) => {
  dispatch(fetchProductRequest());
  const paths = ['./data.json', './'];
  setTimeout(async () => {
    try {
      const response = await fetch(paths[Math.floor(Math.random() * 2)]);
      const data = await response.json();
      dispatch(fetchProductSuccess(data));
    } catch (error: any) {
      dispatch(fetchProductFailure(error));
    }
  }, 4000);
};
