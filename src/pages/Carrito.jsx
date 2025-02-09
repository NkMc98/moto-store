import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">🛍️ Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p className="text-gray-400">El carrito está vacío.</p>
      ) : (
        <>
          {carrito.map((item, index) => (
            <div key={index} className="border p-2 mt-2 flex justify-between items-center bg-gray-700 rounded-lg">
              <p>{item.nombre} - ${item.precio} COP</p>
              <button
                onClick={() => eliminarDelCarrito(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                ❌
              </button>
            </div>
          ))}
          {/* Botón para vaciar carrito */}
          <button
            onClick={vaciarCarrito}
            className="mt-4 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            🧹 Vaciar Carrito
          </button>
        </>
      )}
      <p className="font-bold mt-4 text-xl text-green-400">Total: ${total} COP</p>
    </div>
  );
};

export default Carrito;
