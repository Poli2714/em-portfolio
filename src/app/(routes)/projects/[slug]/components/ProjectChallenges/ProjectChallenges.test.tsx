import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectChallenges from './ProjectChallenges';
import { __projects__ } from '@/__mocks__/__projects__';

vi.mock('..', () => ({
  ProjectPageSection: () => <div>Mock page section</div>,
}));

vi.mock('./components', () => ({
  BlogPostLink: () => <div>Mock blog post link</div>,
  ChallengesSectionPhotoGrid: () => <div>Mock photo grid</div>,
  SolutionDetailList: () => <div>Mock detail list</div>,
}));

test('renders ProjectChellenges', () => {
  render(<ProjectChallenges project={__projects__[0]} />);

  expect(screen.getByTestId('project-challenges')).toBeInTheDocument();
});
