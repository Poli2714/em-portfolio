import { ChildPageHeader } from '@/components/ui';
import { ProjectCardList } from './components';

import { projects } from '@/lib/projects';

export default function ProjectsHomePage() {
  return (
    <>
      <ChildPageHeader
        className='text-center'
        description="Welcome to my Projects page! Here you'll find a selection of my web development work. Click on any project to see more details, including the technologies used and the challenges faced."
        mainTitle='Portfolio'
        secondaryTitle='Projects'
      />
      <ProjectCardList projects={projects} />
    </>
  );
}
