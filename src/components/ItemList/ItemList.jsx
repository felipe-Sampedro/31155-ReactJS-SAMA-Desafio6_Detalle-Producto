import React from 'react'
import Item from '../Item/Item'


const ItemList = ({productos}) => {

  return (
    <>
      {productos.length > 0 ? (
        productos.map((producto) => (
          <div>
            <Item title={producto.title} imagenUrl={producto.imagenUrl} description={producto.description} price={producto.price} stock={producto.stock}/>
          </div>
        ))
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};
export default ItemList
