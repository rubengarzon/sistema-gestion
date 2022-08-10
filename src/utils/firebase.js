import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore";
import AddCustomer from "../pages/AddCustomer";

export function firebaseConfig() {
  const config = {
    apiKey: "AIzaSyAUjNKtvLdOFHZVJsucXrJW6tz9Ucent84",
    authDomain: "sistema-44be6.firebaseapp.com",
    projectId: "sistema-44be6",
    storageBucket: "sistema-44be6.appspot.com",
    messagingSenderId: "1038321616955",
    appId: "1:1038321616955:web:79121dd4aa4ee45492341e",
  };

  // Initialize Firebase
  const app = initializeApp(config);
}

export function firebaseRegistrarUsuario(email, password) {
  createUserWithEmailAndPassword(getAuth(), email, password)
    .then(() => {
      alert("Se ha registrado correctamente");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export async function firebaseLogin(email, password) {
  try {
    let credenciales = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
  } catch (e) {
    return false;
  }
  return true;
}

export async function query(coleccionABuscar) {
  let listado = [];
  let consulta = collection(getFirestore(), coleccionABuscar);
  let resultado = await getDocs(consulta);
  resultado.forEach((documento) => {
    let objeto = documento.data();
    objeto.id = documento.id;
    listado.push(objeto);
  });
  return listado;
}

export async function cambiarPresupuesto(ajustes) {
  return await setDoc(doc(getFirestore(), "ajustes", "SxRQNblBn2ePZhkR90gT"), {
    presupuesto: ajustes.presupuesto[0],
  });
}

export function isLogged() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    return true;
  } else {
    return false;
  }
}

export function logout() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      alert("¡Has cerrado sesión!");
    })
    .catch((error) => {
      // An error happened.
    });
}

export async function AddNewCustomer(customer) {
  let f = new Date();
  let fechaActual = f.getDate() + "-" + f.getMonth() + "-" + f.getFullYear();

  return await setDoc(doc(getFirestore(), "clientes", "Prueba"), {
    nombre: customer.nombre,
    apellido: customer.apellido,
    email: customer.email,
    movil: customer.movil,
    localizacion: customer.localizacion,
    fecha: fechaActual,
  });
}
