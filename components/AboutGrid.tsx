'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, GraduationCap } from 'lucide-react';

const AboutGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
    >
      <motion.div
        className="relative group h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex flex-col gap-2 bg-white dark:bg-eerie-500 dark:border-eerie-400 drop-shadow-xl p-4 rounded-lg relative z-10 h-full border border-gray-300">
          <Code className="shrink-0 text-tangello-500 " />
          <h6 className="text-eerie-500 dark:text-white">Languages</h6>
          <p className="text-sm">
            HTML, CSS, JavaScript, Typescript, NextJs, Node.js, NestJS, C#
          </p>
        </div>
        <motion.div
          className="absolute top-0 left-1 bg-black w-full h-full rounded-lg"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, x: 4, y: 4 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <motion.div
        className="relative group h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex flex-col gap-2 bg-white  dark:bg-eerie-500 dark:border-eerie-400 drop-shadow-xl p-4 rounded-lg relative z-10 h-full border border-gray-300">
          <GraduationCap className="shrink-0 text-tangello-500" />
          <h6 className="text-eerie-500 dark:text-white">Education</h6>
          <p className="text-sm">
            B.S Computer Science ~ Full Sail University ~ 2026
          </p>
        </div>
        <motion.div
          className="absolute top-0 left-1 bg-black w-full h-full rounded-lg"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, x: 4, y: 4 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <motion.div
        className="relative group h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex flex-col gap-2 bg-white  dark:bg-eerie-500 dark:border-eerie-400 drop-shadow-xl p-4 rounded-lg relative z-10 h-full border border-gray-300">
          <Briefcase className="shrink-0 text-tangello-500" />
          <h6 className="text-eerie-500 dark:text-white">Experience</h6>
          <p className="text-sm">Web Development ~ 3 years</p>
          <p className="text-sm">Information Systems ~ 5 years</p>
        </div>
        <motion.div
          className="absolute top-0 left-1 bg-black w-full h-full rounded-lg"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, x: 4, y: 4 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutGrid;
