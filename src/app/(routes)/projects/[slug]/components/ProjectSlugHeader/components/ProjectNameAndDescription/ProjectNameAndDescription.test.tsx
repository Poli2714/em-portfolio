import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectNameAndDescription from './ProjectNameAndDescription';

test('renders ProjectNameAndDescription', () => {
  render(
    <ProjectNameAndDescription
      description='Test description'
      name='Test name'
    />
  );
  const paragraph = screen.getByRole('paragraph');

  expect(
    screen.getByRole('heading', { level: 1, name: 'Test name' })
  ).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(/^test description$/i);
});
