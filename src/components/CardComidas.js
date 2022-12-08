import React from "react";
import styled from "styled-components";
import Filtro from "../components/Filtro"
import pratos from "../pratos.json"
import { useState } from "react";

export default function CardComidas(props) {
    const { comida, comprar } = props

    return (
        <CardContainer>
            <Image src={comida.url} alt={comida.name} />
            <p>{comida.name}</p>
            <p>R${comida.price}</p>
            <Button onClick={() => comprar(comida.id)}>Comprar agora!</Button>
        </CardContainer>
    )
}

const Image = styled.img`
width: 80%;
border-radius: 50%;
`
const CardContainer = styled.section`
width: 150px;
color: black;
border: 1px solid white;
border-radius: 10px;
background: white;
margin: 10px;
padding: 10px;
&:hover{
    box-shadow: 10px 5px 5px #5A0303;
}
`
const Button = styled.button`
background: red;
color: white;
border: 2px solid white;
border-radius: 5px;
height: 50px;
width: 100px;
font-size: 15px;
&:hover{
    box-shadow: 3px 1px 1px #5A0303;
}
`
