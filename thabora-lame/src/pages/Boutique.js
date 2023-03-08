import React from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Titre from "../components/Titre";
import styled from "styled-components";
import Produit from "../components/Produit";

//STYLE

const BoutiqueContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Boutique = () => {
  const [produits, setProduits] = useState([
    {
      id: "KBPCB01",
      description: "Couteau Lame Brillante Plaquette Centrale Bois Clair",
      squelette: "Lame Brillante",
      plaquette: "Plaquette Centrale",
      matiere: "Bois Clair",
      image1: "/img/produits/boutique/PNG/KBPCB01.png",
      image2: "/img/produits/boutique/PNG/KBPCB01$2.png",
      image3: "/img/produits/boutique/PNG/KBPCB01$3.png",
      prix: 60,
      disponibilite: true,
    },
  ]);

  return (
    <BoutiqueContainer>
      <Navigation />
      {/* <Titre /> */}
      <Produit />
    </BoutiqueContainer>
  );
};

export default Boutique;
