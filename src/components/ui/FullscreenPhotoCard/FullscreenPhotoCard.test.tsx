import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import FullscreenPhotoCard from './FullscreenPhotoCard';
import { __projects__ } from '@/__mocks__/__projects__';

vi.mock('@/components/shadcn', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/components/shadcn')>();
  return {
    ...actual,
    DialogTrigger: ({ children }: { children: React.ReactNode }) => (
      <button data-testid='trigger'>{children}</button>
    ),
  };
});

vi.mock('..', () => ({
  PhotoCard: () => <div data-testid='photo-card'>Mock photo card</div>,
}));

test('renders FullscreenPhotoCard', () => {
  render(<FullscreenPhotoCard image={__projects__[0].images[0]} />);

  expect(screen.getByTestId('photo-card')).toBeInTheDocument();
  expect(screen.getAllByTestId('photo-card')).toHaveLength(1);
});
