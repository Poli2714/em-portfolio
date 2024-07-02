import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectGoal from './ProjectGoal';
import { projects } from '@/lib/projects';

vi.mock('./components', () => ({
  ProjectDateAndWebsite: () => <div>Mock date and website</div>,
}));

vi.mock('@/components/ui', () => ({
  Photo: () => <div>Mock image</div>,
}));

vi.mock('..', () => ({
  ProjectPageSection: () => <div>Mock section</div>,
}));

test('renders ProjectGoal', () => {
  render(<ProjectGoal project={projects[0]} />);

  expect(screen.getByTestId('project-goal')).toBeInTheDocument();
});
