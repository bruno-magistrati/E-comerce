import React from 'react'
import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore,doc, getDoc} from 'firebase/firestore';
import Styled from 'styled-components';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {id} =useParams();
    useEffect(()=>{
const querydb = getFirestore();
const queryDoc = doc(querydb,'datosProductos', id);
getDoc (queryDoc)
.then(res => setItem({id: res.id, ...res.data()}))
    }, [id])


  return (
  <ItemDetailContainerStyled>
    {item?<ItemDetail item={item} />:<h1>Cargando...</h1>}
  </ItemDetailContainerStyled>  
  )
}

export default ItemDetailContainer

const ItemDetailContainerStyled = Styled.div`

`