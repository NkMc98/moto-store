import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  marca: { type: String, required: true },
  precio: { type: Number, required: true },
  imagen: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
