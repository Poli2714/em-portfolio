import Link from 'next/link';

import { SectionTitle } from '@/components/ui';

type MyStoryShortProps = {
  story: string;
};

function MyStoryShort({ story }: MyStoryShortProps) {
  return (
    <section
      className='my-[clamp(5rem,15dvw,10rem)] space-y-10 lg:mt-0'
      data-testid='story-section'
    >
      <SectionTitle title='My Story' />
      <p className='mx-auto max-w-[70ch] text-lg'>
        {story}{' '}
        <Link className='font-semibold' href='/my-story'>
          My story.
        </Link>
      </p>
    </section>
  );
}

export default MyStoryShort;
