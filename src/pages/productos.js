import "../App.css";
import Navbar from "../components/navbar";
import { query } from "../utils/firebase";
import { useEffect, useState } from "react";

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await query("productos");
    setProductos(result);
  };

  return (
    <>
      <div className="container-products">
        <Navbar />
        <div className="cards">
          <div className="card">
            {productos.map((producto) => (
              <>
                <img
                  key={producto.icono}
                  src={producto.icono}
                  alt=""
                  width="50"
                />
                <h2 key={producto.nombre}>{producto.nombre}</h2>
                <p key={producto.descripcion}>{producto.descripcion}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Productos;
