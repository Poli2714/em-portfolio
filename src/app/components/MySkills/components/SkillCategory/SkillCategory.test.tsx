import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import SkillCategory from './SkillCategory';

vi.mock('./components', () => ({
  SkillBadge: () => <div>Mock badge</div>,
}));

const skills = [
  {
    id: 'skill1',
    name: 'skill1',
    logoDark: 'skill1',
    logoLight: 'skill1',
  },
  {
    id: 'skill2',
    name: 'skill2',
    logoDark: 'skill2',
    logoLight: 'skill2',
  },
  {
    id: 'skill3',
    name: 'skill3',
    logoDark: 'skill3',
    logoLight: 'skill3',
  },
];

test('renders SkillCategory', () => {
  render(<SkillCategory categoryName='Core skills' skills={skills} />);

  expect(
    screen.getByRole('heading', { level: 3, name: 'Core skills' })
  ).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});
