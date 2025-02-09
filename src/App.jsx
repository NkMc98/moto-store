import { Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Home from './pages/Home';
import Categoria from './pages/Categoria';
import Carrito from './pages/Carrito';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <CarritoProvider>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:tipo" element={<Categoria />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>
    </CarritoProvider>
  );
}

export default App;
