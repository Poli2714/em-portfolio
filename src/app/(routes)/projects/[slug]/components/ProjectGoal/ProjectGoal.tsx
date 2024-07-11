import { FullscreenPhotoCard } from '@/components/ui';
import { ProjectDateAndWebsite } from './components';
import { ProjectPageSection } from '..';

import { TProject } from '@/types/project';

type ProjectGoalProps = {
  project: TProject;
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
      <FullscreenPhotoCard image={project.images[1]} />
    </div>
  );
}

export default ProjectGoal;
