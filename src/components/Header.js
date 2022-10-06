import React from 'react';
import { Link } from 'react-router-dom';

// Logo images
import Klogo from '@/images/logo/VectorK.png';
import Hlogo from '@/images/logo/VectorHOUSE.png';
import Slogo from '@/images/logo/VectorS.png';
import Alogo from '@/images/logo/VectorA.png';


import "./header.css"

const Header = () => {
    return (
        <div className="Header">
            <header>
                {/* Logo */}
                <div className="headLogo">
                    <img className="SpaceLogo" src={Klogo} alt="K"></img>
                    <img className="SpaceLogo" src={Hlogo} alt="House"></img>
                    <img className="SpaceLogo" src={Slogo} alt="S"></img>
                    <img className="SpaceLogo" src={Alogo} alt="A"></img>
                </div>
                {/* Nav */}
                <nav>
                    <div className="itemLink">
                    <Link to="/Home">Accueil</Link>
                    </div>
                    <div className="itemLink">
                    <Link to="/Apropos">A Propos</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;