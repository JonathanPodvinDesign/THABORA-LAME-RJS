import React from 'react';
import Composants from './Composants';
import styled from 'styled-components';

// STYLES
const Persocontainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-image: url(../../assets/img/knife-hand.png);
    background-repeat: no-repeat;
    background-size: cover;
`

// PAGE
const Personnalisation = () => {
    return (
        <Persocontainer>
            < Composants />
        </Persocontainer>
    );
};

export default Personnalisation;