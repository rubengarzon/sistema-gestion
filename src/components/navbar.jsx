import "../App.css";
import { isLogged } from "../utils/firebase";
import Login from "./login";
import Logout from "./logout";
function Navbar() {
  let li;

  if (isLogged() === false) {
    li = <Login />;
  } else {
    li = <Logout />;
  }

  return (
    <div className="navbar">
      <ul>
        <li className="navbar-li">
          <a href="/clientes">Clientes</a>
        </li>
        <li className="navbar-li">
          <a href="/productos">Productos</a>
        </li>
        {li}
      </ul>
    </div>
  );
}

export default Navbar;
