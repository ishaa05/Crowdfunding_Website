import React from 'react';
import './FundBridgeOffers.css';

const FundBridgeOffers = () => {
  return (
    <div className="offers-container">
      <h2 className="offers-title">What FundBridge Offers?</h2>
      <div className="offers-grid">
        {/* Offer 1 */}
        <div className="offer-card">
          <img src="https://cdn-icons-png.flaticon.com/512/628/628576.png" alt="Free Fundraiser" className="offer-icon" />
          <p>Starting a Fundraiser on Fundbridge is absolutely free</p>
        </div>
        
        {/* Offer 2 */}
        <div className="offer-card">
          <img src="https://png.pngtree.com/png-clipart/20230320/original/pngtree-circle-phone-call-icon-in-black-color-png-image_8997757.png" alt="24x7 Assistance" className="offer-icon" />
          <p>24x7 assistance from dedicated fundraiser managers throughout your fundraising journey.</p>
        </div>
        
        {/* Offer 3 */}
        <div className="offer-card">
          <img src="https://static-00.iconduck.com/assets.00/withdraw-1-icon-2048x1878-zzd70008.png" alt="Withdraw Funds" className="offer-icon" />
          <p>You can withdraw your funds at any point during the course of your fundraiser.</p>
        </div>
        
        {/* Offer 4 */}
        <div className="offer-card">
          <img src="https://static.thenounproject.com/png/4767009-200.png" alt="Fast Review" className="offer-icon" />
          <p>Fast review for fundraisers.</p>
        </div>
        
        {/* Offer 5 */}
        <div className="offer-card">
          <img src="data:image/png;base64,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" alt="Real-Time Updates" className="offer-icon" />
          <p>Get instant updates on your fundraiser's progress on a real-time dashboard.</p>
        </div>
        
        {/* Offer 6 */}
        <div className="offer-card">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/debit-credit-card-icon.png" alt="Accept Donations" className="offer-icon" />
          <p>Accepts donations via all cards, net banking, UPI, and online wallets.</p>
        </div>
      </div>
    </div>
  );
};

export default FundBridgeOffers;
