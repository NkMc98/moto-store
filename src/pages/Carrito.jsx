import React from 'react';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext.jsx';



const Carrito = () => {
  const { carrito } = useContext(CarritoContext);

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Carrito de Compras</h2>
      {carrito.map((item, index) => (
        <div key={index} className="border p-2 mt-2">
          <p>{item.nombre} - ${item.precio} COP</p>
        </div>
      ))}
      <p className="font-bold mt-4">Total: ${total} COP</p>
    </div>
  );
};

export default Carrito;
