import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import HeroPhoto from './HeroPhoto';

test('renders HeroPhoto', () => {
  render(<HeroPhoto />);

  expect(screen.getByRole('img')).toBeInTheDocument();
});
