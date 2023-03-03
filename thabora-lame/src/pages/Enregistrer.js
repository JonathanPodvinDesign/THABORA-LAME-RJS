import React from 'react';
import Register from '../components/Register';
import Navigation from '../components/Navigation';
import Titre from '../components/Titre';
import styled from 'styled-components';

const Enregistrer = () => {
    return (
        <div>
            <Navigation />
            <Titre />
            <Register/>
        </div>
    );
};

export default Enregistrer;