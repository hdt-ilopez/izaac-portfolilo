import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './navigation-menu';
import { Navlinks } from '@/data';
import Link from 'next/link';
import { DarkModeButton } from './DarkModeButton';
import { Button } from './button';
import { MoveUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavigationBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <h1 className="font-outfit font-semibold text-5xl">
          Izaac<span className="text-tangello-500">.</span>
        </h1>
      </div>
      <div className="bg-white dark:bg-eerie-500 border border-gray-100 dark:border-eerie-400 drop-shadow-md h-14 flex items-center px-2 rounded-full">
        <NavigationMenu>
          <NavigationMenuList>
            {Navlinks.map((navlink, index) => (
              <NavigationMenuItem key={index}>
                <Link href={navlink.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'font-ovo text-[18px]'
                    )}
                  >
                    {navlink.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-2">
        <DarkModeButton />
        <Button
          variant="outline"
          className="rounded-full h-12 px-8 dark:bg-transparent dark:border-eerie-400 dark:hover:bg-tangello-500 dark:hover:border-tangello-500"
        >
          Contact <MoveUpRight />
        </Button>
      </div>
    </div>
  );
};

export default NavigationBar;
