import React from 'react';
import styled from 'styled-components';
 
const ItemContainer = styled.div`
    border-radius: 4px;
    background-color:#f89fba;
    height: 70px;
    width: 262px;
    color: #29303b;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;
`;
 
const TitlePane = styled.div`
    font-weight: 700;
    margin-bottom: 5px;
`;
 
const Pane = styled.div`
    margin-bottom: 5px;
`;
 
function ListItem(props) {
    return (
        <ItemContainer>
            <TitlePane>Nome: {props.nome}</TitlePane>
            <Pane>Ramal: {props.numero}</Pane>
            <Pane>Setor: {props.setor}</Pane>
        </ItemContainer>
    );
}
 
export default ListItem;