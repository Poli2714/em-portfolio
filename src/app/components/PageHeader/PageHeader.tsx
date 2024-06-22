import Link from 'next/link';

import { Button } from '@/components/shadcn';
import { Logo, NavItems } from '@/components/ui';
import { Menu, ModeToggle } from './components';

function PageHeader() {
  return (
    <header className='flex h-24 items-center px-12 2xl:container sm:justify-between'>
      <div className='flex items-center gap-x-2'>
        <Menu />
        <Logo />
      </div>
      <div className='hidden md:block'>
        <NavItems />
      </div>
      <div className='ml-auto flex items-center gap-x-2 sm:ml-0'>
        <Button
          asChild
          className='hidden dark:hover:text-primary-foreground sm:flex'
          size='lg'
          variant='outline'
        >
          <Link href='/contact-me'>Contact me</Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}

export default PageHeader;
