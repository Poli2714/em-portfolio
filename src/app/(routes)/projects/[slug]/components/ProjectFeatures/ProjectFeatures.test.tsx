import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectFeatures from './ProjectFeatures';
import { projects } from '@/lib/projects';

vi.mock('@/components/ui', () => ({
  ProjectImage: () => <div>Mock project Image</div>,
}));

vi.mock('..', () => ({
  ProjectPageSection: () => <div>Mock section</div>,
}));

test('renders PreojectFeatures', () => {
  render(<ProjectFeatures project={projects[0]} />);

  expect(screen.getByTestId('project-features')).toBeInTheDocument();
});
