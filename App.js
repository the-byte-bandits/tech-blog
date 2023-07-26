import AboutUs from './Components/About';
import ContactUs from './Components/ContactUs';
import Register from './Components/Register';
import Login from './Components/Login';
import TermsOfService from './Components/TermsOfService';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-router-dom'

function App() {
  return (
    <div>
      <AboutUs/>
      <ContactUs/>
      <Login/>
      <Register/>
      <TermsOfService/>
    </div>
  );
}
export default App;




