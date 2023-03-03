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

const Plaquettes = () => {
  // state (état, données)
  const [plaquettes, setPlaquettes] = useState([
    { id: "PC", nom: "Plaquette Centrale" },
    { id: "PA", nom: "Plaquette Ajourée" },
    { id: "PP", nom: "Plaquette Pleine" },
    { id: "SP", nom: "Sans Plaquette" },
  ]);

  // comportements

  // affichage (render)
  return (
    <Menu>
      <ul>
        {plaquettes.map((plaquette) => (
          <li key={plaquette.id}>{plaquette.nom}</li>
        ))}
      </ul>
    </Menu>
  );
};

export default Plaquettes;
