import { ChildPageHeader } from '@/components/ui';
import { ProjectCardList } from './components';

import { projects } from '@/lib/projects';

export default function ProjectsHomePage() {
  return (
    <>
      <ChildPageHeader
        className='text-center'
        description='Some description'
        mainTitle='Portfolio'
        secondaryTitle='Projects'
      />
      <ProjectCardList projects={projects} />
    </>
  );
}
