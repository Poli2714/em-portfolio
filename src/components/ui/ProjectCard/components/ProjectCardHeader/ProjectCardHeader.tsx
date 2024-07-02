import { AspectRatio } from '@/components/shadcn';
import { Photo } from '@/components/ui';

import { TPhoto } from '@/types/project';

type ProjectCardHeaderProps = {
  image: TPhoto;
};

function ProjectCardHeader({ image }: ProjectCardHeaderProps) {
  return (
    <AspectRatio className='rounded-md shadow-lg' ratio={16 / 9}>
      <Photo
        altDescription={image.alt_description}
        lightMode={image.light_mode}
        darkMode={image.dark_mode}
      />
    </AspectRatio>
  );
}

export default ProjectCardHeader;
