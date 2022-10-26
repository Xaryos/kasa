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

import Error from '@/_utils/Error'




const Logement = () => {
    let { id } = useParams();
    const appart = dataService.getOneAppart(id);
    console.log(appart)

    if (!appart) {
        return <Error />
    } else {

        return (
            <div className='bodyHtml'>
                <Header />
                <div className='MainContainer'>

                    <Carrousel images={appart.pictures} />

                    <Information details={appart} />

                    <div className='underContainer'>
                        <Dropdown descriptions={appart} />
                        <Equipement details={appart} />

                    </div>

                </div>
                <Footer />
            </div>
        );
    }
};

export default Logement;