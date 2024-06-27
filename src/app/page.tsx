import { MyProjects, MySkills, MyStory, PageHero } from './components';

export default function Home() {
  return (
    <>
      <PageHero />
      <MyStory />
      <MySkills />
      <MyProjects />
    </>
  );
}
