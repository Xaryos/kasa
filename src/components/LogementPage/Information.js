import React from 'react';
import "./information.css";

import EmptyStar from '@/images/Logement/VectorEMPTY.png';
import FullStar from '@/images/Logement/vectorFULL.png';

const Information = ({ details }) => {
    return (
        <div className='headInfo'>
            <div className='leftInfo'>
                <h1 className='title'>{details.title}</h1>
                <p>{details.location}</p>

                {
                    details.tags.map(tag => (
                        <div className='tags'>{tag}</div>
                    ))
                }




            </div>
            <div className='rightInfo'>

                <div className='bodyRight'>
                    {console.log(details.host.name)}
                    <h3>{details.host.name}</h3>
                    <div className='CircleImg'>
                        <img className='interiorpic' src={details.host.picture} alt="hostimg"></img></div>
                </div>
                <p className="stars">{details.rating}</p>

                {/* {
                
                    details.rating.map(rate => (

                        for(let i=1; i <= 5; i++ ) {
                            if(i <= star){
                                rate[i] = true
                            } else {
                                rate[i] = false
                            }
                        }

                    ))
                } */}

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