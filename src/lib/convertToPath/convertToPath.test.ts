import { expect, test } from 'vitest';

import { convertToPath } from './convertToPath';

test('returns a correct path name', () => {
  expect(convertToPath('My Story')).toEqual('/my-story');
  expect(convertToPath('HeLLo WOrld!')).toEqual('/hello-world!');
  expect(convertToPath('Home')).toEqual('/');
});
