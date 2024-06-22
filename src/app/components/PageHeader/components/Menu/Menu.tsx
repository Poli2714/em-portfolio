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
import { ContactMeLink, MenuLinks } from './components';
import { Logo } from '@/components/ui';

function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='md:hidden' size='icon' variant='ghost'>
          <MenuIcon data-testid='menu-icon' strokeWidth={1.25} />
        </Button>
      </SheetTrigger>
      <SheetContent className='w-full' side='left'>
        <SheetHeader className='mb-14'>
          <SheetTitle>
            <SheetClose asChild>
              <Logo />
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <MenuLinks />
        <div className='mt-14 inline-block'>
          <SheetClose asChild>
            <ContactMeLink />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Menu;
