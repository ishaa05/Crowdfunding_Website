import { useState } from 'react';
import React from 'react';
import './PaymentForm.css'; // Import the CSS file
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
const PaymentForm = () => {
  const [upiID, setUpiID] = useState('');
  const [upiError, setUpiError] = useState('');
  const [paymentResult, setPaymentResult] = useState('');

  const amount = 3000; // Amount in rupees

   const handleRedirectToCheckout = () => {
    window.location.href = 'https://buy.stripe.com/test_dR65lR7pTb0C20E001';
  };

  const handleUpiSubmit = (event) => {
    event.preventDefault();
    if (upiID.trim() === '') {
      setUpiError('Please enter a valid UPI ID');
    } else {
      setUpiError('');
      setPaymentResult('UPI Payment successful!');
    }
  }; 

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
              <a className="nav-link" href="http://localhost:3000/">Home</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/campaigns">Campaigns</a>
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
    <div id="payment-form-container">
      <h2>Stripe Payment</h2>

      <div className="amount">
        <strong>Amount to Pay:</strong> <span id="amount-display">₹{amount}</span>
      </div>

      <div className="btn-container">
        <button id="redirect-to-checkout" onClick={handleRedirectToCheckout}>
          Pay with Card
        </button>

        <form id="upi-payment-form" onSubmit={handleUpiSubmit}>
          <label htmlFor="upi-element">UPI ID</label>
          <input
            type="text"
            id="upi-element"
            placeholder="Enter UPI ID"
            value={upiID}
            onChange={(e) => setUpiID(e.target.value)}
          />
          <div id="upi-errors" role="alert">
            {upiError}
          </div>
          <button type="submit" id="upi-submit-button">
            Submit UPI Payment
          </button>
        </form>
      </div>

      <div id="payment-result">
        {paymentResult}
      </div>
    </div> 
    </div>
  );
};

export default PaymentForm;
