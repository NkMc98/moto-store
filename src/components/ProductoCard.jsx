import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const ProductoCard = ({ producto }) => {
  const { agregarAlCarrito, eliminarDelCarrito } = useContext(CarritoContext);

  return (
    <div className="border p-4 rounded-lg bg-gray-800 shadow-lg hover:scale-105 transition-transform">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-40 object-cover rounded-md"
        loading="lazy"
      />
      <h3 className="text-lg font-bold text-white">{producto.nombre}</h3>
      <p className="text-gray-300">Marca: {producto.marca}</p>
      <p className="text-green-400 font-semibold">${producto.precio} COP</p>
      <button
        onClick={() => agregarAlCarrito(producto)}
        className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
      >
        🛒 Agregar al carrito
      </button>
      {/* Botón para eliminar un producto */}
      <button
        onClick={() => eliminarDelCarrito(producto.id)}
        className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition ml-2"
      >
        🗑️
      </button>
    </div>
  );
};

export default ProductoCard;

