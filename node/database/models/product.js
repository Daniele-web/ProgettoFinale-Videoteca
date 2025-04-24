import { Schema, model } from "mongoose";

const productSchema = new Schema({
  productId: { type: Number, unique: true },
  title: String,
  description: String,
  year: String,
  director: String,
  actors: String,
  box_office: String,
  image_url: String,
  imdb_url: String,
  unitPrice: Number,
});

const Product = model("Product", productSchema);
export default Product;
