import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-950 placeholder:text-gray-500 focus-visible:outline-none    disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-eerie-400 dark:bg-eerie-500  dark:file:text-gray-50 dark:placeholder:text-french font-ovo',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
