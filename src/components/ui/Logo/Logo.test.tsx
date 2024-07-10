import { expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';

import Logo from './Logo';

test('renders Logo', () => {
  render(<Logo />);

  expect(screen.getByRole('link', { name: 'ElgunM.' })).toBeInTheDocument();
});
