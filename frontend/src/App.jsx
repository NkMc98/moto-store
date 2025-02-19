import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { CarritoProvider } from './context/CarritoContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Lazy loading para mejorar el rendimiento
const Home = lazy(() => import('./pages/Home'));
const Categoria = lazy(() => import('./pages/Categoria'));
const Carrito = lazy(() => import('./pages/Carrito'));

function App() {
  return (
    <CarritoProvider>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <Suspense fallback={<p className="text-center mt-10">Cargando...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/categoria/:tipo"
              element={
                <ErrorBoundary>
                  <Categoria />
                </ErrorBoundary>
              }
            />
            <Route
              path="/carrito"
              element={
                <ErrorBoundary>
                  <Carrito />
                </ErrorBoundary>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </CarritoProvider>
  );
}

export default App;
