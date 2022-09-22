import React from 'react';

const CartWidget = () => {
    return (
        <div className='carttWidget'>
            <p>$0.00</p>
            <p className='text-muted'>0 productos</p>
            <img className='p-2' src="images/carticon.png"/>
        </div>
    );
}

export default CartWidget;
