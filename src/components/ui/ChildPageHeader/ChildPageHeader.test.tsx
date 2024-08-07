import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ChildPageHeader from './ChildPageHeader';

test('renders ProjectsPageHeader', () => {
  render(
    <ChildPageHeader
      description='Test description'
      mainTitle='Test main title'
      secondaryTitle='Test secondary title'
    />
  );

  expect(screen.getByRole('banner')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 1, name: 'Test main title' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: 'Test secondary title' })
  ).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
});
