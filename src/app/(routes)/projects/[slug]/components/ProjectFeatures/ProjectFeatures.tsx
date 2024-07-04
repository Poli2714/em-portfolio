import { AspectRatio } from '@/components/shadcn';
import { FeatureList } from './components';
import { Photo } from '@/components/ui';
import { ProjectPageSection } from '..';

import { TProject } from '@/types/project';

type ProjectFeaturesProps = {
  project: TProject;
};

function ProjectFeatures({ project }: ProjectFeaturesProps) {
  return (
    <div
      className='space-y-[clamp(3rem,7.5dvw,5rem)]'
      data-testid='project-features'
    >
      <ProjectPageSection title='Project Features'>
        <FeatureList features={project.features} />
      </ProjectPageSection>
      <AspectRatio className='rounded-md shadow-lg' ratio={16 / 9}>
        <Photo
          altDescription={project.images[2].alt_description}
          lightMode={project.images[2].light_mode}
          darkMode={project.images[2].dark_mode}
        />
      </AspectRatio>
    </div>
  );
}

export default ProjectFeatures;
