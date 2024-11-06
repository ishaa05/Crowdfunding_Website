import React ,{useState} from 'react';
import './MedicalImpactPlanForm.css'; // Import the CSS file

const MedicalImpactPlanForm = () => {
  return (
    <div className="medical-impact-plan">
      <h1 className="form-title">Medical Impact Plan</h1>
      <p className="form-subtitle">
        Join our community of monthly donors providing urgent medical care to children
      </p>
      
      <form className="form-container">
        <div className="form-column">
          <div className="form-group">
            <label>Name of Person* (As per Aadhaar)</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="number" className="form-input" />
          </div>
          <div className="form-group">
            <label>Brief Background</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Name of disease or condition</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Date of diagnosis</label>
            <input type="date" className="form-input" />
          </div>
          <div className="form-group">
            <label>Brief description of disease (Symptoms, progress)</label>
            <textarea className="form-input"></textarea>
          </div>
        </div>

        <div className="form-column">
          <div className="form-group">
            <label>Current treatment or medication</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Upcoming medical surgeries or therapy</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Any special equipment or support needed</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Breakdown of anticipated expenses</label>
            <textarea className="form-input"></textarea>
          </div>
          <div className="form-group">
            <label>Current financial situation (if appropriate) and why fundraising is necessary</label>
            <textarea className="form-input"></textarea>
          </div>
          <div className="form-group">
            <label>Approximate amount and how funds will be utilized</label>
            <input type="text" className="form-input" />
          </div>
        </div>
      </form>

      <button className="submit-button">RAISE</button>
    </div>
  )
};

export default MedicalImpactPlanForm;
