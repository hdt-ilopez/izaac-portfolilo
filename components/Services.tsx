import React from 'react';
import ServiceGrid from './ServiceGrid';

const Services = () => {
  return (
    <div id="services" className="max-w-screen-xl mx-auto px-4 mb-24">
      <div className="text-center mb-8">
        <h6>My Offerings</h6>
        <h2 className="mb-4">Services</h2>
        <p className="md:w-2/3 mx-auto">
          I am a freelance developer and marketing professional with 5 years of
          experience aiding small to medium sized businesses grow their digital
          footprint and boost brand eligibility.
        </p>
      </div>
      <ServiceGrid />
    </div>
  );
};

export default Services;
