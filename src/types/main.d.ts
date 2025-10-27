export interface Product {
  brand: string;
  product: string;
  name: string;
  material: string;
  color: string;
  price: string;
  id: string;
  inStock: boolean;
  tags: string[];
}

export type Products = Product[];

export interface ProductBody {
  productName: string[];
  brandName: string[];
  productType: string[];
  color: string[];
  material: string[];
  maxPrice: number;
  minPrice: number;
  tags: string[];
}

export type ProductResponse = ProductBody | null;
