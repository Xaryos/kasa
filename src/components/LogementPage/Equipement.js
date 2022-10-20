import React, { useState}from 'react';
import './equipement.css'

import upArrow from '@/images/Logement/Vectoruparrow.png';
import downArrow from '@/images/Logement/downarrow.png';

const Equipement = ({details}) => {
    const [ isExpanded, setExpanded] = useState(false);

     function toggle() {
        setExpanded(!isExpanded)
    }
    return (
        <div className='globalEquipement'>
            <div className='equipementbox' onClick={toggle}>
                <h2 className='responsiveSize'> Équipements</h2>
                {isExpanded ? <img className='imageResponsiveSizeLogement' src={upArrow} alt='up'/> : <img className='imageResponsiveSizeLogement' src={downArrow} alt='down'/>}

            </div>
            <div className={isExpanded ? 'dd_contentEquip_open' : 'dd_contentEquip_close'} >
                <ul className='content responsiveSizeText'>
                    {
                        details.equipments.map((equipments, i) => (
                            <li key={i}>{equipments}</li>
                        ))
                    }
                    
                   
                </ul>
            </div>
        </div>

    );
};

export default Equipement;