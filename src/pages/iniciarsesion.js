import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseLogin } from "../utils/firebase";

function IniciarSesion() {
  const navigate = useNavigate();
  const [datos, setDatos] = useState([]);

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isLogged = await firebaseLogin(datos.usuario, datos.password);

    if (isLogged) {
      alert("Ha iniciado sesión correctamente");
      navigate("/");
    } else {
      alert("La contraseña es incorrecta");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="usuario.."
        onChange={handleInputChange}
        name="usuario"
      />
      <input
        type="password"
        placeholder="password.."
        onChange={handleInputChange}
        name="password"
      />
      <input type="submit" value="Iniciar Sesión" />
    </form>
  );
}

export default IniciarSesion;
