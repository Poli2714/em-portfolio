import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectSlugHeader from './ProjectSlugHeader';
import { projects } from '@/lib/projects';

vi.mock('@/components/shadcn', () => ({
  AspectRatio: () => <div>Mock aspect ratio</div>,
}));

vi.mock('@/components/ui', () => ({
  FullscreenPhotoCard: () => <div>Mock fullscreen photo card</div>,
  ProjectTechStack: () => <div>Mock tech stack</div>,
}));

vi.mock('./components', () => ({
  ProjectLinks: () => <div>Mock project Links</div>,
  ProjectNameAndDescription: () => <div>Mock name and description</div>,
}));

test('renders ProjectSlugHeader', () => {
  render(<ProjectSlugHeader project={projects[0]} />);

  expect(screen.getByRole('banner')).toBeInTheDocument();
});
