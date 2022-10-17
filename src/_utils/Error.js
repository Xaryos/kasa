import React from 'react';
import './error.css';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Error = () => {
    return (
        <div className='mainErrContainer'>
            <Header />
            <div className='errorContainer'>
                <h1 className='Title'> 404 </h1>
                <h2 className='SubTitle'> Oups! La page que vous demandez n'existe pas. </h2>
                <div className='linkText'><Link to='/home'>Retourner sur la page d'accueil</Link></div>


            </div>
            <Footer />
        </div>

    );
};

export default Error;