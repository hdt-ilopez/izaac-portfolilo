'use client';
import { CornerDownRight } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Projects } from '@/data';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? Projects : Projects.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
      },
    }),
  };

  return (
    <div id="work" className="max-w-screen-xl mx-auto px-4 mb-24">
      <div className="text-center mb-8">
        <h6>My Portfolio</h6>
        <h2 className="mb-4">My Latest Work</h2>
        <p className="md:w-2/3 mx-auto">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
            >
              <div
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: project.backgroundPosition,
                  backgroundRepeat: 'no-repeat',
                }}
                className="bg-gray-200 p-4 rounded-lg relative flex items-end aspect-square"
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="relative p-2 bg-white dark:bg-eerie-500 w-full rounded-lg flex justify-between items-center">
                  <div>
                    <h6>{project.title}</h6>
                    <p>{project.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="border border-eerie-500 rounded-full dark:bg-eerie-400 hover:bg-tangello-500 dark:hover:bg-tangello-500 hover:text-white hover:border-tangello-500"
                      >
                        <CornerDownRight />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {showAll && (
            <motion.div
              custom={visibleProjects.length} // Use length as index to appear last
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              layout
              className="bg-gray-100 rounded-lg p-4 flex items-center justify-center aspect-square border-2 border-dashed border-gray-300"
            >
              <div className="text-center text-gray-500">
                <h6 className="text-lg font-semibold mb-2">More Coming Soon</h6>
                <p className="text-sm">Stay tuned for future projects!</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {Projects.length > 4 && (
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="rounded-full text-eerie-500 border dark:bg-transparent dark:border-eerie-400 dark:text-white dark:hover:bg-tangello-500 dark:hover:text-white dark:hover:border-tangello-500 border-gray-300 hover:bg-tangello-500 hover:text-white hover:border-tangello-500"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
