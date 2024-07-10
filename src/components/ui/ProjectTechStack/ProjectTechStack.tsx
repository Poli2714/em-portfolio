import { Badge } from '@/components/shadcn';

import { cn } from '@/lib/utils';

type ProjectTechStackProps = {
  className?: string;
  stack: Array<string>;
};

function ProjectTechStack({ className, stack }: ProjectTechStackProps) {
  return (
    <ul className={cn('flex flex-wrap gap-1', className)}>
      {stack.map((tool) => (
        <li key={tool}>
          <Badge className='bg-primary font-medium text-primary-foreground hover:bg-primary/80'>
            {tool}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

export default ProjectTechStack;
