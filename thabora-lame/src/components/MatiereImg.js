import React from "react";
import styled from "styled-components";

// STYLE
const MatiereImage = styled.div`
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

const MatiereImg = () => {
  return (
    <MatiereImage>
      <img src="/img/products/BLANK.png" alt="" className="matiere-devant" />
    </MatiereImage>
  );
};

export default MatiereImg;
