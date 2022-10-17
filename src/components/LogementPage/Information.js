import React from 'react';
import "./information.css";

import EmptyStar from '@/images/Logement/VectorEMPTY.png';
import FullStar from '@/images/Logement/VectorFULL.png';


const Information = ({ details }) => {

    const ratings = details.rating;
    console.log('nmb rate : ' +details.rating );

    let rate = [];
    for (let i = 1; i <= 5 ; i++) {
        if (i <= ratings) {
            rate[i] = true
        } else {
            rate[i] = false
        }
    }
    console.log('rate array : ' + rate)


    return (
        <div className='headInfo'>
            <div className='leftInfo'>
                <h1 className='title'>{details.title}</h1>
                <p className='spaceabove'>{details.location}</p>

                <div className='tagContainer'> {
                    details.tags.map(tag => (
                        <div className='tags'>{tag}</div>
                    ))
                }</div>





            </div>
            <div className='rightInfo'>

                <div className='bodyRight'>
                    <h3 className='sizeH3'>{details.host.name}</h3>
                    <div className='CircleImg'>
                        <img className='interiorpic' src={details.host.picture} alt="hostimg"></img></div>
                </div>
                <ul className='StarContainer'>
                    {
                    rate.map(starRate => (
                        <li className='stars'>
                            <img src= {starRate ? FullStar : EmptyStar} alt={starRate ? 'Star full ' : 'Star empty'}></img>
                        </li>

                        ))
                }
                </ul>





                {/* 
                        Rate de 3 
                            Map de rate 
                            Fonder des variables pour full et empty star

                            étape on regarde le nombre d'étoile (boucle)

                            if ( i <= stars ) {
                                rate[i] = true
                            } else {
                                rate[i] = false
                            }
                
                            [1] = true // si 1 est <= 3
                            [2] = true
                            [3] = true
                            [4] = false // donc à partir d'ici c'est faut
                            [5] = false //
                */}




            </div>
        </div>
    );
};

export default Information;