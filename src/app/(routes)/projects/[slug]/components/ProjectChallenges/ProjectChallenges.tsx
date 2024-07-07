import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn';
import {
  BlogPostLink,
  ChallengesSectionPhotoGrid,
  SolutionDetailList,
} from './components';
import { ProjectPageSection } from '..';

import { TProject } from '@/types/project';

type ProjectChallengesProps = {
  project: TProject;
};

function ProjectChallenges({ project }: ProjectChallengesProps) {
  return (
    <div
      className='space-y-[clamp(3rem,7.5dvw,5rem)]'
      data-testid='project-challenges'
    >
      <ProjectPageSection title='Challenges'>
        <Accordion type='multiple' className='w-full'>
          {project.challenges.map((challenge, i) => (
            <AccordionItem key={i} value={`item-${i + 1}`}>
              <AccordionTrigger className='text-left'>
                {challenge.name}
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-y-4'>
                {challenge.solution_summary}
                {!!challenge.solution_details ? (
                  <SolutionDetailList
                    solutionDetails={challenge.solution_details}
                  />
                ) : null}
                {challenge.isBlogged ? (
                  <BlogPostLink blogPostLink={challenge.blog_post_link} />
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ProjectPageSection>
      <ChallengesSectionPhotoGrid images={project.images} />
    </div>
  );
}

export default ProjectChallenges;
