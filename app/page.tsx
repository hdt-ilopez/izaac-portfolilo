import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import DotBackground from '@/components/DotBackground';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <DotBackground />
      <AboutMe />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default HomePage;
