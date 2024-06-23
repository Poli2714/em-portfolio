import Link from 'next/link';

import { Button } from '@/components/shadcn';

function HeroContent() {
  return (
    <div className='flex flex-col gap-y-8 text-center lg:text-left'>
      <p className='text-[clamp(1rem,3dvw,1.5rem)]'>
        Hello, I&apos;m{' '}
        <span className='text-3xl text-[clamp(1.5rem,5dvw,1.875rem)] font-bold tracking-wide underline decoration-primary decoration-4 underline-offset-8'>
          Elgun Mehdiyev
        </span>
      </p>
      <h1 className='text-[clamp(3.5rem,10dvw,8rem)] font-bold leading-none'>
        Frontend Developer
      </h1>
      <p className='text-[clamp(1rem,3dvw,1.5rem)] leading-[clamp(1.5rem,4dvw,2rem)]'>
        I&apos;m a frontend developer based in Canada, skilled in{' '}
        <span className='font-semibold underline decoration-primary decoration-4 underline-offset-[6px]'>
          React
        </span>{' '}
        and{' '}
        <span className='font-semibold underline decoration-primary decoration-4 underline-offset-[6px]'>
          Next.js
        </span>
        , passionate about creating beautiful and responsive web experiences.
      </p>
      <div className='flex gap-x-4 self-center lg:self-start'>
        <Button asChild size='lg'>
          <Link href='/contact-me'>Contact me</Link>
        </Button>

        <Button asChild size='lg' variant='outline'>
          <Link href='/projects'>Projects</Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroContent;
