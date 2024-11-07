import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Campaigns.css';

import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaigns from backend
    axios.get('http://localhost:5000/campaigns/api')
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((error) => {
        console.error('Error fetching campaigns:', error);
      });
  }, []);

  return (
    <div>
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
              <a className="nav-link" href="#faqs">FAQs</a>
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
    <div className="campaigns-container">
      {campaigns.map((campaign) => (
        <div className="card" key={campaign._id}>
          <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
          <div className="card-content">
            <h5>{campaign.name}</h5>
            <p>{campaign.description}</p>
            <p>{campaign.email}</p>
            <p>{campaign.phone}</p>
            <img src={campaign.image} />
            <div className="card-buttons">
              <button className="donate-button" onClick={() => window.open("./src/ind.html", "_blank")}>Donate Now</button>
              <button className="details-button">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Campaigns;
