import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) => {
  return (
    <div>
      <div>
        <img src={item.imagen} alt={item.nombre} />
        <h2>{item.nombre} </h2>
        <p>{item.descripcion} </p>
        <p>$ {item.precio} </p>
        <p>Cantidad:{item.stock} </p>
      </div>
      <ItemCount/>
    </div>
  )
}

export default ItemDetail