import React from 'react';
import "./information.css"

const Information = ({detail}) => {
    return (
        <div className='headInfo'>
            <h1>{detail.title}</h1>
        </div>
    );
};

export default Information;