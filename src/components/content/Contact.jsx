import React from 'react';

const Contact = () => {
    const datosFormulario = React.useRef()

    const consultarForm = (e) => {
        e.preventDefault()
        
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries(datForm))
        e.target.reset()
    }


    return (
        <>
            <div className="container py-5">
            <form onSubmit={consultarForm} ref={datosFormulario}>
        
            <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control w-50" name="nombre" />
        </div>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">e-mail</label>
            <input type="email" className="form-control w-50" name="email"  />
        </div>
        <div className="mb-3">
            <textarea name="consulta" rows={10} cols={64} defaultValue={"Escribi su consulta aqui"} />
        </div>
            <button type="submit" className="btn btn-secondary">Enviar Consulta</button>
        </form>
            </div>
        </>
    );
}

export default Contact;