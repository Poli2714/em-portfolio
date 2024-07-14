import { NavItem } from '@/components/ui';
import { SheetClose } from '@/components/shadcn';

import { TNavItem } from '@/types/nav-items';

type MenuNavProps = {
  navItems: Array<TNavItem>;
};

function MenuNav({ navItems }: MenuNavProps) {
  return (
    <nav>
      <ul className='flex flex-col gap-y-6 text-3xl uppercase'>
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <SheetClose asChild>
              <NavItem
                className='font-semibold'
                href={navItem.href}
                label={navItem.label}
              />
            </SheetClose>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuNav;
