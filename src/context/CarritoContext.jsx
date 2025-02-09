import { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    // Elimina SOLO el primer producto que coincida con el ID
    setCarrito((prevCarrito) => {
      const index = prevCarrito.findIndex((item) => item.id === id);
      if (index !== -1) {
        return [...prevCarrito.slice(0, index), ...prevCarrito.slice(index + 1)];
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

