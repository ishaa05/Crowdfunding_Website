import React from 'react';
import './Faq.css'; // You can create a CSS file for styling

const Faq = () => {
  return (
    <div className="faq-container">
      <h1>Frequently asked questions</h1>
      <div className="faq-item">
        <div className="faq-question">
          <span className="faq-icon">▲</span>
          <p>I want to start a medical fundraiser.</p>
        </div>
        <div className="faq-answer">
          <p>
            What all do I need? For your fundraiser to be as transparent as possible,
            upload a scanned copy of your hospital bill mentioning the medical condition
            and the amount you require along with a high-resolution photograph of the patient.
          </p>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question">
          <span className="faq-icon">▲</span>
          <p>I don’t see the medical treatment I want to raise funds for in the list, what do I do?</p>
        </div>
        <div className="faq-answer">
          <p>
            You can raise funds for Bone Marrow Transplant, Kidney Transplant, NICU Care 
            (in case of premature babies), Cancer Treatment, Open Heart Surgery, Heart defect, 
            Brain tumor, Cerebral Palsy, Aplastic Anaemia, Joint Replacement, Eye Surgery.
            However, if your treatment option isn’t mentioned here, you can get in touch with us to get assistance - 
            someone from our team will get in touch with you.
          </p>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question">
          <span className="faq-icon">▲</span>
          <p>I want to start raising funds, how do I start a fundraiser on Ketto?</p>
        </div>
        <div className="faq-answer">
          <p>
            Starting a fundraiser on Ketto takes just 3 minutes and signing up is absolutely free*.
            Just sign up, fill details of what you need money for and hit submit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
