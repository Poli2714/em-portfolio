import { MenuIcon } from 'lucide-react';

import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/shadcn';
import { ContactMeLink, MenuNav } from './components';
import { Logo, SocialMediaLinks } from '@/components/ui';

import { TNavItem } from '@/types/nav-items';

type MenuProps = {
  navItems: Array<TNavItem>;
};

function Menu({ navItems }: MenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='md:hidden' size='icon' variant='ghost'>
          <MenuIcon data-testid='menu-icon' strokeWidth={1.25} />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col' side='left'>
        <SheetHeader className='mb-14'>
          <SheetTitle>
            <SheetClose asChild>
              <Logo />
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <MenuNav navItems={navItems} />
        <div className='mb-auto mt-14 inline-block'>
          <SheetClose asChild>
            <ContactMeLink />
          </SheetClose>
        </div>
        <SocialMediaLinks className='self-end' />
      </SheetContent>
    </Sheet>
  );
}

export default Menu;
