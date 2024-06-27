import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectsPageHeader from './ProjectsPageHeader';

test('renders ProjectsPageHeader', () => {
  render(<ProjectsPageHeader />);

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 1, name: 'Portfolio' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: 'Projects' })
  ).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
});
