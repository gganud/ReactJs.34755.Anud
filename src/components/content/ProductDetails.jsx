import React from 'react';
import { FaStar } from "react-icons/fa";
import Contador from '../layouts/contador';
const ProductDetails = ({producto}) => {
    return (
        <>
                <p className="text-center"><a href="#!" className="text-dark fw-bold text-decoration-none">{producto.nombre}</a></p>
            <div className='d-flex align-items-center justify-content-around' >
            <div >
             <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light text-center" data-mdb-ripple-color="light" >
                            <img src={"../img/" + producto.img} style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} className="img-fluid" alt="Laptop" />
                        </div>
            </div>
                           <div style={{maxWidth: '60%'}}>
                           <p className="small text-justify textoDescripcion d-flex justify-content-center px-3">{producto.descripcion}</p>
                        <div className="card-body pb-0">
                            <div className="d-flex flex-row justify-content-center mt-1 mb-2 text-danger">
                                <FaStar style={{color: 'goldenrod'}}/>
                                <FaStar style={{color: 'goldenrod'}}/>
                                <FaStar style={{color: 'goldenrod'}}/>
                                <FaStar style={{color: 'goldenrod'}}/>
                                <FaStar style={{color: 'goldenrod'}}/>
                            </div>
                            <p className="small text-muted text-center">{producto.categoria}</p>
                            <p className="small text-muted text-center">{producto.variedad}</p>
                            <p className="small text-muted text-center">{producto.productor}</p>
                        </div>
                        <hr className="my-0" />
                        <div className="card-body pb-0">
                            <div className="d-flex justify-content-around">
                                <p><a href="#!" className="text-dark text-decoration-line-through">${producto.precio}</a></p> 
                                <p className="text-dark fw-bold">${producto.precio*.9}</p>
                            </div>
                        </div>
                        <hr className="my-0" />
                        <div className="card-body">
                            <div className="d-flex justify-content-center align-items-center pb-2 mb-1">
                                <Contador/>
                                <button type="button" className="btn btn-primary bg-dark">Comprar</button>
                            </div>
                        </div>
                            </div> 
                             
            </div>
        </>
    );
}
export default ProductDetails;
