import React from 'react';
import {Link} from 'react-router-dom';


const Item = ({item}) => {
  return (
    <Link to = {"/item/" + item.id}>
    <>
        <img src={item.imagen} alt={item.nombre} />
        <p>{item.nombre}</p>
        <button>Agregar al Carrito</button>
    </>
    </Link>
  )
}

export default Item

