import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { CarritoContext } from '../context/CartContext';
const CompraFinalizada = () => {
    const {vaciarCarrito} = useContext(CarritoContext)
    return (
        <div>
            <h1>Gracias por su compra!</h1>
            <h2>En breve nos pondremos en contacto con usted para coordinar el envío.</h2>
            <Link className="nav-link" to="/" ><button className='btn btn-dark m-3' onClick={() => vaciarCarrito()}>Ir al Home</button></Link>
        </div>
    );
}

export default CompraFinalizada;
