import React, { useState } from 'react';
import './carrousel.css'
const Carrousel = ({ images }) => {
    console.log(images)
    const [position, setPosition] = useState(0)

    const next = () => {
        if (position === images.length - 1) {
            setPosition(0)
        } else {
            setPosition(position + 1)
        }
    }
    const prev = () => {
        if (position === 0) {
            setPosition(images.length - 1)
        } else {
            setPosition(position - 1)
        }

    }

    return (
        <div className='MainBlock'>
            <div className='rollingBlock'>
                <img src={images[position]} className="photo" alt="" />
            </div>
            <div className='leftArrow' onClick={prev}></div>
            <div className='rightArrow' onClick={next}></div>
            <p className='rollingNumber'>{position + 1}/{images.length}</p>
        </div>

    );
};

export default Carrousel;