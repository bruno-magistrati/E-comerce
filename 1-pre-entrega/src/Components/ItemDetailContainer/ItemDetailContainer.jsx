import React from 'react'
import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import arrayProductos from '../../Json/arrayProductos.json';
import ItemDetail from '../ItemDetail/ItemDetail';
import Styled from 'styled-components'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {id} =useParams();
    useEffect(()=>{
      const promesa = new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(arrayProductos.find(item=> item.id === parseInt(id)))
        }, 1000)
      });
      promesa.then((data)=>{
        setItem(data)
      })
    }, [id])


  return (
    <ItemDetailContainerStyled>
      <div>
      <ItemDetail item={item} />
      </div>
      </ItemDetailContainerStyled>
  )
}

export default ItemDetailContainer

const ItemDetailContainerStyled = Styled.div`
div{
background-color:#222552dd;
color:#fff;
img{
  width:300px;
  position:absolute;
}
h2{
  font-size:30px;
}
p{
  font-size:22px;
}
}
`