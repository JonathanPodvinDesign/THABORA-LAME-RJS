import React from "react";
import { useState } from "react";
import styled from "styled-components";

// STYLES
const MenuGravure = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: fit-content;

    li {
      font-family: $primary-font;
      cursor: pointer;
      margin: 10px 0;
      display: flex;
    }
  }
`;

const GravuresLameAvant = () => {
  // state (état, données)
  const [gravures, setGravures] = useState([
    { id: "01", nom: "Loup" },
    { id: "02", nom: "Tracteur" },
    { id: "03", nom: "Montagnes" },
  ]);

  // comportements

  // affichage (render)
  return (
    <MenuGravure>
      <ul>
        {gravures.map((gravure) => (
          <li key={gravure.id}>{gravure.nom}</li>
        ))}
      </ul>
    </MenuGravure>
  );
};

export default GravuresLameAvant;
