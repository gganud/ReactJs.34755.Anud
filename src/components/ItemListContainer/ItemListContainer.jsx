import React from 'react';
import ItemContainer from '../ItemContainer/ItemContainer';
const ItemListContainer = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <ItemContainer/>
                    <ItemContainer/>
                    <ItemContainer/>
                    <ItemContainer/>
                    
                </div>
            </div> 
        </>
    );
}

export default ItemListContainer;
