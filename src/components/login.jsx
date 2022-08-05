import "../App.css";
function Login() {
  let currentPage = window.location.pathname;
  const urlImage =
    "https://www.citypng.com/public/uploads/small/11641484341uxf6pdncyjtkwmuiv24dbsb8yreddfga8wlwbdpzoedmrpj7i52iuvdf8unv0tcmsf1dp1dmlqnvjmgrdckpug9c89kewmqmwcqz.png";
  return (
    <div className={currentPage === "/iniciarsesion" ? "link-active" : ""}>
      <a href="/iniciarsesion">
        <img src={urlImage} alt="" width="20"></img>
        Iniciar Sesión
      </a>
    </div>
  );
}

export default Login;
