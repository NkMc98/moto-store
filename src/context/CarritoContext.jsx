import React, { createContext, useReducer } from 'react';

export const CarritoContext = createContext();

const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO':
      return [...state, action.payload];
    case 'REMOVER_PRODUCTO':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [carrito, dispatch] = useReducer(carritoReducer, []);

  const agregarAlCarrito = (producto) => {
    dispatch({ type: 'AGREGAR_PRODUCTO', payload: producto });
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
