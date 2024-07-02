import { MyProjects, MySkills, MyStoryShort, PageHero } from './components';

import { my_story_short } from '@/lib/my-story';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <>
      <PageHero />
      <MyStoryShort story={my_story_short} />
      <MySkills />
      <MyProjects projects={projects} />
    </>
  );
}
