import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { catalogo } from '../../Config';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

const {id} = useParams()
const [window, setWindow] = useState([])
const filtro = catalogo.find((prod)=>prod.id=== Number(id))

useEffect(() => {
  
  const detalle = new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve(filtro)
    }, 2000);

  })

  detalle.then((res) => setWindow(res))
  .then(() => console(window))
  .catch((err) => console(err))


  return () => {
  
  }
}, [])


  return (
    <div>
{/*       <ItemDetail window={window} /> */}
      {window ? <ItemDetail window={window}/> : <h1>Cargando...</h1> }

    </div>
  )
}

export default ItemDetailContainer