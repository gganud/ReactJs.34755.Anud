import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import { CarritoContext } from '../context/CartContext';
const CartWidget = () => {
    const {carrito} = useContext(CarritoContext)
    return (
        <div className='carttWidget '>
            <p className='text-muted'>{carrito.length} Productos</p>
            <Link className="nav-link mx-2" to="/carrito"><button className='btn btn-secondary'><img className='p-2' src="../../img/carticon.png"/></button></Link>
            
        </div>
    );
}

export default CartWidget;
