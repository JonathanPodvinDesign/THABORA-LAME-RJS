import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Login = () => {
    return (
        <div className='connexion'>
            <h2>Connecte-toi</h2>
            <p>Tu n'as pas encore de compte sur Thabora Lame ? 
                <NavLink to="/enregistrer">
                    <a> S'enregister</a>
                </NavLink>
            </p>
            <form action="submit">
                <input type="text" placeholder='Email'/> <br />
                <input type="text" placeholder='Mot de passe'/> <br />
                <button>Se connecter</button>
            </form>
            <p>Mot de passe oublié ?</p>
        </div>
    );
};

export default Login;