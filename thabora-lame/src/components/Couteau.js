import React from "react";
import styled from "styled-components";

// STYLE
const CouteauDevant = styled.div`
  width: 1170px;
  height: 150px;
  z-index: 100;
  .squelette-devant {
    height: 150px;
    width: 100%;
  }
`;
const CouteauDerriere = styled.div``;

const Couteau = () => {
  return (
    <>
      <CouteauDevant>
        <img
          src="../../public/img/products/KB.png"
          alt=""
          className="squelette-devant"
        />
      </CouteauDevant>
      <CouteauDerriere>
        <img src="" alt="" className="squelette-derriere" />
        <img src="" alt="" className="matiere-derriere" />
        <img src="" alt="" className="vis-derriere" />
      </CouteauDerriere>
    </>
  );
};

export default Couteau;
