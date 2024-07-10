'use client';

import { usePathname } from 'next/navigation';

import { NavItem } from '@/components/ui';

import { TNavItem } from '@/types/nav-items';

type MainNavProps = {
  navItems: Array<TNavItem>;
};

function MainNav({ navItems }: MainNavProps) {
  const path = usePathname();

  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-x-4'>
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <NavItem
              className={`${path === navItem.href ? 'text-foreground dark:text-highlight' : 'text-foreground/50 dark:text-foreground'}`}
              href={navItem.href}
              label={navItem.label}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
