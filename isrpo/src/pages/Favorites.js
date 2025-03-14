// src/pages/Favorites.js
import React from "react";
import FactList from "../components/FactList";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      <h1>Favorites</h1>
      <FactList facts={favorites} />
    </div>
  );
};

export default Favorites;
