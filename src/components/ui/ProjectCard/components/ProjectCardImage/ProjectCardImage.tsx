import Image from 'next/image';

import { AspectRatio } from '@/components/shadcn';

type ProjectCardImageProps = {
  imgDark: string;
  imgLight?: string;
  projectName: string;
};

function ProjectCardImage({
  imgDark,
  imgLight,
  projectName,
}: ProjectCardImageProps) {
  const image = !imgLight ? (
    <Image
      alt={`${projectName} project website screenshot`}
      className='h-full w-full rounded-md object-cover object-top'
      height={416}
      width={721}
      src={imgDark}
    />
  ) : (
    <>
      <Image
        alt={`${projectName} project website screenshot`}
        className='h-full w-full rotate-0 scale-100 rounded-md object-cover object-top transition-all dark:-rotate-90 dark:scale-0'
        height={416}
        width={721}
        src={imgDark}
      />
      <Image
        alt={`${projectName} project website screenshot`}
        className='absolute left-0 top-0 h-full w-full rotate-90 scale-0 rounded-md object-cover object-top transition-all dark:rotate-0 dark:scale-100'
        height={416}
        width={721}
        src={imgLight}
      />
    </>
  );

  return (
    <AspectRatio className='rounded-md shadow-lg' ratio={16 / 9}>
      {image}
    </AspectRatio>
  );
}

export default ProjectCardImage;
