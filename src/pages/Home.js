import React, {useEffect, useState} from 'react';
import "./home.css"
import Header from '../components/Header';
import ImageContainer from '../components/ImageContainer';
import Thumb from '../components/Thumb';

import { dataService } from '@/_services/data.service.js'
import Footer from '../components/Footer';

const Home = () => {
    const [logs, setLogs] = useState([])


    useEffect(() => {
        setLogs(dataService.getAllApparts())

        return
    }, [])

    return (
        <div className='bodyHTML'>
            <Header />
            {/* Main */}
            {/* Inbox Image */}
            <ImageContainer />

            {/* Main container */}
            <div className='Gallery'>
                    
                    {
                        logs.map(log => (
                            <Thumb key={log.id} detail={log}/>
                        ))
                    }
            </div>
            <Footer/>
        </div>
    );
};

export default Home;