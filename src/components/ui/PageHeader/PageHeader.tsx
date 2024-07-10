import Link from 'next/link';

import { Button } from '@/components/shadcn';
import { Logo, MainNav } from '@/components/ui';
import { Menu, ModeToggle } from './components';

import { TNavItem } from '@/types/nav-items';

type PageHeaderProps = {
  navItems: Array<TNavItem>;
};

function PageHeader({ navItems }: PageHeaderProps) {
  return (
    <header className='flex h-24 items-center sm:justify-between'>
      <div className='flex items-center gap-x-2'>
        <Menu navItems={navItems} />
        <Logo />
      </div>
      <MainNav navItems={navItems} />
      <div className='ml-auto flex items-center gap-x-2 sm:ml-0'>
        <Button asChild className='hidden sm:flex' size='lg' variant='outline'>
          <Link href='/contact-me'>Contact me</Link>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}

export default PageHeader;
