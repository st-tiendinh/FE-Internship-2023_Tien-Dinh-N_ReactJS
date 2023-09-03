import { FETCH_PRODUCT_DATA } from '../constants/productTypes';

const initialState = {
  productItems: [],
  error: null,
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCT_DATA:
      return { ...state, productItems: action.payload.data, error: action.payload.error };
    default:
      return state;
  }
};
