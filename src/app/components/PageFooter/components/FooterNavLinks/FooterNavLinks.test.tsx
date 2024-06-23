import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import FooterNavLinks from './FooterNavLinks';

test('renders FooterNavLinks', () => {
  render(<FooterNavLinks />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
  expect(screen.getAllByRole('link')).toHaveLength(3);
});
