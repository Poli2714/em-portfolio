import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import SocialMediaIcon from './SocialMediaIcon';
import GithubDark from '/public/github-mark.svg';
import GithubLight from '/public/github-mark-white.svg';

test('renders SocialMediaIcon', () => {
  render(
    <SocialMediaIcon
      name='Github'
      srcDark={GithubDark}
      srcLight={GithubLight}
    />
  );
  const logos = screen.getAllByRole('img');

  expect(logos).toHaveLength(2);
  logos.forEach((logo, i) => {
    i === 0
      ? expect(logo.getAttribute('alt')).toEqual('Github Dark logo')
      : expect(logo.getAttribute('alt')).toEqual('Github White logo');
    expect(logo.getAttribute('width')).toEqual('24');
    expect(logo.getAttribute('height')).toEqual('24');
  });
});
