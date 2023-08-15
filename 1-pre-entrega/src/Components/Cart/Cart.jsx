import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Cart = () => {

    const { cart } = useContext(CartContext)
    console.log("Carrito desde cart:", cart)
    return (

        <CarritoEstilo>
            <h1>Carrito</h1>
            <hr />
            {
                cart.length === 0 ? <h1>Carrito Vacio</h1>
                    : <div className='compra'>
                        {cart.map(unItem => <div key={unItem.id}>
                            <h3>Nombre: {unItem.nombre}</h3>
                            <img className='imagen' src={unItem.img} alt={unItem.nombre}/>
                            <p>Cantidad: {unItem.cant}</p>
                            <p>Precio: {unItem.precio}</p>
                            <hr />
                        </div>)}
                    </div>
            }
            <Link to='/checkout'>
                <hr /> <button>Finalizar Compra</button>
            </Link>
        </CarritoEstilo>
    )
}

const CarritoEstilo = styled.section`
margin:auto;
width:500px;
background-color:#222552dd;
color:white;
text-align:center;
font-size:25px;
.imagen{
    margin:auto;
    border:2px solid black;
    width:250px;
}
.compra{
    background-color:#636ac827;
}
`