import { ProjectCardImage, ProjectStackList, VisitProject } from './components';

import { Project } from '@/types/project';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='flex w-full flex-col gap-y-6' data-testid='project-card'>
      <ProjectCardImage
        imgDark={project.imgDark}
        imgLight={project.imgLight}
        projectName={project.name}
      />
      <div className='flex flex-col gap-y-2'>
        <h4 className='text-2xl font-semibold'>{project.name}</h4>
        <p className='mb-2 text-lg'>{project.description}</p>
        <ProjectStackList stack={project.stack} />
        <VisitProject route={project.route} />
      </div>
    </div>
  );
}

export default ProjectCard;
