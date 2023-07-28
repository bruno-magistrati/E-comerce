import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Styled from 'styled-components'

const ItemDetail = ({item}) => {
  return (
    <div>
      <ItemDetailStyle>
        <img src={item.imagen} alt={item.nombre} />
        <h2>{item.nombre} </h2>
        <p>{item.descripcion} </p>
        <p>$ {item.precio} </p>
        <p>Cantidad:{item.stock} </p>
      </ItemDetailStyle>
      <ItemCount stockItems={item.stock}/>
    </div>
  )
}

export default ItemDetail

const ItemDetailStyle = Styled.div`
`