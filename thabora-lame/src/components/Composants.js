import React from "react";
import Matieres from "./Matieres";
import Plaquettes from "./Plaquettes";
import Squelettes from "./Squelettes";
import styled from "styled-components";

// STYLES
const Compo = styled.div`
  position: absolute;
  top: 150px;
  width: 1170px;
  height: 200px;
  display: flex;
  justify-content: center;
`;

// PAGE
const Composants = () => {
  return (
    <Compo>
      <Squelettes />
      <Plaquettes />
      <Matieres />
    </Compo>
  );
};

export default Composants;
