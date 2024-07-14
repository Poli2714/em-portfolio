import Image from 'next/image';

import { MyStoryLong } from './components';
import { SkillCategory } from '@/app/components/MySkills/components';

import EMPicture from '/public/profile-picture/EM_square.jpeg';
import { coreSkills } from '@/lib/core-skills';
import { my_story_long } from '@/lib/my-story';
import { otherTools } from '@/lib/other-tools';

export default function MyStoryPage() {
  return (
    <div>
      <div className='grid gap-20 md:grid-cols-[min-content_1fr]'>
        <div className='h-96 w-80 place-self-center rounded-md md:place-self-start'>
          <Image
            alt="Elgun Mehdiyev's profile picture"
            className='h-full w-full rounded-md object-cover'
            height={384}
            priority
            src={EMPicture}
            width={320}
          />
        </div>
        <MyStoryLong myStory={my_story_long} />
      </div>
      <div className='mt-[clamp(5rem,15dvw,10rem)] grid space-y-10 md:grid-cols-2 md:gap-x-4 md:gap-y-0 md:space-y-0'>
        <SkillCategory categoryName='Core skills' skills={coreSkills} />
        <SkillCategory
          categoryName='Additional tools and libraries'
          skills={otherTools}
        />
      </div>
    </div>
  );
}
