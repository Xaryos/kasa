import React from 'react';
import './equipement.css'

const Equipement = ({details}) => {
    return (
        <div className='globalEquipement'>
            <div className='equipementbox'>
                <h2> Équipements</h2>
                <div className='uparrow'></div>

            </div>
            <div className='underEquipementbox'>
                <ul className='content'>
                    {
                        details.equipments.map(equipments => (
                            <li>{equipments}</li>
                        ))
                    }
                    
                   
                </ul>
            </div>
        </div>

    );
};

export default Equipement;