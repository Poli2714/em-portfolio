import { AspectRatio } from '@/components/shadcn';
import { Photo } from '@/components/ui';

import { TPhoto } from '@/types/project';

type ProjectCardHeaderProps = {
  image: TPhoto;
};

function ProjectCardHeader({ image }: ProjectCardHeaderProps) {
  return (
    <AspectRatio className='relative rounded-md shadow-lg' ratio={16 / 9}>
      <div className='absolute left-0 top-0 dark:z-10 dark:h-full dark:w-full dark:bg-background/15'></div>
      <Photo
        altDescription={image.alt_description}
        lightMode={image.light_mode}
        darkMode={image.dark_mode}
      />
    </AspectRatio>
  );
}

export default ProjectCardHeader;
