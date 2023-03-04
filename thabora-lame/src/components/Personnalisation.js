import React from "react";
import Composants from "./Composants";
import Couteau from "./Couteau";
import styled from "styled-components";
import GravureContainer from "./GravureContainer";

// STYLES
const Persocontainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(img/knife-hand.png);
  background-repeat: no-repeat;
  background-size: cover;
`;

// PAGE
const Personnalisation = () => {
  return (
    <Persocontainer>
      <Composants />
      <Couteau />
      <GravureContainer />
    </Persocontainer>
  );
};

export default Personnalisation;
