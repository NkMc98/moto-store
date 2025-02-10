import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { CarritoProvider } from './context/CarritoContext';
import Navbar from './components/Navbar';
import Footer from "./components/Footer.jsx";                                    
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const Categoria = lazy(() => import('./pages/Categoria'));
const Carrito = lazy(() => import('./pages/Carrito'));

function App() {
  return (
    <CarritoProvider>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<p className="text-center mt-10">Cargando...</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categoria/:tipo" element={<Categoria />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    </CarritoProvider>
  );
}

export default App;
