import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ContactMeLink from './ContactMeLink';

test('renders ContactMeLink', () => {
  render(<ContactMeLink />);

  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByTestId('arrow-right-icon')).toBeInTheDocument();
});
