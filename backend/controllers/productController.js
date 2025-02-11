import Categoria from '../models/Product.js';

export const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find({});
		console.log("TCL: getCategoria -> categoria", categorias)
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
};
