import React from "react";
import styled from "styled-components";

// STYLE
const MatiereImageArriere = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const MatiereImgArriere = () => {
  return (
    <MatiereImageArriere>
      <img src="/img/products/BLANK.png" alt="" className="matiere-derriere" />
    </MatiereImageArriere>
  );
};

export default MatiereImgArriere;
