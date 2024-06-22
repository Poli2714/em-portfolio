import { NavItem } from './components';

import { navItems } from '@/lib/nav-items';

function NavItems() {
  return (
    <nav>
      <ul className='flex gap-x-4'>
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <NavItem href={navItem.href} label={navItem.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavItems;
