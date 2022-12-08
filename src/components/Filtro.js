import React from "react";
import styled from "styled-components";


const Filtro = (props) => {
    const onChangeBuscaNome = (e) => {
        console.log(e.target.value)
        props.setBuscaNome(e.target.value);
    }

    const onChangeOrdenar = (e) => {
        props.setOrdenar(e.target.value);
    }


    return (
        <Container>
            <input
                type="text"
                placeholder="Buscar por nome"
                onChange={onChangeBuscaNome}
                value={props.buscaNome}
            />
            <select onChange={onChangeOrdenar}>
                <option value="">Ordenar</option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </select>
        </Container>
    )

}

export default Filtro

const Container = styled.header`
  display: flex;
  gap: 16px;
  padding: 16px 16px;
  margin-bottom: 16px;
  border: 3px solid white;
  border-radius: 5px;
`