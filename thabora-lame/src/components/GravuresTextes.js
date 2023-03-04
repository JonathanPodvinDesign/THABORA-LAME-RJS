import React from "react";
import { useState } from "react";
import styled from "styled-components";

// STYLES
const MenuTextesGravure = styled.div`
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

const GravuresTextes = () => {
  // state (état, données)
  const [gravuresTextes, setGravuresTextes] = useState([
    { id: "01", nom: "Arial" },
    { id: "02", nom: "Montserrat" },
    { id: "03", nom: "Segoe" },
  ]);

  // comportements

  // affichage (render)
  return (
    <MenuTextesGravure>
      <ul>
        {gravuresTextes.map((gravureTexte) => (
          <li key={gravureTexte.id}>{gravureTexte.nom}</li>
        ))}
      </ul>
    </MenuTextesGravure>
  );
};

export default GravuresTextes;
