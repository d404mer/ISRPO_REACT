// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { fetchFact } from "../api/factsAPI";
import FactList from "../components/FactList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [facts, setFacts] = useState([]);
  const [filteredFacts, setFilteredFacts] = useState([]);

  useEffect(() => {
    const loadFacts = async () => {
      const newFact = await fetchFact();
      setFacts((prevFacts) => [...prevFacts, newFact]);
      setFilteredFacts((prevFacts) => [...prevFacts, newFact]);
    };

    loadFacts();
  }, []);

  const handleSearch = (query) => {
    const results = facts.filter((fact) =>
      fact.text.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFacts(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <FactList facts={filteredFacts} />
    </div>
  );
};

export default Home;
