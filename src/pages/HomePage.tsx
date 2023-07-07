import React from 'react';
import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner'
import { Skills } from '../components/Skills'
import { Footer } from '../components/Footer'

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Skills />
            <Footer />
        </>
    );
};

export default HomePage;