import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type VisitProjectProps = {
  className?: string;
  label: string;
  route: string;
};

function VisitProject({ className, label, route }: VisitProjectProps) {
  const href = route.startsWith('https') ? route : `/projects/${route}`;

  return (
    <Link
      className={cn(
        'group flex items-center gap-x-1 font-medium underline underline-offset-8',
        className
      )}
      href={href}
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

export default VisitProject;
