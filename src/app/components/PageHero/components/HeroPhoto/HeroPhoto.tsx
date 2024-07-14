import Image from 'next/image';

import EMPicture from '/public/profile-picture/EM_square.jpeg';

function HeroPhoto() {
  return (
    <div className='relative h-[clamp(20rem,70dvw,31.25rem)] w-[clamp(20rem,70dvw,31.25rem)] rounded-full border border-primary lg:h-[clamp(22.375rem,35dvw,31.25rem)] lg:w-[clamp(22.375rem,35dvw,31.25rem)]'>
      <div className='absolute left-[calc((clamp(20rem,70dvw,31.25rem)-clamp(16rem,56dvw,25rem))/2)] top-[calc((clamp(20rem,70dvw,31.25rem)-clamp(16rem,56dvw,25rem))/2)] h-[clamp(16rem,56dvw,25rem)] w-[clamp(16rem,56dvw,25rem)] rounded-full lg:left-[calc((clamp(22.375rem,35dvw,31.25rem)-clamp(17.9rem,28dvw,25rem))/2)] lg:top-[calc((clamp(22.375rem,35dvw,31.25rem)-clamp(17.9rem,28dvw,25rem))/2)] lg:h-[clamp(17.9rem,28dvw,25rem)] lg:w-[clamp(17.9rem,28dvw,25rem)]'>
        <Image
          alt="Elgun Mehdiyev's profile picture"
          className='h-full w-full rounded-full object-cover'
          height={400}
          priority
          src={EMPicture}
          width={400}
        />
      </div>
    </div>
  );
}

export default HeroPhoto;
