import React from 'react';
import Searchbar from './Searchbar';
import SectionsNavbar from './SectionsNavbar';
import CartWidget from './CartWidget';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="images/logo.png"/> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <SectionsNavbar/>    
                        <Searchbar busqueda="Buscar Producto"/>
                    </ul>
                    <a className="navbar-brand" href="#"><CartWidget/> </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
