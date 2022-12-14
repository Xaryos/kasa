import React from 'react';
import '../HomePage/thumb.css';
import { Link } from 'react-router-dom';

const Thumb = ({ detail }) => {

    return (
        <div className='Thumb'>
            <Link to={`/logement/${detail.id}`}>
                <img className='imageCover ' src={detail.cover} alt={detail.title}></img>
                <span>
                    <h3 className='colorTitle '>{detail.title}</h3>
                </span>

            </Link>
        </div>
    );
};

export default Thumb;