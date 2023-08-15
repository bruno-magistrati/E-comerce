import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import styled from 'styled-components'

const CartItem = ({item}) => {

    const {removeItem} = useContext(CartContext)

    return (
        <CartEstilos>
                    <div>
                        <img src={item.imagen} alt={item.nombre}/>
                    </div>
                    <div>
                        <div>
                            <h5>{item.nombre}</h5>
                            <p>Cantidad: {item.amount}</p>
                            <p>Precio unitario: {item.precio}</p>
                            <p>Precio: {item.precio * item.amount}</p>
                            <button onClick={()=>removeItem(item.id)}>Eliminar Producto</button>
                        </div>
                    </div>     
        </CartEstilos>
    )
}

export default CartItem

const CartEstilos = styled.section`

    
`