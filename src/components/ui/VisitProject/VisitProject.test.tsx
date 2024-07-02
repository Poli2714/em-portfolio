import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import VisitProject from './VisitProject';

test('renders VisitProject', () => {
  render(<VisitProject label='Visit Project' route='image-box' />);
  const link = screen.getByRole('link', { name: 'Visit Project' });

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/projects/image-box');
  expect(screen.getByTestId('arrow-up-right')).toBeInTheDocument();
});
