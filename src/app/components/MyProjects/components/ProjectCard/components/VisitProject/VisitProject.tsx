import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';

type VisitProjectProps = {
  route: string;
};

function VisitProject({ route }: VisitProjectProps) {
  return (
    <Link
      className='group mt-4 flex items-center gap-x-1 self-start font-medium underline underline-offset-8'
      href={`/projects/${route}`}
    >
      Visit Project
      <ArrowUpRightIcon
        className='group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:transition-transform'
        data-testid='arrow-up-right'
        size={20}
      />
    </Link>
  );
}

export default VisitProject;
