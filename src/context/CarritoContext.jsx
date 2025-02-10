import React, { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => {
      const index = prevCarrito.findIndex((item) => item.id === id);
      if (index !== -1) {
        const nuevoCarrito = [...prevCarrito];
        nuevoCarrito.splice(index, 1);
        return nuevoCarrito;
      }
      return prevCarrito;
    });
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
