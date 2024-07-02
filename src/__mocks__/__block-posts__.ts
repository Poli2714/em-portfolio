import { TBlogPost } from '@/types/blog-post';

export const __blog_posts__: Array<TBlogPost> = [
  {
    id: 'id1',
    slug: 'test-slug1',
    author: 'Test author1',
    category: 'Test category1',
    date: 'Test date1',
    description: 'Test description1',
    images: [
      {
        alt_description: 'Test alt1',
        dark: 'Test src1',
        light: 'Test src2',
      },
    ],
    read_time: 5,
    sections: [
      {
        paragraphs: ['Test paragraph1'],
      },
      {
        paragraphs: ['Test paragraph2'],
        subtitle: 'Test subtitle1',
      },
      {
        code: `console.log('Test code1');`,
        paragraphs: ['Test paragraph3'],
        subtitle: 'Test subtitle2',
      },
      {
        code: `console.log('Test code2');`,
        paragraphs: ['Test paragraph4'],
        subtitle: 'Test subtitle3',
      },
    ],
    title: 'Test title1',
  },
  {
    id: 'id2',
    slug: 'test-slug2',
    author: 'Test author2',
    category: 'Test category2',
    date: 'Test date2',
    description: 'Test description2',
    images: [
      {
        alt_description: 'Test alt2',
        dark: 'Test src3',
        light: 'Test src4',
      },
    ],
    read_time: 5,
    sections: [
      {
        paragraphs: ['Test paragraph2'],
      },
      {
        paragraphs: ['Test paragraph3'],
        subtitle: 'Test subtitle2',
      },
      {
        code: `console.log('Test code2');`,
        paragraphs: ['Test paragraph4'],
        subtitle: 'Test subtitle3',
      },
      {
        code: `console.log('Test code3');`,
        paragraphs: ['Test paragraph5'],
        subtitle: 'Test subtitle4',
      },
    ],
    title: 'Test title2',
  },
];
