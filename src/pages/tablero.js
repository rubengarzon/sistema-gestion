import "../App.css";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { isLogged } from "../utils/firebase";
import { query } from "../utils/firebase";
import { useEffect, useState } from "react";
function Tablero() {
  const history = useNavigate();

  const [ajustes, setAjustes] = useState([]);

  useEffect(() => {
    obtenerAjustes();
  }, []);

  const obtenerAjustes = async () => {
    let result = await query("ajustes");
    setAjustes(result);
  };

  const modificarTablero = () => {
    if (isLogged()) {
      history("/ajustes");
    } else {
      alert("Necesitas iniciar sesión");
    }
  };

  return (
    <div className="container-tablero">
      <Navbar />
      <div className="container-tablero-bloque">
        <div className="btn-tablero">
          <button className="cssbuttons-io" onClick={modificarTablero}>
            <span>Modificar tablero</span>
          </button>
        </div>
        <div className="cards-tablero">
          <div className="card-tablero">
            <div className="card-tablero-bloque">
              <div>
                {ajustes.map((data) => (
                  <>
                    <h3>PRESUPUESTO</h3>
                    <h2>{data.presupuesto}k€</h2>
                  </>
                ))}
              </div>
              <div className="card-tablero-icon">
                <img
                  src="https://icon-library.com/images/budget-icon-png/budget-icon-png-6.jpg"
                  width="50"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablero;
