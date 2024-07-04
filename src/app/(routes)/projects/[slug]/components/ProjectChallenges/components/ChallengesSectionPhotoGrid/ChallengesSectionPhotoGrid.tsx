import { AspectRatio } from '@/components/shadcn';
import { Photo } from '@/components/ui';

import { TPhoto } from '@/types/project';

type ChallengesSectionPhotoGridProps = {
  images: Array<TPhoto>;
};

function ChallengesSectionPhotoGrid({
  images,
}: ChallengesSectionPhotoGridProps) {
  return (
    <ul className='grid gap-4 lg:grid-cols-2 [&>li:nth-child(3)]:lg:col-span-2 [&>li:nth-child(4)]:lg:col-span-2'>
      <li>
        <div className='grid grid-cols-2 gap-x-0.5'>
          <AspectRatio className='rounded-md shadow-lg' ratio={1 / 2}>
            <Photo
              altDescription={images[3].alt_description}
              lightMode={images[3].light_mode}
              darkMode={images[3].dark_mode}
            />
          </AspectRatio>
          <AspectRatio className='rounded-md shadow-lg' ratio={1 / 2}>
            <Photo
              altDescription={images[4].alt_description}
              lightMode={images[4].light_mode}
              darkMode={images[4].dark_mode}
            />
          </AspectRatio>
        </div>
      </li>
      <li>
        <div className='grid grid-cols-2 gap-x-0.5'>
          <AspectRatio className='rounded-md shadow-lg' ratio={1 / 2}>
            <Photo
              altDescription={images[5].alt_description}
              lightMode={images[5].light_mode}
              darkMode={images[5].dark_mode}
            />
          </AspectRatio>
          <AspectRatio className='rounded-md shadow-lg' ratio={1 / 2}>
            <Photo
              altDescription={images[6].alt_description}
              lightMode={images[6].light_mode}
              darkMode={images[6].dark_mode}
            />
          </AspectRatio>
        </div>
      </li>
      <li>
        <AspectRatio className='rounded-md shadow-lg' ratio={16 / 9}>
          <Photo
            altDescription={images[7].alt_description}
            lightMode={images[7].light_mode}
            darkMode={images[7].dark_mode}
          />
        </AspectRatio>
      </li>
      <li>
        <AspectRatio className='rounded-md shadow-lg' ratio={16 / 9}>
          <Photo
            altDescription={images[8].alt_description}
            lightMode={images[8].light_mode}
            darkMode={images[8].dark_mode}
          />
        </AspectRatio>
      </li>
    </ul>
  );
}

export default ChallengesSectionPhotoGrid;
