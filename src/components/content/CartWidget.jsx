import React from 'react';
import {Link} from 'react-router-dom'
const CartWidget = () => {
    return (
        <div className='carttWidget '>
            <p>$0.00</p>
            <p className='text-muted'>0 productos</p>
            <Link className="nav-link mx-2" to="/carrito"><button className='btn btn-secondary'><img className='p-2' src="../../img/carticon.png"/></button></Link>
            
        </div>
    );
}

export default CartWidget;
