import { HeroContent, HeroPhoto } from './components';

function PageHero() {
  return (
    <section
      className='mt-[clamp(5rem,15dvw,10rem)] grid place-items-center gap-y-14 lg:grid-cols-[auto_min-content] lg:gap-x-8'
      data-testid='hero-section'
    >
      <HeroContent />
      <HeroPhoto />
    </section>
  );
}

export default PageHero;
