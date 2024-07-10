import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import FooterNav from './FooterNav';
import { __nav_items__ } from '@/__mocks__/__nav-items__';

test('renders FooterNav', () => {
  render(<FooterNav navItems={__nav_items__} />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
  expect(screen.getAllByRole('link')).toHaveLength(3);
});
