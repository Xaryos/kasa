import React from 'react';
import { Link } from 'react-router-dom';

// Logo images
import Klogo from '@/images/logo/VectorK.png';
import Hlogo from '@/images/logo/VectorHOUSE.png';
import Dlogo from '@/images/logo/VectorDOOR.png';
import Slogo from '@/images/logo/VectorS.png';
import Alogo from '@/images/logo/VectorA.png';


import "./header.css"

const Header = () => {
    return (
        <div className="Header">
            <header>
                {/* Logo */}
                <div className="headLogo">
                    <img className="K" src={Klogo} alt="K"></img>
                    <img className="House" src={Hlogo} alt="House"></img>
                    <img className="Door" src={Dlogo} alt="Door"></img>
                    <img className="S" src={Slogo} alt="S"></img>
                    <img className="A" src={Alogo} alt="A"></img>
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