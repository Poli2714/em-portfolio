import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import MyStory from './MyStory';

vi.mock('@/components/ui', () => ({
  SectionTitle: () => <div>Mock section title</div>,
}));

test('renders, MyStory', () => {
  render(<MyStory />);

  expect(screen.getByRole('paragraph')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'My story.' })).toBeInTheDocument();
});
