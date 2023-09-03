import { ProductModel } from '../../app/core/models/product';
import { FETCH_PRODUCT_DATA } from '../constants/productTypes';

export interface ProductStateInterface {
  productItems: ProductModel[];
  error: string | null;
}

const initialState = {
  productItems: [],
  error: null,
};

export const productReducer = (state = initialState, action: any) => {
  const objReducer: Record<string, () => ProductStateInterface> = {
    [FETCH_PRODUCT_DATA]: () => ({
      ...state,
      productItems: action.payload.data,
      error: action.payload.error,
    }),
  };

  return typeof objReducer[action.type] === 'function' ? objReducer[action.type]() : state;
};
