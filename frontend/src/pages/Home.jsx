import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
         style={{ backgroundImage: "url('/assets/moto-bg.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400">Bienvenido a MotoStore 🏍️</h2>
        <p className="mt-4 text-lg text-gray-300">
          Encuentra los mejores accesorios para motociclistas con la mejor calidad y seguridad.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link to="/categoria/cascos">
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded shadow-lg hover:bg-yellow-400">
              Explorar Cascos
            </button>
          </Link>
          <Link to="/categoria/guantes">
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow-lg hover:bg-blue-400">
              Explorar Guantes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
