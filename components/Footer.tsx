import React from 'react';

const Footer = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <p className="border-t-2 border-gray-300 dark:border-eerie-400 text-eerie-300 dark:text-french text-sm py-4">
        © {new Date().getFullYear()} Izaac Lopez. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
