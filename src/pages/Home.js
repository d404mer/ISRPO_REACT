import React, { useState, useEffect } from 'react';
import { fetchFact } from '../api/factsAPI';
import FactCard from '../components/FactCard';

function Home() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateNewFact = async () => {
    setLoading(true);
    try {
      const newFact = await fetchFact();
      if (newFact) {
        setFacts(prev => {
          const updatedFacts = [...prev, { ...newFact, id: Date.now() }];
          localStorage.setItem('facts', JSON.stringify(updatedFacts));
          return updatedFacts;
        });
      }
    } catch (error) {
      console.error('Error fetching fact:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    generateNewFact();
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-center mb-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={generateNewFact}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Loading...
            </>
          ) : (
            'Generate New Fact'
          )}
        </button>
      </div>
      <div className="row g-4">
        {facts.map((fact, index) => (
          <div key={fact.id || index} className="col-12 col-md-6 col-lg-4">
            <FactCard fact={fact} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;