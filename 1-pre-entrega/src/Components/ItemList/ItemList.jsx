import React from 'react'
import Item from '../Item/Item'
import Styled from 'styled-components'

const ItemList = ({item}) => {
return (
    <div>
        {
        item.map(item =>
            <CardStyle key={item.id}>
                <div>
            <Item item={item}/>
            <button>Agregar al Carrito</button>
                </div>
            </CardStyle>
                )
        }
    </div>
)
}

export default ItemList

const CardStyle = Styled.div`
width: 100px;
background-color:#222552dd;
width:100px;
height:200px;
margin:20px;
`