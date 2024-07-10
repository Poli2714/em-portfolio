import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import BlogPostSection from './BlogPostSection';

vi.mock('@/components/ui', () => ({
  PhotoCard: () => <div data-testid='photo-card'>Mock photo card</div>,
}));

test('renders BlogPostSection with only paragraphs when code, subtitle and image are not provided', () => {
  render(
    <BlogPostSection
      code={undefined}
      image={undefined}
      paragraphs={['Test paragraph1', 'Test paragraph2']}
      subtitle={undefined}
    />
  );
  const paragraphs = screen.getAllByRole('paragraph');

  expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();

  expect(paragraphs).toHaveLength(2);
  paragraphs.forEach((paragraph, i) => {
    expect(paragraph).toHaveTextContent(`Test paragraph${i + 1}`);
  });

  expect(screen.queryByRole('code')).not.toBeInTheDocument();
  expect(screen.queryByTestId('photo-card')).not.toBeInTheDocument();
});

test('renders BlogPostSection with subtitle and paragraph when code and image are not provided', () => {
  render(
    <BlogPostSection
      code={undefined}
      image={undefined}
      paragraphs={['Test paragraph']}
      subtitle='Test subtitle'
    />
  );

  expect(
    screen.getByRole('heading', { level: 3, name: 'Test subtitle' })
  ).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toHaveTextContent(/^test paragraph$/i);
  expect(screen.queryByRole('code')).not.toBeInTheDocument();
  expect(screen.queryByTestId('photo-card')).not.toBeInTheDocument();
});

test('renders BlogPostSection with subtitle, paragraph and code when image is not provided', () => {
  render(
    <BlogPostSection
      code={`console.log('Hello world!');`}
      image={undefined}
      paragraphs={['Test paragraph']}
      subtitle='Test subtitle'
    />
  );

  expect(
    screen.getByRole('heading', { level: 3, name: 'Test subtitle' })
  ).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toHaveTextContent(/^test paragraph$/i);
  expect(screen.getByRole('code')).toBeInTheDocument();
  expect(screen.queryByTestId('photo-card')).not.toBeInTheDocument();
});

test('renders BlogPostSection with subtitle, paragraph, code and image when all props are provided', () => {
  render(
    <BlogPostSection
      code={`console.log('Hello world!');`}
      image={{
        alt_description: 'Test description',
        light_mode: 'Test-light-mode.png',
      }}
      paragraphs={['Test paragraph']}
      subtitle='Test subtitle'
    />
  );

  expect(
    screen.getByRole('heading', { level: 3, name: 'Test subtitle' })
  ).toBeInTheDocument();
  expect(screen.getByRole('paragraph')).toHaveTextContent(/^test paragraph$/i);
  expect(screen.getByRole('code')).toBeInTheDocument();
  expect(screen.getByTestId('photo-card')).toBeInTheDocument();
});
