import { useState } from "react";
import "../App.css";
import Navbar from "../components/navbar";
import { AddNewCustomer } from "../utils/firebase";

function AddCustomer() {
  const [customer, setCustomer] = useState([]);

  const handleInputChange = (event) => {
    setCustomer({
      ...customer,
      [event.target.name]: [event.target.value],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    AddNewCustomer(customer)
      .then(() => {
        alert("Cliente añadido");
      })
      .catch((error) => {
        alert("Error.. " + error.message);
      });
  };
  return (
    <>
      <div className="container-addcustomer">
        <Navbar />
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="usuario.."
              onChange={handleInputChange}
              name="nombre"
            />
            <input
              type="text"
              placeholder="apellido.."
              onChange={handleInputChange}
              name="apellido"
            />
            <input
              type="email"
              placeholder="email.."
              onChange={handleInputChange}
              name="email"
            />
            <input
              type="text"
              placeholder="movil.."
              onChange={handleInputChange}
              name="movil"
            />
            <input
              type="text"
              placeholder="localizacion.."
              onChange={handleInputChange}
              name="localizacion"
            />
            <input type="submit" value="Añadir Cliente" />
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
