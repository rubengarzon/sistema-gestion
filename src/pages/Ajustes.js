import { useState } from "react";
import "../App.css";
import Navbar from "../components/navbar";
import { cambiarPresupuesto } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function Ajustes() {
  const history = useNavigate();
  const [presupuesto, setPresupuesto] = useState();

  const handleInputChange = (event) => {
    setPresupuesto({
      ...presupuesto,
      [event.target.name]: [event.target.value],
    });
  };

  const modificarPresupuesto = () => {
    cambiarPresupuesto(presupuesto)
      .then(() => {
        alert("Presupuesto modificado");
        history("/");
      })
      .catch(() => {
        alert("Se ha producido un error..");
      });
  };

  return (
    <>
      <div className="contenedor-ajustes">
        <Navbar />
        <div className="bloque-ajustes">
          <input
            placeholder="Presupuesto"
            type="number"
            name="presupuesto"
            className="presupuesto"
            onChange={handleInputChange}
          ></input>
          <button className="cssbuttons-io" onClick={modificarPresupuesto}>
            <span>Modificar</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Ajustes;
