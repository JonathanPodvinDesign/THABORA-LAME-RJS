import React from "react";
import Personnalisation from "../components/Personnalisation";
import Navigation from "../components/Navigation";
import Couteau from "../components/Couteau";
import Titre from "../components/Titre";
import styled from "styled-components";

// STYLE
const Perso = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

// PAGE
const Personnaliser = () => {
  return (
    <Perso>
      <Navigation />
      <Titre />
      <Personnalisation />
      <Couteau />
    </Perso>
  );
};

export default Personnaliser;
