import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FactDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const facts = JSON.parse(localStorage.getItem('facts')) || [];
    const fact = facts[id];

    if (!fact) {
        return (
            <div className="container">
                <button onClick={() => navigate('/')} className="back-button">
                    Back to Home
                </button>
                <p>Fact not found</p>
            </div>
        );
    }

    return (
        <div className="container">
            <button onClick={() => navigate('/')} className="back-button">
                Back to Home
            </button>
            <div className="fact-details">
                <h2>Fact Details</h2>
                <p>{fact.text}</p>
                <p>Source: {fact.source}</p>
                <p>Added: {fact.date_added || 'N/A'}</p>
            </div>
        </div>
    );
};

export default FactDetails;