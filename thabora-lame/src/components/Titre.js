import React from 'react';
import styled from 'styled-components';

// STYLES
const Title = styled.div`
    position: absolute;
    height: calc(100vh - 70px);
    width: 100px;
    h1{
        position: absolute;
        left: -200px;
        top: 45%;
        transform: translate(-50%, -50%);
        margin: auto;
        text-align : center;
        transform: rotate(-90deg);
        width: 500px;
        font-size: 35px;
        font-family: $secondary-font;
    }
`

// PAGE
const Titre = () => {
    return (
        <Title>
            <h1>Le Bijoutier du couteau</h1>
        </Title>
    );
};

export default Titre;