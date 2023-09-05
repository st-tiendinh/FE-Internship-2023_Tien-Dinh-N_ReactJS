import { ProductProps } from '../../app/core/models/product';
import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from '../types/product';

export interface ProductStateProps {
  productItems: ProductProps[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  productItems: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action: any) => {
  const objReducer: Record<string, () => ProductStateProps> = {
    [FETCH_PRODUCT_REQUEST]: () => ({
      ...state,
      loading: true,
    }),

    [FETCH_PRODUCT_SUCCESS]: () => ({
      ...state,
      productItems: action.payload.data,
      loading: false,
    }),

    [FETCH_PRODUCT_FAILURE]: () => ({
      ...state,
      productItems: [],
      loading: false,
      error: action.payload.error,
    }),
  };

  return typeof objReducer[action.type] === 'function' ? objReducer[action.type]() : state;
};
