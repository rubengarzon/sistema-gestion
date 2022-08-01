import "./App.css";
import Tablero from "./pages/tablero";
import Clientes from "./pages/clientes";
import Productos from "./pages/productos";
import IniciarSesion from "./pages/iniciarsesion";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
