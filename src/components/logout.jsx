import "../App.css";
import { logout } from "../utils/firebase";
function Logout() {
  const cerrarSesion = () => {
    logout();
  };

  return (
    <li className="navbar-li">
      <a href="/productos" onClick={cerrarSesion}>
        Cerrar Sesión
      </a>
    </li>
  );
}

export default Logout;
