import React from "react";
import GravuresLameAvant from "./GravuresLameAvant";
import GravuresTextes from "./GravuresTextes";
import styled from "styled-components";
import BoutonSwitch from "./BoutonSwitch";

const GravuresMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 150px;
  width: 1170px;
  height: 200px;
`;

const GravureContainer = () => {
  return (
    <GravuresMenuContainer>
      <GravuresLameAvant />
      <BoutonSwitch />
      <GravuresTextes />
    </GravuresMenuContainer>
  );
};

export default GravureContainer;
