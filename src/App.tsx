import React from 'react';
import './assets/css/App.css';
import './assets/css/index.css';
import HomePage from './pages/HomePage';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer/>
    </>
  );
};

export default App;
