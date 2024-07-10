import { ProjectTechStack, VisitLink } from '@/components/ui';

import { cn } from '@/lib/utils';

type ProjectCardContentProps = {
  className?: string;
  projectTitle: string;
  route: string;
  shortDescription: string;
  techStack: Array<string>;
};

function ProjectCardContent({
  className,
  projectTitle,
  route,
  shortDescription,
  techStack,
}: ProjectCardContentProps) {
  return (
    <div className={cn('grid gap-y-4', className)}>
      <h4 className='text-2xl font-semibold dark:text-highlight'>
        {projectTitle}
      </h4>
      <ProjectTechStack stack={techStack} />
      <p className={`mb-2 mt-2 text-lg`}>{shortDescription}</p>
      <VisitLink
        className='mt-4 place-self-start'
        label='Visit Project'
        route={route}
      />
    </div>
  );
}

export default ProjectCardContent;
