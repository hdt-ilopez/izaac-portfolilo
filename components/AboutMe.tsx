import { Tools } from '@/data';
import Image from 'next/image';
import React from 'react';
import AboutGrid from './AboutGrid';
import ToolsComponent from './Tools';

const AboutMe = () => {
  return (
    <div id="about" className="max-w-screen-xl mx-auto mb-24 px-4">
      <div className="text-center mb-8">
        <h6>Introduction</h6>
        <h2 className="">About Me</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        <Image
          src="/headshot.jpg"
          alt="avatar"
          width={500}
          height={300}
          className="rounded-lg shadow-xl"
        />
        <div className="md:col-span-2 md:w-[80%]">
          <p className="mb-8 leading-relaxed ">
            As a passionate Full Stack Developer, I bring extensive experience
            in developing innovative web solutions and enterprise applications.
            Proficient in React, NextJs TypeScript, Node.js. Currently pursuing
            a B.S. in Computer Science at Full Sail University, I combine
            academic knowledge with practical experience in building scalable
            applications. My unique blend of technical expertise and deep
            understanding of marketing technologies enables me to create
            solutions that drive business growth and enhance user experience.
          </p>
          <AboutGrid />
          <ToolsComponent />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
