import React, { useState } from 'react';
import './longDropdown.css';

import upArrow from '@/images/Logement/Vectoruparrow.png';
import downArrow from '@/images/Logement/downarrow.png';


const LongDropdown = (props) => {
    const [isExpanded, setExpanded] = useState(false);


    function toggle() {
        setExpanded(!isExpanded)
    }

    return (
        <div className='global-dd-container'>
            <div className='dd_header' onClick={toggle}>
                <h3 className='dd_title responsiveSize'>{props.title}</h3>
                {isExpanded ? <img className='imageResponsiveSizeLogement' src={upArrow} alt='up' /> : <img className='imageResponsiveSizeLogement' src={downArrow} alt='down' />}
            </div>
            <div className={isExpanded ? 'dd_content_open' : 'dd_content_close'}>
                <p className='dd_content responsiveSizeText'>
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default LongDropdown;