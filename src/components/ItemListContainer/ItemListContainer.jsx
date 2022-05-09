import {useEffect, useState} from 'react'
import Item from '../Item/Item'
import ItemList from '../ItemList/ItemList'
import { catalogo } from '../../Config'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemListContainer = ({greetings}) => {

  const [productos,setProductos] = useState([])

useEffect(() => {
  const pedido = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(catalogo)
    }, 2000);
  });

  pedido.then((res) => {setProductos(res)})
  .then(()=>console.log(productos))
  .catch((err)=>console.log(err))

  console.log(pedido);

  return () => {
    
  }
}, [])

return (
    <div className='bg-info'>ItemListContainer

        <p>{greetings}</p>
        <div className="d-flex justify-content-evenly p-4">
          <ItemList productos={productos}/>
        </div>

    </div>
  )
}

export default ItemListContainer