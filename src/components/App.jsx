import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './content/Navbar';
import ItemListContainer from './content/ItemListContainer';
import Cart from './content/Cart';
import About from './content/About';
import Contact from './content/Contact';
import Product from './content/Product';
import Footer from './content/Footer'
import Categories from './content/Categories';
import '../styles/App.css';
const App = () => {
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes >
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/producto/:id" element={<Product/>} />
            <Route path="/categoria/:id" element={<Categories/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacto" element={<Contact/>} />
            <Route path="/carrito" element={<Cart/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    );
}

export default App;
