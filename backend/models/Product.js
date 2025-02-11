import mongoose from 'mongoose';

const categoriastSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  marca: { type: String, required: true },
  precio: { type: Number, required: true },
  imagen: { type: String, required: true },
});

const Categoria = mongoose.model('Categoria', categoriastSchema);
export default Categoria;
