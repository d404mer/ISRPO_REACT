import React, { useState, useEffect } from 'react';
import { fetchFact } from '../api/factsAPI';
import FactCard from '../components/FactCard';

function Home() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFact = async () => {
      const newFact = await fetchFact();
      if (newFact) {
        setFacts(prev => {
          const updatedFacts = [...prev, { ...newFact, id: Date.now() }];
          localStorage.setItem('facts', JSON.stringify(updatedFacts));
          return updatedFacts;
        });
      }
      setLoading(false);
    };
    loadFact();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="facts-grid">
      {facts.map((fact, index) => (
        <FactCard key={fact.id || index} fact={fact} index={index} />
      ))}
    </div>
  );
}

export default Home;