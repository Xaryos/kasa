import React from 'react';
import "./information.css"

const Information = () => {
    return (
        <div className='headInfo'>
            <div className='leftInfo'>
                <h1 className='title'>titre</h1>
                <p>Lieu</p>
                <div>Vignette</div>
            </div>
            <div className='rightInfo'>

                <div className='bodyRight'>
                    <h3>Name</h3>
                    <div className='CircleImg'>circle</div>

                </div>
                <p className="stars">stars stars stars stars stars</p>

            </div>
        </div>
    );
};

export default Information;