import "../App.css";
import Navbar from "../components/navbar";
function Tablero() {
  return (
    <div className="container-tablero">
      <Navbar />
      <div className="container-tablero-bloque">
        <div className="btn-tablero">
          <button className="cssbuttons-io">
            <span>Modificar tablero</span>
          </button>
        </div>
        <div className="cards-tablero">
          <div class="card-tablero">
            <div className="card-tablero-bloque">
              <div>
                <h3>PRESUPUESTO</h3>
                <h2>24k€</h2>
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
