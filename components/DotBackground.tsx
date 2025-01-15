import React from 'react';

import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const DotBackground = () => {
  return (
    <div
      id="#home"
      className="h-[50rem] w-full dark:bg-eerie-500 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center px-4"
    >
      <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="rounded-full drop-shadow-lg">
          <Image
            src="/headshot.jpg"
            alt="avatar"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <h4 className="">Hello! I&apos;m Izaac Lopez 👋</h4>
        <h1 className="text-center capitalize">full stack developer</h1>
        <p className="w-full md:w-2/3 text-center ">
          I am a full stack developer from Chicago, IL with 2 years of
          experience in the full stack world. I hold an additional 3 years of
          experience in information systems & cloud management.
        </p>
        <div className="flex items-center gap-2">
          <Link href="#contact">
            <Button className="rounded-full h-12 bg-eerie-500 hover:bg-eerie-600 dark:bg-white dark:hover:bg-gray-200 text-white px-6">
              connect with me <ArrowRight />
            </Button>
          </Link>
          <Button
            variant="outline"
            className="rounded-full h-12 border-gray-300 text-eerie-500 hover:bg-gray-100 dark:bg-transparent dark:text-white dark:border-eerie-400 dark:hover:bg-tangello-500 dark:hover:border-tangello-500 dark:hover:text-white px-6"
          >
            my resume <Download />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DotBackground;
