import Image from 'next/image';

type SocialMediaIconProps = {
  name: string;
  srcDark: any;
  srcLight: any;
};

function SocialMediaIcon({ name, srcDark, srcLight }: SocialMediaIconProps) {
  return (
    <>
      <Image
        alt={`${name} Dark logo`}
        className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
        src={srcDark}
        height={24}
        width={24}
      />
      <Image
        alt={`${name} White logo`}
        className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
        src={srcLight}
        height={24}
        width={24}
      />
    </>
  );
}

export default SocialMediaIcon;
