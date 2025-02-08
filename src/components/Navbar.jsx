import React from 'react';  
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <h1 className="text-xl font-bold">MotoStore</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categoria/cascos">Cascos</Link></li>
        <li><Link to="/categoria/visores">Visores</Link></li>
        <li><Link to="/categoria/guantes">Guantes</Link></li>
        <li><Link to="/categoria/impermeables">Impermeables</Link></li>
        <li><Link to="/carrito">🛒 Carrito</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
