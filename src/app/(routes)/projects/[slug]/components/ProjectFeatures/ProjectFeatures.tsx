import { FeatureList } from './components';
import { FullscreenPhotoCard } from '@/components/ui';
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
      <FullscreenPhotoCard image={project.images[2]} />
    </div>
  );
}

export default ProjectFeatures;
