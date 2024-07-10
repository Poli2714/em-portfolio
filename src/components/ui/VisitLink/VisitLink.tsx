import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type VisitLinkProps = {
  className?: string;
  label: string;
  route: string;
};

function VisitLink({ className, label, route }: VisitLinkProps) {
  return (
    <Link
      className={cn(
        'group flex items-center gap-x-1 font-medium underline underline-offset-8 hover:text-primary dark:text-highlight dark:hover:text-primary',
        className
      )}
      href={route}
    >
      {label}
      <ArrowUpRightIcon
        className='group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:transition-transform'
        data-testid='arrow-up-right'
        size={20}
      />
    </Link>
  );
}

export default VisitLink;
