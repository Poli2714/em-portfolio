'use client';

import { usePathname } from 'next/navigation';

import { convertToPath } from '@/lib/convertToPath/convertToPath';
import Link from 'next/link';

type NavItemProps = {
  label: string;
};

function NavItem({ label }: NavItemProps) {
  const href = convertToPath(label);
  const path = usePathname();

  return (
    <div className='group relative'>
      <Link
        className={`${path !== href ? 'text-foreground/50 transition-opacity group-hover:text-foreground' : null} font-medium`}
        href={href}
      >
        {label}
      </Link>
      <div
        className={`absolute -bottom-1 h-1 w-full bg-primary ${path !== href ? 'origin-left scale-x-0 transition-transform group-hover:scale-x-100' : null}`}
        data-testid='underline'
      ></div>
    </div>
  );
}

export default NavItem;
