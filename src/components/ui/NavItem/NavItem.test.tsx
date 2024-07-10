import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import NavItem from './NavItem';

test('renders NavItem', () => {
  render(<NavItem href='my-story' label='My Story' />);

  const link = screen.getByRole('link');
  const underlineDiv = screen.getByTestId('underline');

  expect(link).toBeInTheDocument();
  expect(link).toHaveTextContent('My Story');
  expect(underlineDiv).toBeInTheDocument();
});
