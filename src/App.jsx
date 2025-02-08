import { Routes, Route } from 'react-router-dom';
import Navbar from "./componentes/Navbar";
import Home from './pages/Home';
import Categoria from './pages/Categoria';
import Carrito from './pages/Carrito';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:tipo" element={<Categoria />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </div>
  );
}

export default App;
