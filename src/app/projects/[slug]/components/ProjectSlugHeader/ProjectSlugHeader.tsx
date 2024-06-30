import { AspectRatio } from '@/components/shadcn';
import { ProjectImage, ProjectTechStack } from '@/components/ui';
import { ProjectLinks, ProjectNameAndDescription } from './components';

import { Project } from '@/types/project';

type ProjectSlugHeaderProps = {
  project: Project;
};

function ProjectSlugHeader({ project }: ProjectSlugHeaderProps) {
  return (
    <header className='space-y-[clamp(3rem,7.5dvw,5rem)]'>
      <div className='flex flex-col items-center gap-y-5 text-center md:gap-y-6'>
        <ProjectNameAndDescription
          description={project.short_description}
          name={project.name}
        />
        <ProjectTechStack className='justify-center' stack={project.stack} />
        <ProjectLinks
          githubRepo={project.github_repo}
          website={project.website}
        />
      </div>
      <AspectRatio className='rounded-md shadow-lg' ratio={16 / 9}>
        <ProjectImage
          altDescription={project.image[0].alt_description}
          imgDark={project.image[0].img_dark}
          imgLight={project.image[0].img_light}
        />
      </AspectRatio>
    </header>
  );
}

export default ProjectSlugHeader;
