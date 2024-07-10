import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Shade from './Shade';

test('renders Shade with default shade color', () => {
  render(<Shade />);
  const shade = screen.getByTestId('shade');

  expect(shade).toBeInTheDocument();
  expect(shade).toHaveClass('bg-foreground/15');
});

test('renders Shade with given shade color', () => {
  render(<Shade shadeColor='bg-background/10' />);
  const shade = screen.getByTestId('shade');

  expect(shade).toBeInTheDocument();
  expect(shade).not.toHaveClass('bg-foreground/15');
  expect(shade).toHaveClass('bg-background/10');
});
