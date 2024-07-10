import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectCard from './ProjectCard';
import { __projects__ } from '@/__mocks__/__projects__';

vi.mock('..', () => ({
  PhotoCard: () => <div>Mock photo card</div>,
}));

vi.mock('./components', () => ({
  ProjectCardContent: () => <div>Mock content</div>,
}));

test('renders ProjectCard', () => {
  render(<ProjectCard project={__projects__[0]} />);

  expect(screen.getByTestId('project-card')).toBeInTheDocument();
});
