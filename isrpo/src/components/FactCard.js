import React from 'react';
import { useNavigate } from 'react-router-dom';

function FactCard({ fact, index }) {
  const navigate = useNavigate();

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.find(f => f.id === fact.id)) {
      localStorage.setItem('favorites', JSON.stringify([...favorites, fact]));
    }
  };

  return (
    <div className="fact-card">
      <p>{fact.text}</p>
      <div className="card-actions">
        <button onClick={() => navigate(`/fact/${index}`)}>View Details</button>
        <button onClick={addToFavorites}>Add to Favorites</button>
      </div>
    </div>
  );
}

export default FactCard;