import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrousel from '../components/LogementPage/Carrousel';

const Logement = () => {
    return (
        <div className='bodyHtml'>
            <Header/>
            <div className='MainContainer'>
                <Carrousel/>
                
            </div>
            <Footer/>
        </div>
    );
};

export default Logement;