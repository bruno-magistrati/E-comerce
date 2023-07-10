import React from 'react'
import styled from 'styled-components'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo-atenea.png'

function NavBar() {
  return (
    <>
      <NavStyle>
        <div>
        <a className='Logo' href="">One of Others</a>
        </div>
        <div>
        <a href="#h">Inicio</a>
        <a href="#h">Tienda</a>
        <a href="#h">Nostros</a>
        </div>
      <a href=""><CartWidget/></a>
      </NavStyle>
    </>
  )
}

export default NavBar

const NavStyle = styled.nav`
  margin: 0;
  height:70px;
  background-color: #222552dd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .Logo{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size:30px;
    margin: 5px;
}
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}

`