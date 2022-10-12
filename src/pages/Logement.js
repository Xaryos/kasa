import React, { useEffect, useState } from 'react';

import "./logement.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrousel from '../components/LogementPage/Carrousel';
import Information from '../components/LogementPage/Information';

import { dataService } from '@/_services/data.service.js'


const Logement = () => {
    const [logs, setLogs] = useState([])


    useEffect(() => {
        setLogs(dataService.getOneAppart())

        return
    }, [])

    return (
        <div className='bodyHtml'>
            <Header />
            <div className='MainContainer'>
                <Carrousel />

                <Information/>               
                {
                    logs.map(log => (
                        <Information key={log.id} detail={log} />
                    ))
                }

                


            </div>
            <Footer />
        </div>
    );
};

export default Logement;