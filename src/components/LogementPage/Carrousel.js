import React from 'react';
import './carrousel.css'
const Carrousel = ({ detail }) => {
    return (
        <div className='MainBlock'>
            <div className='rollingBlock'>
            <div className='leftArrow'>
                </div>
                <div className='rightArrow'>
                </div>
            </div>
            <p className='rollingNumber'>1/4</p>
        </div>

    );
};

export default Carrousel;