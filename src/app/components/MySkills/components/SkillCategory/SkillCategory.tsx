import { SkillBadge } from './components';

type SkillCategoryProps = {
  categoryName: string;
  skills: Array<{
    id: string;
    name: string;
    logoDark: any;
    logoLight: any;
  }>;
};

function SkillCategory({ categoryName, skills }: SkillCategoryProps) {
  return (
    <div className='flex flex-col gap-y-4'>
      <h3 className='text-xl font-semibold'>{categoryName}</h3>
      <ul className='flex w-full flex-wrap gap-2'>
        {skills.map((skill) => (
          <li key={skill.id}>
            <SkillBadge
              skillName={skill.name}
              logoDark={skill.logoDark}
              logoLight={skill.logoLight}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCategory;
