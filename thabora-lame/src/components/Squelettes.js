import React from "react";
import { useState } from "react";
import styled from "styled-components";

// STYLES
const Menu = styled.div`
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

const Squelettes = () => {
  // state (état, données)
  const [squelettes, setSquelettes] = useState([
    { id: "KB", nom: "Lame Finition Brillante" },
    { id: "KG", nom: "Lame Finition Titane Gris" },
    { id: "KN", nom: "Lame Finition Titane Noir" },
  ]);

  // comportements

  // affichage (render)
  return (
    <Menu>
      <ul>
        {squelettes.map((squelette) => (
          <li key={squelette.id}>{squelette.nom}</li>
        ))}
      </ul>
    </Menu>
  );
};

export default Squelettes;
