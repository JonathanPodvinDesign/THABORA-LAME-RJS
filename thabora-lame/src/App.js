import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Personnaliser from "./pages/Personnaliser";
import Boutique from "./pages/Boutique";
import Connexion from "./pages/Connexion";
import Enregistrer from "./pages/Enregistrer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/personnaliser" element={<Personnaliser />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/enregistrer" element={<Enregistrer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
