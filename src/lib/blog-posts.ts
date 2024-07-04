import { TBlogPost } from '@/types/blog-post';

export const blog_posts: Array<TBlogPost> = [
  {
    id: 'blogpost-1',
    slug: 'responsive-waterfall-masonry-photo-grid-in-react',
    author: 'Elgun Mehdiyev',
    category: 'Web Development',
    date: 'June 30, 2024',
    description:
      'How I created a responsive photo grid in React that maintains the order and the original aspect ratios of photos while displaying them in a masonry layout. This post covers using a custom media query hook and dynamically adjusting columns based on screen size to achieve a visually appealing and organized display.',
    images: [
      {
        alt_description: 'Waterfall/Masonry grid style photo gallery',
        light_mode: '/blog/waterfall-grid/waterfall-grid-dark.png',
        dark_mode: '/blog/waterfall-grid/waterfall-grid-light.png',
      },
    ],
    read_time: 5,
    sections: [
      {
        paragraphs: [
          'In my project, I implemented a responsive photo grid that maintains the original aspect ratios of photos while displaying them in a masonry/waterfall layout. This ensures that the photos retain their order and are displayed consistently across different screen sizes.',
        ],
      },
      {
        paragraphs: ['To achieve this, I used the following approach:'],
        subtitle: 'Approach',
      },
      {
        code: `'use client';

import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener('change', onChange);
    setValue(result.matches);

    return () => result.removeEventListener('change', onChange);
  }, [query]);

  return value;
}`,
        paragraphs: [
          "First, I created a custom useMediaQuery hook to get the current screen width. This hook is essential for determining the number of columns in the grid and keeping the order of photos. Here's the implementation:",
        ],
        subtitle: '1. Creating the useMediaQuery Hook',
      },
      {
        code: `function PhotoGrid({ photos, base64results }: PhotoGridProps) {
  const numberOfPhotos = photos.length;
  const isXLarge = useMediaQuery('(min-width: 1448px)');
  const isLarge = useMediaQuery('(min-width: 1096px');
  const isMedium = useMediaQuery('(min-width: 722px)');
  const numberOfCols = isXLarge ? 4 : isLarge ? 3 : isMedium ? 2 : 1;

  return (
    <ul className={\`grid h-auto w-full gap-x-4 \${isXLarge ? 'grid-cols-4'
    : isLarge ? 'grid-cols-3'
    : isMedium ? 'grid-cols-2'
    : 'grid-cols-1'}\`}>
      ...
    </ul>
  );
}

export default PhotoGrid;`,
        paragraphs: [
          "Next, I used the useMediaQuery hook to determine the screen width and adjust the number of columns accordingly. The grid adapts to different screen sizes, displaying up to 4 columns based on the viewport width. This can also be achieved using Tailwind's responsive utility variants. However, knowing the number of columns is crucial to display the photos in the correct order.",
        ],
        subtitle: '2. Using useMediaQuery to Determine Columns',
      },
      {
        code: `{Array.from({ length: numberOfCols }).map((_, colIndex) => (
    <div key={colIndex} className='flex h-auto w-full flex-col gap-y-4'>
        {photos.map((_, photoIndex) => {
            const index = colIndex + numberOfCols * photoIndex;
            return index < numberOfPhotos ? (
              <li key={photos[index].id}>
                <PhotoCard
                  photo={photos[index]}
                  base64={base64results[index]}
                />
              </li>
            ) : null;
        })}
    </div>
))}`,
        paragraphs: [
          "To maintain the order of photos regardless of the screen width, each column displays every nth photo in the photos array (where n is the number of columns). Here's the implementation:",
        ],
        subtitle: '3. Distributing Photos in Columns',
      },
      {
        paragraphs: [
          'This way, photos are evenly distributed across the columns while retaining their original aspect ratios. By iterating over the photos and placing them in the appropriate column, the grid maintains order and visual consistency. The implementation ensures a masonry or waterfall effect, where photos stack vertically in columns, creating a visually appealing and organized display.',
        ],
        subtitle: 'Result',
      },
    ],
    title: 'Responsive Waterfall/Masonry Photo Grid in React',
  },
];
