import React from 'react';
import Navigation from '../components/Navigation';
import Titre from '../components/Titre';
import Background from '../components/Background';
import styled from 'styled-components';

// STYLE

// PAGE
const Home = () => {
    return (
        <div>
            <Navigation />
            <Titre />
            <Background />
        </div>
    );
};

export default Home;