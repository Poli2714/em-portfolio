import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectCard from './ProjectCard';
import { projects } from '@/lib/projects';

vi.mock('./components', () => ({
  ProjectCardImage: () => <div>Mock project image</div>,
  ProjectStackList: () => <div>Mock project skills</div>,
  VisitProject: () => <div>Mock visit project</div>,
}));

test('renders ProjectCard', () => {
  render(<ProjectCard project={projects[0]} />);

  expect(screen.getByTestId('project-card')).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
});
