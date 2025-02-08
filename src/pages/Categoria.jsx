import { useParams } from 'react-router-dom';
import ProductoCard from "../components/ProductoCard.jsx";


const productos = {
  cascos: [
    { id: 1, nombre: "Casco X", marca: "Brand A", precio: 300000, imagen: "/cascos/casco1.jpg" },
    { id: 2, nombre: "Casco Y", marca: "Brand B", precio: 350000, imagen: "/cascos/casco2.jpg" },
  ],
  visores: [
    { id: 1, nombre: "Visor Transparente", marca: "Brand A", precio: 150000, imagen: "/visores/visor1.jpg" },
  ],
};

const Categoria = () => {
  const { tipo } = useParams();
  const items = productos[tipo] || [];

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Categoría: {tipo}</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {items.map((item) => (
          <ProductoCard key={item.id} producto={item} />
        ))}
      </div>
    </div>
  );
};

export default Categoria;
