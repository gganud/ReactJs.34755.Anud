import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-34755-2022-anud.firebaseapp.com",
  projectId: "react-34755-2022-anud",
  storageBucket: "react-34755-2022-anud.appspot.com",
  messagingSenderId: "356047436320",
  appId: "1:356047436320:web:5dd4362acfd396e5bdda45",
  measurementId: "G-VPCM6Q0S2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
    const promise = await fetch('./json/products.json')
    const productos = await promise.json()
    productos.forEach( async(producto) => {
       await addDoc(collection(db,"productos"), {
            idCategoria: producto.idCategoria,
            categoria: producto.categoria,
            nombre: producto.nombre,
            variedad: producto.variedad,
            productor: producto.productor,
            precio: producto.precio,
            stock: producto.stock,
            img: producto.img,
            resumen: producto.resumen,
            descripcion: producto.descripcion,
       })
    })
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  return prod
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info)
  return estado
}

const deleteProducto = async(id) => {
  const estado = await deleteDoc(doc(db, "productos", id))
  return estado
}

const createProducto = async (producto) => {
  const estado = await addDoc(collection(db, "productos"), {
    idCategoria: producto.idCategoria,
            categoria: producto.categoria,
            nombre: producto.nombre,
            variedad: producto.variedad,
            productor: producto.productor,
            precio: producto.precio,
            stock: producto.stock,
            img: producto.img,
            resumen: producto.resumen,
            descripcion: producto.descripcion,
  })
  return estado
}

const createOrdenCompra = async (preTotal, nombre, apellido, email, dni, direccion) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    nombre: nombre,
    apellido: apellido,
    email: email,
    dni: dni,
    direccion: direccion,
    precioTotal: preTotal
  })
  return ordenCompra
}

const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  return ordenCompra
}

export {cargarBaseDeDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto, createOrdenCompra, getOrdenCompra}