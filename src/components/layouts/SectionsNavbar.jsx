import React from 'react';
import Dropdown from './Dropdown';
import {Link} from 'react-router-dom'
const SectionsNavbar = () => {
    const vinos = ["Vinos","Espumantes","Cervezas","Ofertas"]
    return (
        <>
            <Dropdown lista={vinos}/>
            <li className="nav-item">
                <Link className="nav-link" to="/about" >Nosotros</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contacto" >Contacto</Link>
            </li>
        </>
    );
}

export default SectionsNavbar;
