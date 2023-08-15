import React, { useState } from 'react';
import Styled from 'styled-components'


const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const incrementar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const decrementar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    return (
    <Botonera>
        <div>
            <div className='botones'>
                    <button onClick={() => decrementar()}>-</button>
                    <h3>{count}</h3>
                    <button onClick={() => incrementar()}>+</button>
            </div>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
    </Botonera>
    );
};

export default ItemCount;

const Botonera = Styled.div`
display:flex;
justify-content:center;
.botones{
    display:flex;
    flex-direction:row;
    h3{
        margin:0 70px 0 70px
    }
}
`