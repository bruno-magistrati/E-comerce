import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList';
// estilos 
import styled from 'styled-components';

const ItemListContainer = () => {

  const { categoryId } = useParams()
  const [datosProductos, setItems] = useState([]) //State donde grabo los items

  const getData = async (categoria) => {
    const querydb = getFirestore();
    const queryCollection = categoria
    ? query(collection(querydb, 'datosProductos'), where("categoria", "==", categoria))
    : collection(querydb, 'datosProductos');
    const res = await getDocs(queryCollection);
    const data = res.docs.map(p => ({ id: p.id, ...p.data() }));
    setItems(data)
  }

  useEffect(() => {
    getData(categoryId)
  }, [categoryId])
  return (
    <>
      <ItemListContainterStyled>
        <ItemList item={datosProductos}/>
      </ItemListContainterStyled>   
      </>
  )
}
export default ItemListContainer

const ItemListContainterStyled =styled.div `
display:flex;
background-color:blue;
  `   