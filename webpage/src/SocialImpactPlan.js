import React from 'react';
import './SocialImpactPlan.css'; // Import the CSS file

const SocialImpactPlan = () => {
  return (
    <div className="container">
      <h1 className="title">Social Impact Plan</h1>
      <p className="subtitle">Join our community of monthly donors providing urgent medical care to children</p>

      <div className="form">
        <div className="form-group">
          <label>Name of NGO (as registered legally)</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Completed years</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Brief Background</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>NGO’s mission</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Start date of campaign</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Specific goals of the fundraising campaign</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Data or statistics illustrating the scope of the problem</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Fundraising goals and milestones (e.g., target amount)</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Detailed breakdown of how funds will be used</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Clear instructions on how to donate</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Information on how the NGO ensures funds are used effectively and ethically.</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Examples of past successes and achievements related to the cause</label>
          <input type="text" />
        </div>

        <button className="raise-button">RAISE</button>
      </div>
    </div>
  );
};

export default SocialImpactPlan;
