import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import MyProjects from './MyProjects';
import { __projects__, __4_projects__ } from '@/__mocks__/__projects__';

vi.mock('@/components/ui', () => ({
  SectionTitle: () => <div>Mock section title</div>,
  ProjectCard: () => <div>Mock project card</div>,
}));

test("renders MyProjects without 'View All' link", () => {
  render(<MyProjects projects={__projects__} />);

  expect(screen.getByTestId('projects-section')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  expect(
    screen.queryByRole('link', { name: 'View All' })
  ).not.toBeInTheDocument();
});

test("renders MyProjects with 'View All' link", () => {
  render(<MyProjects projects={__4_projects__} />);

  expect(screen.getByTestId('projects-section')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(4);
  expect(screen.getByRole('link', { name: 'View All' })).toBeInTheDocument();
});
