import React from 'react'
import Item from '../Item/Item'
import Styled from 'styled-components'

const ItemList = ({item}) => {
return (
    <div>
        {
        item.map(item=>
            <CardStyle key={item.id}>

            <Item item={item}/>
            <button>Agregar al Carrito</button>
            </CardStyle>
                )
        }
    </div>
)
}

export default ItemList

const CardStyle = Styled.div`
width: 100px;
background-color:blue;
/* display:flex; */

`