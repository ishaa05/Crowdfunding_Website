import React from 'react';
import './InfoSections.css';

const InfoSections = () => {
  return (
    <div className="info-sections">
      <div className="section">
        <div className="text-content">
          <h2>Medical Bills are a Burden for Many Individuals and Families</h2>
          <p>
            Medical expenses encompass the significant costs of surgeries, treatments, medications, and ongoing care required for managing serious health conditions.
          </p>
        </div>
        <div className="image-content">
          <img src="https://via.placeholder.com/400x250" alt="Medical expenses" />
        </div>
      </div>

      <div className="section">
        <div className="image-content">
          <img src="https://via.placeholder.com/400x250" alt="Emergency relief" />
        </div>
        <div className="text-content">
          <h2>Emergency Relief:</h2>
          <p>
            Emergency relief involves offering swift financial support to individuals and communities impacted by natural disasters, accidents, or unexpected crises, ensuring they can access essential resources, medical care, and recovery services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSections;
