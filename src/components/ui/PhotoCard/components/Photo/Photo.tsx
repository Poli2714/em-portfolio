import Image from 'next/image';

type PhotoProps = {
  altDescription: string;
  lightMode: string;
  darkMode?: string;
};

function Photo({ altDescription, lightMode, darkMode }: PhotoProps) {
  const image = !darkMode ? (
    <Image
      alt={altDescription}
      className='h-full w-full rounded-md object-cover object-top'
      fill
      priority
      sizes='100dvw'
      src={lightMode}
    />
  ) : (
    <>
      <Image
        alt={altDescription}
        className='h-full w-full rotate-0 scale-100 rounded-md object-cover object-top transition-all dark:-rotate-90 dark:scale-0'
        fill
        priority
        sizes='100dvw'
        src={lightMode}
      />
      <Image
        alt={altDescription}
        className='absolute left-0 top-0 h-full w-full rotate-90 scale-0 rounded-md object-cover object-top transition-all dark:rotate-0 dark:scale-100'
        fill
        priority
        sizes='100dvw'
        src={darkMode}
      />
    </>
  );

  return image;
}

export default Photo;
