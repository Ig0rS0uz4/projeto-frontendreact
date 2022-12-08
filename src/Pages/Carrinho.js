import React from "react";
import { useState } from "react";
import CardCarrinho from "../components/CardCarrinho"
import styled from "styled-components";
import {handleHome} from "../Router/Cordinator"
import { useNavigate } from "react-router-dom";
import {handleFinal} from "../Router/Cordinator"

export default function Carrinho(props){
    const {carrinho, setCarrinho} = props

    const navigate = useNavigate()

    let precoTotal = 0
    carrinho.map((item)=> (precoTotal = precoTotal + item.price * item.amount))

    function remover(id){
        const comida = carrinho && carrinho.find((item)=> item.id === id)

        if(comida.amount > 1){
            const novoCarrinho = carrinho.map((item)=>{
                if (comida.id === item.id && item.amount >= 1){
                    return {...item, amount: item.amount - 1}
                }else{
                    return item
                }
            })
            setCarrinho(novoCarrinho)
        }else{
            const carrinhoSemItem = carrinho.filter((item)=> item.id !== id)
            setCarrinho(carrinhoSemItem)
        }
    }

    return(
        <CarrinhoContainer>
            <Img src={"https://img.freepik.com/vetores-gratis/astronauta-bonitinho-apontando-no-foguete-dos-desenhos-animados-icone-ilustracao-vetorial-ciencia-tecnologia-icone-isolado_138676-4728.jpg?w=826&t=st=1670509196~exp=1670509796~hmac=4def2413a1ee69e7f5c486cc4e8a6ab730df50b966e4bf1772ced9f0fc485eb0"}></Img>
            <h1 id="cart">
                Carrinho{" "}
                <span role="img" arial-label="cart">{" "}
                </span>
            </h1>
            <Button onClick={()=> handleHome(navigate)}>Voltar</Button>
            {carrinho.map((comida) => {
                return (
                    <CardCarrinho
                    key={comida.id}
                    id={comida.id}
                    url={comida.url}
                    name={comida.name}
                    amount={comida.amount}
                    price={comida.price}
                    deleteItem={remover}
                    />
                )
            })}
            <h3>Preço Total: R$ {precoTotal}</h3>
            <Button className="final" onClick={() => handleFinal(navigate)}>Finalizar pedido</Button>
        </CarrinhoContainer>
    )
}

const CarrinhoContainer = styled.main`
  display: flex;
  height: 100vh;
  background: red;
  color: white;
  flex-direction: column;
  align-items: center;
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