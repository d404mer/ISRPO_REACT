// src/components/FactList.js
import React from "react";
import FactCard from "./FactCard";

const FactList = ({ facts }) => {
  return (
    <div className="fact-list">
      {facts.map((fact, index) => (
        <FactCard key={index} fact={fact} index={index} />
      ))}
    </div>
  );
};

export default FactList;
