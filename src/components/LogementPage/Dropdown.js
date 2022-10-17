import React from 'react';
import './dropdown.css';

const Dropdown = ( {descriptions} ) => {
    return (
        <div className='dd-Container'>
            <div className='dd-Header'>
                <h2> Description</h2>
                <div className='uparrow'></div>
                <div className='downarrow'></div>

            </div>
            <div className='dd-content'>
                <div className='content'>
                <p>{descriptions.description}</p>
                </div>
            </div>
        </div>

    );
};

export default Dropdown;