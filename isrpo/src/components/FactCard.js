// src/components/FactCard.js
import React from "react";

const FactCard = ({ fact }) => {
  const handleAddFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((f) => f.text === fact.text)) {
      favorites.push(fact);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <div className="fact-card">
      <p>{fact.text}</p>
      <button onClick={handleAddFavorite}>Add to Favorites</button>
    </div>
  );
};

export default FactCard;
