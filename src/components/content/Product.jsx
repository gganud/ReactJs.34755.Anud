import React, {useState, useEffect} from 'react';
import ProductDetails from './ProductDetails'
import { useParams } from 'react-router-dom';
import { getProducto } from '../../utils/firebase';
const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        getProducto(id).then(prod => {
        setProducto(prod)
    })
}, [])
if (producto.length != 0) {
    return (
        
            <div className='d-flex justify-content-center align-items-center'>
                <div className="card m-3 p-3" style={{maxWidth: '60%'}}>
                    <ProductDetails producto={producto}/>
                </div>
            </div>
    );
}
}
export default Producto;
