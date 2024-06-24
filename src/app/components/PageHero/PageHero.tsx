import { HeroContent, HeroPhoto } from './components';

function PageHero() {
  return (
    <section
      className='my-[clamp(5rem,15dvw,10rem)] grid place-items-center gap-y-14 lg:my-0 lg:min-h-[calc(100dvh-6rem)] lg:grid-cols-[auto_min-content] lg:gap-x-8'
      data-testid='hero-section'
    >
      <HeroContent />
      <HeroPhoto />
    </section>
  );
}

export default PageHero;
