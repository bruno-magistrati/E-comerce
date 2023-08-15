import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
// import { Link } from 'react-router-dom';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import Styled from 'styled-components';

const ItemDetail = ({ item }) => {
    const [stock, setStock] = useState(item.stock);
    const { addItem } = useContext(CartContext);
    const handleOnAdd = (count) => {
        addItem({ id: item.id, precio: item.precio, nombre: item.nombre, img: item.imagen }, count)
    };
    const handleStock = () => {
        const querydb = getFirestore()
        const itemDoc = doc(querydb, "Items", item.id)
        const stockNuevo = stock + 3
        updateDoc(itemDoc, { stock: stockNuevo })
        setStock(stockNuevo)
    };
    return (
        <ItemDetailStyled>
            <div>
                <div className='image'>
                    <img src={item.imagen} alt={item.nombre} />
                    <h1>{item.nombre}</h1>
                    <hr/>
                </div>
                <div className='cuerpo'>
                    <h3>DETALLES: {item.descripcion}</h3>
                    <br />
                    <h3>PRECIO: {item.precio}</h3>
                    <hr />
                    <br />
                    <ItemCount className='botonera' stock={stock} initial={1} onAdd={handleOnAdd} />
                    {/* <div className="row">
                        {cantidad > 0 && <Link to="/cart" className='btn btn_item_count'>Finalizar compra</Link>}
                    </div> */}
                    <button onClick={handleStock}>Aumentar stock en 3</button>
                </div>
            </div>
        </ItemDetailStyled>
    )
}

export default ItemDetail

const ItemDetailStyled = Styled.div`

display:flex;
justify-content:center;
color: white;
.image{
    img{
        width:250px;
        border: #121276 solid 4px;
        margin:auto;
    }
    h1
    {
        display:flex;
        justify-content:center;
        font-size:25px;
    }
}
.cuerpo{
    h3{
    display:flex;
    justify-content:center;
    }
    display:flex;
    flex-direction:column;
    justify-content:center;
    font-size:20px;
}
`