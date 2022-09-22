import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
const SectionsNavbar = () => {
    const vinos = ["Tinto","Blanco","Rosado","Espumantes"]
    const boutique = ["Anko","Benegas","Casarena","El Enemigo"]
    const autor = ["Desquiciado","Eduardo Vidal","Niven Wines","Paso a Paso Wines"]
    const oferta = ["Vinos de oferta","Selección DonVino","Ofertas - Descuentos","Combos"]
    return (
        <>
            
            <Dropdown lista={vinos} categoria={"vinos"}/>
            <Dropdown lista={boutique} categoria={"Vinos Boutique"}/>
            <Dropdown lista={autor} categoria={"Vinos de Autor"}/>
            <Dropdown lista={oferta} categoria={"Vinos en oferta"}/>
            <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
            </li>
        </>
    );
}

export default SectionsNavbar;
