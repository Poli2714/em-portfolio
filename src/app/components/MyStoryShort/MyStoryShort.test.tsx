import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import MyStory from './MyStoryShort';

vi.mock('@/components/ui', () => ({
  SectionTitle: () => <div>Mock section title</div>,
}));

test('renders, MyStory', () => {
  render(<MyStory story='Test story.' />);
  const paragraph = screen.getByRole('paragraph');

  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(/^test story. my story.$/i);

  expect(screen.getByRole('link', { name: 'My story.' })).toBeInTheDocument();
});
