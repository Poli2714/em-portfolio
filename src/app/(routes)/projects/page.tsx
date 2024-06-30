import { PageHeader } from '@/components/ui';
import { ProjectCardList } from './components';

export default function ProjectsHomePage() {
  return (
    <>
      <PageHeader
        className='text-center'
        description='Some description'
        mainTitle='Portfolio'
        secondaryTitle='Projects'
      />
      <ProjectCardList />
    </>
  );
}
