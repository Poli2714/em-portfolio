import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import HeroContent from './HeroContent';

test('renders HerContent', () => {
  render(<HeroContent />);

  const paragraphs = screen.getAllByRole('paragraph');
  const links = screen.getAllByRole('link');

  expect(paragraphs).toHaveLength(2);
  expect(paragraphs[0]).toHaveTextContent(/^hello.*mehdiyev$/i);
  expect(paragraphs[1]).toHaveTextContent(
    /i'm a frontend developer.*web experiences.$/i
  );
  expect(
    screen.getByRole('heading', { level: 1, name: 'Frontend Developer' })
  ).toBeInTheDocument();
  expect(links).toHaveLength(2);
  expect(links[0]).toHaveTextContent(/^contact me$/i);
  expect(links[1]).toHaveTextContent(/^projects$/i);
});
