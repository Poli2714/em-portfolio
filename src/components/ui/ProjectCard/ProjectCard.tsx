import { PhotoCard } from '..';
import { ProjectCardContent } from './components';

import { TProject } from '@/types/project';

type ProjectCardProps = {
  className?: string;
  project: TProject;
};

function ProjectCard({ className, project }: ProjectCardProps) {
  return (
    <div className='flex w-full flex-col gap-y-6' data-testid='project-card'>
      <PhotoCard image={project.images[0]} />
      <ProjectCardContent
        className={className}
        projectTitle={project.name}
        route={project.route}
        shortDescription={project.short_description}
        techStack={project.stack}
      />
    </div>
  );
}

export default ProjectCard;
