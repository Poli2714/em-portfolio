import Link from 'next/link';

import { cn } from '@/lib/utils';

type NavItemProps = {
  className?: string;
  href: string;
  label: string;
};

function NavItem({ className, href, label }: NavItemProps) {
  return (
    <Link
      className={cn(
        'group relative font-medium transition-colors hover:text-foreground dark:hover:text-highlight',
        className
      )}
      href={href}
    >
      {label}
      <div
        className='absolute -bottom-1.5 h-1 w-full origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100'
        data-testid='underline'
      ></div>
    </Link>
  );
}

export default NavItem;
