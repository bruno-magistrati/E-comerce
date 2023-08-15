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

const HomeStyle = styled.section`
.titulo{
width:340px;
margin:auto;
}
h1{
font-size:20px;
color:white;
}
`