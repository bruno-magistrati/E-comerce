import React from 'react';
import {Link} from 'react-router-dom';
import Styled from 'styled-components'

const Item = ({item}) => {
  return (
    <Link to = {"/item/" + item.id}>
    <ItemStlye>
      <div>
        <img src={item.imagen} alt={item.nombre} />
        <p>{item.nombre}</p>
      </div>
    </ItemStlye>

    </Link>
  )
}

export default Item

const ItemStlye = Styled.div`
div{
}
`