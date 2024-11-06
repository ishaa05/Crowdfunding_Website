import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Faq from './faq.js';
import FundraisingSection from './FundraisingSection.js';
import FundingSectionCreative from './FundingSectionCreative.js';
import FundingSectionSocial from './FundingSectionSocial.js';
import FundBridge from './FundBridge.js';
import FundBridgeOffers from './FundBridgeOffers.js';
import FundingSection from './FundingSection.js';
import RaiseFunds from './RaiseFunds.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Campaigns from './Campaigns';
import MedicalTreatments from './MedicalTreatments.js';
import SocialImpactPlan from './SocialImpactPlan.js';
import DonationPage from './DonationPage.js';
import MainPage from './main.js';
import MedicalBillsSection from './MedicalBillsSection.js';
import LoginSignup from './LoginSignup.js';
import Parent from './Parent.js';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';


function App() {
  return (
    <div>
      
    <Router>
     
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/medical-treatments" element={<FundingSection />} />
        <Route path="/creative-projects" element={<FundingSectionCreative />} />
        <Route path="/social-cause" element={<FundingSectionSocial />} />
        <Route path="/raise-funds" element={<RaiseFunds />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path='' element={<LoginSignup/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
