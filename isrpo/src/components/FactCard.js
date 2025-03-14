import React from 'react';
import { useNavigate } from 'react-router-dom';

function FactCard({ fact, index }) {
  const navigate = useNavigate();

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.find(f => f.id === fact.id)) {
      localStorage.setItem('favorites', JSON.stringify([...favorites, fact]));
      alert('Added to favorites!');
    } else {
      alert('Already in favorites!');
    }
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <p className="card-text">{fact.text}</p>
      </div>
      <div className="card-footer bg-transparent border-top-0">
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate(`/fact/${index}`)}
          >
            <i className="bi bi-info-circle me-2"></i>
            Details
          </button>
          <button
            className="btn btn-outline-success"
            onClick={addToFavorites}
          >
            <i className="bi bi-star me-2"></i>
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
}

export default FactCard;