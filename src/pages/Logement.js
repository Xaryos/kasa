import React from 'react';
import { useParams } from 'react-router-dom';
import { dataService } from '@/_services/data.service.js'

import "./logement.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrousel from '../components/LogementPage/Carrousel';
import Information from '../components/LogementPage/Information';
import Dropdown from '../components/LogementPage/Dropdown';
import Equipement from '../components/LogementPage/Equipement';




const Logement = () => {
    let { id } = useParams()
    const appart = dataService.getOneAppart(id)

    return (
        <div className='bodyHtml'>
            <Header />
            <div className='MainContainer'>
                
                <Carrousel key={appart.pictures} images={appart.pictures}/>

                <Information key={appart.information} details={appart}/>

                <div className='underContainer'>
                    <Dropdown  key={appart.dropdown}descriptions={appart}/>
                    <Equipement  key={appart.equiment} details={appart}/>
                    
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Logement;