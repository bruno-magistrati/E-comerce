import React from 'react'

function ItemListContainer({producto,precio,agregar}) {
  return (
    <div>
      <h2>{producto}</h2>
      <h2>{precio}</h2>
      <button>{agregar}</button>
    </div>
  )
}

export default ItemListContainer