import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Styled from 'styled-components'

const ItemDetail = ({item}) => {
  return (
    <>
      <ItemDetailStyle>
        <img src={item.imagen} alt={item.nombre} />
        <h2>{item.nombre} </h2>
        <p>{item.descripcion} </p>
        <p>$ {item.precio} </p>
        <p>Cantidad:{item.stock} </p>
      <ItemCount stockItems={item.stock}/>
      </ItemDetailStyle>
    </>
  )
}

export default ItemDetail

const ItemDetailStyle = Styled.div`
.boton{
  display:flex;
  justify-content:space-around;
  border-style:3px solid black
}
`