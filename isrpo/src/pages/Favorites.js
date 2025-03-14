import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const navigate = useNavigate();

  const removeFavorite = (factId) => {
    const updatedFavorites = favorites.filter(fact => fact.id !== factId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  if (favorites.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>No favorites yet</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate('/')}
        >
          Go Add Some Facts!
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Your Favorite Facts</h2>
      <div className="row g-4">
        {favorites.map((fact) => (
          <div key={fact.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">{fact.text}</p>
              </div>
              <div className="card-footer bg-transparent border-top-0">
                <button
                  className="btn btn-danger w-100"
                  onClick={() => removeFavorite(fact.id)}
                >
                  <i className="bi bi-trash me-2"></i>
                  Remove from Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;