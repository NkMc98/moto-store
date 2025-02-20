import { useParams } from "react-router-dom";
import React,{ useEffect, useState } from "react";
import ProductoCard from "../components/ProductoCard";

const Categoria = () => {
  const { tipo } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products"); // Se usa el proxy de Vite
        const data = await response.json();
				console.log("TCL: fetchProducts -> data", data)
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, [tipo]);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-white">Categoría: {tipo}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {productos.length === 0 ? (
          <p className="text-center text-gray-400">No hay productos en esta categoría</p>
        ) : (
          productos.map((item) => <ProductoCard key={item.id} producto={item} />)
        )}
      </div>
    </div>
  );
};

export default Categoria;

