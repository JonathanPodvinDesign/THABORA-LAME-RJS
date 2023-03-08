import React from "react";
import styled from "styled-components";

// STYLE
const SqueletteImageArriere = styled.div`
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

const SqueletteImgArriere = () => {
  return (
    <SqueletteImageArriere>
      <img src="/img/products/PCA.png" alt="" className="squelette-arriere" />
    </SqueletteImageArriere>
  );
};

export default SqueletteImgArriere;
