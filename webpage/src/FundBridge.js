import React from 'react';
import './MedicalTreatments.css';
import './SocialImpactPlan.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './FundBridge.css';

// Medical Treatments page component
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

// Other sample pages for routing
const CreativeProjects = () => <h2>Creative Projects Page</h2>;
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
// const FundBridge = () => {
//   return (

//       <div className="fundbridge-container">
//         <h1 className="fundbridge-title">Raise Funds on FundBridge</h1>
//         <p className="fundbridge-subtitle">
//           Get emergency financial help to pay hospital bills and bills related to creative projects, social causes with online fundraising:
//         </p>
//         <div className="fundbridge-categories">
//           <Link to="/medical-treatments" className="category-card">
//             <img src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg" alt="Medical Treatments" className="category-icon" />
//             <h3>Medical Treatments</h3>
//           </Link>
//           <Link to="/creative-projects" className="category-card">
//             <img src="creative-icon.png" alt="Creative Projects" className="category-icon" />
//             <h3>Creative Projects</h3>
//           </Link>
//           <Link to="/social-cause" className="category-card">
//             <img src="social-icon.png" alt="Social Cause" className="category-icon" />
//             <h3>Social Cause</h3>
//           </Link>
//         </div>
//       </div>

      

//   );
// };
// const FundBridge = () => {
//   return (
//     <div className="fundbridge-container">
//       <h1 className="fundbridge-title">Raise Funds on FundBridge</h1>
//       <p className="fundbridge-subtitle">
//         Get emergency financial help to pay hospital bills and bills related to creative projects, social causes with online fundraising:
//       </p>
//       <div className="fundbridge-categories">
//         <Link to="/medical-treatments" className="category-card">
//           <img
//             src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg"
//             alt="Medical Treatments"
//             className="category-icon cover-image"
//           />
//           <h3>Medical Treatments</h3>
//         </Link>
//         <Link to="/creative-projects" className="category-card">
//           <img src="https://www.shutterstock.com/image-vector/fundraising-line-art-flat-vector-260nw-573692005.jpg" alt="Creative Projects" className="category-icon" />
//           <h3>Creative Projects</h3>
//         </Link>
//         <Link to="/social-cause" className="category-card">
//           <img src="social-icon.png" alt="Social Cause" className="category-icon" />
//           <h3>Social Cause</h3>
//         </Link>
//       </div>
//     </div>
//   );
// };
const FundBridge = () => {
  return (
    <div className="fundbridge-container">
      <h1 className="fundbridge-title">Raise Funds on FundBridge</h1>
      <p className="fundbridge-subtitle">
        Get emergency financial help to pay hospital bills and bills related to creative projects, social causes with online fundraising:
      </p>
      <div className="fundbridge-categories">
        <Link to="/medical-treatments" className="category-card">
          <img
            src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg"
            alt="Medical Treatments"
            className="category-icon cover-image"
          />
          <h3>Medical Treatments</h3>
        </Link>
        <Link to="/creative-projects" className="category-card">
          <img
            src="https://www.shutterstock.com/image-vector/fundraising-line-art-flat-vector-260nw-573692005.jpg"
            alt="Creative Projects"
            className="category-icon cover-image"
          />
          <h3>Creative Projects</h3>
        </Link>
        <Link to="/social-cause" className="category-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJ3QE4PPzlUx2glzWvmJeBvmBNVn9-N5qPg&s"
            alt="Social Cause"
            className="category-icon cover-image"
          />
          <h3>Social Cause</h3>
        </Link>
      </div>
    </div>
  );
};


export default FundBridge;
