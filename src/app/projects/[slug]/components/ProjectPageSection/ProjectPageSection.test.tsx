import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectPageSection from './ProjectPageSection';

test('renders ProjectPageSection', () => {
  render(
    <ProjectPageSection title='Test title'>
      <p>Test paragraph</p>
    </ProjectPageSection>
  );

  expect(screen.getByTestId('project-page-section')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: 'Test title' })
  ).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toBeInTheDocument();
});
