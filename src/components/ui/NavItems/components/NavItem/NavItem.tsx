'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

type NavItemProps = {
  href: string;
  label: string;
};

function NavItem({ href, label }: NavItemProps) {
  const path = usePathname();

  return (
    <Link
      className={`group relative font-medium ${path !== href ? 'text-foreground/50 transition-opacity group-hover:text-foreground' : null}`}
      href={href}
    >
      {label}
      <div
        className='absolute -bottom-1.5 h-1 w-full origin-left scale-x-0 bg-primary transition-transform duration-200 group-hover:scale-x-100'
        data-testid='underline'
      ></div>
    </Link>
  );
}

export default NavItem;
