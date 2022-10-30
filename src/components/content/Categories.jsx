import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos } from '../../utils/firebase';
import { FaStar } from "react-icons/fa";
const Categories = () => {

    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProductos().then(productos => {
            const producto1 = productos.find(productoArray => productoArray[1].categoria == id)
            const productosCategoria = productos.filter(producto => producto[1].idCategoria == producto1[1].idCategoria)
            const cardProducto = productosCategoria.map(producto => 
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
                            <p><a href="#!" className="text-dark text-decoration-line-through">${Number(producto[1].precio).toFixed(2)}</a></p> 
                            <p className="text-dark fw-bold">${Number(producto[1].precio*.9).toFixed(2)}</p>
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
    }, [id]);
    return (
                <div className="container ">
            <div className="row">
                {productos}   
            </div>
        </div>       
            
        
    );
}

export default Categories;
