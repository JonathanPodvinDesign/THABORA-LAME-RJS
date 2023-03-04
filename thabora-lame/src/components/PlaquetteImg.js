import React from "react";
import styled from "styled-components";

// STYLE
const PlaquetteImage = styled.div`
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

const PlaquetteImg = () => {
  return (
    <PlaquetteImage>
      <img src="/img/products/BLANK.png" alt="" className="plaquette-devant" />
    </PlaquetteImage>
  );
};

export default PlaquetteImg;
