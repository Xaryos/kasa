import React from 'react';
import './scrollbox.css';

const Scrollbox = () => {
    return (
        <div className='globalScroll'>
            <div className='scrollbox'>
                <h2> title scrollbox</h2>
                <div className='uparrow'></div>

            </div>
            <div className='underscrollbox'>
                <p className='nospace'> information scrollbox </p>
            </div>
        </div>

    );
};

export default Scrollbox;