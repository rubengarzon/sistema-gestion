import "../App.css";
import { useEffect, useState } from "react";
import { query } from "../utils/firebase";

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
    <div>
      <h2>Clientes</h2>
      {clientes.map((cliente) => (
        <p key={cliente.nombre}>{cliente.nombre}</p>
      ))}
    </div>
  );
}

export default Clientes;
