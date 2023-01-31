import React from 'react'
import styled from "styled-components";
import Header from './Header';
import Main from './Main';

const ContainerCripto = styled.div`
  margin: 0 100px;
`

export const Container = () => {
  return (
    <div>
        <ContainerCripto>
            <Header/>
            <Main/>
        </ContainerCripto>
    </div>
  )
}
