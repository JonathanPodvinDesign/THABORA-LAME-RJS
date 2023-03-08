import React from "react";
import SqueletteImg from "./SqueletteImg";
import PlaquetteImg from "./PlaquetteImg";
import MatiereImg from "./MatiereImg";
import styled from "styled-components";

// STYLE
const CouteauDevantContainer = styled.div`
  width: 1170px;
  height: 150px;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const CouteauDevant = () => {
  return (
    <CouteauDevantContainer>
      <SqueletteImg />
      <PlaquetteImg />
      <MatiereImg />
    </CouteauDevantContainer>
  );
};

export default CouteauDevant;
