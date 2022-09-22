import React from 'react';
import { FaStar } from "react-icons/fa";
const ItemContainer = () => {
    return (
        <>
        <div className="col-md-8 col-lg-3 col-xl-3">
  <div className="card" style={{borderRadius: '15px'}}>
    <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light text-center" data-mdb-ripple-color="light">
      <img src="images/vino01.jpeg" style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} className="img-fluid" alt="Laptop" />
      <a href="#!">
        <div className="mask" />
      </a>
    </div>
    <div className="card-body pb-0">
      <p className="text-center"><a href="#!" className="text-dark fw-bold text-decoration-none">Nombre artículo</a></p>
      <div className="d-flex flex-row justify-content-center mt-1 mb-2 text-danger">
          <FaStar style={{color: 'goldenrod'}}/>
          <FaStar style={{color: 'goldenrod'}}/>
          <FaStar style={{color: 'goldenrod'}}/>
          <FaStar style={{color: 'goldenrod'}}/>
          <FaStar style={{color: 'goldenrod'}}/>
      </div>
      <p className="small text-muted text-center">Categoría</p>
      <p className="small text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt harum fugiat eaque.</p>
      <a href="#!" className="text-dark fw-bold text-decoration-none">+Info</a>
    </div>
    <hr className="my-0" />
    <div className="card-body pb-0">
      <div className="d-flex justify-content-between">
        <p><a href="#!" className="text-dark text-decoration-line-through">$Precio regular</a></p> 
        <p className="text-dark fw-bold">$Precio online</p>
      </div>
    </div>
    <hr className="my-0" />
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
        <label for="amount">Cantidad:</label>
        <select className="form-select amount" name="amount" id="amount">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button type="button" className="btn btn-primary bg-dark">Comprar</button>
      </div>
    </div>
  </div>
</div>
        </>
    );
}

export default ItemContainer;
