import React from 'react';
import Searchbar from '../layouts/Searchbar';
import SectionsNavbar from '../layouts/SectionsNavbar';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="nav-link" to="/" ><img src="../../img/logo.png"/></Link>
                    <a className="navbar-brand" href="#"> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <Searchbar busqueda="Buscar Producto"/>
                        <SectionsNavbar/>    
                    </ul>
                    
                    <CartWidget/>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

