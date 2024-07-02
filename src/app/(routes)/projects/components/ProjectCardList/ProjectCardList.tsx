import { ProjectCard } from '@/components/ui';

import { TProject } from '@/types/project';

type ProjectCardListProps = {
  projects: Array<TProject>;
};

function ProjectCardList({ projects }: ProjectCardListProps) {
  return (
    <ul className='space-y-[clamp(3rem,7.5dvw,5rem)]'>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard
            project={project}
            className='lg:grid-cols-2 lg:gap-x-20 [&>p]:lg:col-start-2 [&>p]:lg:row-span-3 [&>p]:lg:row-start-1'
          />
        </li>
      ))}
    </ul>
  );
}

export default ProjectCardList;
