import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../../Json/arrayProductos.json';
import ItemList from '../ItemList/ItemList';
// estilos 
import styled from 'styled-components';

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const {id} =useParams();
    useEffect(()=>{
      const promesa = new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(id ? arrayProductos .filter (item=> item.categoria === id) : arrayProductos)
        }, 2000)
      });
      promesa.then((data)=>{
        setItem(data)
      })
    },[id] )

  return (
    <div>
      <ItemListContainterStyled>
        <ItemList item={item}/>
      </ItemListContainterStyled>   

      </div>
  )
}
export default ItemListContainer

const ItemListContainterStyled =styled.div `
  

`