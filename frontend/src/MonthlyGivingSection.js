import React from 'react';
import './MonthlyGivingSection.css';

const MonthlyGivingSection = () => {
  return (
    <div className="monthly-giving-container">
      <div className="monthly-giving-content">
        <h2 className="monthly-giving-title">Gift Smiles with Monthly Giving</h2>
        <p className="monthly-giving-description">
          Monthly giving allows individuals to contribute consistently, providing ongoing financial support that helps save lives by ensuring continuous access to critical healthcare and emergency services.
        </p>
        <button className="monthly-giving-button">START MONTHLY GIVING →</button>
      </div>
      <div className="monthly-giving-image">
        <img
          src="https://t3.ftcdn.net/jpg/06/37/27/20/360_F_637272038_hLFgyN30deAbr4f18dufJn41DK1TZNjy.jpg" /* Replace with the actual image URL */
          alt="Happy kids"
        />
      </div>
    </div>
  );
};

export default MonthlyGivingSection;
