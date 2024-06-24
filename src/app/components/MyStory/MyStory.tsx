import Link from 'next/link';

import { SectionTitle } from '@/components/ui';

function MyStory() {
  return (
    <section
      className='my-[clamp(5rem,15dvw,10rem)] space-y-10 lg:mt-0'
      data-testid='story-section'
    >
      <SectionTitle title='My Story' />
      <p className='mx-auto max-w-[60ch] text-lg'>
        Hi, I&apos;m Elgun Mehdiyev, an aspiring frontend developer based in
        Canada. Over the past year, I&apos;ve dedicated myself to mastering
        HTML, CSS, JavaScript, TypeScript, React and Next.js. What started as a
        curiosity about how websites function has grown into a passion for
        building visually appealing and responsive web applications. I enjoy the
        process of transforming concepts into interactive digital experiences.
        Outside of coding, I&apos;m always eager to learn about new technologies
        and enjoy reading classic literature and history.{' '}
        <Link className='font-semibold' href='/my-story'>
          My story.
        </Link>
      </p>
    </section>
  );
}

export default MyStory;
