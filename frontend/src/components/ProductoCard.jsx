import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const ProductoCard = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <div className="border p-4 rounded-lg bg-gray-800">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-40 object-cover"
        loading="lazy"
      />
      <h3 className="text-lg font-bold">{producto.nombre}</h3>
      <p>Marca: {producto.marca}</p>
      <p className="text-green-400">${producto.precio} COP</p>
      <button
        onClick={() => agregarAlCarrito(producto)}
        className="mt-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-700"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductoCard;

