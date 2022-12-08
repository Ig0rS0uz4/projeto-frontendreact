import React from "react"
import styled from "styled-components"

export default function CardCarrinho({
    id,
    url,
    name,
    amount,
    price,
    deleteItem
}) {
    return(
        <CardContainer>
            <Image src={url}/>
            <P>{name}</P>
            <P>
                Qtd <b>{amount}</b>
            </P>
            <P>R${price}</P>
            <DeleteButton onClick={()=> deleteItem(id)}>x</DeleteButton>
        </CardContainer>
    )
}

const Image = styled.img`
  width: 30%;
`
const DeleteButton = styled.button`
  background-color: tomato;
  border: none;
`
const CardContainer = styled.section`
  width: 300px;
  border: 5px solid white;
  border-radius: 5px;
  display: flex;
  align-items: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
`
const P = styled.p`
  font-size: 18px;
  display: flex;
`