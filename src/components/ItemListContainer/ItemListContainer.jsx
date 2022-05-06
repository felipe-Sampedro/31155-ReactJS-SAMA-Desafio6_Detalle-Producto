import {useEffect, useState} from 'react'
import Item from '../Item/Item'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greetings}) => {

  const [productos,setProductos] = useState([])
  const catalogo = [
    {id:1, title:'Shampoo', stock:5, price:'$'+26000, description:'Lo que faltaba para tu producto favorito, un shampoo para ayudarte en ese proceso de transición y así tener de nuevo tus crespos Hidrata, da vida, y forma poco a poco tus crespos.', imagenUrl:'http://ponto.com.co/image/cache/catalog/SHAMPOO%20AMIDO%20DE%20MILHO.jpg-500x500.png'},
    {id:2, title:'Tratamiento', stock:2, price:'$'+37000, description:'Solo para crespas, porque siempre buscamos un pelo sano, hidratado, definido y lo mejor LIBERADO. Úsalo también en proceso de transición.', imagenUrl:'https://disarbel.co/wp-content/uploads/2021/05/eZy-Watermark_08-05-2021_03-44-24p.-m..jpg'},
    {id:3, title:'Acondicionador', stock:8, price:'$'+22500, description:'El acondicionador perfecto para todo tipo de pelo crespo, que busca reparar, fortalecer y darle mucho brillo', imagenUrl:'https://www.pigmentta.com/wp-content/uploads/2020/05/shampoo_mais_cachos.jpg'}]

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