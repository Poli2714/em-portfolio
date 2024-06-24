import Image from 'next/image';

import { Badge } from '@/components/shadcn';

type SkillBadgeProps = {
  skillName: string;
  logoDark: any;
  logoLight: any;
};

function SkillBadge({ skillName, logoDark, logoLight }: SkillBadgeProps) {
  const skillLogo = !logoLight ? (
    <Image
      alt={`${skillName} logo`}
      className='h-6 w-6'
      src={logoDark}
      width={24}
      height={24}
    />
  ) : (
    <>
      <Image
        alt={`${skillName} logo`}
        className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
        src={logoDark}
        width={24}
        height={24}
      />
      <Image
        alt={`${skillName} logo`}
        className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
        src={logoLight}
        width={24}
        height={24}
      />
    </>
  );

  return (
    <Badge
      className='gap-x-2 rounded-md border-primary px-4 py-3 text-sm font-normal'
      data-testid='skill-badge'
      variant='outline'
    >
      {skillLogo}
      <p>{skillName}</p>
    </Badge>
  );
}

export default SkillBadge;
