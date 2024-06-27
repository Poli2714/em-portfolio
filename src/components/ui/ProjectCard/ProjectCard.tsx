import { ProjectCardImage, ProjectStackList, VisitProject } from './components';

import { Project } from '@/types/project';

type ProjectCardProps = {
  project: Project;
  size?: 'sm' | 'lg';
};

function ProjectCard({ project, size = 'sm' }: ProjectCardProps) {
  return (
    <div className='flex w-full flex-col gap-y-6' data-testid='project-card'>
      <ProjectCardImage
        imgDark={project.imgDark}
        imgLight={project.imgLight}
        projectName={project.name}
      />
      <div
        className={`grid gap-y-2 ${size === 'lg' ? 'gap-y-4 lg:grid-cols-2 lg:gap-x-20' : null}`}
      >
        <h4 className='text-2xl font-semibold'>{project.name}</h4>
        <p
          className={`mb-2 text-lg ${size === 'lg' ? 'row-start-3 mt-2 lg:row-span-3 lg:mt-0' : null}`}
        >
          {project.description}
        </p>
        <ProjectStackList stack={project.stack} />
        <VisitProject route={project.route} />
      </div>
    </div>
  );
}

export default ProjectCard;
