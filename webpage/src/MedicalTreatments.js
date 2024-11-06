import React from 'react';
import './MedicalTreatments.css';

const MedicalTreatments = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Medical Impact Plan</h1>
      <p className="form-subtitle">
        Join our community of monthly donors providing urgent medical care to children
      </p>
      <form className="medical-impact-form">
        <div className="form-group">
          <label>Name of Person* (As per Aadhar)</label>
          <input type="text" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" placeholder="Enter age" />
        </div>
        <div className="form-group">
          <label>Brief Background</label>
          <input type="text" placeholder="Enter background details" />
        </div>
        <div className="form-group">
          <label>Current Treatment or Medication</label>
          <input type="text" placeholder="Enter current treatment or medication" />
        </div>
        <div className="form-group">
          <label>Name of Disease or Condition</label>
          <input type="text" placeholder="Enter disease or condition" />
        </div>
        <div className="form-group">
          <label>Date of Diagnosis</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Brief Description of Disease (Symptoms, Progress)</label>
          <input type="text" placeholder="Enter description" />
        </div>
        <div className="form-group">
          <label>Upcoming Medical Surgeries or Therapy</label>
          <input type="text" placeholder="Enter upcoming surgeries or therapy" />
        </div>
        <div className="form-group">
          <label>Special Equipment or Support Needed</label>
          <input type="text" placeholder="Enter special equipment or support" />
        </div>
        <div className="form-group">
          <label>Breakdown of Anticipated Expenses</label>
          <input type="text" placeholder="Enter breakdown of expenses" />
        </div>
        <div className="form-group">
          <label>Current Financial Situation and Need for Fundraising</label>
          <input type="text" placeholder="Enter financial situation" />
        </div>
        <div className="form-group">
          <label>Approximate Amount and How Funds Will Be Utilized</label>
          <input type="text" placeholder="Enter amount and usage details" />
        </div>
        <button type="submit" className="submit-btn">RAISE</button>
      </form>
    </div>
  );
};

export default MedicalTreatments;
