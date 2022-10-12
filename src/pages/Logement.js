import React, { useEffect, useState } from 'react';
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
    console.log(id);
    const [logs, setLogs] = useState([])

    useEffect(() => {
        setLogs(dataService.getOneAppart({}))
        console.log(logs);

        return
    }, [])



    return (
        <div className='bodyHtml'>
            <Header />
            <div className='MainContainer'>
                <Carrousel />

                <Information />

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