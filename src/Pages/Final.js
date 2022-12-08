import React from "react";
import styled from "styled-components";
import {handleHome} from "../Router/Cordinator"
import { useNavigate } from "react-router-dom";

export default function Final() {
    const navigate = useNavigate()

    return (
        <FinalContainer>
            <Img src={"https://img.freepik.com/vetores-gratis/astronauta-bonitinho-apontando-no-foguete-dos-desenhos-animados-icone-ilustracao-vetorial-ciencia-tecnologia-icone-isolado_138676-4728.jpg?w=826&t=st=1670509196~exp=1670509796~hmac=4def2413a1ee69e7f5c486cc4e8a6ab730df50b966e4bf1772ced9f0fc485eb0"}></Img>
            <h1 id="final">
                Obrigado por comprar conosco.
            </h1>
            <h3> Seu pedido ja está sendo feito e logo sairá para a entrega!</h3>
            <Button onClick={() => handleHome(navigate)}>Voltar</Button>
        </FinalContainer>
    )
}

const FinalContainer = styled.main`
background: red;
height: 100vh;
color: white;
`
const Img = styled.img`
width: 15%;
border: 10px outset red;
border-radius: 50%;
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
    box-shadow: 7px 3px 3px #5A0303;
}
`