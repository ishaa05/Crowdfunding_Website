// // FundingSection.js
// import React from 'react';
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import './FundingSection.css'; // Create a separate CSS file for styling

// const FundingSection = () => {
//   return (
//     <div className="funding-container">
//       <nav className="navbar navbar-expand-lg">
//         <a className="navbar-brand" href="#">FundBridge.com</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto"> {/* Changed from ml-auto to ms-auto for Bootstrap 5 */}
//             <li className="nav-item">
//               <a className="nav-link" href="#home">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#faqs">FAQs</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#campaigns">Campaigns</a>
//             </li>
//           </ul>
//         </div>
//         <div className="login">
//           <header>
//             <SignedOut>
//               <SignInButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </header>
//         </div>
//       </nav>

//       <div className="header">
//         <h1>Funding Hope, One Step at a Time</h1>
//         <p>Join the Journey to Recovery with Compassionate Funding</p>
//       </div>

//       <div className="funding-options">
//         <div className="option">
//           <img
//             src="https://www.contactspace.com/wp-content/uploads/person-making-a-donation-min-scaled.jpeg"
//             alt="Child in need"
//             className="option-image"
//           />
//           <button className="fund-button">GIVE FUNDS</button>
//         </div>
//         <div className="option">
//           <img
//             src="https://cdn.prod.website-files.com/62c48993e01c97eb9f854895/63a4733fcbe18f4723ddbac9_shutterstock_581362633.jpg"
//             alt="Raise funds"
//             className="option-image"
//           />
//           <button className="fund-button">RAISE FUNDS</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FundingSection;
import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import './FundingSection.css'; // Create a separate CSS file for styling
import DonationForm from './DonationForm'; // Import the DonationForm component
import MedicalImpactPlanForm from './MedicalImpactPlanForm.js';
const FundingSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [ShowFormTwo,setShowFormTwo] =useState(false);
 const navigate = useNavigate();
  const handleGiveFundsClick = () => {
    navigate("/donation");
  };
  
  const handleRaiseFundsClick =() => {
    navigate("/raise");
  };

  return (
    <div className="funding-container">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">FundBridge.com</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Changed from ml-auto to ms-auto for Bootstrap 5 */}
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#campaigns">Campaigns</a>
            </li>
          </ul>
        </div>
        <div className="login">
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>
      </nav>

      <div className="header">
        <h1>Funding Hope, One Step at a Time</h1>
        <p>Join the Journey to Recovery with Compassionate Funding</p>
      </div>

      <div className="funding-options">
        <div className="option">
          <img
            src="https://www.contactspace.com/wp-content/uploads/person-making-a-donation-min-scaled.jpeg"
            alt="Child in need"
            className="option-image"
          />
          <button className="fund-button" onClick={handleGiveFundsClick}>GIVE FUNDS</button>
        </div>
        <div className="option">
          <img
            src="https://cdn.prod.website-files.com/62c48993e01c97eb9f854895/63a4733fcbe18f4723ddbac9_shutterstock_581362633.jpg"
            alt="Raise funds"
            className="option-image"
          />
          <button className="fund-button" onClick={handleRaiseFundsClick}>RAISE FUNDS</button>
        </div>
      </div>

      {/* {showForm && <DonationForm />} Conditionally render the DonationForm */}
    </div>
  );
};

export default FundingSection;
