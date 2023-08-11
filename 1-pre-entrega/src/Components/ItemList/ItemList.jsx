import React from 'react'
import Item from '../Item/Item'
import Styled from 'styled-components'

const ItemList = ({item}) => {
return (
    <>
        {
        item.map(item =>
            <CardStyle key={item.id}>
            <Item item={item}/>
            </CardStyle>
                )
        }
    </>
)
}
export default ItemList

const CardStyle = Styled.div`
background-color:#222552dd;
div
{width:250px;
color:white;
p{
    font-size:20px;
    margin:1px
}
button{
font-size:25px 
}
}
`