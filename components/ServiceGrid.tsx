'use client';
import { Services } from '@/data';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {Services.map(({ icon, title, description, link }, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeOut',
          }}
          key={title}
          className="bg-white dark:bg-eerie-500 dark:border-eerie-400 rounded-lg p-4 border-2 border-gray-300 flex justify-evenly flex-col h-[330px]"
        >
          <div className="bg-tangello-500 rounded-lg p-4 text-white w-fit ">
            {icon}
          </div>
          <h5>{title}</h5>
          <p>{description}</p>
          <Link href={link} className="flex items-center">
            <Button
              variant="link"
              className="justify-start p-0 text-davy dark:text-french hover:no-underline hover:text-tangello-500"
            >
              Learn More <ArrowRight />
            </Button>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceGrid;
