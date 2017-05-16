export class Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export class ExtendedProduct extends Product {
  total: number;
}