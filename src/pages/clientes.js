import "../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { query } from "../utils/firebase";
import Navbar from "../components/navbar";

function Clientes() {
  const history = useNavigate();
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes();
  }, []);

  const getClientes = async () => {
    let result = await query("clientes");
    setClientes(result);
  };

  const changePage = () => {
    history("/addcustomer");
  };

  return (
    <>
      <div className="container-div">
        <Navbar />
        <div className="clientes-div">
          <h2>Clientes</h2>
          <table cellspacing="0" cellpadding="0">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Localización</th>
              <th>Móvil</th>
              <th>Fecha</th>
            </tr>
            {clientes.map((cliente) => (
              <>
                <tr>
                  <td key={cliente.nombre}> {cliente.nombre}</td>
                  <td key={cliente.apellido}> {cliente.apellido}</td>
                  <td key={cliente.email}> {cliente.email}</td>
                  <td key={cliente.localizacion}> {cliente.localizacion}</td>
                  <td key={cliente.movil}> {cliente.movil}</td>
                  <td key={cliente.fecha}> {cliente.fecha}</td>
                </tr>
              </>
            ))}
          </table>
        </div>
        <button className="cssbuttons-io" onClick={changePage}>
          <span>Añadir Cliente</span>
        </button>
      </div>
    </>
  );
}

export default Clientes;
