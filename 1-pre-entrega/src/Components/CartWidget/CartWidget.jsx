import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import carrito from '../../assets/carrito-de-compras.png'
import { CartContext } from '../../context/CartContext';
import styled from 'styled-components'

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <LogoCarrito>
      <Link to="/cart">
        <img src={carrito} alt="cart"/> 
        <p>{getQuantity()}</p>
      </Link>
    </LogoCarrito>
  );
};

export default CartWidget;

const LogoCarrito = styled.section`
img:hover{
  background-color:#5f6294dd;
}
a{
  display:flex;
  flex-direction:row-reverse;}
img{
  width:50px;
}
p{
  margin-right:3px;
}
`