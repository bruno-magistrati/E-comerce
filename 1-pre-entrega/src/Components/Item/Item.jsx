import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'


const Item = ({item}) => {
  return (
    <ItemEstilo>
        <img src={item.imagen} alt={item.nombre} />
        <p>{item.nombre}</p>
        <hr />
        <Link to = {"/item/" + item.id}>
        <button>Ver Más</button>
      </Link>
    </ItemEstilo>
  )
}

export default Item

const ItemEstilo = styled.section`
img{
  width:100%;
}
text-align:center;
`
