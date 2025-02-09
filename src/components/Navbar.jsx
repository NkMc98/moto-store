import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-5 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-white">🏍️ MotoStore</h1>
      <ul className="flex gap-6 text-white">
        <li className="hover:text-yellow-400"><Link to="/">🏠 Inicio</Link></li>
        <li className="hover:text-yellow-400"><Link to="/categoria/cascos">⛑️ Cascos</Link></li>
        <li className="hover:text-yellow-400"><Link to="/categoria/visores">🕶️ Visores</Link></li>
        <li className="hover:text-yellow-400"><Link to="/categoria/guantes">🧤 Guantes</Link></li>
        <li className="hover:text-yellow-400"><Link to="/categoria/impermeables">🌧️ Impermeables</Link></li>
        <li className="hover:text-green-400"><Link to="/carrito">🛒 Carrito</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
