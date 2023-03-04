import React from "react";
import styled from "styled-components";

// STYLE
const SqueletteImage = styled.div`
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

const SqueletteImg = () => {
  return (
    <SqueletteImage>
      <img src="/img/products/KB.png" alt="" className="squelette-devant" />
    </SqueletteImage>
  );
};

export default SqueletteImg;
