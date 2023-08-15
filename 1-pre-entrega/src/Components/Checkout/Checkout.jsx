import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import styled from 'styled-components'


export const Checkout = () => {
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        Telefono: ""
    })
    const { Nombre, Email, Telefono } = buyer

    const { cart } = useContext(CartContext)

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const total = cart.reduce((acum, unItem) => acum + (unItem.price * unItem.cant), 0)
        const dia = new Date()
        const data = { buyer, cart, total, dia }
        generateOrder(data)
    }

    const generateOrder = async (data) => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "Orders")
        const order = await addDoc(queryCollection, data)
        setOrderId(order.id)
    }

    return (
        <Formulario>
            <section className='seccion'>
            <div>
            <h1>Formulario</h1>
            <hr />
            </div>
            <br />
            {!orderId && <form onSubmit={handleSubmit}>
                <input className='datos' type="text"
                    name="Nombre"
                    placeholder='Nombre'
                    value={Nombre}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input className='datos' type="email"
                    name="Email"
                    placeholder='Email'
                    value={Email}
                    onChange={handleInputChange}
                />
                <br /><br />
                <input className='datos' type="number"
                    name="Telefono"
                    placeholder='Telefono'
                    value={Telefono}
                    onChange={handleInputChange}
                />
                <br /><br />
                <input className='datos' type="submit" value="Confirmar Compra" />
            </form>
            }
            {orderId && <>
                <h1>Felicitaciones tu compra se realizo con exito</h1>
                <h3>Tu ID de Compra es: {orderId}</h3>
            </>}
            </section>
        </Formulario>
    )
}

const Formulario = styled.div`

width:400px;
background-color:#222552dd;
margin:auto;
margin-top:50px;
h1, h3{
    font-size:22px;
    color: white;
    text-align:center;
}
.datos{
    width:100%;
    padding:10px;
    font-size:15px;
    margin-bottom:5px;
    background:#6f74b9d3;
    border:1px solid black;
    color: white;
}
`