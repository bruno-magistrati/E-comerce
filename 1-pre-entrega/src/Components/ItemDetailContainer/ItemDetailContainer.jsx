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
const queryDoc = doc(querydb,'datosProductos', '0Tr6tx8bUKrGiSd7y2iu');
getDoc (queryDoc)
.then(res => setItem({id: res.id, ...res.data()}))
    }, [id])


  return (
    <ItemDetailContainerStyled>
      <ItemDetail item={item} />
      </ItemDetailContainerStyled>
  )
}

export default ItemDetailContainer

const ItemDetailContainerStyled = Styled.div`

background-color:#222552dd;
display: flex;
justify-content: center;
align-items: center;
color:#fff;
img{
  width:300px;
  border:20px solid black;
}
h2{
}
p{
  font-size:22px;
}

`