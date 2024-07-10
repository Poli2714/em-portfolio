import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import SkillCategory from './SkillCategory';
import { __core_skills__ } from '@/__mocks__/__skills__';

vi.mock('./components', () => ({
  SkillBadge: () => <div>Mock badge</div>,
}));

test('renders SkillCategory', () => {
  render(<SkillCategory categoryName='Core skills' skills={__core_skills__} />);

  expect(
    screen.getByRole('heading', { level: 3, name: 'Core skills' })
  ).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(5);
});
