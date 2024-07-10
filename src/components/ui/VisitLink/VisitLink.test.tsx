import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import VisitLink from './VisitLink';

test('renders VisitLink', () => {
  render(<VisitLink label='Visit Project' route='/projects/image-box' />);
  const link = screen.getByRole('link', { name: 'Visit Project' });

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/projects/image-box');
  expect(screen.getByTestId('arrow-up-right')).toBeInTheDocument();
});
