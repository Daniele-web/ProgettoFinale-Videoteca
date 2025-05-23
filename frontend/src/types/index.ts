export interface User {
  _id: string;
  customerName: string;
  email: string;
  username: string;
}

export interface Product {
  _id: string;
  productId: number;
  title: string;
  year: string;
  actors: string;
  director: string;
  box_office: string;
  image_url: string;
  imdb_url: string;
  description: string;
  unitPrice: number;
}

export interface OrderStatus {
  _id: string;
  title: string;
  statusId: number;
}

export interface Order {
  _id: string;
  customer: string;
  products: Array<Product>; //
  totalAmount: number;
  orderDate: string;
  status: OrderStatus;
}

export interface Review {
  customer: User;
  product: Product;
  rating: number;
  comment: string;
  date?: Date;
}

export interface ReviewPostData {
  customer: string;
  product: string;
  rating: number;
  comment: string;
  date: string;
}
