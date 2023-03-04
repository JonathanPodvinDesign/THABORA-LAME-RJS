import React from "react";
import styled from "styled-components";
import SqueletteImg from "./SqueletteImg";
import PlaquetteImg from "./PlaquetteImg";
import MatiereImg from "./MatiereImg";

// STYLE
const CouteauDevant = styled.div`
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
const CouteauDerriere = styled.div``;

const Couteau = () => {
  return (
    <>
      <CouteauDevant>
        <SqueletteImg />
        <PlaquetteImg />
        <MatiereImg />
      </CouteauDevant>
      <CouteauDerriere></CouteauDerriere>
    </>
  );
};

export default Couteau;
