import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeStyle>
      <div className='titulo'>
        <h1>Bienvenido a Nuestra Pagina de Ropa</h1>
      </div>
    </HomeStyle>
  )
}

export default Home

const HomeStyle = styled.nav`
.titulo{
    justify-content:center;
    display:flex;
}
h1{
font-size:20px;
display:flex;
justify-content:center;
background-color:#9121cd9f;
width:500px;
}
`