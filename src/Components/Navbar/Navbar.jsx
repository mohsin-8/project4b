import React from 'react';
import "./Navbar.css";
import { GoThreeBars } from "react-icons/go";

import logo from "../../images/logo.svg";

const Navbar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="185" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><GoThreeBars /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Developers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resources</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Community</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <button className='ms-3 btn button'>
                                Get Started
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;