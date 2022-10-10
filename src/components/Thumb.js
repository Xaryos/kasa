import React from 'react';
import '../components/thumb.css';

const Thumb = ({detail}) => {
    
    return (
        <div className='Thumb'>
            <img src="" alt=""></img>
            <h3 className='colorTitle '>{detail.title}</h3>
        </div>
    );
};

export default Thumb;