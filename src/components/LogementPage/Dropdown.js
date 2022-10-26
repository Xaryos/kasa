import React, { useState } from 'react';
import './dropdown.css';

import upArrow from '@/images/Logement/Vectoruparrow.png';
import downArrow from '@/images/Logement/downarrow.png';

const Dropdown = ({ descriptions }) => {
    const [isExpanded, setExpanded] = useState(false);

    function toggle() {
        setExpanded(!isExpanded);
    }

    return (
        <div className='dd-Container'>
            <div className='dd-Header' onClick={toggle}>
                <h2 className='responsiveSize'> Description</h2>
                {isExpanded ? <img className='imageResponsiveSizeLogement' src={upArrow} alt='up' /> : <img className='imageResponsiveSizeLogement' src={downArrow} alt='down' />}
            </div>
            <div className={isExpanded ? 'dd_contentDd_open' : 'dd_contentDd_close'} >
                <div className='content responsiveSizeText'>
                    <p>{descriptions.description}</p>
                </div>
            </div>
        </div>

    );
};

export default Dropdown;