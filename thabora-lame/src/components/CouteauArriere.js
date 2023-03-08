import React from "react";
import styled from "styled-components";
import MatiereImgArriere from "./MatiereImgArriere";
import SqueletteImgArriere from "./SqueletteImgArriere";

// STYLE
const CouteauArriereContainer = styled.div`
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

const CouteauArriere = () => {
  return (
    <CouteauArriereContainer>
      <SqueletteImgArriere />
      <MatiereImgArriere />
    </CouteauArriereContainer>
  );
};

export default CouteauArriere;
