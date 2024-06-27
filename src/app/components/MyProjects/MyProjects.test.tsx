import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import MyProjects from './MyProjects';

vi.mock('./components', () => ({
  ProjectCard: () => <div>Mock project card</div>,
}));

vi.mock('@/components/ui', () => ({
  SectionTitle: () => <div>Mock section title</div>,
}));

test('renders MyProjects', () => {
  render(<MyProjects />);

  expect(screen.getByTestId('projects-section')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  expect(
    screen.queryByRole('link', { name: 'View All' })
  ).not.toBeInTheDocument();
});
