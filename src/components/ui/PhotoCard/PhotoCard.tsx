import { AspectRatio } from '@/components/shadcn';
import { Photo, Shade } from './components';

import { TPhoto } from '@/types/project';

type PhotoCardProps = {
  image: TPhoto;
  ratio?: number;
  shade?: boolean;
  shadeColor?: string;
};

function PhotoCard({ image, ratio, shade = true, shadeColor }: PhotoCardProps) {
  return (
    <AspectRatio
      className='relative rounded-md shadow-lg'
      ratio={ratio ?? 16 / 9}
    >
      {shade ? <Shade shadeColor={shadeColor} /> : null}
      <Photo
        altDescription={image.alt_description}
        lightMode={image.light_mode}
        darkMode={image.dark_mode}
      />
    </AspectRatio>
  );
}

export default PhotoCard;
