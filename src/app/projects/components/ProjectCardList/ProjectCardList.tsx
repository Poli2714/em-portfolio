import { ProjectCard } from '@/components/ui';

import { projects } from '@/lib/projects';

function ProjectCardList() {
  return (
    <ul className='space-y-[clamp(3rem,7.5dvw,5rem)]'>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} size='lg' />
        </li>
      ))}
    </ul>
  );
}

export default ProjectCardList;
