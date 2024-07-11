import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ChallengesSectionPhotoGrid from './ChallengesSectionPhotoGrid';
import { __projects__ } from '@/__mocks__/__projects__';

vi.mock('@/components/ui', () => ({
  FullscreenPhotoCard: () => (
    <div data-testid='photo-card'>Mock fullscren photo card</div>
  ),
}));

test('renders ChallengesSectionPhotoGrid with 6 photos', () => {
  render(<ChallengesSectionPhotoGrid images={__projects__[0].images} />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(4);
  expect(screen.getAllByTestId('photo-card')).toHaveLength(6);
});
