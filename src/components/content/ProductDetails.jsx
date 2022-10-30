import React, {useState, useContext} from 'react';
import { FaStar } from "react-icons/fa";
import { CarritoContext } from '../context/CartContext';

const ProductDetails = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);
    const {agregarProducto} = useContext(CarritoContext)
    const cantProducto = (operacion) => {
        if(operacion == "+") {
            if(cantidad < producto[1].stock) {
              setCantidad(cantidad + 1)
            }   
        } else {
          if(cantidad > 1) {
            setCantidad(cantidad - 1)
          }
      }
    }
    return (
        <>
                <p className="text-center"><a href="#!" className="text-dark fw-bold text-decoration-none">{producto[1].nombre}</a></p>
            <div className='d-flex align-items-center justify-content-around' >
            <div >
             <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light text-center" data-mdb-ripple-color="light" >
                            <img src={producto[1].img} style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} className="img-fluid" alt="" />
                        </div>
            </div>
                           <div style={{maxWidth: '60%'}}>
                           <p className="small text-justify textoDescripcion d-flex justify-content-center px-3">{producto[1].descripcion}</p>
                        <div className="card-body pb-0">
                            <div className="d-flex flex-row justify-content-center mt-1 mb-2 text-danger">
                                <FaStar style={{color: 'goldenrod'}}/>
                                <FaStar style={{color: 'goldenrod'}}/>
                                <FaStar style={{color: 'goldenrod'}}/>
                                <FaStar style={{color: 'goldenrod'}}/>
                                <FaStar style={{color: 'goldenrod'}}/>
                            </div>
                            <p className="small text-muted text-center">{producto[1].categoria}</p>
                            <p className="small text-muted text-center">{producto[1].variedad}</p>
                            <p className="small text-muted text-center">{producto[1].productor}</p>
                        </div>
                        <hr className="my-0" />
                        <div className="card-body pb-0">
                            <div className="d-flex justify-content-around">
                                <p><a href="#!" className="text-dark text-decoration-line-through">${producto[1].precio}</a></p> 
                                <p className="text-dark fw-bold">${producto[1].precio*.9}</p>
                            </div>
                        </div>
                        <hr className="my-0" />
                        <div className="card-body">
                            <div className="d-flex justify-content-center align-items-center pb-2 mb-1">
                            <div className='d-flex justify-content-center align-items-center'>
                                <button onClick={() => cantProducto("-")} className='btn p-1 m-2'>-</button>
                                {cantidad}
                                 <button onClick={() => cantProducto("+")} className='btn p-1 m-2'>+</button>
                            </div>
                            <button type="button" className="btn btn-dark" onClick={() => agregarProducto(producto, cantidad) }>Comprar</button>
                            </div>
                        </div>
                            </div> 
                             
            </div>
        </>
    );
}
export default ProductDetails;
