import { AspectRatio } from '@/components/shadcn';
import { Photo, Shade } from './components';

import { cn } from '@/lib/utils';
import { TPhoto } from '@/types/project';
import Link from 'next/link';

type PhotoCardProps = {
  className?: string;
  image: TPhoto;
  ratio?: number;
  shade?: boolean;
  shadeColor?: string;
};

function PhotoCard({
  className,
  image,
  ratio,
  shade = true,
  shadeColor,
}: PhotoCardProps) {
  return (
    <AspectRatio
      className={cn('relative rounded-md shadow-lg', className)}
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
