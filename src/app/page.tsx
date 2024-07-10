import { MyProjects, MySkills, MyStoryShort, PageHero } from './components';
import { PageFooter, PageHeader } from '@/components/ui';

import { coreSkills } from '@/lib/core-skills';
import { my_story_short } from '@/lib/my-story';
import { navItems } from '@/lib/nav-items';
import { otherTools } from '@/lib/other-tools';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <>
      <PageHeader navItems={navItems} />
      <PageHero />
      <MyStoryShort story={my_story_short} />
      <MySkills coreSkills={coreSkills} otherTools={otherTools} />
      <MyProjects projects={projects} />
      <PageFooter navItems={navItems} />
    </>
  );
}
