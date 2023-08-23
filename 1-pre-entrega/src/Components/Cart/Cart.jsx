import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)
    const totalAmount = cart.reduce((total, unItem) => total + unItem.precio * unItem.cant, 0);
    return (

        <CarritoEstilo>
    {cart.map((unItem) => (
        <div className='Carrito' key={unItem.id} >
            <h1>Carrito</h1>
            <img className='imagen' src={unItem.img} alt={unItem.nombre}/>
            <div>
            <h3>Nombre: {unItem.nombre}</h3> 
            <p>Precio: {unItem.precio + "$"}</p> 
            <p>Cantidad: {unItem.cant}</p> 
            <p>Precio Total: {unItem.precio * unItem.cant + "$"}</p> 
            </div>
            <button onClick={() => removeItem(unItem.id)}>Eliminar Producto</button>
        </div>
    ))}
        {cart.length === 0 ? (
            <div className='CarritoVacio'>
                <h1>El carrito de compras esta vacio.</h1>
            </div>
        ) : (
            <div className='Carrito'>
            <div >
                <h3>Total a pagar: ${totalAmount}</h3>
            </div>
            <Link to="/checkout">
                <button>Finaliza tu Compra</button>
            </Link>
            </div>
        )}

        </CarritoEstilo>
    )
}

const CarritoEstilo = styled.section`
.Carrito{
    margin:auto;
width:400px;
background-color:#222552dd;
color:white;
text-align:center;
font-size:25px;
h1{
        font-size:35px;
}
.imagen{
    margin:auto;
    border:2px solid black;
    width:300px;
}
.compra{
    background-color:#636ac827;
}}
.CarritoVacio{
    width:900px;
    margin:auto;
    h1{
        text-align:center;
        color:white;
        font-size:35px;
        border:solid black 10px;
        border-radius:12px;
        background-color: #4fadcc;
    }
}
`