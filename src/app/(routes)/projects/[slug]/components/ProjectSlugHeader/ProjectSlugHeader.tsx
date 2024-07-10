import { AspectRatio } from '@/components/shadcn';
import { Photo, ProjectTechStack } from '@/components/ui';
import { ProjectLinks, ProjectNameAndDescription } from './components';

import { TProject } from '@/types/project';

type ProjectSlugHeaderProps = {
  project: TProject;
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
      <AspectRatio className='relative rounded-md shadow-lg' ratio={16 / 9}>
        <div className='absolute left-0 top-0 dark:z-10 dark:h-full dark:w-full dark:bg-background/15'></div>
        <Photo
          altDescription={project.images[0].alt_description}
          lightMode={project.images[0].light_mode}
          darkMode={project.images[0].dark_mode}
        />
      </AspectRatio>
    </header>
  );
}

export default ProjectSlugHeader;
