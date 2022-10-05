import React, {useState, useEffect} from 'react';
import ProductDetails from './ProductDetails'
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funcionesUtiles';
const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
       consultarBDD('../products.json').then(productos => {
        const producto1 = productos.find(productoArray => productoArray.id == id)
        setProducto(producto1)
       })
   
    }, [])

    return (
        
            <div className='d-flex justify-content-center align-items-center'>
                <div className="card m-3 pt-5" style={{maxWidth: '60%'}}>
                    <ProductDetails producto={producto}/>
                </div>
            </div>

       
    );
}

export default Producto;
