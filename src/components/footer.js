import React from 'react';
import '../css/Footer.css'; // Create and add CSS here if needed
import Navbar from './Navbar';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container-fluid">
        {/* Navbar component can be imported and used here if created separately */}
        <Navbar />

        <div id="footerInfoBar" className="container-fluid d-flex flex-wrap justify-content-center w-75 rounded-1">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm-7 d-flex flex-grow-1 flex-wrap align-items-center" style={{ gap: '20px' }}>
              <a href="mailto:hello@squareup.com" className="footerInfoItems email text-white link-info text-decoration-none btn">
                hello@squareup.com
              </a>
              <a href="tel:+9191813232309" className="footerInfoItems phone text-white link-info text-decoration-none btn">
                +91 91813 23 2309
              </a>
              <a href="#1" className="footerInfoItems map text-white link-info text-decoration-none btn">
                Somewhere in the World
              </a>
            </div>
            <div className="col-sm-3 d-flex justify-content-end align-items-center">
              <span>© {year} Nutritionist. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </footer>
  );
}

export default Footer;
