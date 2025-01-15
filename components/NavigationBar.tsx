import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { Navlinks } from '@/data';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DarkModeButton } from './DarkModeButton';
import { Button } from './ui/button';

const NavigationBar = () => {
  return (
    <div className="fixed z-[50] w-full flex items-center justify-between p-4">
      <div>
        <h1 className="font-outfit font-semibold text-5xl">
          Izaac<span className="text-tangello-500">.</span>
        </h1>
      </div>
      <div className="bg-white dark:bg-eerie-500 border border-gray-100 dark:border-eerie-400 drop-shadow-md h-14 lg:flex items-center px-2 rounded-full hidden">
        <NavigationMenu>
          <NavigationMenuList>
            {Navlinks.map((navlink, index) => (
              <NavigationMenuItem key={index}>
                <Link
                  href={navlink.href}
                  legacyBehavior
                  passHref
                  scroll={false}
                >
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
