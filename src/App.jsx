import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import RequestEarlyAccess from './components/RequestEarlyAccess/RequestEarlyAccess';
import BecomeMerchantForm from './components/BecomeMerchantForm/BecomeMerchantForm';
import CancellationRefundPolicy from './components/CancellationRefundPolicy/CancellationRefundPolicy';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import { DirectionProvider } from './components/DirectionContext';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter> {/* Wrap the app with BrowserRouter */}
      <div>
        <DirectionProvider />\
    <MobileNavbar />
        <Navbar />
        <Routes> {/* Wrap Route components inside Routes */}
          <Route path="/" element={<Hero />} />
          <Route path="/requestEarly" element={<RequestEarlyAccess />} />
          <Route path="/becomeMerchant" element={<BecomeMerchantForm />} />
          <Route path="/refund&Cancellation" element={<CancellationRefundPolicy />} />
          <Route path="/t&C" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
  
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
