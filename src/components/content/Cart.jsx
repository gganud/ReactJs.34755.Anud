import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../context/CartContext';
import {Link} from 'react-router-dom';
const Carrito = () => {
    const {carrito, quitarProducto, vaciarCarrito} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);
    useEffect(() => {
        console.log(carrito);
        const prodMostrar  = carrito.map(producto => 
            <div>
                <div className="card cardProducto" key={producto[0]}>
                
                            <div className="card-body pb-0 d-flex justify-content-around align-items-center">
                            <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light text-center carritoImg" data-mdb-ripple-color="light" >
                                <img src={producto[1].img} style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} className="img-fluid" alt="" />
                            </div>
                                <div className='d-flex flex-column'>
                                    <p className=" text-center">{producto[1].nombre}</p>
                                    <p className="small text-muted text-center">{producto[1].categoria}</p>
                                    <p className="small text-muted text-center">{producto[1].variedad}</p>
                                </div>
                                <p className="text-dark fw-bold">${producto[1].precio*.9}</p>
                                    <p className="text-dark fw-bold">{producto.cantidad}</p>
                                    <p className="text-dark fw-bold">${producto[1].precio*.9 * producto.cantidad}</p>
                                    <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar</button>
                            </div>
                            <hr className="my-0" />
                    </div>     
            </div>
                )
        setCarritoLocal(prodMostrar)
    }, [carrito]);
    
   const app = (carrito.length != 0) ? <div>
        <div className='m-2 d-flex justify-content-around'>
            <p className='text-center'>Imagen</p>
            <p className='text-center'>Articulo</p>
            <p className='text-center'>Precio unitario</p>
            <p className='text-center'>Cantidad</p>
            <p className='text-center'>Subtotal</p>
            <p></p>
        </div>
        <div className='row'> {carritoLocal} </div>
        <div className='m-2 d-flex justify-content-around'>
            <button className='btn btn-dark' onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            <Link className='nav-link text-dark fw-bold' to={`/compraFinalizada`}>
                <button className='btn btn-dark'>Finalizar Compra</button>
            </Link>
        </div>
   </div> : <div className='m-3'> <h1>Carrito vacío </h1><Link className="nav-link" to="/" ><button className='btn btn-dark m-3'>Ir al Home</button></Link></div>
          
    return app
}

export default Carrito;