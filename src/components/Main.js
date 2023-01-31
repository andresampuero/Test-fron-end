import React from 'react'
import styled from "styled-components";
import Formulario from './Formulario'
 const Datos = styled.main`
   border: 2px solid pink;
   background-color: pink;
   border-radius: 5px;
   color: black;
   padding: 10px;
   text-align: center;
   height: 600px;
   margin-top: 40px;
   box-shadow: 5px 5px 5px 0px lightgray;
 `
const Main = () => {
  return (
    <div>
        <Datos>
            <Formulario/>
        </Datos>
    </div>
  )
}

export default Main