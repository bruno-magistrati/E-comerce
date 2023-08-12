import React from 'react';
import {Link} from 'react-router-dom';


const Item = ({item}) => {
  return (
   
    <>
        <img src={item.imagen} alt={item.nombre} />
        <p>{item.nombre}</p>
        <Link to = {"/item/" + item.id}>
        <button>Ver Más</button>
      </Link>
    </>
  )
}

export default Item

