import Product from '../../services/ProductService';

export const fetchProductData = async (url: string): Promise<Array<Product>> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
