import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
       <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Hello <i className="fab fa-typo3"></i></Link>
                <div className="menu-icon">

                </div>
            </div>
        </nav>
       </>
    )
}

export default Navbar
