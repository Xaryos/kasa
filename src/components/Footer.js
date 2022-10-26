import React from 'react';
import './footer.css'

import footerLogo from '@/images/logo/LOGOFooterLogo.png';

const Footer = () => {
    return (
        <footer>
            <div className="footLogo">
                <img src={footerLogo} alt="K"></img>
            </div>
            <h2>© 2020 Kasa. All rights reserved</h2>
        </footer>
    );
};

export default Footer;