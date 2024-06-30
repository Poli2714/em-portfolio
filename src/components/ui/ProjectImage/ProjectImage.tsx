import Image from 'next/image';

type ProjectImageProps = {
  altDescription: string;
  imgDark: string;
  imgLight?: string;
};

function ProjectImage({
  altDescription,
  imgDark,
  imgLight,
}: ProjectImageProps) {
  const image = !imgLight ? (
    <Image
      alt={altDescription}
      className='h-full w-full rounded-md object-cover object-top'
      height={549}
      width={976}
      src={imgDark}
    />
  ) : (
    <>
      <Image
        alt={altDescription}
        className='h-full w-full rotate-0 scale-100 rounded-md object-cover object-top transition-all dark:-rotate-90 dark:scale-0'
        height={549}
        width={976}
        src={imgDark}
      />
      <Image
        alt={altDescription}
        className='absolute left-0 top-0 h-full w-full rotate-90 scale-0 rounded-md object-cover object-top transition-all dark:rotate-0 dark:scale-100'
        height={549}
        width={976}
        src={imgLight}
      />
    </>
  );

  return image;
}

export default ProjectImage;
