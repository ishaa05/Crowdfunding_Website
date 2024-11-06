import React from 'react';
import './MedicalBillsSection.css';

const MedicalBillsSection = () => {
  return (
    <section className="medical-bills-section">
      <div className="text-content">
        <h2 className="title">Medical Bills are a Burden for Many Individuals and Families</h2>
        <p className="description">
          Medical expenses encompass the significant costs of surgeries, treatments, medications, and ongoing care required for managing serious health conditions.
        </p>
      </div>
      <div className="image-content">
        <img 
          src="https://via.placeholder.com/400x200" 
          alt="Hospital Scene" 
          className="medical-image"
        />
      </div>
    </section>
  );
};

export default MedicalBillsSection;
