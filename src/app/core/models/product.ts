export enum ProductStatus {
  OUT_OF_STOCK,
  AVAILABLE,
}

export interface ProductInterface {
  id: number;
  name: string;
  discount: number;
  price: number;
  imageUrl: string;
  status: ProductStatus;
}
