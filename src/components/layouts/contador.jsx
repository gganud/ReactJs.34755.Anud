import React, {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(1);
    function modificarContador(operacion) {
        if(operacion == "+") {
            setContador(contador + 1)
        } else {
            if(contador > 1) {
                setContador(contador - 1)
            } 
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <button onClick={() => modificarContador("-")} className='btn p-1 m-2'>-</button>
                {contador}
            <button onClick={() => modificarContador("+")} className='btn p-1 m-2'>+</button>
        </div>
    );
}

export default Contador;