import React, {useState, useEffect} from 'react';
import { getProductos } from '../../utils/firebase';
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos().then(productos => {
            const cardProducto = productos.map(producto => 
                <div className="card col-3 m-3 " style={{borderRadius: '15px'}} key={producto[0]}>
                    <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light text-center" data-mdb-ripple-color="light">
                        <Link className='nav-link text-dark fw-bold' to={`/producto/${producto[0]}`}><img src={producto[1].img} style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} className="img-fluid" alt="" /></Link>
                        
                        <a href="#!">
                        <div className="mask" />
                        </a>
                    </div>
                    <div className="card-body pb-0">
                        <p className="text-center"><a href="#!" className="text-dark fw-bold text-decoration-none">{producto[1].nombre}</a></p>
                        <div className="d-flex flex-row justify-content-center mt-1 mb-2 text-danger">
                            <FaStar style={{color: 'goldenrod'}}/>
                            <FaStar style={{color: 'goldenrod'}}/>
                            <FaStar style={{color: 'goldenrod'}}/>
                            <FaStar style={{color: 'goldenrod'}}/>
                            <FaStar style={{color: 'goldenrod'}}/>
                        </div>
                        <p className="small text-muted text-center">{producto[1].variedad}</p>
                        <p className="small text-center">{producto[1].resumen}</p>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body pb-0">
                        <div className="d-flex justify-content-between">
                            <p><a href="#!" className="text-dark text-decoration-line-through">${producto[1].precio}</a></p> 
                            <p className="text-dark fw-bold">${producto[1].precio*.9}</p>
                        </div>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                        <div className="d-flex justify-content-around align-items-center pb-2 mb-1">
                        <Link className='nav-link text-dark fw-bold' to={`/producto/${producto[0]}`}><button type="button" className="btn btn-primary bg-dark">+Info</button></Link>
                        </div>
                    </div>                
                </div>)
            setProductos(cardProducto)
        })
    }, []);


    return (
        <div className="container ">
            <div className="row justify-content-center">
                {productos}   
            </div>
        </div>       
    );
}

export default ItemListContainer;
