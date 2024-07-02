import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectCardHeader from './ProjectCardHeader';
import { mock_project_image } from '@/__mocks__/__project-image__';

vi.mock('@/components/shadcn', () => ({
  AspectRatio: () => (
    <div data-testid='mock-aspect-ratio'>Mock aspect ratio</div>
  ),
}));

test('renders ProjectCardHeader', () => {
  render(<ProjectCardHeader image={mock_project_image} />);

  expect(screen.getByTestId('mock-aspect-ratio')).toBeInTheDocument();
});
