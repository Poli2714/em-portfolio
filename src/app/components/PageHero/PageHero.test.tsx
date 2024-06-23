import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import PageHero from './PageHero';

vi.mock('./components', () => ({
  HeroContent: () => <div>Mock content</div>,
  HeroPhoto: () => <div>Mock photo</div>,
}));

test('renders PageHero', () => {
  render(<PageHero />);

  expect(screen.getByTestId('hero-section')).toBeInTheDocument();
});
