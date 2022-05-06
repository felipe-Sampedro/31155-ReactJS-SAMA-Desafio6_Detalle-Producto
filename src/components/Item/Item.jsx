import React from 'react'
import ItemCount from '../ItmenCount/ItemCount'

const Card = ({title,imagenUrl,description,price,stock}) => {
  return (
    <div className="card" style={{width:"18rem"}}>
        <img src={imagenUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{height:'140px'}}>{description}</p>
            <p>{price}</p>
            <ItemCount stock={stock}/>
            <a href="#" className="btn btn-primary">Ver Detalle</a>
        </div>
    </div>
  )
}

export default Card