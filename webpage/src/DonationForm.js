// DonationForm.js
import React, { useState } from 'react';
import './DonationForm.css'; // Add styles in a separate CSS file

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState('300/MO');

  return (
    <div className="container">
      <div className="image-section">
        <img
          src="https://images.news18.com/ibnlive/uploads/2024/03/happy-poor-2024-03-9d307b569d234480c39cdf1d7546f73f.jpg?impolicy=website&width=640&height=480" // Replace with the actual image path
          alt="Children smiling"
          className="impact-image"
        />
      </div>
      <div className="form-section">
        <h2>Social Impact Plan</h2>
        <p>Join our community of monthly donors providing urgent medical care to children</p>
        
        <div className="donation-options">
          <button
            className={selectedAmount === '200/MO' ? 'selected' : ''}
            onClick={() => setSelectedAmount('200/MO')}
          >
            RS. 200/MO
          </button>
          <button
            className={selectedAmount === '300/MO' ? 'selected' : ''}
            onClick={() => setSelectedAmount('300/MO')}
          >
            300/MO
          </button>
          <button
            className={selectedAmount === '500/MO' ? 'selected' : ''}
            onClick={() => setSelectedAmount('500/MO')}
          >
            RS. 500/MO
          </button>
        </div>
        
        <button className="other-amount-btn">OTHER AMOUNT</button>
        
        <form className="donation-form">
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" placeholder="Name as mentioned in adhar card" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email address*</label>
            <input type="email" id="email" placeholder="Email address" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="mobile">Mobile*</label>
            <input type="tel" id="mobile" placeholder="Mobile" required />
          </div>
          
          <button type="submit" className="donate-btn">PLEDGE TO DONATE</button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;