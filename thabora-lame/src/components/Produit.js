import React from "react";
import produits from "../json/produits.json";
import styled from "styled-components";

// STYLES
const ProduitItem = styled.div`
  display: flex;
  width: 1170px;
  margin-top: 200px;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    div {
      width: 33%;
      text-align: center;
      img {
        width: 100%;
      }
    }
  }
`;

const Produit = () => {
  return (
    <ProduitItem>
      <ul>
        {produits.map((produit) => {
          return (
            <div>
              <img src={produit.image1} alt={produit.description} />
              <li>{produit.squelette}</li>
              <li>{produit.plaquette}</li>
              <li>{produit.matiere}</li>
            </div>
          );
        })}
      </ul>
    </ProduitItem>
  );
};

export default Produit;
