import React from 'react';
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='bg-dark'> 
        {/*logo home*/}
        <div className='p-3'>
            <Link className="nav-link" to="/" ><img src="../../img/logo.png"/></Link>
        </div>
        <div>
            <h5>Contáctanos</h5>
            <div className="medioContacto">
                <p>(11)111-1111</p>
                <p>correo@dominio.com</p>
                <p>9 de Julio 1203, CABA</p>
                <p>9:00 - 23:00 hs</p>
            </div>
        </div>
        {/*redes sociales*/}
        <h5>Redes Sociales</h5>
        <div className="redes">
            <img src="../../img/facebook.png" alt="" />
            <img src="../../img/whatsapp.png" alt="" />
            <img src="../../img/instagram.png" alt="" />
            <img src="../../img/email.png" alt="" />
        </div>
        {/*Medios de pago*/}
        <h5>Medios de pago</h5>
        <div className="tarjetas">
            <img src="./img/visa@2x.png" alt="" />
            <img src="./img/mastercard@2x.png" alt="" />
            <img src="./img/amex@2x.png" alt="" />
            <img src="./img/mercadopago@2x.png" alt="" />
        </div>
        {/*derechos reservados*/}
        <div className="pie">
            <p>© Copyright 2022, Gastón Anud.</p>
            <p>Todos los derechos reservados.</p>
        </div>
        </footer>

    );
}

export default Footer;
