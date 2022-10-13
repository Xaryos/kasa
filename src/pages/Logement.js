import React from 'react';
import { useParams } from 'react-router-dom';
import { dataService } from '@/_services/data.service.js'

import "./logement.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrousel from '../components/LogementPage/Carrousel';
import Information from '../components/LogementPage/Information';
import Scrollbox from '../components/LogementPage/Scrollbox';




const Logement = () => {
    let { id } = useParams()
    const appart = dataService.getOneAppart(id)
    console.log(appart)

    return (
        <div className='bodyHtml'>
            <Header />
            <div className='MainContainer'>
                
                <Carrousel images={appart.pictures}/>

                <Information details={appart}/>

                <div className='underContainer'>
                    <Scrollbox />
                    <Scrollbox />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Logement;