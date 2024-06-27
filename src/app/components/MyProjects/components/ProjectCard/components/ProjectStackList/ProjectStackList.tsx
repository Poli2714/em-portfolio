import { Badge } from '@/components/shadcn';

type ProjectStackListProps = {
  stack: Array<string>;
};

function ProjectStackList({ stack }: ProjectStackListProps) {
  return (
    <ul className='flex flex-wrap gap-1'>
      {stack.map((tool) => (
        <li key={tool}>
          <Badge className='bg-primary font-medium text-primary-foreground hover:bg-primary/70'>
            {tool}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

export default ProjectStackList;
