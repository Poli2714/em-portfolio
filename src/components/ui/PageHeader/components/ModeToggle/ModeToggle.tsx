'use client';

import { MoonIcon, SunMediumIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/shadcn';

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='ghost'>
          <SunMediumIcon
            className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
            data-testid='sun-icon'
            strokeWidth={1.25}
          />
          <MoonIcon
            className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
            data-testid='moon-icon'
            strokeWidth={1.25}
          />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ModeToggle;
