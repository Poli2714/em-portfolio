import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectCardContent from './ProjectCardContent';

vi.mock('@/components/ui', () => ({
  ProjectTechStack: () => <div>Mock tech stack</div>,
  VisitLink: () => <div>Mock visit project link</div>,
}));

test('renders ProjectCardContent', () => {
  render(
    <ProjectCardContent
      projectTitle='ImageBox'
      route='/image-box'
      shortDescription='Test description'
      techStack={['nextjs', 'tailwind', 'typescript']}
    />
  );
  const paragraph = screen.getByRole('paragraph');

  expect(
    screen.getByRole('heading', { level: 4, name: 'ImageBox' })
  ).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
  expect(paragraph).toHaveTextContent(/^test description$/i);
});
