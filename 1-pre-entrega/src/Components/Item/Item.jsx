import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
  return (
    <Link to = {"/item/" + item.id}>
    <div>
      <div>
        <img src={item.imagen} alt={item.nombre} />
        <p>{item.nombre}</p>
      </div>
    </div>

    </Link>
  )
}

export default Item