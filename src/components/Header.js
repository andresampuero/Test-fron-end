import React from 'react'
import styled from "styled-components";
const HeaderTitle = styled.header`
   border: 2px solid pink;
   background-color: pink;
   border-radius: 5px;
   color: black;
   padding: 10px;
   text-align: center;
   margin-top: 20px;
   box-shadow: 5px 5px 5px 0px lightgray;

`
function Header() {
  return (
    <div>
        <HeaderTitle>
            <h1>Cotizacion de las Criptomonedas</h1>
        </HeaderTitle>
    </div>
  )
}

export default Header