import { FullscreenPhotoCard } from '@/components/ui';

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
          <FullscreenPhotoCard
            align='vertical'
            image={images[3]}
            ratio={1 / 2}
          />
          <FullscreenPhotoCard
            align='vertical'
            image={images[4]}
            ratio={1 / 2}
          />
        </div>
      </li>
      <li>
        <div className='grid grid-cols-2 gap-x-0.5'>
          <FullscreenPhotoCard
            align='vertical'
            image={images[5]}
            ratio={1 / 2}
          />
          <FullscreenPhotoCard
            align='vertical'
            image={images[6]}
            ratio={1 / 2}
          />
        </div>
      </li>
      <li>
        <FullscreenPhotoCard image={images[7]} />
      </li>
      <li>
        <FullscreenPhotoCard image={images[8]} />
      </li>
    </ul>
  );
}

export default ChallengesSectionPhotoGrid;
