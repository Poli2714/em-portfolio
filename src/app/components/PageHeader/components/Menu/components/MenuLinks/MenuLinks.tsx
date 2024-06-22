import Link from 'next/link';

import { SheetClose } from '@/components/shadcn';

import { navItems } from '@/lib/nav-items';

function MenuLinks() {
  return (
    <nav>
      <ul className='flex flex-col gap-y-8 text-3xl uppercase'>
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <SheetClose asChild>
              <Link
                className='group relative font-semibold'
                href={navItem.href}
              >
                {navItem.label}
                <div
                  className='absolute -bottom-1.5 h-1 w-full origin-left scale-x-0 bg-primary transition-transform duration-200 group-hover:scale-x-100'
                  data-testid='underline'
                ></div>
              </Link>
            </SheetClose>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuLinks;
