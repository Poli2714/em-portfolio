import { Dialog, DialogContent, DialogTrigger } from '@/components/shadcn';
import { PhotoCard } from '..';

import { cn } from '@/lib/utils';
import { TPhoto } from '@/types/project';

type FullscreenPhotoCardProps = {
  align?: 'vertical' | 'horizontal';
  image: TPhoto;
  ratio?: number;
};

function FullscreenPhotoCard({
  align = 'horizontal',
  image,
  ratio,
}: FullscreenPhotoCardProps) {
  const className = align === 'vertical' ? 'max-h-screen' : 'max-w-screen-2xl';

  return (
    <Dialog>
      <DialogTrigger asChild className='hover:cursor-pointer'>
        <PhotoCard image={image} ratio={ratio} />
      </DialogTrigger>
      <DialogContent className={cn('border-none bg-transparent', className)}>
        <PhotoCard image={image} ratio={ratio} shade={false} />
      </DialogContent>
    </Dialog>
  );
}

export default FullscreenPhotoCard;
