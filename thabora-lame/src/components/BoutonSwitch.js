import React from "react";
import { useState } from "react";
import styled from "styled-components";

// STYLES
const BoutonSwitchFace = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 130px;
    height: 45px;
    background-color: #46ceb0;
    border-radius: 15px;
    color: white;
    cursor: pointer;
  }
`;

const BoutonSwitch = () => {
  return (
    <BoutonSwitchFace>
      <button>Changer de face</button>
    </BoutonSwitchFace>
  );
};

export default BoutonSwitch;
