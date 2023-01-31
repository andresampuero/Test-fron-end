import { useState, useEffect } from 'react';
import React from 'react'
import Input from './Input'
import styled from "styled-components";

const Form = styled.form`
   width: 50%;
`
const Formulario = () => {

    
  return (
    <div>
        <Form >
            <Input/>
        </Form>
    </div>
  )
}

export default Formulario