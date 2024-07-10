import { SectionTitle } from '@/components/ui';
import { SkillCategory } from './components';

import { TSkill } from '@/types/skill';

type MySkillsProps = {
  coreSkills: Array<TSkill>;
  otherTools: Array<TSkill>;
};

function MySkills({ coreSkills, otherTools }: MySkillsProps) {
  return (
    <section
      className='my-[clamp(5rem,15dvw,10rem)] space-y-10 lg:mt-0'
      data-testid='skills-section'
    >
      <SectionTitle title='My Skills' />
      <div className='grid gap-y-12 md:grid-cols-2 md:gap-x-4 md:gap-y-0'>
        <SkillCategory categoryName='Core skills' skills={coreSkills} />
        <SkillCategory
          categoryName='Additional tools and libraries'
          skills={otherTools}
        />
      </div>
    </section>
  );
}

export default MySkills;
