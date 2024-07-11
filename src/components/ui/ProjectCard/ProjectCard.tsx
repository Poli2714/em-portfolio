import Link from 'next/link';

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
      <Link
        className='transition-opacity hover:opacity-95 dark:hover:opacity-90'
        href={project.route}
      >
        <PhotoCard image={project.images[0]} />
      </Link>
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
