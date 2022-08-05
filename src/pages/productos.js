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
          {productos.map((producto) => (
            <>
              <div className="card">
                <img src={producto.icono} alt="" width="50"></img>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Productos;
