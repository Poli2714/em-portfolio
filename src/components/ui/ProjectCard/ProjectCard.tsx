import { AspectRatio } from '@/components/shadcn';
import { ProjectImage, ProjectTechStack, VisitProject } from '..';

import { Project } from '@/types/project';

type ProjectCardProps = {
  project: Project;
  size?: 'sm' | 'lg';
};

function ProjectCard({ project, size = 'sm' }: ProjectCardProps) {
  return (
    <div className='flex w-full flex-col gap-y-6' data-testid='project-card'>
      <AspectRatio className='rounded-md shadow-lg' ratio={16 / 9}>
        <ProjectImage
          altDescription={project.image[0].alt_description}
          imgDark={project.image[0].img_dark}
          imgLight={project.image[0].img_light}
        />
      </AspectRatio>
      <div
        className={`grid gap-y-2 ${size === 'lg' ? 'gap-y-4 lg:grid-cols-2 lg:gap-x-20' : null}`}
      >
        <h4 className='text-2xl font-semibold'>{project.name}</h4>
        <p
          className={`mb-2 text-lg ${size === 'lg' ? 'row-start-3 mt-2 lg:row-span-3 lg:mt-0' : null}`}
        >
          {project.short_description}
        </p>
        <ProjectTechStack stack={project.stack} />
        <VisitProject
          className='mt-4 place-self-start'
          label='Visit Project'
          route={project.route}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
