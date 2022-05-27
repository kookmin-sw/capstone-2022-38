import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <div className="glass" id="footer-glass">
    <div className="footer-links">
      <div className="d-flex align-items-center justify-content-center flex-column">
      
      <div className="footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <a href="/about">About Us</a>
        <a href="/tnc">Terms & Conditions</a>
        <a href="pp">Privacy Policy</a>
        <a href="mailto:reachaliens@gmail.com">Contact</a>
      </div>

        <div className="button-wrapper col-md-4 col-sm-7 d-flex flex-row">
          <a target="_blank" href="http://facebook.com"><i className="fab fa-facebook-f sns-button d-flex align-items-center justify-content-center" /></a>
          <a target="_blank" href="http://twitter.com"><i className="fab fa-twitter sns-button d-flex align-items-center justify-content-center" /></a>
          <a target="_blank" href="http://instagram.com"><i className="fab fa-instagram sns-button d-flex align-items-center justify-content-center" /></a>
        </div>
        <p>@2022 Reachaliens. All Rights Reserved.</p>
      </div>
  
    </div>
    </div>
  </div>
);

export default Footer;
