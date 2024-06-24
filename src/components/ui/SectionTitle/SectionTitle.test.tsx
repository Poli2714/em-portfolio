import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import SectionTitle from './SectionTitle';

test('renders SectionTitle', () => {
  render(<SectionTitle title='Test' />);
  expect(
    screen.getByRole('heading', { level: 2, name: 'Test' })
  ).toBeInTheDocument();
});
