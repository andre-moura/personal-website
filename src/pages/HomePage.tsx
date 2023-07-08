import React from 'react';
import { Banner } from '../components/Banner'
import { Skills } from '../components/Skills'
import Projects from '../components/Projects';

const HomePage: React.FC = () => {
    return (
        <>
            <Banner />
            <Skills />
            <Projects />
        </>
    );
};

export default HomePage;