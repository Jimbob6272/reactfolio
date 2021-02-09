import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Experience from '../Experience';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Experience />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
