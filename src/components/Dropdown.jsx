import React from 'react';

const Dropdown = ({lista, categoria}) => {
    return (
        <>
            <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{categoria}</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">{lista[0]}</a>
                            <a className="dropdown-item" href="#">{lista[1]}</a>
                            <a className="dropdown-item" href="#">{lista[2]}</a>         
                            <a className="dropdown-item" href="#">{lista[3]}</a>
                        </div>
                        </li>
        </>
    );
}

export default Dropdown;
