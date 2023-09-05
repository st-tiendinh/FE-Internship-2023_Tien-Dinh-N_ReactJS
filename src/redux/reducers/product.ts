import { ProductProps } from '../../app/core/models/product';
import { SET_PRODUCT_DATA } from '../types/product';

export interface ProductStateProps {
  productItems: ProductProps[];
  error: string | null;
}

const initialState = {
  productItems: [],
  error: null,
};

export const productReducer = (state = initialState, action: any) => {
  const objReducer: Record<string, () => ProductStateProps> = {
    [SET_PRODUCT_DATA]: () => ({
      ...state,
      productItems: action.payload.data,
      error: action.payload.error,
    }),
  };

  return typeof objReducer[action.type] === 'function' ? objReducer[action.type]() : state;
};
