import Link from 'next/link';

import { navItems } from '@/lib/nav-items';

function FooterNavLinks() {
  return (
    <nav>
      <ul className='flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:gap-x-8 sm:gap-y-0'>
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <Link href={navItem.href}>{navItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterNavLinks;
