import "../App.css";
function Login() {
  let currentPage = window.location.pathname;
  return (
    <div className={currentPage === "/iniciarsesion" ? "link-active" : ""}>
      <a href="/iniciarsesion">
        <img
          src="data:image/png;base64,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"
          alt=""
          width="20"
        ></img>
        Iniciar Sesión
      </a>
    </div>
  );
}

export default Login;
