import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Campaigns.css';

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
              <button className="donate-button">Donate Now</button>
              <button className="details-button">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Campaigns;
