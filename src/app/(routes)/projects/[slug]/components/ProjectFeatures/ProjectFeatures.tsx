import { AspectRatio } from '@/components/shadcn';
import { FeatureList } from './components';
import { ProjectImage } from '@/components/ui';
import { ProjectPageSection } from '..';

import { Project } from '@/types/project';

type ProjectFeaturesProps = {
  project: Project;
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
        <ProjectImage
          altDescription={project.image[0].alt_description}
          imgDark={project.image[0].img_dark}
          imgLight={project.image[0].img_light}
        />
      </AspectRatio>
    </div>
  );
}

export default ProjectFeatures;
