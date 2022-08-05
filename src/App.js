import "./App.css";
import Tablero from "./pages/Tablero";
import Clientes from "./pages/Clientes";
import Productos from "./pages/Productos";
import IniciarSesion from "./pages/IniciarSesion";
import AddCustomer from "./pages/AddCustomer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { firebaseConfig } from "./utils/firebase";

firebaseConfig();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Tablero />} />
        <Route exact path="/clientes" element={<Clientes />} />
        <Route exact path="/productos" element={<Productos />} />
        <Route exact path="/iniciarsesion" element={<IniciarSesion />} />
        <Route exact path="/addcustomer" element={<AddCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
