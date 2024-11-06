// import React from "react";
// import "./style.css";

// export const Frame = () => {
//   return (
//     <div className="frame">
//       <div className="div">
//         <div className="overlap">
//           <div className="rectangle" />
//           <div className="rectangle-2" />
//           <div className="rectangle-3" />
//           <div className="text-wrapper">Together,we make a difference.</div>
//           <div className="overlap-group-wrapper">
//             <div className="overlap-group">
//               <img className="image" alt="Image" src="image-1.png" />
//               <p className="need-funds-for-a">
//                 Need Funds For a Medical
//                 <br /> Treatment or Social Cause?
//               </p>
//             </div>
//           </div>
//           <p className="com">
//             <span className="span">.com</span>
//           </p>
//           <div className="text-wrapper-2">FundBridge</div>
//           <div className="rectangle-4" />
//           <div className="text-wrapper-3">Start a Free Fundraiser</div>
//           <div className="rectangle-5" />
//           <img className="line" alt="Line" src="line-2.svg" />
//           <div className="text-wrapper-4">Support Patient</div>
//           <div className="text-wrapper-5">Impact Lakhs</div>
//           <div className="text-wrapper-6">Disbursal</div>
//           <div className="text-wrapper-7">lives</div>
//           <div className="text-wrapper-8">of lives</div>
//           <div className="text-wrapper-9">Quick funds</div>
//           <div className="text-wrapper-10">Fundraise at 0%</div>
//           <img className="img" alt="Line" src="line-2.svg" />
//           <div className="frame-wrapper">
//             <div className="div-wrapper">
//               <div className="overlap-group-wrapper-2">
//                 <div className="rectangle-wrapper">
//                   <div className="rectangle-6" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <img className="line-2" alt="Line" src="line-1.svg" />
//         <img className="line-3" alt="Line" src="line-3.svg" />
//       </div>
//     </div>
//   );
// };
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClerkProvider } from "@clerk/clerk-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ClerkProvider publishableKey='pk_test_aHVtYW5lLXBvbGxpd29nLTU1LmNsZXJrLmFjY291bnRzLmRldiQ' afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  
  </React.StrictMode>
);
Kommunicate.init("29d7e7244dd3b8007bdc94a6371983274", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});
