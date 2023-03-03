import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/personnaliser" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Personnaliser</li>
                </NavLink>
                <NavLink to="/boutique" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Boutique</li>
                </NavLink>
                <NavLink to="/connexion" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Connexion</li>
                </NavLink>
                <NavLink to="/enregistrer" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>S'enregistrer</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;