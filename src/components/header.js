import React from 'react';
import '../css/header.css'; // Import CSS for styling
import Navbar from './Navbar';

function Header() {
  return (
    <header className="header shadow py-2 bg-dark-green">
      <div className="col">
        <div id="topBanner" className="container-fluid d-flex flex-wrap justify-content-center w-75 rounded-1">
          <a 
            id="ctaLink" 
            href="/" 
            className="d-flex align-items-center mb-3 mb-lg-0 text-white text-decoration-none link-info"
          >
            <span className="me-2">Join Our Personalized Nutrition Demo For Free</span>
            <i className="bi bi-arrow-right-short" style={{ fontSize: '19px', marginTop: '4px' }}></i>
          </a>
        </div>
        <span className="divider py-2 pb-0"></span>
        {/* Include Navbar component here if you have one */}
        <Navbar isHeader={true} />
      </div>
    </header>
  );
}

export default Header;
