import React from 'react';
import { Link } from 'react-router-dom';

// Logo images
import HeaderLogo from '@/images/logo/LOGOHeaderLogo.png';


import "./header.css"

const Header = () => {
    return (
        <div className="Header">
            <header>
                {/* Logo */}
                <div className="headLogo">
                    <img className="logoWidth" src={HeaderLogo} alt="header logo"></img>
                </div>
                {/* Nav */}
                <nav>
                    <div className="itemLink">
                        <Link to="/home">Accueil</Link>
                    </div>
                    <div className="itemLink">
                        <Link to="/apropos">A Propos</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;