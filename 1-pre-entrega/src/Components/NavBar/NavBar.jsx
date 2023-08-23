import React from 'react'
import styled from 'styled-components'
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom';
function NavBar() {
  return (
    <>
      <NavStyle>
        <div>
          <h1 className='Logo'>One of Others</h1>        
        </div>
        <div className='Botones'>
          <ul className='menu-horizontal'>
            <li>
              <Link to='/' className='inicio'>Inicio</Link>
            </li>
            <li>
              <Link to='/Tienda' className='tienda'>Tienda</Link>
            </li>
                <ul className='menu-vertical'>
                  <li>
                    <NavLink to={'/Tienda/gorras'}>Gorras</NavLink>    
                  </li>
                  <li>
                    <NavLink  to={"/Tienda/zapatillas"}>Zapatillas</NavLink>
                  </li>
                </ul>
          </ul>
        </div>
      <Link to='/Carrito' className='carrito'><CartWidget/></Link>
      </NavStyle>
    </>
  )
}

export default NavBar

const NavStyle = styled.nav`
  margin: 0 0 20px 0;
  height:70px;
  background-color: #222552dd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .Logo{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size:30px;
    margin: 5px;
    color:white;
}
.Botones{
  align-items:center;
}
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
.menu-horizontal li:hover{
background-color:#2f325fdd;
}
.menu-horizontal{
  display:flex;
}

`