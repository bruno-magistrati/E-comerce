import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
// import { Link } from 'react-router-dom';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

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
        <div className='container detailsStyle'>
            <h1 className='text-center titleStyle' >{item.nombre}</h1>
            <div className='row'>
                <div className='col'>
                    <img src={item.imagen} className='rounded mx-auto d-block img_med' alt={item.nombre} />
                </div>
                <div className='col'>
                    <h3>DESCRIPCION:</h3>
                    <p>{item.descripcion}</p>
                    <br />
                    <h3>PRECIO: {item.precio}</h3>
                    <hr />
                    <br />
                    <ItemCount stock={stock} initial={0} onAdd={handleOnAdd} />
                    <br />
                    {/* <div className="row">
                        {cantidad > 0 && <Link to="/cart" className='btn btn_item_count'>Finalizar compra</Link>}
                    </div> */}
                    <button onClick={handleStock}>Aumentar stock en 3</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail