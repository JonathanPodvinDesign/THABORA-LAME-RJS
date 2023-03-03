import React from "react";
import { useState } from "react";
import styled from "styled-components";
import PiecesMatieres from "../json/matieres.json";

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

const Matieres = () => {
  // affichage (render)
  return (
    <Menu>
      {
        <ul>
          {PiecesMatieres.matieres.map((Piece) => {
            return <li>{Piece.famille}</li>;
          })}
        </ul>
      }
    </Menu>
  );
};

export default Matieres;
