import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { handleCadastro, handleCart } from "../Router/Cordinator";
import CardComidas from "../components/CardComidas"
import styled from "styled-components";
import Filtro from "../components/Filtro"
import pratos from "../pratos.json"

function Home(props) {
    const [buscaNome, setBuscaNome] = useState("")
    const [ordenar, setOrdenar] = useState("")

    const { carrinho, setCarrinho, comidas } = props
    const navigate = useNavigate()

    function comprar(id) {
        const i = carrinho.findIndex((item) => item.id === id)
        if (i !== -1) {
            const novoCarrinho = [...carrinho]
            novoCarrinho[i] = {
                ...novoCarrinho[i],
                amount: novoCarrinho[i].amount + 1
            }
            setCarrinho(novoCarrinho)
        } else {
            const achouComida = comidas.find((comida) => comida.id === id)
            const novaComida = { ...achouComida, amount: 1 }
            const novaLista = [...carrinho, novaComida]
            setCarrinho(novaLista)
        }
    }

    return (
        <HomeContainer>
            <Img src={"https://pbs.twimg.com/media/FjdNeoVXkAAUpQB?format=png&name=240x240"}></Img>
            <H1>Enviamos para qualquer lugar do Universo</H1>
            <Filtro
                buscaNome={buscaNome}
                setBuscaNome={setBuscaNome}
                ordenar={ordenar}
                setOrdenar={setOrdenar}
            />
            <Button className="carrinho" onClick={() => handleCart(navigate)}>Carrinho</Button>
            <ComidasContainer>
                {comidas
                    .filter((pratos) => {
                        return pratos.name
                            .toLowerCase()
                            .includes(buscaNome.toLocaleLowerCase())
                    })
                    .sort((a, b) => {
                        if (ordenar === "crescente") {
                            return a.price > b.price ? 1 : -1
                        } else if (ordenar === "decrescente") {
                            if (a.price < b.price) {
                                return 1
                            } else {
                                return -1
                            }
                        }
                    })
                    .map((comida) => {
                        return <CardComidas
                            comida={comida}
                            key={comida.id}
                            comprar={comprar}
                        />
                    })}
            </ComidasContainer>
        </HomeContainer>
    )
}

export default Home

const ComidasContainer = styled.section`
display: flex;
flex-wrap: wrap;
max-width: 700px;
align-items: center;
justify-content: center;
`
const HomeContainer = styled.main`
color: white;
height: 100%;
background: red;
display: flex;
flex-direction: column;
align-items: center;
`
const H1 = styled.h1`
border: 5px solid white;
border-radius: 5px;
`
const Button = styled.button`
background: red;
color: white;
border: 3px solid white;
border-radius: 5px;
height: 50px;
width: 100px;
font-size: 20px;
&:hover{
    box-shadow: 5px 2px 2px #5A0303;
}
`
const Img = styled.img`
border: 10px solid #ab0000;
border-radius: 50%;
background: rgb(171,0,0);
background: linear-gradient(90deg, rgba(171,0,0,1) 45%, rgba(255,0,0,1) 100%);
`