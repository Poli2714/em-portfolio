import { NavItem } from '@/components/ui';

import { TNavItem } from '@/types/nav-items';

type FooterNavProps = {
  navItems: Array<TNavItem>;
};

function FooterNav({ navItems }: FooterNavProps) {
  return (
    <nav>
      <ul className='flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:gap-x-8 sm:gap-y-0'>
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <NavItem href={navItem.href} label={navItem.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterNav;
