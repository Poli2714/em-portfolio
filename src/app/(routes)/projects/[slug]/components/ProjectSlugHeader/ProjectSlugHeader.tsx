import { FullscreenPhotoCard, ProjectTechStack } from '@/components/ui';
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
      <FullscreenPhotoCard image={project.images[0]} />
    </header>
  );
}

export default ProjectSlugHeader;
