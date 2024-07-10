import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectFeatures from './ProjectFeatures';
import { __projects__ } from '@/__mocks__/__projects__';

vi.mock('@/components/ui', () => ({
  PhotoCard: () => <div>Mock photo card</div>,
}));

vi.mock('..', () => ({
  ProjectPageSection: () => <div>Mock section</div>,
}));

test('renders PreojectFeatures', () => {
  render(<ProjectFeatures project={__projects__[0]} />);

  expect(screen.getByTestId('project-features')).toBeInTheDocument();
});
