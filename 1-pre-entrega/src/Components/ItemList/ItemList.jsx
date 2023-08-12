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
margin:20px;
width:250px;
p, button{
    color: white;
    font-size:15px;

}
`