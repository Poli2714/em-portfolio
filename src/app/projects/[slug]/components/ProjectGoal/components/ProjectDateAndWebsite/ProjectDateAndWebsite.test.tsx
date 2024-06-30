import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectDateAndWebsite from './ProjectDateAndWebsite';

test('renders ProjectDateAndWebsite', () => {
  render(<ProjectDateAndWebsite date='June 2024' website='www.google.com' />);
  const projectDate = screen.getByTestId('project-date');
  const projectWebsite = screen.getByRole('link');

  expect(projectDate).toBeInTheDocument();
  expect(projectDate.textContent).toEqual('June 2024');
  expect(projectWebsite).toBeInTheDocument();
  expect(projectWebsite.textContent).toEqual('www.google.com');
});
