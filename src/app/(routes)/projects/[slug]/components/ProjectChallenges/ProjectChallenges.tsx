import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AspectRatio,
} from '@/components/shadcn';
import { Photo } from '@/components/ui';
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
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-left'>
              Displaying photos in waterfall/masonry grid while maintaining
              their order and original aspect ratios
            </AccordionTrigger>
            <AccordionContent>Hello world</AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Hey I am here</AccordionTrigger>
            <AccordionContent>Hello world</AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Hey I am here</AccordionTrigger>
            <AccordionContent>Hello world</AccordionContent>
          </AccordionItem>
        </Accordion>
      </ProjectPageSection>
      <ul className='grid gap-4 lg:grid-cols-2 [&>li:nth-child(3)]:lg:col-span-2 [&>li:nth-child(4)]:lg:col-span-2'>
        {[1, 2, 3, 4].map((_, i) => (
          <li key={i}>
            {i === 0 || i === 1 ? (
              <AspectRatio className='rounded-md shadow-lg' ratio={1 / 1}>
                <Photo
                  altDescription={project.images[0].alt_description}
                  lightMode={project.images[0].light_mode}
                  darkMode={project.images[0].dark_mode}
                />
              </AspectRatio>
            ) : (
              <AspectRatio className='rounded-md shadow-lg' ratio={16 / 9}>
                <Photo
                  altDescription={project.images[0].alt_description}
                  lightMode={project.images[0].light_mode}
                  darkMode={project.images[0].dark_mode}
                />
              </AspectRatio>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectChallenges;
