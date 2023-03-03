import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Register = () => {
    return (
        <div className='connexion'>
            <h2>Enregistre-toi</h2>
            <p>Tu as déja un compte Thabora Lame ? 
                <NavLink to="/connexion">
                    <a> Se connecter</a>
                </NavLink>
            </p>
            <form action="submit">
                <input type="text" placeholder='Email'/> <br />
                <input type="text" placeholder='Mot de passe'/> <br />
                <input type="text" placeholder='Confirmer mot de passe'/> <br />
                <button>S'enregistrer</button>
            </form>
        </div>
    );
};

export default Register;