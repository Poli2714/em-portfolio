import Link from 'next/link';

import { SectionTitle, VisitLink } from '@/components/ui';

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
      <div className='mx-auto flex max-w-[70ch] flex-col gap-y-6 text-lg'>
        <p>{story}</p>
        <VisitLink className='self-start' label='More info' route='/my-story' />
      </div>
    </section>
  );
}

export default MyStoryShort;
