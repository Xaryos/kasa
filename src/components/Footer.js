import React from 'react';
import './footer.css'

import Klogo from '@/images/logo/VectorFK.png';
import Hlogo from '@/images/logo/VectorFHOUSE.png';
import Slogo from '@/images/logo/VectorFS.png';
import Alogo from '@/images/logo/VectorFA.png';
import Dlogo from '@/images/logo/VectorFDOOR.png';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footLogo">
                    <img className="K" src={Klogo} alt="K"></img>
                    <img className="House" src={Hlogo} alt="House"></img>
                    <img className="Door" src={Dlogo} alt="Door"></img>
                    <img className="S" src={Slogo} alt="S"></img>
                    <img className="A" src={Alogo} alt="A"></img>
                </div>
                <h2>© 2020 Kasa. All rights reserved</h2>
            </footer>

        </div>
    );
};

export default Footer;