'use client';
import { Tools } from '@/data';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ToolsComponent = () => {
  return (
    <div>
      <p>Tools I Use</p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-2 flex-wrap"
      >
        {Tools.map(({ image, aria }) => (
          <motion.div
            variants={item}
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            key={aria}
          >
            <div className="flex items-center justify-center bg-white dark:bg-eerie-500 dark:border-eerie-400 border border-gray-300 h-[50px] w-[50px] rounded-lg relative z-10">
              <Image
                src={image}
                alt={aria}
                width={25}
                height={25}
                aria-description={aria}
              />
            </div>
            <motion.div
              className="absolute top-0 left-1 bg-black w-full h-full rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, x: 4, y: 4 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ToolsComponent;
