import React from 'react';
import '../css/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

const Navbar = ({ isHeader }) => {
    return (
        <nav className="navbar navbar-expand-sm w-75 d-flex mx-auto">
            <div className="container-fluid p-0">
                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerflex-1"
                    aria-controls="navbarTogglerflex-1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse align-items-baseline ${isHeader ? '' : 'col-sm-3 d-flex justify-content-between'}`} id="navbarTogglerflex-1">
                    <div className="col-sm-1">
                        <a className="navbar-brand" href="#logo">
                            <img src="../assets/logo.png" alt="Logo" />
                        </a>
                    </div>
                    <ul className={`navbar-nav ${isHeader ? 'mb-2 mb-sm-0' : 'mx-auto mb-2 mb-sm-0 justify-content-center'}`}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#process">Process</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        {!isHeader && (
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        )}
                    </ul>
                </div>
                {!isHeader && (
                    <div className="col-sm-30 d-flex justify-content-end">
                        <div className="d-flex align-items-center">
                            <span className="me-2 text-white">Go To Top</span>
                            <a
                                className="goOnTop link-info text-white text-decoration-none d-flex align-items-center justify-content-center"
                                href='#top' style={{ cursor: 'pointer', borderRadius: '50%', width: '62px', height: '62px', backgroundColor: '#2C5446', transition: 'background-color 0.3s' }}
                            >
                                <i className="bi bi-arrow-up-short" style={{ fontSize: '19px' }}></i>
                            </a>
                        </div>
                    </div>
                )}
                {isHeader && (
                    <a className="btn btn-primary fw-bolder fs-6 btn-lg btnContact ms-4" href='#contactus'>Contact Us</a>
                )}
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </nav>
    );
};

export default Navbar;
