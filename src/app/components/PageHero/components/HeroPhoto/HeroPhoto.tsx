function HeroPhoto() {
  return (
    <div
      className='relative h-[clamp(20rem,70dvw,31.25rem)] w-[clamp(20rem,70dvw,31.25rem)] rounded-full border border-primary lg:h-[clamp(22.375rem,35dvw,31.25rem)] lg:w-[clamp(22.375rem,35dvw,31.25rem)]'
      data-testid='hero-photo'
    >
      <div className='absolute left-[calc((clamp(20rem,70dvw,31.25rem)-clamp(16rem,56dvw,25rem))/2)] top-[calc((clamp(20rem,70dvw,31.25rem)-clamp(16rem,56dvw,25rem))/2)] h-[clamp(16rem,56dvw,25rem)] w-[clamp(16rem,56dvw,25rem)] rounded-full bg-primary lg:left-[calc((clamp(22.375rem,35dvw,31.25rem)-clamp(17.9rem,28dvw,25rem))/2)] lg:top-[calc((clamp(22.375rem,35dvw,31.25rem)-clamp(17.9rem,28dvw,25rem))/2)] lg:h-[clamp(17.9rem,28dvw,25rem)] lg:w-[clamp(17.9rem,28dvw,25rem)]'></div>
    </div>
  );
}

export default HeroPhoto;
