import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p className="text-gray-400">El carrito está vacío</p>
      ) : (
        carrito.map((item, index) => (
          <div key={index} className="border p-2 mt-2 flex justify-between items-center">
            <span>{item.nombre} - ${item.precio} COP</span>
            <button
              className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-700"
              onClick={() => eliminarDelCarrito(item.id)}
            >
              ❌
            </button>
          </div>
        ))
      )}

      {carrito.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <p className="font-bold">Total: ${total} COP</p>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 flex items-center gap-2"
            onClick={vaciarCarrito}
          >
            🛒 Vaciar Carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
