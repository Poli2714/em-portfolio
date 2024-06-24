import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import SkillBadge from './SkillBadge';

test('renders SkillBadge', () => {
  render(
    <SkillBadge skillName='React' logoDark='React.svg' logoLight={undefined} />
  );

  expect(screen.getByTestId('skill-badge')).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toHaveTextContent('React');
});
