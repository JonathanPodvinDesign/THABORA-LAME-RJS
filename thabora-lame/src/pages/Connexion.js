import React from 'react';
import Login from '../components/Login';
import Navigation from '../components/Navigation';
import Titre from '../components/Titre';
import styled from 'styled-components';

// STYLE

//PAGE
const Connexion = () => {
    return (
        <div>
            <Navigation />
            <Titre />
            <Login/>
        </div>
    );
};

export default Connexion;