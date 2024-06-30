import { AspectRatio } from '@/components/shadcn';
import { ProjectDateAndWebsite } from './components';
import { ProjectImage } from '@/components/ui';
import { ProjectPageSection } from '..';

import { Project } from '@/types/project';

type ProjectGoalProps = {
  project: Project;
};

function ProjectGoal({ project }: ProjectGoalProps) {
  return (
    <div
      className='space-y-[clamp(3rem,7.5dvw,5rem)]'
      data-testid='project-goal'
    >
      <ProjectPageSection title='Project Goal'>
        <div className='space-y-5'>
          {project.goals.map((goal, i) => (
            <p key={i}>{goal}</p>
          ))}
        </div>
        <ProjectDateAndWebsite date={project.date} website={project.website} />
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

export default ProjectGoal;
