import React from "react";
import Personnalisation from "../components/Personnalisation";
import Navigation from "../components/Navigation";
import Titre from "../components/Titre";
import styled from "styled-components";

// STYLE
const Perso = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100 vw;
`;

// PAGE
const Personnaliser = () => {
  return (
    <Perso>
      <Navigation />
      <Titre />
      <Personnalisation />
    </Perso>
  );
};

export default Personnaliser;
