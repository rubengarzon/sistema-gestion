import "../App.css";
import { useEffect, useState } from "react";
import { query } from "../utils/firebase";
import Navbar from "../components/navbar";

function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes();
  }, []);

  const getClientes = async () => {
    let result = await query("clientes");
    setClientes(result);
  };

  return (
    <>
      <div className="container-div">
        <Navbar />
        <div className="clientes-div">
          <h2>Clientes</h2>
          {clientes.map((cliente) => (
            <>
              <p key={cliente.nombre}>{cliente.nombre}</p>
              <p key={cliente.apellido}>{cliente.apellido}</p>
              <p key={cliente.localizacion}>{cliente.localizacion}</p>
              <p key={cliente.movil}>{cliente.movil}</p>
              <p key={cliente.fecha}>{cliente.fecha}</p>
              <hr />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Clientes;
