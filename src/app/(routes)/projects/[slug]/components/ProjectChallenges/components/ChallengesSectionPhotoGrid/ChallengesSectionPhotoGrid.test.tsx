import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ChallengesSectionPhotoGrid from './ChallengesSectionPhotoGrid';
import { __projects__ } from '@/__mocks__/__projects__';

vi.mock('@/components/shadcn', () => ({
  AspectRatio: () => <div data-testid='photo'>Mock photo wrap</div>,
}));

vi.mock('@/components/ui', () => ({
  Photo: () => <div>Mock photo</div>,
}));

test('renders ChallengesSectionPhotoGrid with 6 photos', () => {
  render(<ChallengesSectionPhotoGrid images={__projects__[0].images} />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(4);
  expect(screen.getAllByTestId('photo')).toHaveLength(6);
});
