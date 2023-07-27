import React from 'react'
import styled from 'styled-components'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom';
function NavBar() {
  return (
    <>
      <NavStyle>
        <div>
          <a className='Logo' href="">One of Others</a>        
        </div>
        <div className='Botones'>
          <Link to='/' className='inicio'>Inicio</Link>
          <Link to='/Tienda' className='tienda'>Tienda</Link>


        </div>
      <Link to='/Carrito' className='carrito'><CartWidget/></Link>
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
.Botones{
  display:flex;
  align-items:center;
}
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
`