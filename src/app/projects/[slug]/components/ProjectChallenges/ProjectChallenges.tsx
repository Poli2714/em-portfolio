import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AspectRatio,
} from '@/components/shadcn';
import { ProjectImage } from '@/components/ui';
import { ProjectPageSection } from '..';

import { Project } from '@/types/project';

type ProjectChallengesProps = {
  project: Project;
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
            <AccordionContent>
              <p>Hello world</p>
              <div className='rounded-lg bg-foreground p-4 text-background'>
                <pre>
                  <code className='text-wrap'>{`'use client';

import { PhotoCard } from './components';

import { Photo } from '@/types/Images';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type PhotoGridProps = {
  photos: Array<Photo>;
  base64results: Array<string>;
};

function PhotoGrid({ photos, base64results }: PhotoGridProps) {
  const numberOfPhotos = photos.length;
  const isXLarge = useMediaQuery('(min-width: 1448px)');
  const isLarge = useMediaQuery('(min-width: 1096px');
  const isMedium = useMediaQuery('(min-width: 722px)');
  const numberOfCols = isXLarge ? 4 : isLarge ? 3 : isMedium ? 2 : 1;

  return (
    <ul className={\`grid h-auto w-full gap-x-4 grid-cols-\${numberOfCols}\`}>
      {Array.from({ length: numberOfCols }).map((_, colIndex) => (
        <div key={colIndex} className='flex h-auto w-full flex-col gap-y-4'>
          {photos.map((_, i) => {
            const index = colIndex + numberOfCols * i;
            return index < numberOfPhotos ? (
              <li key={photos[index].id}>
                <PhotoCard
                  photo={photos[index]}
                  base64={base64results[index]}
                />
              </li>
            ) : null;
          })}
        </div>
      ))}
    </ul>
  );
}

export default PhotoGrid;
`}</code>
                </pre>
              </div>
            </AccordionContent>
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
                <ProjectImage
                  altDescription={project.image[0].alt_description}
                  imgDark={project.image[0].img_dark}
                  imgLight={project.image[0].img_light}
                />
              </AspectRatio>
            ) : (
              <AspectRatio className='rounded-md shadow-lg' ratio={16 / 9}>
                <ProjectImage
                  altDescription={project.image[0].alt_description}
                  imgDark={project.image[0].img_dark}
                  imgLight={project.image[0].img_light}
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
