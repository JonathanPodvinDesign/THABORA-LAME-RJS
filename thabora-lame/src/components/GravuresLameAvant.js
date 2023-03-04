import React from "react";
import { useState } from "react";
import styled from "styled-components";

// STYLES
const MenuGravure = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;

  div {
    width: 150px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: fit-content;
      width: 100%;
      margin: 0;
      padding: 0;

      li {
        font-family: $primary-font;
        cursor: pointer;
        margin: 10px 0;
        display: flex;
        height: 18px;
        line-height: 18px;
        padding: 0 10px;
      }
    }
  }
`;

const GravuresLameAvant = () => {
  // state (état, données)
  const [gravures, setGravures] = useState([
    { id: "01", nom: "Loup" },
    { id: "02", nom: "Tracteur" },
    { id: "03", nom: "Montagnes" },
    { id: "04", nom: "Tribal" },
    { id: "05", nom: "Viking" },
    { id: "06", nom: "Chat" },
    { id: "07", nom: "Chien" },
  ]);

  // comportements

  // affichage (render)
  return (
    <MenuGravure>
      <div>
        <ul>
          {gravures.map((gravure) => (
            <li key={gravure.id}>{gravure.nom}</li>
          ))}
        </ul>
      </div>
    </MenuGravure>
  );
};

export default GravuresLameAvant;
