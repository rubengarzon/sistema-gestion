import "../App.css";
function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="navbar-li">
          <a href="/clientes">Clientes</a>
          <a href="/productos">Productos</a>
          <a href="/iniciarsesion">Iniciar Sesión</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
