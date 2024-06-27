import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ProjectCardImage from './ProjectCardImage';

test('renders ProjectCardImage with one image if project screenshot with light background is not provided', () => {
  render(
    <ProjectCardImage
      imgDark='/dark.png'
      imgLight={undefined}
      projectName='ImageBox'
    />
  );

  expect(screen.getAllByRole('img')).toHaveLength(1);
});

test('renders ProjectCardImage with two images if project screenshot with light background is provided', () => {
  render(
    <ProjectCardImage
      imgDark='/dark.png'
      imgLight='/light.png'
      projectName='audiphile'
    />
  );

  expect(screen.getAllByRole('img')).toHaveLength(2);
});
